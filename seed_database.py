from model import connect_to_db, db, User, Language, Character
import crud
import os
import json
from random import choice, randint
from flask import Flask
import requests

app = Flask(__name__)
connect_to_db(app, False, 'postgresql:///charactersheets')

os.system('dropdb charactersheets')
os.system('createdb charactersheets')
db.create_all()



def seed_users():
  crud.create_user('Tills', 'password', 'matilda.basner@gmail.com', 'Tilly')
  crud.create_user('Cryos', 'password', 'cryos.java@gmail.com', 'Rick')

seed_users()

def seed_campaigns():
  crud.create_campaign("Cryos's Superwolves", "Cryos")

seed_campaigns()

def seed_languages():
  crud.create_language('Common')
  crud.create_language('gobbledygook')

seed_languages()

def seed_characters():
  crud.create_character('Canem Dolor', 1, 1, 5, 20, 10, 10, 5, 20, 20)

seed_characters()

# if __name__ == "__main__":
#   from server import app
#   connect_to_db(app)