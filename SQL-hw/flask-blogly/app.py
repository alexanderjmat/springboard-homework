"""Blogly application."""
from flask import Flask, request, render_template,  redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from psycopg2 import connect
from models import db, connect_db, User

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
    users = User.query.all()
    return render_template('base.html', users=users)

@app.route('/users')
def user_page():
    users = User.query.all()
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
def redirect():
    return redirect('/users')

@app.route('/users/<int:id>')
def user_details(id):
    user = User.query.get_or_404(id)
    return render_template('user_details.html', user=user)





