from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt

db = SQLAlchemy()
bcrypt = Bcrypt()

def connect_db(app):
    db.app = app
    db.init_app(app)


class User(db.Model):
    '''User class'''
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(50), nullable=False, unique=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)
    first_name = db.Column(db.String(30), nullable=False)
    last_name = db.Column(db.String(30), nullable=False)

    @classmethod
    def register(cls, email, username, password, first_name, last_name):
        '''Register user for site'''
        hashed_password = bcrypt.generate_password_hash(password)
        utf8_password = hashed_password.decode('utf8')

        return cls(email=email, username=username, password=utf8_password, first_name=first_name, last_name=last_name)
    
    @classmethod
    def authenticate(cls, username, password):
        '''Login user'''
        user = User.query.filter_by(username=username).first()
        if user and bcrypt.check_password_hash(user.password, password):
            return user
        else: 
            return False