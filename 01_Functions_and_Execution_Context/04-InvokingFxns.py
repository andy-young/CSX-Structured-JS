# Examine the code given to you. Try to make the calls variable equal to
# 'JerryKramerGeorgeElaine' with only a single invocation to the function jerry.

calls = ""


def jerry(str):
    str += "Jerry"
    return george(str)


def george(str):
   str += "Kramer"
   return kramer(str)


def elaine(str):
   str += "Elaine"
   return str


def kramer(str):
   str += "George"
   return elaine(str)

# should return: 'JerryKramerGeorgeElaine'

calls = jerry(calls)

print(calls)