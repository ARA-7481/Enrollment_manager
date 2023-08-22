from rest_framework import generics, permissions, viewsets, status
from rest_framework.response import Response
from django.shortcuts import render
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .serializers import MyTokenObtainPairSerializer, RegisterSerializer

class LogInView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token_serializer = MyTokenObtainPairSerializer(data={
            "username": user.username,
            "password": request.data["password"]
        })
        token_serializer.is_valid(raise_exception=True)
        token = token_serializer.validated_data
        return Response(status=200,data={
            "message": "Success",
            "token": token
        })