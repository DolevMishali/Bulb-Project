from yeelight import discover_bulbs
from yeelight import Bulb



class BulbEngine:
    def __init__(self):
        bulb = db.get_bulb()
        if bulb is not None:
            self.bulb = Bulb(bulb.ip)
            self.bulb_data = self.bulb.get_capabilities()

    def discover(self):
        self.bulb_data = discover_bulbs()[0]
        self.bulb = Bulb(self.bulb_data.ip)
        
    def set_brightness(brightness):
        if self.bulb is not None:
            self.bulb.set_brightness(brightness)
    
    def set_color_temp(temperature):
        if self.bulb is not None:
            self.bulb.set_color_temp(temperature)
            
    # def set_color(rgb):
    #     if self.bulb is not None:
    #         self.bulb.set_color_temp(temperature)
            
    # def set_color(hex):
    #     if self.bulb is not None:
    #         self.bulb.set_color_temp(temperature)
