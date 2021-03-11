from random import randint

def die_roll(num_dice, num_sides):
  results = []
  for die in range(num_dice):
    die_val = randint(1, num_sides)
    results.append(die_val)
  output = [results]
  total = 0
  for i in range(len(results)):
    total += results[i]
  output.append(total)
  return output