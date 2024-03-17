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

send_sms('Rain-Meter API Started!', '+639095169162,+639561491084,+639994363066,+639319217695,+639303021273,+639616183465,+639105034409')
while True:
    if datetime.now().minute == 1 or datetime.now().minute == 16 or datetime.now().minute == 31 or datetime.now().minute == 45:
        from accounts.models import DeviceProfile
        key = 'c5Y1An7aOd'
        device = DeviceProfile.objects.get(pk=key)
        rainrate = device.hourcount * 0.631356 * 4
        if(rainrate > 7.5 and rainrate <= 15):
            send_sms('YELLOW RAINFALL! Flooding is possible! Monitor the weather condition', '09095169162,09561491084,09994363066,09319217695,09303021273,09616183465')
        elif(rainrate > 15 and rainrate <= 30):
            send_sms('ORANGE RAINFALL! Flooding is threatening! Prepare for Possible Evacuation', '09095169162,09561491084,09994363066,09319217695,09303021273,09616183465')
        elif(rainrate > 30):
            send_sms('RED RAINFALL! Serious Flooding in low lying areas. Evacuation', '09095169162,09561491084,09994363066,09319217695,09303021273,09616183465')
        device.hourcount = 0
        device.rainrate = rainrate
        device.save()
        time.sleep(65)
    time.sleep(1)
    print(datetime.now())