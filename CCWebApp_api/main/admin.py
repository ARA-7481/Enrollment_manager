from django.contrib import admin

from .models import Subject, SchoolYear, Section, Class
from accounts.models import User, StudentProfile, FacultyProfile, StaffProfile

admin.site.register(User)
admin.site.register(StudentProfile)
admin.site.register(FacultyProfile)
admin.site.register(StaffProfile)

admin.site.register(Subject)
admin.site.register(Section)
admin.site.register(SchoolYear)
admin.site.register(Class)
