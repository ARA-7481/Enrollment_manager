from django.contrib import admin

from .models import Subject, Course, Classes, Department, Room, ScheduleInstance, Activities, Pointers, ActivityEntry
from accounts.models import User, StudentProfile, FacultyProfile, StaffProfile

admin.site.register(User)
admin.site.register(StudentProfile)
admin.site.register(FacultyProfile)
admin.site.register(StaffProfile)
admin.site.register(Subject)
admin.site.register(Course)
admin.site.register(Classes)
admin.site.register(Department)
admin.site.register(Room)
admin.site.register(ScheduleInstance)
admin.site.register(Activities)
admin.site.register(Pointers)
admin.site.register(ActivityEntry)
