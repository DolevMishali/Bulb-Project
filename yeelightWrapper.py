from yeelight import discover_bulbs
from yeelight import Bulb

import sounddevice as sd
import numpy as np

import random, sys

bulb_data = discover_bulbs()                                    # The data of the bulb
bulb_ip_address=bulb_data[0]["ip"]                              # The ip of the bulb
bulb_support_methods = bulb_data[0]["capabilities"]["support"]  # The support methods that the bulb is support
bulb_name = bulb_data[0]["capabilities"]["name"]                # The name of the bulb
bulb = Bulb(bulb_ip_address)                                    # Set the ip into variable

cap = bulb.get_capabilities()

# Check microphone effect
def audio_callback(indata, frames, time, status):
    amplitude = np.max(indata)
    brightness = int(amplitude * 100)
    random_numberR = random.randint(1, 255)
    random_numberG = random.randint(1, 255)
    random_numberB = random.randint(1, 255)
    bulb.set_rgb(random_numberR, random_numberG, random_numberB)
    bulb.set_brightness(brightness)

with sd.InputStream(callback=audio_callback):
    sd.sleep(60000)
# Check microphone effect


#def sleep():
#    for i in range(1, 10000):
#        print()
#                
#for i in range(1, 10):
#    random_numberR = random.randint(1, 255)
#    random_numberG = random.randint(1, 255)
#    random_numberB = random.randint(1, 255)
#    bulb.set_rgb(random_numberR, random_numberG, random_numberB)
#    sleep() 