from yeelight import Bulb
import random, sys

args = {}

def argsParser():
    numOfArgs = sys.argv.__len__()
    for i in range(1, numOfArgs, 2):
        flag = sys.argv[i]
        flag_value = sys.argv[i+1]
        args[flag] = flag_value
        
argsParser()

bulb = Bulb(args["--ip"])
bulb.set_rgb(int(args["-r"]), int(args["-g"]), int(args["-b"]))