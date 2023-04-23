from server.database.databaseWrapper import DatabaseWrapper
from yeelight import discover_bulbs
from yeelight import Bulb
from datetime import datetime

import screen_brightness_control as sbc
import time
import requests

class BulbEngine: 
    def get_capabilities(self):
        if self.bulb is not None:
            properties = self.bulb.get_capabilities()
            if properties is not None:
                return properties
            else:
                return None
        return None     
    
    def __init__(self):
        self.db = DatabaseWrapper("bulb.csv")
        self.bulb_data = self.db.get_bulb()
        if self.bulb_data is not None:
            self.update_bulb(self.bulb_data["ip"])
        else:
            self.bulb = None
            self.bulb_data = None
            self.discover()

    def discover(self):
        bulbs = discover_bulbs()
        if bulbs.__len__() > 0:
            self.bulb_data = bulbs[0]
            self.db.set_bulb(self.bulb_data["ip"], self.bulb_data["capabilities"]["name"])
            return 'Bulb Discovered on IP ' + self.bulb_data["ip"]
        else:
            return "Discover zero bulbs"

    def set_bulb(self, ip, name):
        self.db.set_bulb(ip, name)
        self.update_bulb(ip)
        self.bulb.set_name(name)
        
    def get_bulb(self):
        return self.db.get_bulb()
    
    def update_bulb(self, ip):
        self.bulb = Bulb(ip)
        self.bulb_data = self.bulb.get_capabilities()
    
    def turn_on(self):
        if self.bulb is not None:
            self.bulb.turn_on()
        
    def turn_off(self):
        if self.bulb is not None:
            self.bulb.turn_off()

    def set_brightness(self,brightness):
        if self.bulb is not None:
            self.bulb.set_brightness(brightness)

    def set_color_temp(self,temperature):
        if self.bulb is not None:
            self.bulb.set_color_temp(temperature)
 
    def set_rgb_hex(self, hex_code):
        if self.bulb is not None:
            # Remove the '#' symbol from the hex code string, if present
            if hex_code[0] == '#':
                hex_code = hex_code[1:]
            self.bulb.turn_on()
            # Convert the hex code string to RGB values
            red = int(hex_code[0:2], 16)
            green = int(hex_code[2:4], 16)
            blue = int(hex_code[4:6], 16)
            self.bulb.set_rgb(red, green, blue)
         
    def set_timer(self, hours, minutes, seconds,mode):
        if self.bulb is not None:
            if mode in ('on', 'On', 'ON'):
                total_seconds = (hours*3600) + (minutes*60) + seconds
                time.sleep(total_seconds)
                self.turn_on()
            else:
                total_seconds = (hours*3600) + (minutes*60) + seconds
                time.sleep(total_seconds)
                self.turn_off()
    
    def set_rgb_by_values(self, red, green, blue):
        if self.bulb is not None:
            self.turn_on()
            if ( red in range(0, 256) ) and ( green in range(0, 256) ) and ( blue in range(0, 256) ):
                self.bulb.set_rgb(red, green, blue)

    def sync_screen_brightness(self):
        while True:
            # get current brightness value
            current_brightness = sbc.get_brightness()
            self.bulb.set_brightness(current_brightness[0])
            time.sleep(0.5) # wait for half a second before checking again
    
    # def set_alarm(self, time):
    #         # Convert the time string to a datetime object
    #         alarm_time = datetime.strptime(time, "%H:%M:%S")

    #         # Get the current time
    #         now = datetime.now()

    #         # Calculate the number of seconds until the alarm time
    #         seconds_until_alarm = (alarm_time - now).total_seconds()

    #         # If the alarm time is in the past, add 24 hours to it
    #         if seconds_until_alarm < 0:
    #             seconds_until_alarm += 24 * 60 * 60
    #         self.bulb.turn_on()
   
    def weather_description(self):
        # Replace YOUR_API_KEY with your OpenWeatherMap API key
        API_KEY = 'f536fd35b2a85f1643723345b58b8208'
        # Replace CITY_NAME and COUNTRY_CODE with the name and ISO 3166 country code of the location you want to get the weather for
        url = f'http://api.openweathermap.org/data/2.5/weather?q=Pardes Hana-Karkur,IL&appid={API_KEY}&units=metric'

        # Send a GET request to the API and get the JSON response
        response = requests.get(url)
        data = response.json()

        # Extract the relevant weather information from the JSON response
        temperature = data['main']['temp']
        description = data['weather'][0]['description']
        
        if description == "clear sky":
                self.bulb.set_color_temp(5000)
        elif description == "few clouds" or description == "scattered clouds":
            self.bulb.set_color_temp(6000)
        elif description == "broken clouds" or description == "overcast clouds":
            self.bulb.set_color_temp(7000)
        elif description == "mist" or description == "smoke" or description == "haze" or description == "fog":
            self.bulb.set_color_temp(4000)
        elif description == "sand/ dust whirls" or description == "sand" or description == "dust" or description == "volcanic ash":
            self.bulb.set_color_temp(4500)
        elif description == "squalls" or description == "tornado":
            self.bulb.set_color_temp(2000)
        elif description == "light rain" or description == "moderate rain" or description == "freezing rain":
            self.bulb.set_rgb(135, 206, 250)
        elif description == "heavy intensity rain" or description == "very heavy rain" or description == "extreme rain":
            self.bulb.set_rgb(135, 206, 235)
        elif description == "light intensity shower rain" or description == "shower rain" or description == "heavy intensity shower rain" or description == "ragged shower rain":
            self.bulb.set_rgb(0, 191, 255)
        elif description == "light snow" or description == "snow" or description == "heavy snow" or description == "sleet" or description == "shower sleet" or description == "light rain and snow" or description == "rain and snow" or description == "light shower snow" or description == "shower snow" or description == "heavy shower snow":
            self.bulb.set_color_temp(6000)
        elif description == "thunderstorm with light rain" or description == "thunderstorm with rain" or description == "thunderstorm with heavy rain" or description == "light thunderstorm" or description == "thunderstorm" or description == "heavy thunderstorm" or description == "ragged thunderstorm" or description == "thunderstorm with light drizzle" or description == "thunderstorm with drizzle" or description == "thunderstorm with heavy drizzle":
            self.bulb.set_rgb(255, 0, 0)
        else:
            return None