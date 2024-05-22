from flask import Flask, render_template, request, redirect, session, url_for, flash
import pymysql
import hashlib
import os

app = Flask(__name__)
app.secret_key = '123456789'

# 数据库配置
DB_HOST = "localhost"
DB_USER = "root"
DB_PASSWORD = "hxyym123"
DB_NAME = "logindata"

def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()

@app.route('/')
def index():
    return render_template('login.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = hash_password(request.form['password'])
           # 添加调试信息
        print(f"Username: {username}")
        print(f"Password: {password}")
        connection = pymysql.connect(
            host=DB_HOST,
            user=DB_USER,
            password=DB_PASSWORD,
            database=DB_NAME
        )
        cursor = connection.cursor()
        query = "SELECT * FROM users WHERE username=%s AND password=%s"
        cursor.execute(query, (username, password))
        result = cursor.fetchone()
        # 打印查询结果
        print(f"Query result: {result}")
        cursor.close()
        connection.close()
        if result:
            session["username"] = username
            return redirect(url_for("home"))
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
        connection = pymysql.connect(
            host=DB_HOST,
            user=DB_USER,
            password=DB_PASSWORD,
            database=DB_NAME
        )
        cursor = connection.cursor()
        query = "SELECT * FROM users WHERE username=%s"
        cursor.execute(query, (username,))
        result = cursor.fetchone()
        if result:
            error = "用户名已存在"
            flash("用户名已存在", 'error')
            cursor.close()
            connection.close()
            return render_template('login.html', error=error)
        query = "INSERT INTO users (username, password, mail) VALUES (%s, %s, %s)"
        cursor.execute(query, (username, password, email))
        connection.commit()
        cursor.close()
        connection.close()
        success = "注册成功"
        flash('注册成功', 'success')
        return render_template('login.html', success=success)
    return render_template('login.html')

@app.route('/home')
def home():
    if "username" in session:
        return f'欢迎 {session["username"]}！这是主页。'
    else:
        return redirect(url_for('login'))

if __name__ == '__main__':
    app.run(debug=True)
