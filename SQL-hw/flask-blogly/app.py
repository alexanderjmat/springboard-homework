"""Blogly application."""
from flask import Flask, request, render_template,  redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from psycopg2 import connect
from models import db, connect_db, User, BlogPost

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = 'aj1234'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)


connect_db(app)
# db.create_all()

@app.route('/')
def home_page():
    users = User.query.order_by(User.id).all()
    return render_template('base.html', users=users)

@app.route('/users')
def user_page():
    users = User.query.order_by(User.id).all()
    return render_template('base.html', users=users)

@app.route('/users/new', methods=['POST'])
def new_user():
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    profile_picture = request.form['image_url']
    new_user = User(first_name=first_name, last_name=last_name, image_url=profile_picture)
    db.session.add(new_user)
    db.session.commit()
    return redirect('/users')

@app.route('/users/new', methods=["GET"])
def redirect_user():
    return redirect('/users')

@app.route('/users/<int:id>')
def user_details(id):
    user = User.query.get_or_404(id)
    posts = BlogPost.query.filter_by(posted_by=id).all()
    return render_template('user_details.html', user=user, posts=posts)

@app.route('/users/<int:id>/edit', methods=['GET', 'POST'])
def user_edit(id):
    if request.method == 'GET':
        user = User.query.get_or_404(id)
        return render_template('edit_user.html', user=user)
    elif request.method == 'POST':
        first_name = request.form['first_name']
        last_name = request.form['last_name']
        profile_picture = request.form['image_url']
        user = User.query.get_or_404(id)
        user.query.filter_by(id=id).update({'first_name': first_name, 'last_name': last_name, 'image_url': profile_picture})
        db.session.commit()
        return redirect(f"/users/{id}")
    
@app.route('/users/<int:id>/delete', methods=['POST'])
def user_delete(id):
    user = User.query.get_or_404(id)
    db.session.delete(user)
    db.session.flush()
    db.session.commit()
    return redirect("/")

@app.route('/users/<int:id>/posts', methods=['POST'])
def create_new_post(id):
    user = User.query.get_or_404(id)
    post_title = request.form['post-title']
    post_content = request.form['post-content']
    new_post = BlogPost(title=post_title, content=post_content, posted_by=id)
    db.session.add(new_post)
    db.session.commit()
    return render_template('post.html', user=user, post=new_post)

@app.route('/posts/<int:id>/delete', methods=['POST'])
def delete_post(id):
    import pdb
    post = BlogPost.query.get_or_404(id)
    db.session.delete(post)
    db.session.flush()
    db.session.commit()
    return redirect(f"/users/{post.posted_by}")

@app.route('/posts/<int:id>/edit', methods=['GET', 'POST'])
def edit_post(id):
    post = BlogPost.query.get_or_404(id)
    user = User.query.get_or_404(post.posted_by)

    if request.method == "GET":
        return render_template('edit_post.html', user=user, post=post)
    
    elif request.method == "POST":
        title = request.form['post-title']
        content = request.form['post-content']
        post.query.filter_by(id=id).update({"title": title, "content": content})
        db.session.commit()
        return redirect(f"/users/{post.posted_by}")

    






