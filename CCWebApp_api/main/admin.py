from django.contrib import admin

from .models import Subject, SchoolYear, Section, Class, GradeSheet
from accounts.models import User, StudentProfile, FacultyProfile, StaffProfile, DeviceProfile, ESP32Profile, PlumbingProfile, Events, EventsList

admin.site.site_title = "BISU-Events Management"
admin.site.site_header = "BISU-Events Management"
admin.site.index_title = "Database Tables"

admin.site.register(User)
admin.site.register(EventsList)
# admin.site.register(StudentProfile)
admin.site.register(FacultyProfile)
admin.site.register(StaffProfile)

# admin.site.register(Subject)
# admin.site.register(Section)
# admin.site.register(SchoolYear)
# admin.site.register(Class)
# admin.site.register(GradeSheet)

# admin.site.register(DeviceProfile)
# admin.site.register(ESP32Profile)
admin.site.register(PlumbingProfile)