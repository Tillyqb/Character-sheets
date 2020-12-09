from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Integer, ForeignKey, String, Column, Numeric, Text, Boolean
from sqlalchemy.orm import relationship

db = SQLAlchemy()

class User(db.Model):
  """A user"""
  __tablename__ = 'users'

  user_id = db.Column(db.Integer, primary_key = True, autoincrement = True)
  user_name = db.Column(db.String(20), unique = True)
  password = db.Column(db.String(30))
  email = db.Column(db.String(40), unique = True)
  f_name = db.Column(db.String(15))

  @classmethod
  def get_user_by_user_name(cls, user_name):

    return cls.query.filter_by(user_name=user_name).first()

  @classmethod
  def get_user_by_user_id(cls, user_id):
    return cls.query.filter_by(user_id=user_id).first()

  def __repr__(self):
    return f'<User: user = {self.user_id} user_name = {self.user_name}'

class Campaign(db.Model):

  __tablename__ = 'campaigns'

  campaign_id = db.Column(db.Integer, primary_key = True, autoincrement = True)
  campaign_name = db.Column(db.String)
  campaign_dm = db.Column(db.Integer, ForeignKey("users.user_id"))

  users = relationship("User", primaryjoin="User.user_id==Campaign.campaign_dm")

class Character(db.Model):

  __tablename__ = 'characters'

  character_id = db.Column(db.Integer, primary_key = True, autoincrement = True)
  campaign = db.Column(db.Integer, ForeignKey("campaigns.campaign_id"))
  character_name = db.Column(db.String)
  character_owner = db.Column(db.Integer, ForeignKey("users.user_id"))
  languages = db.Column(db.Integer, unique=True)
  character_skills = db.Column(db.Integer, ForeignKey("users.user_id"), unique=True)
  strength = db.Column(db.Integer)
  dex = db.Column(db.Integer)
  con = db.Column(db.Integer)
  intel = db.Column(db.Integer)
  wis = db.Column(db.Integer)
  cha = db.Column(db.Integer)
  speed = db.Column(db.Integer)

  campaigns = relationship("Campaign", primaryjoin="Campaign.campaign_id==Character.campaign")
  users = relationship("User", primaryjoin="User.user_id==Character.character_owner")

class CharacterLanguage(db.Model):

  __tablename__ = 'character_languages'

  cl_id = db.Column(db.Integer, primary_key = True, autoincrement = True)
  cl_character = db.Column(db.Integer, ForeignKey("characters.languages"))
  cl_language = db.Column(db.Integer, ForeignKey("languages.language_id"))

  characters = relationship("Character", primaryjoin="Character.languages==CharacterLanguage.cl_character")
  languages = relationship("Language", primaryjoin="Language.language_id==CharacterLanguage.cl_language")

class Language(db.Model):

  __tablename__ = 'languages'

  language_id = db.Column(db.Integer, primary_key = True, autoincrement = True)
  language = db.Column(db.String)

class Skills(db.Model):

  __tablename__ = 'skills'

  skill_id = db.Column(db.Integer, primary_key = True, autoincrement = True)
  skill_character = db.Column(db.Integer, ForeignKey("characters.character_skills"))

  characters = relationship("Character", primaryjoin="Character.character_skills==Skills.skill_character")

def connect_to_db(flask_app=Flask(__name__), echo=True, db_uri='postgresql:///charactersheets'):
  flask_app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
  flask_app.config['SQLALCHEMY_ECHO '] = echo
  flask_app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
  db.app = flask_app
  db.init_app(flask_app)
  print('Connected to db!')

if __name__ == "__main__":
  from server import app
  connect_to_db(app)