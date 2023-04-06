
import csv
import os

class DatabaseWrapper:
    def __init__(self, filename):
        self.filename = filename

    def get_bulb(self):
        #TODO - if file not found - create it
        with open(self.filename, mode='r') as file:
           first_line = file.readline().strip()
           
        if first_line is '':
            return None 
        else:
            return first_line
        
    def set_bulb(self, ip, name):
        with open(self.filename, mode='r') as file:
            lines = file.readlines()

        # Replace the first line with a new line
        lines[0] = ip + ',' + name

        with open(self.filename, 'w') as file:
            file.writelines(lines)
        return first_line
    
    def delete_bulb():
        self.bulb.set_color_temp(temperature)
            
