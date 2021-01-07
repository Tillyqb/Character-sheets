import os
import json
from random import choice, randint
from flask import Flask

import crud
from model import *

app = Flask(__name__)
connect_to_db(app, False, 'postgresql:///charactersheets')
os.system('dropdb charactersheets')
os.system('createdb charactersheets')
db.create_all()

    