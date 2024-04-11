from django.contrib import admin

from .models import Subject, SchoolYear, Section, Class, GradeSheet
from accounts.models import User, StudentProfile, FacultyProfile, StaffProfile, DeviceProfile

admin.site.site_title = "CCNNHS School Management"
admin.site.site_header = "CCNNHS School Management Development User Interface"
admin.site.index_title = "Database Tables"

admin.site.register(User)
admin.site.register(StudentProfile)
admin.site.register(FacultyProfile)
admin.site.register(StaffProfile)

admin.site.register(Subject)
admin.site.register(Section)
admin.site.register(SchoolYear)
admin.site.register(Class)
admin.site.register(GradeSheet)

# admin.site.register(DeviceProfile)
