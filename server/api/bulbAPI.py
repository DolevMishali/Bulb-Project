from flask import Flask, request, jsonify
from server.engine.bulbEngine import BulbEngine
from flask_cors import CORS
import uuid
import csv
import os
# $env:FLASK_APP="bulbAPI.py"

app = Flask(__name__)
CORS(app)
db_path = os.path.join(app.root_path, 'bulb.csv')
Bulb_engine = BulbEngine()
os.environ['FLASK_APP'] = 'bulbAPI.py'

@app.route('/get_bulb', methods=['GET'])
def get_bulb():
    bulb = Bulb_engine.get_bulb()
    return jsonify(bulb)

@app.route('/power/turn_on', methods=['GET'])
def turn_on():
    Bulb_engine.bulb.turn_on()
    return jsonify({'message': 'Bulb turned on successfully!'})
    
@app.route('/power/turn_off', methods = ['GET'])
def turn_off():
    Bulb_engine.bulb.turn_off()
    return jsonify({'message': 'The bulb turned off!'})

@app.route('/set_bulb', methods =['POST'])
def set_bulb():
    ip = request.json['ip']
    name = request.json['name']
    Bulb_engine.set_bulb(ip, name)
    return jsonify({'message': 'You have already set up your bulb!'})

@app.route('/set_color_by_hex', methods =['POST'])
def set_color_by_hex():
    hex_code = request.json.get('color')
    if hex_code:
        Bulb_engine.set_rgb_hex(hex_code)
    return jsonify({'message': 'The bulb turned on in the selected color!'})

@app.route('/set_rgb_by_values', methods =['POST'])
def set_rgb_values():
    red = request.json['red']
    green = request.json['green']
    blue = request.json['blue']
    if (red and green and blue) is not None:
        Bulb_engine.set_rgb_by_values(red, green, blue)
    return jsonify({'message': 'The bulb turned on in the selected color!'})

@app.route('/set_brightness', methods =['POST'])
def set_brightness_by_value():
    brightness = request.json['value']
    if brightness is not None:
        Bulb_engine.set_brightness(brightness)
    return jsonify({'message': 'The bulb turned on in the selected color!'})

@app.route('/set_timer', methods =['POST'])
def set_timer_by_sec_min():
    sec = request.json['sec']
    min = request.json['min']
    if ( sec and min ) is not None:
        Bulb_engine.set_timer(minutes, seconds)
    return jsonify({'message': 'The bulb turned on with timer: ' + min + 'minutes and ' + sec + 'seconds.'})

@app.route('/set_temperature_by_kelvin', methods =['POST'])
def set_temperature():
    temperature = request.json['temperature']
    if temperature is not None:
        Bulb_engine.set_color_temp(temperature)
    return jsonify({'message': 'The bulb on ' + temperature + 'kelvin'})