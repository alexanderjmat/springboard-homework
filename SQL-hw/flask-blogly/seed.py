"""Seed file to make sample data for db."""

from models import User, BlogPost, db
from app import app

# Create all tables
db.drop_all()
db.create_all()

u1 = User(first_name="Spongebob", last_name="Squarepants", image_url="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/640px-SpongeBob_SquarePants_character.svg.png")
u2 = User(first_name="Patrick", last_name="Star", image_url="https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Patrick-Star.SpongeBob-SquarePants.webp")
u3 = User(first_name="Squidward", last_name="Tentacles", image_url="https://mtv.mtvnimages.com/uri/mgid:file:http:shared:mtv.com/news/wp-content/uploads/2015/01/Squidward-1422477764.png?quality=.8&height=480&width=640")
u4 = User(first_name="Eugene", last_name="Krabs", image_url="https://www.looper.com/img/gallery/what-you-never-noticed-about-mr-krabs-lies-in-spongebob-squarepants/intro-1609948293.jpg")
u5 = User(first_name="Sheldon", last_name="Plankton", image_url="https://64.media.tumblr.com/902fe7cd7c9b95d837dcc7b161a435ed/tumblr_pfsm2zLvkN1v67o1yo1_640.png")
u6 = User(first_name="Gary", last_name="The Snail", image_url="https://assets.entrepreneur.com/content/3x2/2000/20180521195827-gary-spongebob.jpeg")

db.session.add(u1)
db.session.add(u2)
db.session.add(u3)
db.session.add(u4)
db.session.add(u5)
db.session.add(u6)

db.session.commit()

p1 = BlogPost(title="I'm ready!", content="Looking forward to another day at the Krusty Krab!", posted_by=1)
p2 = BlogPost(title="Argharghargh!", content="I love money!", posted_by=4)

db.session.add(p1)
db.session.add(p2)

db.session.commit()