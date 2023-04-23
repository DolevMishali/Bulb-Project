from flask import Flask, request, jsonify
from server.engine.bulbEngine import BulbEngine
from flask_cors import CORS
import uuid
import csv
import os

app = Flask(__name__)
CORS(app)
db_path = os.path.join(app.root_path, 'bulb.csv')
Bulb_engine = BulbEngine()
os.environ['FLASK_APP'] = 'bulbAPI.py'
bulb_route = '/bulb'

@app.route(bulb_route, methods=['GET'])
def get_bulb():
    bulb = Bulb_engine.get_bulb()
    return jsonify(bulb)

@app.route(bulb_route + '/discover', methods=['GET'])
def discover():
    res = Bulb_engine.discover()
    return jsonify({'message': res})

@app.route(bulb_route + '/props', methods=['GET'])
def get_capabilities():
    bulb = Bulb_engine.get_capabilities()
    return jsonify(bulb)

@app.route(bulb_route + '/weather_color', methods =['GET'])
def weather():
    Bulb_engine.weather_description()
    return jsonify({'message': 'The bulb on weather mode'})

@app.route(bulb_route + '/power', methods=['POST'])
def power():
    status = request.json['status']
    if status:
        Bulb_engine.bulb.turn_on()
    else:
        Bulb_engine.bulb.turn_off()
    return jsonify({'message': 'Bulb powered successfully!'})

@app.route(bulb_route, methods =['POST'])
def set_bulb():
    ip = request.json['ip']
    name = request.json['name']
    Bulb_engine.set_bulb(ip, name)
    return jsonify({'message': 'You have already set up your bulb!'})

@app.route(bulb_route + '/color_by_hex', methods =['POST'])
def set_color_by_hex():
    hex_code = request.json.get('color')
    if hex_code:
        Bulb_engine.set_rgb_hex(hex_code)
    return jsonify({'message': 'The bulb turned on in the selected color!'})

@app.route(bulb_route + '/color_by_rgb', methods =['POST'])
def set_rgb_values():
    red = request.json['red']
    green = request.json['green']
    blue = request.json['blue']
    if (red and green and blue) is not None:
        Bulb_engine.set_rgb_by_values(red, green, blue)
    return jsonify({'message': 'The bulb turned on in the selected color!'})

@app.route(bulb_route + '/brightness', methods =['POST'])
def set_brightness_by_value():
    brightness = request.json['value']
    if brightness is not None:
        Bulb_engine.set_brightness(brightness)
    return jsonify({'message': 'The bulb turned on in the selected color!'})

@app.route(bulb_route + '/timer', methods =['POST'])
def set_timer_by_sec_min():
    hr = request.json['hours']
    min = request.json['minutes']
    sec = request.json['seconds']
    mode = request.json['mode']
    if ( sec and min and hr ) is not None:
        Bulb_engine.set_timer(int(hr), int(min), int(sec),mode)
    return jsonify({'message': 'The bulb turned on with timer: '+ hr + 'hours and ' + min + 'minutes and ' + sec + 'seconds.'})

@app.route(bulb_route + '/temperature', methods =['POST'])
def set_temperature():
    temperature = request.json['temperature']
    if temperature is not None:
        Bulb_engine.set_color_temp(temperature)
    return jsonify({'message': 'The bulb on ' + temperature + 'kelvin'})

@app.route(bulb_route + '/sync_bulb_brightness_as_screen', methods =['POST'])
def sync_brightness():
    sync_status = request.json['status']
    if sync_status:
        Bulb_engine.sync_screen_brightness()
    return jsonify({'message': 'The bulb has been successfully synchronized'})

@app.route(bulb_route + '/alarm', methods =['POST'])
def alarm():
    alarm_time = request.json['time']
    Bulb_engine.set_alarm(alarm_time)
    return jsonify({'message': 'The bulb on alarm mode'})
