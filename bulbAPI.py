from flask import Flask, request, jsonify
from bulbEngine import BulbEngine
from databaseWrapper import DatabaseWrapper
import uuid
import csv
import os
# $env:FLASK_APP="bulbAPI.py"

app = Flask(__name__)
db_path = os.path.join(app.root_path, 'bulb.csv')
Bulb_engine = BulbEngine()
os.environ['FLASK_APP'] = 'bulbAPI.py'

@app.route('/get_bulb', methods=['GET'])
def get_bulb():
    bulb = Bulb_engine.get_bulb()
    return jsonify(bulb)

@app.route('/set_bulb', methods =['POST'])
def set_bulb():
    ip = request.json['ip']
    name = request.json['name']
    Bulb_engine.set_bulb(ip, name)
    return jsonify({'message': 'You have already set up your bulb!'})

@app.route('/set_rgb_hex', methods =['POST'])
def set_color():
    hex_code = request.json.get('color')
    if hex_code:
        Bulb_engine.set_rgb_hex(hex_code)
    return jsonify({'message': 'The bulb turned on in the selected color!'})

@app.route('/power/turn_on', methods=['GET'])
def turn_on():
    Bulb_engine.bulb.turn_on()
    return jsonify({'message': 'Bulb turned on successfully!'})
    
@app.route('/power/turn_off', methods = ['GET'])
def turn_off():
    Bulb_engine.bulb.turn_off()
    return jsonify({'message': 'The bulb turned off!'})
