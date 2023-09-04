from rest_framework import generics, permissions, viewsets, status
from rest_framework.response import Response
from django.shortcuts import render
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework_simplejwt.exceptions import InvalidToken, TokenError
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView
from .serializers import MyTokenObtainPairSerializer, RegisterSerializer, UserSerializer

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

class CustomTokenRefreshView(TokenRefreshView):
    def post(self, request, *args, **kwargs):
        refresh_token = request.COOKIES.get('refresh_token')
        print(refresh_token)
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