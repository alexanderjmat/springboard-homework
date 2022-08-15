from tokenize import Number
from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, IntegerField, BooleanField
from wtforms.validators import InputRequired, Optional, Email, URL, NumberRange, AnyOf

class AddPetForm(FlaskForm):
    '''Form for adding a pet to the database'''

    name = StringField("Pet name", validators=[InputRequired(message="Field cannot be blank")])
    species = StringField("Species of pet", validators=[InputRequired(message="Field cannot be blank"), AnyOf(values=["cat", "dog", "porcupine"], message="Invalid Species")])
    photo = StringField("Photo URL of pet", validators=[Optional(), URL()])
    age = IntegerField("Age of pet", validators=[NumberRange(0, 30)])
    notes = StringField("Relevant notes about pet")

class EditPetForm(FlaskForm):
    '''Form to edit current pet'''
    photo = StringField("Photo URL of pet", validators=[Optional(), URL()])
    notes = StringField("Relevant notes about pet")
    available = BooleanField("Check if pet is still available for adoption")

