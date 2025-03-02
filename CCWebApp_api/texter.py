import os
import django
import sys, requests
from urllib.parse import urlencode
from datetime import datetime, timedelta
import time
from pathlib import Path
import environ

env = environ.Env()
BASE_DIR = Path(__file__).resolve().parent
environ.Env.read_env(os.path.join(BASE_DIR, '.env'))

apikey = env('SEMAPHORE_API_KEY')
sendername = 'RAIN-METER'

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'CCWebApp_api.settings')
django.setup()

def send_sms(message, number):
    print('Sending Message...')
    params = (
        ('apikey', apikey),
		('message', message),
		('number', number)
    )
    path = 'https://semaphore.co/api/v4/priority?' + urlencode(params)
    time.sleep(1)
    response = requests.post(path)
    print(response.text)

# send_sms('Rain-Meter API Started!', '+639306394598,+639706626010,+639276994613,+639155890375,+639957403473,+639616183465')
while True:
    if datetime.now().minute == 1 or datetime.now().minute == 16 or datetime.now().minute == 31 or datetime.now().minute == 45:
        from accounts.models import DeviceProfile
        key = 'c5Y1An7aOd'
        device = DeviceProfile.objects.get(pk=key)
        rainrate = device.hourcount * 0.631356 * 4
        if(rainrate > 7.5 and rainrate <= 15):
            device.rainwarning = 'yellow'
            send_sms('YELLOW RAINFALL! Flooding is possible! Monitor the weather condition', '+639306394598,+639616183465')
        elif(rainrate > 15 and rainrate <= 30):
            device.rainwarning = 'orange'
            send_sms('ORANGE RAINFALL! Flooding is threatening! Prepare for Possible Evacuation', '+639306394598,+639616183465')
        elif(rainrate > 30):
            device.rainwarning = 'red'
            send_sms('RED RAINFALL! Serious Flooding in low lying areas. Please Evacuate', '+639306394598,+639616183465')
        else:
            device.rainwarning = 'none'
        device.hourcount = 0
        device.rainrate = rainrate
        device.save()
        time.sleep(65)