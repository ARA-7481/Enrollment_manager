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
    if datetime.now().second == 1 or datetime.now().second == 31:
        from accounts.models import DeviceProfile
        key = 'c5Y1An7aOd'
        device = DeviceProfile.objects.get(pk=key)
        waterlevel = device.waterlevelwarning
        if(waterlevel == 'yellow'):
            # send_sms(f'YELLOW WATER LEVEL! Threshold exceeded YELLOW Water Level', '+639306394598,+639706626010,+639276994613,+639155890375,+639957403473,+639616183465')
            time.sleep(600)
            device.waterlevelwarning = 'yellow (warning update pending...)'
        elif(waterlevel == 'orange'):
            # send_sms(f'ORANGE WATER LEVEL! Threshold exceeded ORANGE Water Level', '+639306394598,+639706626010,+639276994613,+639155890375,+639957403473,+639616183465')
            time.sleep(600)
            device.waterlevelwarning = 'orange (warning update pending...)'
        elif(waterlevel == 'red'):
            # send_sms(f'RED WATER LEVEL! Threshold exceeded RED Water Level', '+639306394598,+639706626010,+639276994613,+639155890375,+639957403473,+639616183465')
            time.sleep(600)
            device.waterlevelwarning = 'red (warning update pending...)'