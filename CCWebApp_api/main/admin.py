from django.contrib import admin

from .models import Subject, Course, Classes, Department
from accounts.models import User, StudentProfile

admin.site.register(User)
admin.site.register(StudentProfile)
admin.site.register(Subject)
admin.site.register(Course)
admin.site.register(Classes)
admin.site.register(Department)


