from rest_framework import generics, permissions, viewsets, status
from rest_framework.response import Response
from django.shortcuts import render, get_object_or_404
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework_simplejwt.exceptions import InvalidToken, TokenError
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView
from .serializers import MyTokenObtainPairSerializer, RegisterSerializer, UserSerializer, StudentSerializer, FacultySerializer, StaffSerializer, TeacherDataSerializer, StudentDataSerializer
from .permissions import IsFaculty, IsStudent, IsSubAdmin, IsSuperAdmin
from .models import User, StudentProfile, FacultyProfile, StaffProfile
from rest_framework import filters
import json
from django.http import JsonResponse
from openai import OpenAI

import base64
import requests

def encode_image(image_path):
  with open(image_path, "rb") as image_file:
    return base64.b64encode(image_file.read()).decode('utf-8')

class CheckerView(APIView):
    def post(self, request, *args, **kwargs):
        data = json.loads(request.body)
        referencefile = data.get('referencefile')
        entryfile = data.get('entryfile')

        print("Reference File:", referencefile)
        print("Entry File:", entryfile)

        return JsonResponse({'status':'success'}, status=200)

class SuccessView(APIView):
    def get(self, request):
        return Response(status=200, data={
            "message": "Success",
        })
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
            "token": token
        })
    
class StudentsViewSet(viewsets.ModelViewSet):
    queryset = StudentProfile.objects.all()
    permission_classes = [
        IsSuperAdmin
    ]
    serializer_class = StudentSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['yearlevel', 'status', 'course__department__code', 'course__code', '$userprofile__first_name', '$userprofile__last_name', '=id']

class FacultyViewSet(viewsets.ModelViewSet):
    queryset = FacultyProfile.objects.all()
    permission_classes = [
        IsSuperAdmin
    ]
    serializer_class = FacultySerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['position', 'courses__department__code', 'courses__code', '$userprofile__first_name', '$userprofile__last_name', '=id']

class StaffViewSet(viewsets.ModelViewSet):
    queryset = StaffProfile.objects.all()
    permission_classes = [
        IsSuperAdmin
    ]
    serializer_class = StaffSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['$userprofile__first_name', '$userprofile__last_name', '=role', '=id']


class TeacherViewSet(viewsets.ModelViewSet):
    queryset = FacultyProfile.objects.all()
    permission_classes = [
        IsFaculty
    ]
    serializer_class = TeacherDataSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['=userprofile__email']

class StudentDataViewSet(viewsets.ModelViewSet):
    queryset = StudentProfile.objects.all()
    permission_classes = [
        IsStudent
    ]
    serializer_class = StudentDataSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['=userprofile__email']