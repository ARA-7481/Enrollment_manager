from django.shortcuts import render
from rest_framework import generics, permissions, viewsets, status, filters
from rest_framework.views import APIView
from rest_framework.response import Response
from django.forms.models import model_to_dict


from accounts.serializers import DepartmentSerializer, CourseSerializer, SubjectSerializer, RoomSerializer, ClassesSerializer, ClassesListSerializer
from .models import Department, Course, Classes, Subject, Room, ScheduleInstance
from accounts.permissions import IsFaculty, IsStudent, IsSubAdmin, IsSuperAdmin

class DepartmentViewSet(viewsets.ModelViewSet):
    queryset = Department.objects.all()
    permission_classes = [
        IsSuperAdmin
    ]
    serializer_class = DepartmentSerializer

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    permission_classes = [
        IsSuperAdmin
    ]
    serializer_class = CourseSerializer

class SubjectViewSet(viewsets.ModelViewSet):
    queryset = Subject.objects.all()
    permission_classes = [
        IsSuperAdmin
    ]
    serializer_class = SubjectSerializer

class RoomViewSet(viewsets.ModelViewSet):
    queryset = Room.objects.all()
    permission_classes = [
        IsSuperAdmin
    ]
    serializer_class = RoomSerializer

class ClassesViewSet(viewsets.ModelViewSet):
    queryset = Classes.objects.all()
    permission_classes = [
        IsSuperAdmin
    ]
    serializer_class = ClassesSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['yearlevel', 'subject__code']

class ClassesListViewSet(viewsets.ModelViewSet):
    queryset = Classes.objects.all()
    permission_classes = [
        IsSuperAdmin
    ]
    serializer_class =ClassesListSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['yearlevel', 'subject__code', 'course__code', 'course__department__code', '$teacher__userprofile__first_name', '$teacher__userprofile__last_name', 'code']