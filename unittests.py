import unittest
from model import db, connect_to_db
from server import app
from crud import create_user, create_race, create_campaign, create_language, create_character
import os



class DatabaseTests(unittest.TestCase):
  
  @classmethod
  def setUpClass(cls):
    connect_to_db(app, True, 'postgresql:///testdb')
    os.system('dropdb testdb')
    os.system('createdb testdb')
    db.create_all()
    create_race("Dog")
    create_language("Common")

  @classmethod
  def tearDownClass(cls):
    pass

  def test_add_user(self):
    create_user('Tills', 'hash', 'matilda.basner@gmail.com', 'Matilda', 'Basner')
    actual = create_user('Temmi', 'passord', 'temmi@foo.bar', 'Trash', 'Panda')
    expected = 'Temmi'
    self.assertEqual(actual, expected)

  def test_create_race(self):
    actual = create_race('Goblin')
    expected = 'Goblin'
    self.assertEqual(actual, expected)

  def test_create_campaign(self):
    actual = create_campaign("Cryos Super Wolves", "Temmi")
    expected = "Cryos Super Wolves"
    self.assertEqual(actual, expected)

  def test_create_language(self):
    actual = create_language("Gobbeldygook")
    expected = "Gobbeldygook"
    self.assertEqual(actual, expected)

  def test_create_character(self):
    character_name = "Canem Dolor"
    race = "Dog"
    language = "Common"
    campaign_name = "Cryos Super Wolves"
    owner = "Temmi"
    strength = 6
    dex = 20
    con = 14
    intel = 10
    wis = 10
    cha = 20
    speed = 40
    actual = create_character(character_name, race, language, campaign_name, owner, strength, dex, con, intel, wis, cha, speed)
    expected = "Canem Dolor"
    self.assertEqual(actual, expected)

  


if __name__ == "__main__":
  unittest.main()
