"""
this is a script that calls the 'superhero API' and returns random data
well rn it only does nightwing, but i will randomize it 
"""

import random
import urllib.request, json


n = random.randint(0,732) #api has 731 characters
#print(n)

url = "https://superheroapi.com/api.php/3621675444603381/%s" %n #randomly gets a characters url to use
#print(url)

response = urllib.request.urlopen(url)
data = json.loads(response.read())
name = data["name"]
real_name = data["biography"]["full-name"]
print(name, "true identity is ", real_name)
