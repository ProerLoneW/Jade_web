from flask import Flask, render_template, request, redirect, session, url_for, flash, send_from_directory,abort,jsonify
import pymysql
import hashlib
import sqlalchemy
from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, DateTime,Text,Boolean
from sqlalchemy.orm import sessionmaker, relationship, declarative_base
from datetime import datetime
from sqlalchemy_schemadisplay import create_schema_graph
import os

app = Flask(__name__,
            static_folder='static')
app.secret_key = '123456789'
UPLOAD_FOLDER = os.path.join(app.static_folder, 'uploads')
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024 

# MySQL 数据库连接配置
db_config={
    'user':'root',
    'password':'20040504',#这里改成自己的数据库密码
    'host':'localhost',
    'port':3306,
    'database': 'web',#这里改成自己的数据库名字
    'charset':'utf8mb4'}
# 创建数据库连接
engine = create_engine('mysql+pymysql://{user}:{password}@{host}:{port}/{database}?charset={charset}'.format(**db_config))
# app.config["SQLALCHEMY_DATABASE_URI"]=f"mysql+pymysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}{DB_POST}/{DB_NAME}?charset=utf8"
Base = declarative_base()

#这里是定义数据库的
class User(Base):
    __tablename__ = "users"
    __table_args__ = {'extend_existing': True}
    id = Column(Integer, primary_key=True)
    username = Column(String(255), unique=True, nullable=False)
    password = Column(String(255), nullable=False)
    email = Column(String(255), unique=True, nullable=False)
    role = Column(String(50), nullable=False, default='student')
    avatar = Column(String(255), nullable=True)
    gender = Column(String(10), nullable=False, default='不愿透露')
    signature = Column(String(40), nullable=True)
    favorite_jade1 = Column(String(255), nullable=True)
    favorite_jade2 = Column(String(255), nullable=True)
    favorite_jade3 = Column(String(255), nullable=True)
    show_likes = Column(Boolean, default=True)
    show_email = Column(Boolean, default=True)
    posts = relationship('Post', back_populates='author', cascade="all, delete-orphan")
    comments = relationship('Comment', back_populates='author', cascade="all, delete-orphan")
    likes = relationship('Like', back_populates='user', cascade="all, delete-orphan")

class Post(Base):
    __tablename__ = "posts"
    __table_args__ = {'extend_existing': True}
    id = Column(Integer, primary_key=True)
    title = Column(String(200), nullable=False)
    content = Column(Text, nullable=True)
    timestamp = Column(DateTime, default=datetime.utcnow)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    author = relationship('User', back_populates='posts')
    comments = relationship('Comment', back_populates='post', cascade="all, delete-orphan")
    likes = relationship('Like', back_populates='post', cascade="all, delete-orphan")
    images = relationship('Image', back_populates='post', cascade="all, delete-orphan")

class Comment(Base):
    __tablename__ = "comments"
    __table_args__ = {'extend_existing': True}
    id = Column(Integer, primary_key=True)
    content = Column(Text, nullable=False)
    timestamp = Column(DateTime, default=datetime.utcnow)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    post_id = Column(Integer, ForeignKey('posts.id'), nullable=False)
    author = relationship('User', back_populates='comments')
    post = relationship('Post', back_populates='comments')
    images = relationship('Image', back_populates='comment', cascade="all, delete-orphan")

class Like(Base):
    __tablename__ = "likes"
    __table_args__ = {'extend_existing': True}
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    post_id = Column(Integer, ForeignKey('posts.id'), nullable=False)
    user = relationship('User', back_populates='likes')
    post = relationship('Post', back_populates='likes')

class Image(Base):
    __tablename__ = "images"
    __table_args__ = {'extend_existing': True}
    id = Column(Integer, primary_key=True)
    file_path = Column(String(255), nullable=False)
    post_id = Column(Integer, ForeignKey('posts.id'), nullable=True)
    comment_id = Column(Integer, ForeignKey('comments.id'), nullable=True)

    post = relationship('Post', back_populates='images')
    comment = relationship('Comment', back_populates='images')

class Article(Base):
    __tablename__ = "articles"
    __table_args__ = {'extend_existing': True}
    id = Column(Integer, primary_key=True)
    title = Column(String(200), nullable=False)
    content = Column(Text, nullable=False)
    timestamp = Column(DateTime, default=datetime.utcnow)

class Collection(Base):
    __tablename__ = "collections"
    __table_args__ = {'extend_existing': True}
    id = Column(Integer, primary_key=True)
    name = Column(String(200), nullable=False)
    image_path = Column(String(255), nullable=False)
    description = Column(Text, nullable=False)

# 学术论文的数据库
class Essay(Base):
    __tablename__ = "essays"
    __table_args__ = {'extend_existing': True}
    id = Column(Integer, primary_key=True)
    title = Column(String(200), nullable=False)
    content = Column(Text, nullable=False)
    timestamp = Column(DateTime, default=datetime.utcnow)

# 学术讲座的数据库
class Lecture(Base):
    __tablename__ = "lectures"
    __table_args__ = {'extend_existing': True}
    id = Column(Integer, primary_key=True)
    title = Column(String(200), nullable=False)
    content = Column(Text, nullable=False)
    timestamp = Column(DateTime, default=datetime.utcnow)


# 国内展览
class Exhibition_dome(Base):
    __tablename__ = "exhibitions_dome"
    __table_args__ = {'extend_existing': True}
    id = Column(Integer, primary_key=True)
    name = Column(String(200), nullable=False)
    image_path_1 = Column(String(255), nullable=False)
    image_path_2 = Column(String(255), nullable=False)
    image_path_3 = Column(String(255), nullable=False)
    description_1 = Column(Text, nullable=False)
    description_2 = Column(Text, nullable=False)

# 学生策展
class Exhibition_stu(Base):
    __tablename__ = "exhibitions_stu"
    __table_args__ = {'extend_existing': True}
    id = Column(Integer, primary_key=True)
    name = Column(String(200), nullable=False)
    image_path_1 = Column(String(255), nullable=False)
    image_path_2 = Column(String(255), nullable=False)
    image_path_3 = Column(String(255), nullable=False)
    description_1 = Column(Text, nullable=False)
    description_2 = Column(Text, nullable=False)

class UserMessages(Base):
    __tablename__ = 'user_messages'
    mess_id = Column(Integer, primary_key=True)
    content = Column(String(500), nullable=False)
    email = Column(String(120), nullable=True)

# 这是删除所有数据的操作，不到万不得已千万不要做
# 如果之前创建过同名数据库且不明白如何数据库迁移，可以把下面一句注释去掉，运行清除之前的表并创建新表，然后记得加上注释
# Base.metadata.drop_all(engine)

# 创建表
Base.metadata.create_all(engine)


# 这里是保存ER图的
# graph = create_schema_graph(metadata=Base.metadata, engine=engine, show_datatypes=True, show_indexes=True, rankdir='LR', concentrate=True)
# Save the diagram to a file
# graph.write_png('forum_schema.png')

db_session_class = sessionmaker(bind=engine)
db_session = db_session_class()

os.makedirs(UPLOAD_FOLDER, exist_ok=True) #判断文件夹是否存在

#密码加密
def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()
#自定义过滤器
@app.template_filter('date') 
def format_date(value):
    if value is None:
        return ""
    return value.strftime('%Y-%m-%d')

#根路由跳转至欢迎界面
@app.route('/')
def root_index():
    return redirect(url_for("welcome"))

#管理员后台
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

#登录注册相关
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
            return render_template('login.html', error=error)
    return render_template('login.html')

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
            return render_template('login.html', error=error)
        db_session.add(user)
        db_session.commit()
        success = "注册成功"
        flash('注册成功', 'success')
        return render_template('login.html', success=success)
    return render_template('login.html')

@app.route('/check_login')
def check_login():
    if 'username' in session:
        return {"loggedIn": True}
    return {"loggedIn": False}

@app.route('/logout')
def logout():
    session.clear()  
    return redirect(url_for('index'))

#论坛相关
@app.route('/forum')
def forum():
    page = request.args.get('page', 1, type=int)
    per_page = 10
    total = db_session.query(Post).count()
    posts = db_session.query(Post).order_by(Post.timestamp.desc()).offset((page - 1) * per_page).limit(per_page).all()

    if 'username' in session:
        username = session['username']
    else:
        return redirect(url_for("login"))

    user = db_session.query(User).filter_by(username=username).first()
    if user is None:
        abort(404)

    liked_post_ids = [like.post_id for like in user.likes]

    next_url = url_for('forum', page=page + 1) if total > page * per_page else None
    prev_url = url_for('forum', page=page - 1) if page > 1 else None
    
    return render_template('forum.html', posts=posts, next_url=next_url, prev_url=prev_url, user=user, liked_post_ids=liked_post_ids)

@app.route('/post/<int:post_id>/delete', methods=['POST'])
def self_delete_post(post_id):
    post = db_session.query(Post).filter_by(id=post_id).first()
    if post and 'username' in session and (session['role'] == 'admin' or post.author.username == session['username']):
        db_session.delete(post)
        db_session.commit()
    return redirect(url_for('profile', username=session['username']))

@app.route('/forum/<int:post_id>/delete', methods=['POST'])
def delete_post(post_id):
    if 'role' not in session or session['role'] != 'admin':
        return redirect(url_for('forum'))
    post = db_session.query(Post).filter_by(id=post_id).first()
    if post:
        db_session.delete(post)
        db_session.commit()
    return redirect(url_for('forum'))


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



@app.route('/post/<int:post_id>/like', methods=['POST'])
def like_post(post_id):
    if 'username' not in session:
        return "User not logged in"
    user = db_session.query(User).filter_by(username=session['username']).first()
    like = db_session.query(Like).filter_by(user_id=user.id, post_id=post_id).first()
    if not like:
        new_like = Like(user_id=user.id, post_id=post_id)
        db_session.add(new_like)
        db_session.commit()
        return redirect(url_for('forum'))
    return "Already liked"

@app.route('/post/<int:post_id>/unlike', methods=['POST'])
def unlike_post(post_id):
    if 'username' not in session:
        return "User not logged in"
    user = db_session.query(User).filter_by(username=session['username']).first()
    like = db_session.query(Like).filter_by(user_id=user.id, post_id=post_id).first()
    if like:
        db_session.delete(like)
        db_session.commit()
        return redirect(url_for('forum'))
    return "Like not found"

@app.route('/profile/<username>', methods=['GET', 'POST'])
def profile(username):
    user = db_session.query(User).filter_by(username=username).first()
    if user is None:
        abort(404)
    is_self = 'username' in session and session['username'] == username
    if request.method == 'POST' and is_self:
        if 'avatar' in request.files:
            avatar = request.files['avatar']
            if avatar.filename != '':
                filename = f"{username}_{avatar.filename}"
                filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
                avatar.save(filepath)
                user.avatar = 'uploads/' + filename
        if 'favorite_jade1' in request.files:
            avatar = request.files['favorite_jade1']
            if avatar.filename != '':
                filename = f"{username}_{avatar.filename}"
                filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
                avatar.save(filepath)
                user.favorite_jade1 = 'uploads/' + filename
        if 'favorite_jade2' in request.files:
            avatar = request.files['favorite_jade2']
            if avatar.filename != '':
                filename = f"{username}_{avatar.filename}"
                filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
                avatar.save(filepath)
                user.favorite_jade2 = 'uploads/' + filename
        if 'favorite_jade3' in request.files:
            avatar = request.files['favorite_jade3']
            if avatar.filename != '':
                filename = f"{username}_{avatar.filename}"
                filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
                avatar.save(filepath)
                user.favorite_jade3 = 'uploads/' + filename
        user.gender = request.form.get('gender', user.gender)
        user.signature = request.form.get('signature', user.signature)

        # user.favorite_jade = request.form.get('favorite_jade', user.favorite_jade)

        user.show_likes = 'show_likes' in request.form
        db_session.commit()

        # print(username)
        return redirect(url_for('profile', username=username))

    posts = db_session.query(Post).filter_by(user_id=user.id).all()
    liked_posts = db_session.query(Post).join(Like, Like.post_id == Post.id).filter(Like.user_id == user.id).all()

    return render_template('profile.html', user=user, is_self=is_self, posts=posts, liked_posts=liked_posts)
#文章刊物管理

@app.route('/articles')
def articles():
    page = request.args.get('page', 1, type=int)
    per_page = 5
    total = db_session.query(Article).count()
    articles = db_session.query(Article).order_by(Article.id).offset((page - 1) * per_page).limit(
        per_page).all()

    next_url = url_for('articles', page=page + 1) if total > page * per_page else None
    prev_url = url_for('articles', page=page - 1) if page > 1 else None

    return render_template('articles.html', articles=articles, next_url=next_url, prev_url=prev_url)
@app.route('/article/<int:article_id>')
def read_article(article_id):
    article = db_session.query(Article).filter_by(id=article_id).first()
    if article is None:
        abort(404)
    prev_article = db_session.query(Article).filter(Article.id < article_id).order_by(Article.id.desc()).first()
    next_article = db_session.query(Article).filter(Article.id > article_id).order_by(Article.id.asc()).first()
    return render_template('read_article.html', article=article, prev_article=prev_article, next_article=next_article)

@app.route('/manage_articles', methods=['GET', 'POST'])
def manage_articles():
    if 'role' not in session or session['role'] != 'admin':
        return redirect(url_for('index'))
    if request.method == 'POST':
        title = request.form['title']
        content = request.form['content']
        new_article = Article(title=title, content=content)
        db_session.add(new_article)
        db_session.commit()
        return redirect(url_for('manage_articles'))
    articles = db_session.query(Article).order_by(Article.timestamp.desc()).all()
    return render_template('manage_articles.html', articles=articles)

@app.route('/article/<int:article_id>/delete', methods=['POST'])
def delete_article(article_id):
    if 'role' not in session or session['role'] != 'admin':
        return redirect(url_for('index'))
    article = db_session.query(Article).filter_by(id=article_id).first()
    if article:
        db_session.delete(article)
        db_session.commit()
    return redirect(url_for('manage_articles'))

# 学术论文管理
@app.route('/essays')
def essays():
    page = request.args.get('page', 1, type=int)
    per_page = 5
    total = db_session.query(Essay).count()
    essays = db_session.query(Essay).order_by(Essay.id).offset((page - 1) * per_page).limit(
        per_page).all()

    next_url = url_for('essays', page=page + 1) if total > page * per_page else None
    prev_url = url_for('essays', page=page - 1) if page > 1 else None

    return render_template('essays.html', essays=essays, next_url=next_url, prev_url=prev_url)

@app.route('/essay/<int:essay_id>')
def read_essay(essay_id):
    essay = db_session.query(Essay).filter_by(id=essay_id).first()
    if essay is None:
        abort(404)
    prev_essay = db_session.query(Essay).filter(Essay.id < essay_id).order_by(Essay.id.desc()).first()
    next_essay = db_session.query(Essay).filter(Essay.id > essay_id).order_by(Essay.id.asc()).first()
    return render_template('read_essay.html', essay=essay, prev_essay=prev_essay, next_essay=next_essay)

@app.route('/manage_essays', methods=['GET', 'POST'])
def manage_essays():
    if 'role' not in session or session['role'] != 'admin':
        return redirect(url_for('index'))
    if request.method == 'POST':
        title = request.form['title']
        content = request.form['content']
        new_essay = Essay(title=title, content=content)
        db_session.add(new_essay)
        db_session.commit()
        return redirect(url_for('manage_essays'))
    essays = db_session.query(Essay).order_by(Essay.timestamp.desc()).all()
    return render_template('manage_essays.html', essays=essays)

@app.route('/essay/<int:essay_id>/delete', methods=['POST'])
def delete_essay(essay_id):
    if 'role' not in session or session['role'] != 'admin':
        return redirect(url_for('index'))
    essay = db_session.query(Essay).filter_by(id=essay_id).first()
    if essay:
        db_session.delete(essay)
        db_session.commit()
    return redirect(url_for('manage_essays'))

#学术讲座管理

@app.route('/lectures')
def lectures():
    page = request.args.get('page', 1, type=int)
    per_page = 5
    total = db_session.query(Lecture).count()
    lectures = db_session.query(Lecture).order_by(Lecture.id).offset((page - 1) * per_page).limit(
        per_page).all()

    next_url = url_for('lectures', page=page + 1) if total > page * per_page else None
    prev_url = url_for('lectues', page=page - 1) if page > 1 else None

    return render_template('lectures.html', lectures=lectures, next_url=next_url, prev_url=prev_url)
@app.route('/lecture/<int:lecture_id>')
def read_lecture(lecture_id):
    lecture = db_session.query(Lecture).filter_by(id=lecture_id).first()
    if lecture is None:
        abort(404)
    prev_lecture = db_session.query(Lecture).filter(Lecture.id < lecture_id).order_by(Lecture.id.desc()).first()
    next_lecture = db_session.query(Lecture).filter(Lecture.id > lecture_id).order_by(Lecture.id.asc()).first()
    return render_template('read_lecture.html', lecture=lecture, prev_lecture=prev_lecture, next_lecture=next_lecture)

@app.route('/manage_lectures', methods=['GET', 'POST'])
def manage_lectures():
    if 'role' not in session or session['role'] != 'admin':
        return redirect(url_for('index'))
    if request.method == 'POST':
        title = request.form['title']
        content = request.form['content']
        new_lecture = Lecture(title=title, content=content)
        db_session.add(new_lecture)
        db_session.commit()
        return redirect(url_for('manage_lectures'))
    lectures = db_session.query(Lecture).order_by(Lecture.timestamp.desc()).all()
    return render_template('manage_lectures.html', lectures=lectures)

@app.route('/lecture/<int:lecture_id>/delete', methods=['POST'])
def delete_lecture(lecture_id):
    if 'role' not in session or session['role'] != 'admin':
        return redirect(url_for('index'))
    lecture = db_session.query(Lecture).filter_by(id=lecture_id).first()
    if lecture:
        db_session.delete(lecture)
        db_session.commit()
    return redirect(url_for('manage_lectures'))



# 国内展览管理
@app.route('/exhibition')
def exhibitions_dome():
    page = request.args.get('page', 1, type=int)
    per_page = 8
    total = db_session.query(Exhibition_dome).count()
    exhibitions_dome = db_session.query(Exhibition_dome).order_by(Exhibition_dome.id).offset((page - 1) * per_page).limit(
        per_page).all()

    next_url = url_for('exhibitions_dome', page=page + 1) if total > page * per_page else None
    prev_url = url_for('exhibitions_dome', page=page - 1) if page > 1 else None

    return render_template('exhibition.html', exhibitions_dome=exhibitions_dome, next_url=next_url, prev_url=prev_url)


@app.route('/exhibition_dome/<int:exhibition_dome_id>')
def exhibition_dome_detail(exhibition_dome_id):
    exhibition_dome = db_session.query(Exhibition_dome).filter_by(id=exhibition_dome_id).first()
    if exhibition_dome is None:
        abort(404)
    return render_template('exhibition_dome_detail.html', exhibition_dome=exhibition_dome)


@app.route('/manage_exhibitions_dome', methods=['GET', 'POST'])
def manage_exhibitions_dome():
    if 'role' not in session or session['role'] != 'admin':
        return redirect(url_for('index'))

    if request.method == 'POST':
        name = request.form['name']
        description_1 = request.form['description_1']
        description_2 = request.form['description_2']
        image_1 = request.files['image_1']
        image_2 = request.files['image_2']
        image_3 = request.files['image_3']

        if image_1 and image_1.filename != '':
            filename_1 = f"{name}_{image_1.filename}"
            filepath_1 = os.path.join(app.config['UPLOAD_FOLDER'], filename_1)
            image_1.save(filepath_1)
        else:
            filename_1 = None

        if image_2 and image_2.filename != '':
            filename_2 = f"{name}_{image_2.filename}"
            filepath_2 = os.path.join(app.config['UPLOAD_FOLDER'], filename_2)
            image_2.save(filepath_2)
        else:
            filename_2 = None

        if image_3 and image_3.filename != '':
            filename_3 = f"{name}_{image_3.filename}"
            filepath_3 = os.path.join(app.config['UPLOAD_FOLDER'], filename_3)
            image_3.save(filepath_3)
        else:
            filename_3 = None

        new_exhibition_dome = Exhibition_dome(
            name=name,
            image_path_1='uploads/' + filename_1 if filename_1 else None,
            image_path_2='uploads/' + filename_2 if filename_2 else None,
            image_path_3='uploads/' + filename_3 if filename_3 else None,
            description_1=description_1,
            description_2=description_2
        )

        db_session.add(new_exhibition_dome)
        db_session.commit()

        return redirect(url_for('manage_exhibitions_dome'))

    exhibitions_dome = db_session.query(Exhibition_dome).order_by(Exhibition_dome.id).all()
    return render_template('manage_exhibitions_dome.html', exhibitions_dome=exhibitions_dome)


@app.route('/ exhibition_dome/<int:exhibition_dome_id>/delete', methods=['POST'])
def delete_exhibition_dome(exhibition_dome_id):
    if 'role' not in session or session['role'] != 'admin':
        return redirect(url_for('index'))
    exhibition_dome = db_session.query(Exhibition_dome).filter_by(id=exhibition_dome_id).first()
    if exhibition_dome:
        db_session.delete(exhibition_dome)
        db_session.commit()
    return redirect(url_for('manage_exhibitions_dome'))

#学生策展管理
@app.route('/student')
def exhibitions_stu():
    page = request.args.get('page', 1, type=int)
    per_page = 8
    total = db_session.query(Exhibition_stu).count()
    exhibitions_stu = db_session.query(Exhibition_stu).order_by(Exhibition_stu.id).offset((page - 1) * per_page).limit(
        per_page).all()

    next_url = url_for('student', page=page + 1) if total > page * per_page else None
    prev_url = url_for('student', page=page - 1) if page > 1 else None

    return render_template('student.html', exhibitions_stu=exhibitions_stu, next_url=next_url, prev_url=prev_url)


@app.route('/exhibition_stu/<int:exhibition_stu_id>')
def exhibition_stu_detail(exhibition_stu_id):
    exhibition_stu = db_session.query(Exhibition_stu).filter_by(id=exhibition_stu_id).first()
    if exhibition_stu is None:
        abort(404)
    return render_template('exhibition_stu_detail.html', exhibition_stu=exhibition_stu)


@app.route('/manage_exhibitions_stu', methods=['GET', 'POST'])
def manage_exhibitions_stu():
    if 'role' not in session or session['role'] != 'admin':
        return redirect(url_for('index'))

    if request.method == 'POST':
        name = request.form['name']
        description_1 = request.form['description_1']
        description_2 = request.form['description_2']
        image_1 = request.files['image_1']
        image_2 = request.files['image_2']
        image_3 = request.files['image_3']

        if image_1 and image_1.filename != '':
            filename_1 = f"{name}_{image_1.filename}"
            filepath_1 = os.path.join(app.config['UPLOAD_FOLDER'], filename_1)
            image_1.save(filepath_1)
        else:
            filename_1 = None

        if image_2 and image_2.filename != '':
            filename_2 = f"{name}_{image_2.filename}"
            filepath_2 = os.path.join(app.config['UPLOAD_FOLDER'], filename_2)
            image_2.save(filepath_2)
        else:
            filename_2 = None

        if image_3 and image_3.filename != '':
            filename_3 = f"{name}_{image_3.filename}"
            filepath_3 = os.path.join(app.config['UPLOAD_FOLDER'], filename_3)
            image_3.save(filepath_3)
        else:
            filename_3 = None

        new_exhibition_stu = Exhibition_stu(
            name=name,
            image_path_1='uploads/' + filename_1 if filename_1 else None,
            image_path_2='uploads/' + filename_2 if filename_2 else None,
            image_path_3='uploads/' + filename_3 if filename_3 else None,
            description_1=description_1,
            description_2=description_2
        )

        db_session.add(new_exhibition_stu)
        db_session.commit()

        return redirect(url_for('manage_exhibitions_stu'))

    exhibitions_stu = db_session.query(Exhibition_stu).order_by(Exhibition_stu.id).all()
    return render_template('manage_exhibitions_stu.html', exhibitions_stu=exhibitions_stu)


@app.route('/exhibition_stu/<int:exhibition_stu_id>/delete', methods=['POST'])
def delete_exhibition_stu(exhibition_stu_id):
    if 'role' not in session or session['role'] != 'admin':
        return redirect(url_for('index'))
    exhibition_stu = db_session.query(Exhibition_stu).filter_by(id=exhibition_stu_id).first()
    if exhibition_stu:
        db_session.delete(exhibition_stu)
        db_session.commit()
    return redirect(url_for('manage_exhibitions_stu'))


@app.route('/collection')
def collections():
    page = request.args.get('page', 1, type=int)
    per_page = 9
    total = db_session.query(Collection).count()
    collections = db_session.query(Collection).order_by(Collection.id).offset((page - 1) * per_page).limit(per_page).all()

    next_url = url_for('collection', page=page + 1) if total > page * per_page else None
    prev_url = url_for('collection', page=page - 1) if page > 1 else None

    return render_template('collection.html', collections=collections, next_url=next_url, prev_url=prev_url)

@app.route('/collection/<int:collection_id>')
def collection_detail(collection_id):
    collection = db_session.query(Collection).filter_by(id=collection_id).first()
    if collection is None:
        abort(404)
    return render_template('collection_detail.html', collection=collection)

@app.route('/manage_collections', methods=['GET', 'POST'])
def manage_collections():
    if 'role' not in session or session['role'] != 'admin':
        return redirect(url_for('index'))
    
    if request.method == 'POST':
        name = request.form['name']
        description = request.form['description']
        image = request.files['image']
        if image and image.filename != '':
            filename = f"{name}_{image.filename}"
            filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            image.save(filepath)
            new_collection = Collection(name=name, image_path='uploads/' + filename, description=description)
            db_session.add(new_collection)
            db_session.commit()
        return redirect(url_for('manage_collections'))
    collections = db_session.query(Collection).order_by(Collection.id).all()
    return render_template('manage_collections.html', collections=collections)

@app.route('/collection/<int:collection_id>/delete', methods=['POST'])
def delete_collection(collection_id):
    if 'role' not in session or session['role'] != 'admin':
        return redirect(url_for('index'))
    collection = db_session.query(Collection).filter_by(id=collection_id).first()
    if collection:
        db_session.delete(collection)
        db_session.commit()
    return redirect(url_for('manage_collections'))


@app.route('/about')
def about():
        return render_template('about.html')

@app.route('/blackboard')
def blackboard():
        return render_template('blackboard.html')

@app.route('/blackboard', methods=['POST'])
def send_message():
    content = request.form.get('content')
    email = request.form.get('email')
    if not content:
        return jsonify({'status': 0, 'info': '留言内容不能为空'})
    if not email or email and not validate_email(email):
        return jsonify({'status': 0, 'info': '请输入正确的邮箱'})
    new_message = UserMessages(content=content, email=email)
    db_session.add(new_message)
    db_session.commit()
    return jsonify({'status': 1, 'info': '提交成功'})

def validate_email(email):
    import re
    return re.match(r"[^@]+@[^@]+\.[^@]+", email)

@app.route('/class_silhouette')
def class_silhouette():
    return render_template('class_silhouette.html')

@app.route('/collection')
def collection():
    return render_template('collection.html')

@app.route('/index')
def index():
    user=None
    avatar_url=None
    if 'username' in session:
        user = db_session.query(User).filter_by(username=session['username']).first()
        if not user:
            return "User not found", 404  # 如果用户不存在，返回404
        # 生成用户头像URL或默认头像URL
    if user and user.avatar:
        avatar_url = url_for('static', filename=user.avatar)
    else:
        avatar_url = url_for('static', filename='img/profile.jpg')
    return render_template('index.html', user=user, avatar_url=avatar_url)

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
    return render_template('Subject1.1.html')
#就是上面那个

@app.route('/exhibition')
def exhibition_extibition():
    return render_template('exhibition.html')

@app.route('/student')
def exhibition_estudent():
    return render_template('student.html')

@app.route('/Publication/Subject-essay')
def Publication_Subject_essay():
    return render_template('Subject-essay.html')

@app.route('/Publication/Subject-lectures')
def Publication_Subject_lectures():
    return render_template('Subject-lectures.html')

@app.route('/Publication/Subject-resources')
def Publication_Subject_resources():
    return render_template('Subject-resources.html')

@app.route('/Publication/Subject')
def Publication_Subject():
    return render_template('Subject.html')

@app.route('/Publication/Subject2')
def Publication_Subject2():
    return render_template('Subject2.html')

@app.route('/Publication/Subject3')
def Publication_Subject3():
    return render_template('Subject3.html')

@app.route('/welcome')
def welcome():
    return render_template('welcome1.html')

@app.route('/jade_class')
def jade_class():
        return render_template('jade_class.html')

if __name__ == '__main__':
    app.run(port=5000,debug=True)