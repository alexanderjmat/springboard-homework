from unittest import TestCase
from app import app
from models import db, User
from urllib import request


app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly_tests'
app.config['SQLALCHEMY_ECHO'] = False

app.config['TESTING'] = True

db.drop_all()
db.create_all()

class UsersTestCase(TestCase):

    def test_user(self):
        User.query.delete()
        user = User(first_name="Patrick", last_name="Star", image_url="https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/1200px-Patrick_Star.svg.png")
        db.session.add(user)
        db.session.commit()

        self.user_id = user.id
    
    def tearDown(self):
        db.session.rollback()
    
    def test_home_page(self):
        with app.test_client() as client:
            response = client.get('/')
            data = response.get_data(as_text=True)

            self.assertEqual(response.status_code, 200)
            self.assertIn('<h1>Welcome to Blogly</h1>', data)

    def test_users(self):
        with app.test_client() as client:
            response = client.get('/users')
            data = response.get_data(as_text=True)

            self.assertEqual(response.status_code, 200)
            self.assertIn('<h1>Welcome to Blogly</h1>', data)

    def test_add_user(self):
        with app.test_client() as client:
            response = client.post('/users/new', {"first_name": "Harry", "last_name": "Potter", "image_url": "https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg"})

            self.assertEqual(response.status_code, 302)
            # self.assertIn('<li>Harry Potter</li>', data)

    def test_user_delete(self):
        with app.test_client() as client:
            response = client.post('/users/1/delete', follow_redirects=True)

            self.assertEqual(response.status_code, 200)
    
    







