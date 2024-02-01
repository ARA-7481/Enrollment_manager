from django.contrib import admin

from .models import Subject, Room, ScheduleInstance
from accounts.models import User, StudentProfile, FacultyProfile, StaffProfile

admin.site.register(User)
admin.site.register(StudentProfile)
admin.site.register(FacultyProfile)
admin.site.register(StaffProfile)
admin.site.register(Subject)
admin.site.register(Room)
admin.site.register(ScheduleInstance)
