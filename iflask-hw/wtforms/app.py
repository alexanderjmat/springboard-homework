from flask import Flask, render_template, flash, redirect, render_template, request
from flask_debugtoolbar import DebugToolbarExtension
from form import AddPetForm, EditPetForm
from models import db, connect_db, Pet
import pdb

app = Flask(__name__)
app.config["SECRET_KEY"] = "oh-so-secret"
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql:///flask_adoption"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_ECHO"] = True
app.config["DEBUG_TB_INTERCEPT_REDIRECTS"] = False

debug = DebugToolbarExtension(app)
connect_db(app)
#


@app.route("/")
def homepage():
    """Show homepage links."""
    pets = db.session.query(Pet).all()


    return render_template("index.html", pets=pets)

@app.route('/add', methods=["GET", "POST"])
def add_pet():
    form = AddPetForm()
    if form.validate_on_submit():
        name = form.name.data
        species = form.species.data
        photo = form.photo.data
        age = form.age.data
        notes = form.notes.data
        new_pet = Pet(name=name, species=species, photo_url=photo, age=age, notes=notes)
        db.session.add(new_pet)
        db.session.commit()
        return redirect("/")
    else:
        return render_template("add_pet.html", form=form)

@app.route('/pets/<int:id>', methods=["GET", "POST"])
def pet_page(id):
    form = EditPetForm()
    if form.validate_on_submit():
        photo = form.photo.data
        notes = form.notes.data
        available = form.available.data
        pet = Pet.query.get_or_404(id)
        pet.query.filter_by(id=id).update({"photo_url": photo, "notes": notes, "available": available})
        db.session.commit()
        return redirect("/")

    else:
        pet = Pet.query.get_or_404(id)
        return render_template("pet_page.html", pet=pet, form=form)