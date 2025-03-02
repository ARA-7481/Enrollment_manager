from rest_framework import generics, permissions, viewsets, status
from rest_framework.response import Response
from django.shortcuts import render, get_object_or_404
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework_simplejwt.exceptions import InvalidToken, TokenError
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView
from .serializers import MyTokenObtainPairSerializer, RegisterSerializer, UserSerializer, StudentSerializer, FacultySerializer, StaffSerializer, PasswordChangeSerializer, DeviceProfileSerializer, ESP32ProfileSerializer, PlumbingProfileSerializer, EventsSerializer
from .permissions import IsFaculty, IsStudent, IsSubAdmin, IsSuperAdmin
from .models import User, StudentProfile, FacultyProfile, StaffProfile, DeviceProfile, ESP32Profile, PlumbingProfile, EventsList
from rest_framework import filters
import json
from django.http import JsonResponse
import tensorflow as tf
import numpy as np
from decimal import Decimal, ROUND_HALF_UP


from pathlib import Path
import os
import environ
from openai import OpenAI

env = environ.Env()
BASE_DIR = Path(__file__).resolve().parent.parent
environ.Env.read_env(os.path.join(BASE_DIR, '.env'))

client = OpenAI(
    api_key= env('OPENAI_KEY'),
)

# word_model = tf.keras.models.load_model('F:/final_model.h5', compile=False)

def correct_grammar(words):
    completion = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "user", "content": f"Correct the grammar of the following words.: {words}"}
    ],
    max_tokens=50,
    temperature=0.1,
    top_p=0.9
    )

    return(completion.choices[0].message.content)

class SuccessView(APIView):
    def get(self, request):
        return Response(status=200, data={
            "message": "Success",
        })
    
class UserViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class LogInView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        token = serializer.validated_data

        response = Response(status=200, data={
            "message": "Success",
            "token" : token['access'],
            "user": UserSerializer(serializer.user).data
        })

        response.set_cookie(
            key='refresh_token', 
            value=str(token['refresh']), 
            httponly=True, 
            secure=True, 
            samesite='strict'
        )
        return response
    
class LogOutView(APIView):
    def post(self, request, *args, **kwargs):
        refresh_token = request.COOKIES.get('refresh_token')
        token = RefreshToken(refresh_token)

        response = Response(status=status.HTTP_205_RESET_CONTENT)
        response.delete_cookie('refresh_token')
        return response


class CustomTokenRefreshView(TokenRefreshView):
    def post(self, request, *args, **kwargs):
        refresh_token = request.COOKIES.get('refresh_token')
        if not refresh_token:
            return Response({'error': 'Invalid refresh token'})

        try:
            token = RefreshToken(refresh_token)
            access_token = str(token.access_token)
            return Response({'access': access_token})
        except TokenError:
            return Response({'error': 'Invalid refresh token'})


class RegisterView(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token_serializer = MyTokenObtainPairSerializer(data={
            "email": user.email,
            "password": request.data["password"]
        })
        token_serializer.is_valid(raise_exception=True)
        token = token_serializer.validated_data
        return Response(status=200,data={
            "message": "Success",
            "ID": user.id,
            "token": token
        })
    
    def patch(self, request, *args, **kwargs):
        user = self.request.user
        serializer = PasswordChangeSerializer(data=request.data)

        if serializer.is_valid():
            if not user.check_password(serializer.data.get("old_password")):
                return Response({"old_password": ["Wrong password."]}, status=400)
            user.set_password(serializer.data.get("new_password"))
            user.save()
            return Response(status=200, data={
                "message": "Password updated successfully",
            })
        return Response(serializer.errors, status=400)



#for rainmeter
class ReceiveRainSignal(generics.GenericAPIView):
    def post(self, request):
        data = request.data
        device_id = (data['id'])
        print(data)
        if device_id:
            try:
                device_profile = DeviceProfile.objects.get(id=device_id)
            except DeviceProfile.DoesNotExist:
                return Response(status=404, data={"message": "DeviceProfile not found"})
            
            device_profile.hourcount = (device_profile.hourcount or 0) + 1
            device_profile.save()
            return Response(status=200, data={"message": "Sensor Reading Validated!!",})
            print()
        else:
            return Response(status=400, data={"message": "Invalid data, 'id' field is missing"})
        
class ReceiveFloodSignal(generics.GenericAPIView):
    def post(self, request):
        data = request.data
        device_id = (data['id'])
        print(data)
        if device_id:
            try:
                device_profile = DeviceProfile.objects.get(id=device_id)
            except DeviceProfile.DoesNotExist:
                return Response(status=404, data={"message": "DeviceProfile not found"})
            
            device_profile.waterlevelwarning = data['reading']
            device_profile.save()
            print(device_profile.waterlevelwarning)
            return Response(status=200, data={"message": "Sensor Reading Validated!!",})
        else:
            return Response(status=400, data={"message": "Invalid data, 'id' field is missing"})
        

# class ReceiveHandReadingsRight(generics.GenericAPIView):
#     def post(self, request):
#         data = request.data
#         device_id = data.get('id') 
#         print("DEVICE ID:") 
#         print(device_id)
#         if device_id:
#             try:
#                 device_profile = DeviceProfile.objects.get(id=device_id)
#                 print(device_profile)
#             except DeviceProfile.DoesNotExist:
#                 return Response(status=404, data={"message": "DeviceProfile not found"})
#             readings = data.get('reading', [])
#             file_path = 'F:/close.json'
#             if not isinstance(readings, list):
#                 return Response(status=400, data={"message": "Invalid 'reading' data format"})
#             with open(file_path, 'r') as json_file:
#                 existing_data = json.load(json_file)
#             existing_data.append(readings)
#             with open(file_path, 'w') as json_file:
#                 json.dump(existing_data, json_file, indent=4)
#             return Response(status=200, data={"message": "Sensor Reading Validated!!",
#                                               "output": "Received"})  
#         else:
#             return Response(status=400, data={"message": "Invalid data, 'id' field is missing"})

class ReceiveHandReadingsLeft(generics.GenericAPIView):
    def post(self, request):
        data = request.data
        device_id = data.get('id') 
        print("DEVICE ID:") 
        print(device_id)
        if device_id:
            try:
                device_profile = DeviceProfile.objects.get(id=device_id)
                print(device_profile)
            except DeviceProfile.DoesNotExist:
                return Response(status=404, data={"message": "DeviceProfile not found"})

            readings = data.get('reading', [])
            print(readings)
            file_path = 'F:/z_behind.json'
            if not isinstance(readings, list):
                return Response(status=400, data={"message": "Invalid 'reading' data format"})

            with open(file_path, 'r') as json_file:
                existing_data = json.load(json_file)

            existing_data.append(readings)
            with open(file_path, 'w') as json_file:
                json.dump(existing_data, json_file, indent=4)
            return Response(status=200, data={"message": "Sensor Reading Validated!!"})
            
        else:
            return Response(status=400, data={"message": "Invalid data, 'id' field is missing"})

class ReceiveHandReadingsRight(generics.GenericAPIView):
    def post(self, request):
        data = request.data
        device_id = data.get('id') 
        print("DEVICE ID:") 
        print(device_id)
        if device_id:
            try:
                device_profile = DeviceProfile.objects.get(id=device_id)
                print(device_profile)
            except DeviceProfile.DoesNotExist:
                return Response(status=404, data={"message": "DeviceProfile not found"})
            readings = data.get('reading', [])
            if not isinstance(readings, list):
                return Response(status=400, data={"message": "Invalid 'reading' data format"})
            reshaped_data = tf.reshape(readings, (1, 100, 11, 1))
            outputm = word_model.predict(reshaped_data)
            rounded = tf.round(outputm)
            normal_output = rounded.numpy()
            normal_output_list = normal_output.tolist()
            final_output = normal_output_list[0]
            print(final_output)
            words_map = {0: "i",
                         1: "communicate",
                         2: "use",
                         3: "gloves",
                         4: "close",
                        }
            for i in range (0, len(final_output)):
                if(final_output[i] == 1):
                    val = i
                    # if val == 8:
                    #     device_profile.mode = "sentence_construct"
                    #     device_profile.text = " "
                    #     device_profile.save()
                    #     output = "open"
                    if val == 4:
                        if device_profile.text == " ":
                            device_profile.mode = "play_tts"
                            output = "close"
                            device_profile.save()
                        else:
                            device_profile.mode = "play_tts"
                            if len(device_profile.text) < 12:
                                output = device_profile.text
                                device_profile.text = " "
                                device_profile.save()
                            else:
                                output = correct_grammar(device_profile.text)
                                output = str(output)
                                device_profile.text = " "
                                device_profile.save()
                            print(output)
                    else:
                        word = words_map.get(val)
                        current_phrase = device_profile.text
                        device_profile.text = f"{current_phrase} {word}"
                        device_profile.save()
                        output = word
                    break
            print(val)
            return Response(status=200, data={"message": "Sensor Reading Validated!!",
                                              "output": output})
        else:
            return Response(status=400, data={"message": "Invalid data, 'id' field is missing"})

# class ReceiveHandReadingsRight(generics.GenericAPIView):
#     def post(self, request):
#         data = request.data
#         device_id = data.get('id') 
#         print("DEVICE ID:") 
#         print(device_id)
#         if device_id:
#             try:
#                 device_profile = DeviceProfile.objects.get(id=device_id)
#                 print(device_profile)
#             except DeviceProfile.DoesNotExist:
#                 return Response(status=404, data={"message": "DeviceProfile not found"})
#             readings = data.get('reading', [])
#             if not isinstance(readings, list):
#                 return Response(status=400, data={"message": "Invalid 'reading' data format"})
#             reshaped_data = tf.reshape(readings, (1, 100, 11, 1))
#             outputm = word_model.predict(reshaped_data)
#             rounded = tf.round(outputm)
#             normal_output = rounded.numpy()
#             normal_output_list = normal_output.tolist()
#             final_output = normal_output_list[0]
#             print(final_output)
#             words_map = {0: "i",
#                          1: "communicate",
#                          2: "use",
#                          3: "gloves",
#                          4: "close",
#                         }
#             for i in range (0, len(final_output)):
#                 if(final_output[i] == 1):
#                     val = i
#                     # if val == 8:
#                     #     device_profile.mode = "sentence_construct"
#                     #     device_profile.text = " "
#                     #     device_profile.save()
#                     #     output = "open"
#                     if val == 4:
#                         if device_profile.text == " ":
#                             device_profile.mode = "play_tts"
#                             output = "close"
#                             device_profile.save()
#                         else:
#                             device_profile.mode = "play_tts"
#                             if len(device_profile.text) < 12:
#                                 output = device_profile.text
#                                 device_profile.text = " "
#                                 device_profile.save()
#                             else:
#                                 output = correct_grammar(device_profile.text)
#                                 output = str(output)
#                                 device_profile.text = " "
#                                 device_profile.save()
#                             print(output)
#                     else:
#                         word = words_map.get(val)
#                         current_phrase = device_profile.text
#                         # device_profile.text = f"{current_phrase} {word}"
#                         # device_profile.save()
#                         output = current_phrase
#                     break
#             print(val)
#             return Response(status=200, data={"message": "Sensor Reading Validated!!",
#                                               "output": output})
#         else:
#             return Response(status=400, data={"message": "Invalid data, 'id' field is missing"})


class PlumbingTrigger(generics.GenericAPIView):
    def post(self, request):
        data = request.data
        device_id = data.get('id') 
        print("DEVICE ID:") 
        print(device_id)
        if device_id:
            try:
                device_profile = PlumbingProfile.objects.get(id=device_id)
                print(device_profile)
            except PlumbingProfile.DoesNotExist:
                return Response(status=404, data={"message": "DeviceProfile not found"})

            return Response(status=200, data={"message": "Device Validated!!",
                                              "trigger": device_profile.trigger,
                                              "ballvalve": device_profile.ballvalve,
                                              "solenoid1": device_profile.solenoid1,
                                              "solenoid2": device_profile.solenoid2,
                                              "solenoid3": device_profile.solenoid3,
                                              "dcmotor": device_profile.dcmotor,
                                              })
            
        else:
            return Response(status=400, data={"message": "Invalid data, 'id' field is missing"})

class PlumbingTriggerEnd(generics.GenericAPIView):
    def post(self, request):
        data = request.data
        device_id = data.get('id') 
        print("DEVICE ID:") 
        print(device_id)
        if device_id:
            try:
                device_profile = PlumbingProfile.objects.get(id=device_id)
                print(device_profile)
            except PlumbingProfile.DoesNotExist:
                return Response(status=404, data={"message": "DeviceProfile not found"})
            device_profile.trigger = 0
            device_profile.save()
            return Response(status=200, data={"message": "Trigger Successfully Disabled!!"})            
        else:
            return Response(status=400, data={"message": "Invalid data, 'id' field is missing"})

class PlumbingUpdateReadings(generics.GenericAPIView):
    def post(self, request):    
        data = request.data
        device_id = data.get('id') 
        if device_id:
            try:
                device_profile = PlumbingProfile.objects.get(id=device_id)
                device_profile.pressureanalog = data.get('pressure')
                device_profile.flowspeedpulse1 = data.get('flowspeed_pulse1')
                device_profile.flowspeedpulse2 = data.get('flowspeed_pulse2')
                device_profile.flowspeedpulse3 = data.get('flowspeed_pulse3')
                device_profile.ultrasonic = data.get('ultrasonic')
                device_profile.save()
                return Response(status=200, data={"message": "Values Successfully Recieved!!"})
            except PlumbingProfile.DoesNotExist:
                return Response(status=404, data={"message": "DeviceProfile not found"})
        else:
            return Response(status=400, data={"message": "Invalid data, 'id' field is missing"})

class PlumbingProfileView(viewsets.ModelViewSet):
    queryset = PlumbingProfile.objects.all()
    serializer_class = PlumbingProfileSerializer

class CryTrigger(generics.GenericAPIView):
    def post(self, request):
        data = request.data
        device_id = (data['id'])
        print(data)
        if device_id:
            try:
                device_profile = DeviceProfile.objects.get(id=device_id)
            except DeviceProfile.DoesNotExist:
                return Response(status=404, data={"message": "DeviceProfile not found"})
            
            device_profile.img = "https://ccwebappbucket.s3.ap-southeast-1.amazonaws.com/uploads/baby_crying.png"
            device_profile.triggercount = 1
            device_profile.save()
            return Response(status=200, data={"message": "Audio Reading Validated!!",})
        else:
            return Response(status=400, data={"message": "Invalid data, 'id' field is missing"})

class HungerTrigger(generics.GenericAPIView):
    def post(self, request):
        data = request.data
        device_id = (data['id'])
        print(data)
        if device_id:
            try:
                device_profile = DeviceProfile.objects.get(id=device_id)
            except DeviceProfile.DoesNotExist:
                return Response(status=404, data={"message": "DeviceProfile not found"})
            
            device_profile.img = "https://ccwebappbucket.s3.ap-southeast-1.amazonaws.com/uploads/feeding_time.png"
            device_profile.triggercount = 2
            device_profile.save()
            return Response(status=200, data={"message": "Audio Reading Validated For Hunger!!",})
        else:
            return Response(status=400, data={"message": "Invalid data, 'id' field is missing"})

class DeviceProfileView(viewsets.ModelViewSet):
    queryset = DeviceProfile.objects.all()
    serializer_class = DeviceProfileSerializer

class ESP32ProfileView(viewsets.ModelViewSet):
    queryset = ESP32Profile.objects.all()
    serializer_class = ESP32ProfileSerializer

class ESP32Trigger(generics.GenericAPIView):
    def post(self, request):
        data = request.data
        device_id = (data['id'])
        ph_tower_one = Decimal(data.get('ph_tower_one', 0.0)).quantize(Decimal('0.00'), rounding=ROUND_HALF_UP)
        ph_tower_two = Decimal(data.get('ph_tower_two', 0.0)).quantize(Decimal('0.00'), rounding=ROUND_HALF_UP)
        status_tower_one = (data['status_tower_one'])
        status_tower_two = (data['status_tower_two'])
        temperature = Decimal(data.get('temperature', 0.0)).quantize(Decimal('0.00'), rounding=ROUND_HALF_UP)
        
        if device_id:
            try:
                device_profile = ESP32Profile.objects.get(id=device_id)
            except ESP32Profile.DoesNotExist:
                return Response(status=404, data={"message": "DeviceProfile not found"})
            
            device_profile.ph_tower_one = ph_tower_one
            device_profile.ph_tower_two = ph_tower_two
            device_profile.status_tower_one = status_tower_one
            device_profile.status_tower_two = status_tower_two
            device_profile.temperature = temperature
            device_profile.save()
            return Response(status=200, data={"message": "Readings Validated!!",})
        else:
            return Response(status=400, data={"message": "Invalid data, 'id' field is missing"})

#events
class EventsView(viewsets.ModelViewSet):
    queryset = EventsList.objects.all()
    serializer_class = EventsSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['date']