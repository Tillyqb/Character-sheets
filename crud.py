from model import connect_to_db, db, User, Race, Campaign, Language, Character, CharacterLanguage
from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy

def create_user(user_name, passhash, email, f_name, l_name):
  user = User(user_name=user_name, email=email, passhash=passhash, f_name=f_name, l_name=l_name)
  db.session.add(user)
  db.session.commit()
  return user_name

def create_race(race_name):
  race = Race(name=race_name)
  db.session.add(race)
  db.session.commit()
  return race_name

def create_campaign(campaign_name, dm_name):
  dm = User.query.filter_by(user_name=dm_name).first().user_id
  campaign = Campaign(name=campaign_name, dm=dm)
  db.session.add(campaign)
  db.session.commit()
  return campaign_name

def create_language(name):
  language = Language(name=name)
  db.session.add(language)
  db.session.commit()
  return name

def create_character(character_name, race, language, campaign_name, owner, strength, dex, con, intel, wis, cha, speed):
  race_id = Race.query.filter_by(name=race).first().race_id
  campaign_id = Campaign.query.filter_by(name=campaign_name).first().campaign_id
  owner_id = User.query.filter_by(user_name=owner).first().user_id
  character = Character(name=character_name, race=race_id, campaign=campaign_id, owner=owner_id, strength=strength, dex=dex, con=con, intel=intel, wis=wis, cha=cha, speed=speed)
  db.session.add(character)
  db.session.commit()
  language_id = Language.query.filter_by(name=language).first().language_id
  character_id = Character.query.filter_by(name=character_name).first().character_id
  cl = CharacterLanguage(cl_language=language_id, cl_character=character_id)
  return character_name

