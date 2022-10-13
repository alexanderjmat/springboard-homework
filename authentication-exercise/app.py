from flask import Flask, request, render_template,  redirect, flash, session, g
from flask_debugtoolbar import DebugToolbarExtension
from flask_sqlalchemy import SQLAlchemy
import models
import forms
import bcrypt
import os

app = Flask(__name__)


app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///authexercise'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = 'aj1234'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

models.connect_db(app)
models.db.drop_all()
models.db.create_all()

@app.route('/')
def home():
    return redirect('/register')

@app.route('/register', methods=['GET', 'POST'])
def register():
    form = forms.SignUp()
    if form.validate_on_submit():
        email = form.email.data 
        username = form.username.data
        password = form.password.data 
        first_name = form.first_name.data
        last_name = form.last_name.data
        new_user = models.User.register(email=email, username=username, password=password, first_name=first_name, last_name=last_name)
        models.db.session.add(new_user)
        models.db.session.commit()
        session["user_id"] = new_user.id
        flash(f"Thanks for signing up, {first_name}! We just sent you a confirmation email for your account")
        return redirect('/secret')
    else:
        return render_template('index.html', form=form)
    




@app.route('/login', methods=['GET', 'POST'])
def login():
    form = forms.Login()
    if form.validate_on_submit():
        username = form.username.data
        password = form.password.data
        user = models.User.authenticate(username, password)
        if user:
            session["user_id"] = user.id
            return redirect('/secret')
        else:
            flash('Sorry, your username or password was incorrect')
            return redirect('/')
    else:
        return render_template('login.html', form=form)


@app.route('/secret')
def secret():
    if "user_id" not in session:
        flash('Sorry, you must be logged into access this page')
        redirect('/')
    if "user_id" in session:
        return render_template('secret.html')
    
@app.route('/logout')
def logout():
    session.pop("user_id")
    return redirect('/')



