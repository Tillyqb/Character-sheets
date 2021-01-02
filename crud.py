from model import db, User, Language, connect_to_db, Character, Campaign, CharacterLanguage, Race, RaceTrait, Trait
from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy

def create_user(user_name, password, email, f_name):
  user = User(user_name=user_name, password=password, email=email, f_name=f_name)
  db.session.add(user)
  db.session.commit()

  return (user.f_name)

def create_race(race_name):
  race = Race(race_name=race_name)

  db.session.add(race)
  db.session.commit()

def create_trait(trait_name, trait_description):
  trait = Trait(trait_name=trait_name, trait_description=trait_description)

  db.session.add(trait)
  db.session.commit()

def create_campaign(campaign_name, campaign_dm):
  dm = User.query.filter_by(user_name=campaign_dm).first().user_id
  campaign = Campaign(campaign_name=campaign_name, campaign_dm=dm)
  db.session.add(campaign)
  db.session.commit()

def create_language(language):
  language = Language(language=language)
  db.session.add(language)
  db.session.commit()

def create_character(character_name, race, language, campaign, character_owner, strength, dex, con, intel, wis, cha, speed):

  character_id = Character.query.filter_by().count() + 1
    
  if Language.query.filter_by(language=language).count() == 0:
    create_language(language)
  language_id = Language.query.filter_by(language=language).first().language_id
  character_language = CharacterLanguage(cl_language=language_id, cl_character=character_id)
  
  if Race.query.filter_by(race_name=race).count() == 0:
    race = create_race(race)
  race_id = Race.query.filter_by(race_name=race).first().race_id


  character = Character(character_name=character_name, race=race_id, campaign=campaign, character_owner=character_owner, strength=strength, dex=dex, con=con, intel=intel, wis=wis, cha=cha, speed=speed)

  db.session.add(character, character_language)
  db.session.commit()

if __name__ == '__main__':
  from server import app
  connect_to_db(app)