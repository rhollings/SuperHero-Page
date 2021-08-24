"""
this is a script that calls the 'superhero API' and returns random data
well rn it only does nightwing, but i will randomize it 

maybe add an example json??
"""

import random
import urllib.request, json


n = random.randint(0,732) #api has 731 characters
#print(n)

url = "https://superheroapi.com/api.php/3621675444603381/%s" %n #randomly gets a characters url to use
#print(url)

# will need 'if' statements for data that doesn't exist

response = urllib.request.urlopen(url)
data = json.loads(response.read())
name = data["name"]
real_name = data["biography"]["full-name"]
birth = data["biography"]["place-of-birth"]
first_app = data["biography"]["first-appearance"]
comic = data["biography"]["publisher"]
alignment = data["biography"]["alignment"]


#intro
print("Did you know that... ???")
print("=========================")

#problem with printing identities 
if name == real_name:
    print(name, "has no secret identity.")
elif name == " ":
    print(name, "has no secret identity.")
else:
    print(name, "true identity is", real_name)

#first seen 
if first_app == "-":
    pass
else:
    print(name, "was first seen in", first_app)

#comic w/ aligment 
if comic == 'Marvel Comics':
    if alignment == 'good':
        print(name, "is a hero in the Marvel Universe")
    else:
        print(name, "practices villiany in the DC Universe")
elif comic == 'DC Comics':
    if alignment == 'good':
        print(name, "is a hero in the DC Universe")
    else:
        print(name, "practices villiany in the DC Universe")
else:
    print(name, "is part of", comic)

""""
if birth == "-":
    print(name, "has no recorded birthplace")
else:
    print(name, 'was born in', birth)
"""