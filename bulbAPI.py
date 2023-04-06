from bulbEngine import BulbEngine
import flask

app = flask(__bulb__)
Bulb_engine = BulbEngine()

@app.route('/turn_on', method =['POST'])
def turn_on():
    Bulb_engine.turn_on()
    return 'bulb turned on!'