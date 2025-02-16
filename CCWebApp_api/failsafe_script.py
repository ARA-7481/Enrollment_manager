import os
import django
from datetime import datetime, timedelta
import time

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'CCWebApp_api.settings')
django.setup()

last_count_1 = 0
last_count_2 = 0
last_count_3 = 0

from accounts.models import PlumbingProfile
key = 'dp6yAKsQAc'
device = PlumbingProfile.objects.get(pk=key)
device.flowspeedpulse1 = 0
device.flowspeedpulse2 = 0
device.flowspeedpulse3 = 0
device.save()

while True:
    if datetime.now().day == 1 and datetime.now().hour == 1 and  datetime.now().minute == 1 and datetime.now().second == 1:
        from accounts.models import PlumbingProfile
        key = 'dp6yAKsQAc'
        device = PlumbingProfile.objects.get(pk=key)
        device.billedvolume1_month = 0
        device.billedvolume2_month = 0
        device.billedvolume3_month = 0
        device.save()
    if datetime.now().second == 1 or datetime.now().second == 16 or datetime.now().second == 31 or datetime.now().second == 46:
        from accounts.models import PlumbingProfile
        key = 'dp6yAKsQAc'
        device = PlumbingProfile.objects.get(pk=key)
        volume_increase_1 = device.flowspeedpulse1 - last_count_1
        volume_increase_2 = device.flowspeedpulse2 - last_count_2
        volume_increase_3 = device.flowspeedpulse3 - last_count_3

        last_count_1 = device.flowspeedpulse1
        last_count_2 = device.flowspeedpulse2
        last_count_3 = device.flowspeedpulse3

        billed_volume_1 = device.billedvolume1 + volume_increase_1
        billed_volume_2 = device.billedvolume2 + volume_increase_2
        billed_volume_3 = device.billedvolume3 + volume_increase_3

        billed_volume_1_month = device.billedvolume1_month + volume_increase_1
        billed_volume_2_month = device.billedvolume2_month + volume_increase_2
        billed_volume_3_month = device.billedvolume3_month + volume_increase_3

        device.billedvolume1 = billed_volume_1
        device.billedvolume2 = billed_volume_2
        device.billedvolume3 = billed_volume_3

        device.billedvolume1_month = billed_volume_1_month
        device.billedvolume2_month = billed_volume_2_month
        device.billedvolume3_month = billed_volume_3_month

        print(volume_increase_1)
        print(volume_increase_2)
        print(volume_increase_3)
        
        flowspeed_1x = (volume_increase_1/450)*4
        flowspeed_1 = "{:.2f}".format(flowspeed_1x)
        flowspeed_2x = (volume_increase_2/450)*4
        flowspeed_2 = "{:.2f}".format(flowspeed_2x)
        flowspeed_3x = (volume_increase_3/450)*4
        flowspeed_3 = "{:.2f}".format(flowspeed_3x)

        device.flowspeed1 = flowspeed_1
        device.flowspeed2 = flowspeed_2
        device.flowspeed3 = flowspeed_3

        device.save()
        if volume_increase_1 < 5 and volume_increase_2 < 5 and volume_increase_3 < 5 and device.dcmotor == 1:
            while 1:
                from accounts.models import PlumbingProfile
                key = 'dp6yAKsQAc'
                device = PlumbingProfile.objects.get(pk=key)
                if device.trigger == 1:
                    print('Ball valve active! Waiting for ESP32 response...')
                elif device.trigger == 0:
                    time.sleep(0.5)
                    break
            from accounts.models import PlumbingProfile
            key = 'dp6yAKsQAc'
            device = PlumbingProfile.objects.get(pk=key)
            device.dcmotor = 0
            device.trigger = 1
            device.solenoid1 = 0
            device.solenoid2 = 0
            device.solenoid3 = 0
            device.ballvalve = 1
            device.save()
            print('motor fail safe activated')
        time.sleep(1)
    # print(datetime.now())
        
