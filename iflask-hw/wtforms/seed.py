from models import Pet, db
from app import app

# Create all tables
db.drop_all()
db.create_all()

pet1 = Pet(name="Boyo", species="Dog", photo_url="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg", age=5)
pet2 = Pet(name="Mio", species="Cat", age=2, available=False)
pet3 = Pet(name="Sushi", species="Cat", age=8, available=False)
pet4 = Pet(name="Conda", species="Snake", age=6)
pet5 = Pet(name="Fluff", species="Hamster", photo_url="https://www.burgesspetcare.com/wp-content/uploads/2021/08/Hamster.webp", age=1)

db.session.add(pet1)
db.session.add(pet2)
db.session.add(pet3)
db.session.add(pet4)
db.session.add(pet5)
db.session.commit()