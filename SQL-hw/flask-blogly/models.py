from types import ClassMethodDescriptorType
from flask_sqlalchemy import SQLAlchemy
import datetime

db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)


#Models

class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50))
    image_url = db.Column(db.String(1000))

    def __repr__(self):
        u = self
        return f"User —— id: {u.id} | First Name: {u.first_name} | Last Name: {u.last_name} | Image Link: {u.image_url}"


class BlogPost(db.Model):
    __tablename__ = "blog_posts"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(50))
    content = db.Column(db.Text)
    created_at = db.Column(db.Text, default=datetime.datetime.now())
    posted_by = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User', backref='blog_posts')

    def __repr__(self):
        p = self
        return f"Post —— Title: {p.title} | Content: {p.content} | Posted At: {p.created_at}"
    