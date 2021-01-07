from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Integer, ForeignKey, String, Column, Numeric
from sqlalchemy.orm import relationship

db = SQLAlchemy()

class User(db.Model):
  __tablename__ = 'users'

  user_id = db.Column(db.Integer, primary_key = True, autoincrement = True)
  email = db.Column(db.String(40), unique = True)
  password = db.Column(db.String(30))
  user_name = db.Column(db.String)
  f_name = db.Column(db.String)
  l_name = db.Column(db.String)

class Race(db.Model):
  __tablename__ = 'races'

  race_id = db.Column(db.Integer, primary_key = True, autoincrement = True)
  name = db.Column(db.String, unique=True)

class Campaign(db.Model):
  __tablename__ = 'campaigns'
  campaign_id = db.Column(db.Integer, primary_key = True, autoincrement = True)
  dm = db.Column(db.Integer, db.ForeignKey('users.user_id'))
  users = relationship("User", primaryjoin="User.user_id == Campaign.dm")
  name = db.Column(db.String)

class Language(db.Model):
  __tablename__ = 'languages'
  language_id = db.Column(db.Integer, primary_key = True, autoincrement = True)
  name = db.Column(db.String)

class Character(db.Model):
  __tablename__ = 'characters'

  character_id = db.Column(db.Integer, primary_key = True, autoincrement = True)
  owner = db.Column(db.Integer, ForeignKey('users.user_id'))
  name = db.Column(db.String)
  race = db.Column(db.Integer, ForeignKey('races.race_id'))
  campaign = db.Column(db.Integer, ForeignKey('campaigns.campaign_id'))
  strength = db.Column(db.Integer)
  dex = db.Column(db.Integer)
  con = db.Column(db.Integer)
  intel = db.Column(db.Integer)
  wis = db.Column(db.Integer)
  cha = db.Column(db.Integer)
  speed = db.Column(db.Integer)

  users = relationship("User", primaryjoin="User.user_id==Character.owner")
  campaigns = relationship("Campaign", primaryjoin="Campaign.campaign_id==Character.campaign")
  races = relationship("Race", primaryjoin="Race.race_id==Character.race")

class CharacterLanguage(db.Model):
  __tablename__ = 'cls'

  cl_id = db.Column(db.Integer, primary_key = True, autoincrement = True)
  cl_character = db.Column(db.Integer, db.ForeignKey('characters.character_id'))
  cl_language = db.Column(db.Integer, db.ForeignKey('languages.language_id'))

  languages = relationship("Language", primaryjoin="Language.language_id==CharacterLanguage.cl_language")
  characters = relationship("Character", primaryjoin="Character.character_id==CharacterLanguage.cl_character")

def connect_to_db(flask_app, echo=True, db_uri='postgresql:///charactersheets'):
  flask_app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
  flask_app.config['SQLALCHEMY_ECHO'] = echo
  flask_app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
  db.app = flask_app
  db.init_app(flask_app)
  print('Connected to the db!', db_uri)
