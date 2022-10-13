from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, PasswordField, EmailField, TextAreaField
from wtforms.validators import InputRequired, Optional, Email, EqualTo, Length, DataRequired

class SignUp(FlaskForm):
    """Form for signing up"""

    username = StringField("Username", validators=[InputRequired()])
    email = EmailField("Email", validators=[InputRequired(), Email()])
    password = PasswordField("Password", validators=[InputRequired(), Length(max=20, message="Password must be less than 20 characters")])
    first_name = StringField("First Name", validators=[InputRequired()])
    last_name = StringField("Last Name", validators=[InputRequired()])

class Login(FlaskForm):
    """Form for logging in"""

    username = StringField("Username", validators=[InputRequired()])
    password = PasswordField("Password", validators=[InputRequired()])