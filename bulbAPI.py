from flask import Flask, request, jsonify
from bulbEngine import BulbEngine
import uuid
import csv
import os
# $env:FLASK_APP="bulbAPI.py"

app = Flask(__name__)
db_path = os.path.join(app.root_path, 'bulb.csv')
Bulb_engine = BulbEngine()

@app.route('/', methods=['GET'])
def get_welcome():
    
    return jsonify({'message': 'Welcome to my app'})

@app.route('/set_bulb', methods =['POST'])
def set_bulb():
    
    with open(db_path, mode='a',newline='') as file:
        position = file.tell()
        if position == 0:
            fieldnames=['ip', 'name']
            writer = csv.DictWriter(file, fieldnames=fieldnames)
            ip = request.json['ip']
            name = request.json['name']
            writer.writerow({'ip':ip, 'name':name})
            return jsonify({'message': 'Bulb setup successfully done!'}), Bulb_engine.set_bulb(ip, name)
        
    return jsonify({'message': 'You have already set up your bulb!'})

@app.route('/power/turn_on', methods = ['GET'])
def turn_on():
    bulb_ip = request.args.get('bulb_ip')
    bulb = Bulb(bulb_ip)
    bulb.turn_on()
    return jsonify({'message': 'The bulb turned on!'})
    
@app.route('/power/turn_off', methods = ['GET'])
def turn_off():
    bulb_ip = request.args.get('bulb_ip')
    bulb = Bulb(bulb_ip)
    bulb.turn_on()
    return jsonify({'message': 'The bulb turned off!'})