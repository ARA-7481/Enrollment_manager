from django.shortcuts import render
from rest_framework import generics, permissions, viewsets, status
from rest_framework.views import APIView

from accounts.serializers import DepartmentSerializer
from .models import Department
from accounts.permissions import IsFaculty, IsStudent, IsSubAdmin, IsSuperAdmin

class DepartmentViewSet(viewsets.ModelViewSet):
    queryset = Department.objects.all()
    permission_classes = [
        IsSuperAdmin
    ]
    serializer_class = DepartmentSerializer

    