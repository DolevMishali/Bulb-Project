from databaseWrapper import DatabaseWrapper
from yeelight import discover_bulbs
from yeelight import Bulb
import time

class BulbEngine: 
    
    def get_capabilities(self):
        if self.bulb is not None:
            capability = {}
            properties = self.bulb.get_capabilities()()
            for capability in capabilities:
                capability[capability] = capabilities[capability]
            return capa
        else:
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
        self.bulb_data = discover_bulbs()[0]
        self.db.set_bulb(self.bulb_data["ip"], self.bulb_data["capabilities"]["name"])

    def set_bulb(self, ip, name):
        self.db.set_bulb(ip, name)
        self.update_bulb(ip)
        
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
         
    def set_timer(self, minutes, seconds):
        if self.bulb is not None:
            self.turn_on()
            total_seconds = (minutes*60) + seconds
            time.sleep(total_seconds)
            self.turn_off()
            