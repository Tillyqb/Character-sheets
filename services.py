from flask import Flask
from model import connect_to_db, Character
from server import app

def calc_all_stats(character):
  character.strength_mod = calc_stat_mod(character.strength)
  character.dex_mod = calc_stat_mod(character.dex)
  character.con_mod = calc_stat_mod(character.con)
  character.intelligence_mod = calc_stat_mod(character.intelligence)
  character.wis_mod = calc_stat_mod(character.wis)
  character.cha_mod = calc_stat_mod(character.cha)


## Calculate modifiers
def calc_stat_mod(base, inherant=0, enhance=0, misc=0):
  if stat_total < 4:
    stat_mod = -4
  elif stat_total < 6:
    stat_mod = -3
  elif stat_total < 8:
    stat_mod = -2
  elif stat_total < 10:
    stat_mod = -1
  elif stat_total < 12:
    stat_mod = 0
  elif stat_total < 14:
    stat_mod = 1
  elif stat_total < 16:
    stat_mod = 2
  elif stat_total < 18:
    stat_mod = 3
  elif stat_total < 20:
    stat_mod = 4
  elif stat_total < 22:
    stat_mod = 5
  else:
    stat_mod = 6
  return stat_mod

