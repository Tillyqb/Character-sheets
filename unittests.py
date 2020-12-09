import unittest
from model import db, connect_to_db
from server import app
from crud import create_user
import os



class DatabaseTests(unittest.TestCase):
  
  @classmethod
  def setUpClass(cls):
    connect_to_db(app, True, 'postgresql:///testdb')
    os.system('dropdb testdb')
    os.system('createdb testdb')
    db.create_all()

  @classmethod
  def tearDownClass(cls):
    pass

  def test_add_user(self):
    actual = create_user('Temmi', 'passord', 'temmi@foo.bar', 'Trash Panda')
    expected = 'Temmi'
    self.asserEqual(actual, expected)

if __name__ == "__main__":
  unittest.main()
