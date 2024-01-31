from django.shortcuts import render
from rest_framework import generics, permissions, viewsets, status, filters
from rest_framework.views import APIView
from rest_framework.response import Response
from django.forms.models import model_to_dict


from accounts.serializers import DepartmentSerializer, CourseSerializer, SubjectSerializer, RoomSerializer, ClassesSerializer, ClassesListSerializer, CourseSerializerPost, PointerSerializer, ActivitiesSerializer, ActivityEntrySerializer, AddActivitiesSerializer, NormalClassesSerializer
from .models import Department, Course, Classes, Subject, Room, ScheduleInstance, Pointers, Activities, ActivityEntry
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
    filter_backends = [filters.SearchFilter]
    search_fields = ['$code', '$description', '=department__code']

class CourseViewSetPost(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    permission_classes = [
        IsSuperAdmin
    ]
    serializer_class = CourseSerializerPost

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

class NormalClassesViewSet(viewsets.ModelViewSet):
    queryset = Classes.objects.all()
    permission_classes = [
        IsSuperAdmin
    ]
    serializer_class = NormalClassesSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['yearlevel', 'subject__code']

class ClassesViewSet(viewsets.ModelViewSet):
    queryset = Classes.objects.all()
    permission_classes = [
        IsSuperAdmin
    ]
    serializer_class = ClassesSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['yearlevel', 'subject__code']

class ClassesViewSetForFaculty(viewsets.ModelViewSet):
    queryset = Classes.objects.all()
    permission_classes = [
        IsFaculty
    ]
    serializer_class = ClassesSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['yearlevel', 'subject__code']

class ClassesListViewSet(viewsets.ModelViewSet):
    queryset = Classes.objects.all()
    permission_classes = [
        IsSuperAdmin
    ]
    serializer_class = ClassesListSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['yearlevel', 'subject__code', 'course__code', 'course__department__code', '$teacher__userprofile__first_name', '$teacher__userprofile__last_name', 'code']

class PointersViewSet(viewsets.ModelViewSet):
    queryset = Pointers.objects.all()
    serializer_class = PointerSerializer

class ActivitiesViewSet(viewsets.ModelViewSet):
    queryset = Activities.objects.all()
    serializer_class = ActivitiesSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['classroom__code']

class AddActivitiesViewSet(viewsets.ModelViewSet):
    queryset = Activities.objects.all()
    serializer_class = AddActivitiesSerializer

class ActivityEntryViewSet(viewsets.ModelViewSet):
    queryset = ActivityEntry.objects.all()
    serializer_class = ActivityEntrySerializer