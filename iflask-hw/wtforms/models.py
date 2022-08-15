from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


def connect_db(app):
    """Connect to database."""

    db.app = app
    db.init_app(app)

class Pet(db.Model):
    '''Pets'''

    __tablename__ = "pets"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.Text, nullable=False)
    species = db.Column(db.Text, nullable=False)
    photo_url = db.Column(db.Text)
    age = db.Column(db.Integer)
    notes = db.Column(db.Text)
    available = db.Column(db.Boolean, nullable=False, default=True)

# pet1 = Pet(name="Boyo", species="Dog", photo_url="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg", age=5)
# pet2 = Pet(name="Mio", species="Cat", age=2, available=False)
# pet3 = Pet(name="Sushi", species="Cat", age=8, available=False)
# pet4 = Pet(name="Conda", species="Snake", age=6)
# pet5 = Pet(name="Fluff", species="Hamster", photo_url="https://www.burgesspetcare.com/wp-content/uploads/2021/08/Hamster.webp", age=1)

# db.session.add(pet1)
# db.session.add(pet2)
# db.session.add(pet3)
# db.session.add(pet4)
# db.session.add(pet5)
# db.session.commit()