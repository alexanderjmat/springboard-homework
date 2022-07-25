from types import ClassMethodDescriptorType
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)


#Models

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)

    first_name = db.Column(db.String(50), nullable=False)

    last_name = db.Column(db.String(50))

    image_url = db.Column(db.String(1000))

    def __repr__(self):
        u = self
        return f"User — id={u.id} | first_name={u.first_name} | last_name={u.last_name} | image_url={u.image_url}"


