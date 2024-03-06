from django.shortcuts import render
from rest_framework import generics, permissions, viewsets, status, filters
from rest_framework.views import APIView
from rest_framework.response import Response
from django.forms.models import model_to_dict


from accounts.serializers import SubjectSerializer, RoomSerializer, FacultySerializer, StudentSerializer, StaffSerializer, GetStudentSerializer, GetFacultySerializer, SchoolyearSerializer, SectionSerializer, SectionAddSerializer, ClassesAddSerializer, ClassesSerializer
from accounts.models import StudentProfile, FacultyProfile, StaffProfile
from .models import Subject, Room, SchoolYear, Section, Class
from accounts.permissions import IsFaculty, IsStudent, IsSubAdmin, IsSuperAdmin


class SubjectViewSet(viewsets.ModelViewSet):
    queryset = Subject.objects.all()
    permission_classes = [
        IsSuperAdmin
    ]
    serializer_class = SubjectSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['$code', '$description']

class RoomViewSet(viewsets.ModelViewSet):
    queryset = Room.objects.all()
    permission_classes = [
        IsSuperAdmin
    ]
    serializer_class = RoomSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['$code', '$description']

class StudentsViewSet(viewsets.ModelViewSet):
    queryset = StudentProfile.objects.all()
    permission_classes = [
        IsSuperAdmin
    ]
    serializer_class = StudentSerializer

class GetStudentsViewSet(viewsets.ModelViewSet):
    queryset = StudentProfile.objects.all()
    serializer_class = GetStudentSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['status', '$userprofile__first_name', '$userprofile__last_name', '=id']

class FacultyViewSet(viewsets.ModelViewSet):
    queryset = FacultyProfile.objects.all()
    permission_classes = [
        IsSuperAdmin
    ]
    serializer_class = FacultySerializer

class GetFacultyViewset(viewsets.ModelViewSet):
    queryset = FacultyProfile.objects.all()
    serializer_class = GetFacultySerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['position', '$userprofile__first_name', '$userprofile__last_name', '=id']


class StaffViewSet(viewsets.ModelViewSet):
    queryset = StaffProfile.objects.all()
    permission_classes = [
        IsSuperAdmin
    ]
    serializer_class = StaffSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['$userprofile__first_name', '$userprofile__last_name', '=role', '=id']

class SchoolYearViewset(viewsets.ModelViewSet):
    queryset = SchoolYear.objects.all()
    permission_classes = [
        IsSuperAdmin
    ]
    serializer_class = SchoolyearSerializer

class SectionViewset(viewsets.ModelViewSet):
    queryset = Section.objects.all()
    permission_classes = [
        IsSuperAdmin
    ]
    serializer_class = SectionSerializer

class SectionAddViewset(viewsets.ModelViewSet):
    queryset = Section.objects.all()
    permission_classes = [
        IsSuperAdmin
    ]
    serializer_class = SectionAddSerializer

class ClassesViewset(viewsets.ModelViewSet):
    queryset = Class.objects.all()
    permission_classes = [
        IsSuperAdmin
    ]
    serializer_class = ClassesSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['$teacher__userprofile__first_name', '$teacher__userprofile__last_name', '$teacher__userprofile__middle_name', '$teacher__id', '=section__gradelevel']

class ClassesAddViewset(viewsets.ModelViewSet):
    queryset = Class.objects.all()
    permission_classes = [
        IsSuperAdmin
    ]
    serializer_class = ClassesAddSerializer