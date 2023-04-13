import csv
import os

class DatabaseWrapper:
    
    def __init__(self, filename):
        self.filename = filename

    def get_bulb(self):
        with open(self.filename, mode='r') as file:
            reader = csv.DictReader(file)
            for row in reader:
                res = {}
                res["ip"] = row['ip']
                res["name"] = row['name']
                return res
            return None
    
    def set_bulb(self, ip, name):
        with open(self.filename, mode='w', newline='') as file:
            fieldnames = ['ip', 'name']
            writer = csv.DictWriter(file, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerow({'ip': ip, 'name': name})
            return 'Bulb setup successfully done!'

    def delete_bulb():
        self.bulb.set_color_temp(temperature)
            