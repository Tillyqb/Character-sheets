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

def character_level(xp, prgression_speed=2):
  if progression_speed == 1:
    xp_threshholds = [0, 3000, 7500, 14000, 23000, 35000, 53000, 77000, 115000, 160000, 235000, 330000, 475000, 665000, 995000, 1350000, 1900000, 2700000, 3850000, 5350000]
  if progression_speed == 2:
   xp_threshholds = [0, 2000, 5000, 9000, 15000, 23000, 35000, 51000, 75000, 105000, 220000, 315000, 445000, 635000, 890000, 1300000, 1800000, 2550000, 3600000]
  if prgression_speed == 3:
    xp_threshholds = [0. 1300 . 3300. 6000. 10000. 15000. 23000. 34000. 50000. 71000. 105000. 145000. 210000. 295000. 425000. 600000. 850000. 1200000. 1700000. 2400000]
   for i in range(len(xp_threshholds)):
     if xp > xp_threshholds[i]:
       level = i
       return level