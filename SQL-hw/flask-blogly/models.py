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
    post_tags = db.relationship('Tag', secondary='post_tags', backref='blog_posts')
    assignment = db.relationship('PostTag', backref='blog_posts')

    def __repr__(self):
        p = self
        return f"Post —— Title: {p.title} | Content: {p.content} | Posted At: {p.created_at}"

class Tag(db.Model):

    __tablename__ = "tags"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(20), nullable=False, unique=True)
    assignment = db.relationship('PostTag', backref='tags')


    def __repr__(self):
        t = self
        return f"Tag —— Name: {t.name}"

class PostTag(db.Model):

    __tablename__ = "post_tags"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    post_id = db.Column(db.Integer, db.ForeignKey('blog_posts.id'), primary_key=True)
    tag_id = db.Column(db.Text, db.ForeignKey('tags.name'), primary_key=True)

    def __repr__(self):
        pt = self
        return f"PostTag —— Post Id: {pt.post_id} | Tag Id: {pt.tag_id}"
    