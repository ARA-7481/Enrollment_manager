from rest_framework import generics, permissions, viewsets, status
from rest_framework.response import Response
from django.shortcuts import render, get_object_or_404
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework_simplejwt.exceptions import InvalidToken, TokenError
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView
from .serializers import MyTokenObtainPairSerializer, RegisterSerializer, UserSerializer, StudentSerializer, FacultySerializer, StaffSerializer, PasswordChangeSerializer, DeviceProfileSerializer
from .permissions import IsFaculty, IsStudent, IsSubAdmin, IsSuperAdmin
from .models import User, StudentProfile, FacultyProfile, StaffProfile, DeviceProfile
from rest_framework import filters
import json
from django.http import JsonResponse

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
            
            device_profile.waterlevel = data['reading']
            device_profile.save()
            return Response(status=200, data={"message": "Sensor Reading Validated!!",})
            print()
        else:
            return Response(status=400, data={"message": "Invalid data, 'id' field is missing"})

class DeviceProfileView(viewsets.ModelViewSet):
    queryset = DeviceProfile.objects.all()
    serializer_class = DeviceProfileSerializer