from flask import Flask, render_template, request, redirect, session, url_for, flash, send_from_directory,abort
import pymysql
import hashlib
import sqlalchemy
from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, DateTime,Text
from sqlalchemy.orm import sessionmaker, relationship, declarative_base
from datetime import datetime
from sqlalchemy_schemadisplay import create_schema_graph
import os

app = Flask(__name__,
            template_folder='.',
            static_folder='static')
app.secret_key = '123456789'
UPLOAD_FOLDER = os.path.join(app.static_folder, 'uploads')
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024 

# MySQL 数据库连接配置
db_config={
    'user':'root',
    'password':'hxyym123',
    'host':'localhost',
    'port':3306,
    'database': 'web',
    'charset':'utf8mb4'}
# 创建数据库连接
engine = create_engine('mysql+pymysql://{user}:{password}@{host}:{port}/{database}?charset={charset}'.format(**db_config))
# app.config["SQLALCHEMY_DATABASE_URI"]=f"mysql+pymysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}{DB_POST}/{DB_NAME}?charset=utf8"

Base = declarative_base()

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    username = Column(String(255), unique=True, nullable=False)
    password = Column(String(255), nullable=False)
    email = Column(String(255), unique=True, nullable=False)
    role = Column(String(50), nullable=False, default='student')  # 默认角色为学生
    posts = relationship('Post', backref='author', lazy=True)
    comments = relationship('Comment', backref='author', lazy=True)
    likes = relationship('Like', backref='user', lazy=True)

class Image(Base):
    __tablename__ = "images"
    id = Column(Integer, primary_key=True)
    file_path = Column(String(255), nullable=False)
    post_id = Column(Integer, ForeignKey('posts.id'), nullable=True)
    comment_id = Column(Integer, ForeignKey('comments.id'), nullable=True)

    post = relationship('Post', back_populates='images')
    comment = relationship('Comment', back_populates='images')

class Post(Base):
    __tablename__ = "posts"
    id = Column(Integer, primary_key=True)
    title = Column(String(200), nullable=False)
    content = Column(Text, nullable=True)
    timestamp = Column(DateTime, default=datetime.utcnow)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    comments = relationship('Comment', backref='post', lazy=True)
    likes = relationship('Like', backref='post', lazy=True)
    images = relationship('Image', back_populates='post', lazy=True)

class Comment(Base):
    __tablename__ = "comments"
    id = Column(Integer, primary_key=True)
    content = Column(Text, nullable=False)
    timestamp = Column(DateTime, default=datetime.utcnow)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    post_id = Column(Integer, ForeignKey('posts.id'), nullable=False)
    images = relationship('Image', back_populates='comment', lazy=True)


class Like(Base):
    __tablename__ = "likes"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    post_id = Column(Integer, ForeignKey('posts.id'), nullable=False)



# 这是删除所有数据的操作，不到万不得已千万不要做
# Base.metadata.drop_all(engine)

# 创建表
Base.metadata.create_all(engine)


# Create the ER diagram
# graph = create_schema_graph(metadata=Base.metadata, engine=engine, show_datatypes=True, show_indexes=True, rankdir='LR', concentrate=True)

# Save the diagram to a file
# graph.write_png('forum_schema.png')

db_session_class = sessionmaker(bind=engine)
db_session = db_session_class()

def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()

@app.template_filter('date') #自定义过滤器
def format_date(value):
    if value is None:
        return ""
    return value.strftime('%Y-%m-%d')

@app.route('/')
def root_index():
    return redirect(url_for("welcome"))

@app.route('/profile')
def profile():
    if 'username' in session:
        return render_template('profile.html')
    return redirect(url_for('index'))

@app.route('/admin/dashboard')
def admin_dashboard():
    if 'username' in session and session['role'] == 'admin':
        users = db_session.query(User).all()
        return render_template('admin_dashboard.html', users=users)
    return "Unauthorized", 403

@app.route('/admin/set_admin/<int:user_id>', methods=['POST'])
def set_admin(user_id):
    if 'username' in session and session['role'] == 'admin':
        user = db_session.query(User).get(user_id)
        if user:
            user.role = 'admin'
            db_session.commit()
            return redirect(url_for('admin_dashboard'))
        return "User not found", 404
    return "Unauthorized", 403

@app.route('/check_login')
def check_login():
    if 'username' in session:
        return {"loggedIn": True}
    return {"loggedIn": False}

@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect(url_for('index'))

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = hash_password(request.form['password'])
        print(f"Username: {username}")
        print(f"Password: {password}")
        user = db_session.query(User).filter_by(username=username).filter_by(password=password).first()
        if user:
            session['username']=username
            session['role']=user.role
            return redirect(url_for("index"))
        else:
            error = "用户名或密码错误"
            flash('登录失败，请检查用户名和密码', 'error')
            return render_template('templates/login.html', error=error)
    return render_template('templates/login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']
        password = hash_password(request.form['password'])

        user = User(username=username, password=password,email=email)
        find_user = db_session.query(User).filter_by(username=username).first()
        if find_user:
            error = "用户名已存在"
            flash("用户名已存在", 'error')
            return render_template('templates/login.html', error=error)
        db_session.add(user)
        db_session.commit()
        success = "注册成功"
        flash('注册成功', 'success')
        return render_template('templates/login.html', success=success)
    return render_template('templates/login.html')

os.makedirs(UPLOAD_FOLDER, exist_ok=True) #判断文件夹是否存在

@app.route('/forum')
def forum():
    page = request.args.get('page', 1, type=int)
    per_page = 10
    total = db_session.query(Post).count()
    posts = db_session.query(Post).order_by(Post.timestamp.desc()).offset((page - 1) * per_page).limit(per_page).all()
    
    next_url = url_for('forum', page=page + 1) if total > page * per_page else None
    prev_url = url_for('forum', page=page - 1) if page > 1 else None
    
    return render_template('forum.html', posts=posts, next_url=next_url, prev_url=prev_url)

@app.route('/forum/post', methods=['GET', 'POST'])
def forum_post():
    if 'username' not in session:
        return redirect(url_for('login'))
    if request.method == 'POST':
        title = request.form['title']
        content = request.form['content']
        user = db_session.query(User).filter_by(username=session['username']).first()
        new_post = Post(title=title, content=content, author=user)
        db_session.add(new_post)
        db_session.commit()
        
        images = request.files.getlist('images')
        for index, image in enumerate(images[:9]):  
            if image.filename != '':
                filename = f"{new_post.id}_{index+1}_{image.filename}"
                filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
                image.save(filepath)
                new_image = Image(file_path='uploads/' + filename, post=new_post)
                db_session.add(new_image)
        db_session.commit()
        
        return redirect(url_for('forum'))
    return render_template('forum_post.html')

@app.route('/forum/<int:post_id>/comment', methods=['POST'])
def comment_post(post_id):
    if 'username' not in session:
        return redirect(url_for('login'))
    content = request.form['content']
    user = db_session.query(User).filter_by(username=session['username']).first()
    new_comment = Comment(content=content, post_id=post_id, author=user)
    db_session.add(new_comment)
    db_session.commit()
    
    images = request.files.getlist('images')
    for index, image in enumerate(images[:3]):  
        if image.filename != '':
            filename = f"{new_comment.id}_{index+1}_{image.filename}"
            filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            image.save(filepath)
            new_image = Image(file_path='uploads/' + filename, comment=new_comment)
            db_session.add(new_image)
    db_session.commit()

    return redirect(url_for('read_post', post_id=post_id))

@app.route('/forum/<int:post_id>')
def read_post(post_id):
    post = db_session.query(Post).filter_by(id=post_id).first()
    if post is None:
        abort(404)
    comments = db_session.query(Comment).filter_by(post_id=post_id).all()
    return render_template('forum_read.html', post=post, comments=comments)

@app.route('/forum/<int:post_id>/delete', methods=['POST'])
def delete_post(post_id):
    if 'role' not in session or session['role'] != 'admin':
        return redirect(url_for('forum'))
    post = db_session.query(Post).filter_by(id=post_id).first()
    if post:
        db_session.delete(post)
        db_session.commit()
    return redirect(url_for('forum'))

@app.route('/forum/<int:post_id>/like', methods=['POST'])
def like_post(post_id):
    if 'username' not in session:
        return redirect(url_for('login'))
    user = db_session.query(User).filter_by(username=session['username']).first()
    post = db_session.query(Post).filter_by(id=post_id).first()
    if not user or not post:
        return redirect(url_for('forum'))

    liked_posts = session.get('liked_posts', [])
    if post_id in liked_posts:
        like = db_session.query(Like).filter_by(user_id=user.id, post_id=post_id).first()
        if like:
            db_session.delete(like)
            db_session.commit()
        liked_posts.remove(post_id)
    else:
        new_like = Like(user_id=user.id, post_id=post_id)
        db_session.add(new_like)
        db_session.commit()
        liked_posts.append(post_id)

    session['liked_posts'] = liked_posts
    return redirect(url_for('forum'))

@app.route('/about')
def about():
        return render_template('about.html')

@app.route('/blackboard')
def blackboard():
        return render_template('blackboard.html')

@app.route('/class_silhouette')
def class_silhouette():
        return render_template('class_silhouette.html')

@app.route('/collection')
def collection():
        return render_template('collection.html')

@app.route('/index')
def index():
        return render_template('index.html')

@app.route('/jade_encyclopedia')
def jade_encyclopedia():
        return render_template('jade_encyclopedia.html')

@app.route('/jade_history')
def jade_history():
    return render_template('jade_history.html')

@app.route('/jade_poems')
def jade_poems():
    return render_template('jade_poems.html')

@app.route('/message_board')
def message_board():
    return render_template('message_board.html')

@app.route('/news')
def news():
    return render_template('news.html')


@app.route('/teacher_style')
def teacher_style():
    return render_template('teacher_style.html')

#这里设计成数据库存储文件类型的
@app.route('/detail/Subject1.1')
def Subject():
    return render_template('detail/Subject1.1.html')
#就是上面那个

@app.route('/exhibition/exhibition')
def exhibition_extibition():
    return render_template('exhibition/exhibition.html')

@app.route('/exhibition/student')
def exhibition_estudent():
    return render_template('exhibition/student.html')

@app.route('/Publication/Subject-essay')
def Publication_Subject_essay():
    return render_template('Publication/Subject-essay.html')

@app.route('/Publication/Subject-lectures')
def Publication_Subject_lectures():
    return render_template('Publication/Subject-lectures.html')

@app.route('/Publication/Subject-resources')
def Publication_Subject_resources():
    return render_template('Publication/Subject-resources.html')

@app.route('/Publication/Subject')
def Publication_Subject():
    return render_template('Publication/Subject.html')

@app.route('/Publication/Subject2')
def Publication_Subject2():
    return render_template('Publication/Subject2.html')

@app.route('/Publication/Subject3')
def Publication_Subject3():
    return render_template('Publication/Subject3.html')

@app.route('/welcome')
def welcome():
    return render_template('welcome/templates/welcome1.html')

if __name__ == '__main__':
    app.run(port=5000,debug=True)
