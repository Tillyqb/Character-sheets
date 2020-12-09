from model import db, User, Language, connect_to_db, Character, Campaign
from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy

def create_user(user_name, password, email, f_name):
  user = User(user_name=user_name, password=password, email=email, f_name=f_name)
  db.session.add(user)
  db.session.commit()

  return (user.f_name)

def create_campaign(campaign_name, campaign_dm):
  dm = User.query.filter_by(user_name=campaign_dm).first().user_id
  campaign = Campaign(campaign_name=campaign_name, campaign_dm=dm)
  db.session.add(campaign)
  db.session.commit()

def create_character(character_name, campaign, character_owner, strength, dex, con, intel, wis, cha, speed):

  character_id = Character.query.filter_by().count() + 1
  character = Character(character_name=character_name, campaign=campaign, character_owner=character_owner, languages=character_id, character_skills=character_id, strength=strength, dex=dex, con=con, intel=intel, wis=wis, cha=cha, speed=speed)
  db.session.add(character)
  db.session.commit()

def create_language(language):
  language = Language(language=language)
  db.session.add(language)
  db.session.commit()




if __name__ == '__main__':
  from server import app
  connect_to_db(app)