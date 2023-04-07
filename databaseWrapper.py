
import csv
import os

class DatabaseWrapper:
    def __init__(self, filename):
        self.filename = filename

    def get_bulb(self):
        with open(self.filename, mode='r') as file:
            reader = csv.DictReader(file)
            for row in reader:
                return {'ip': row['ip'], 'name': row['name']}
            return None
    
    def set_bulb(self, ip, name):
        with open(self.filename, mode='w', newline='') as file:
            fieldnames = ['ip', 'name']
            writer = csv.DictWriter(file, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerow({'ip': ip, 'name': name})

    def delete_bulb():
        self.bulb.set_color_temp(temperature)
            