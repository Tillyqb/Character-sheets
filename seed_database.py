import os
import json
from random import choice, randint
from flask import Flask

import crud
from model import *

if __name__ == "__main__":
  from server import create_app
  create_app()  

    