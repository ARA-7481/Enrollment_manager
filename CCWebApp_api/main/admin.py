from django.contrib import admin

from .models import Company, Service, Licenses, CompanyStaff, Project, Collaboration
from accounts.models import User

# admin.site.register(Company)
# admin.site.register(Service)
# admin.site.register(Licenses)
# admin.site.register(CompanyStaff)
# admin.site.register(Project)
# admin.site.register(Collaboration)
admin.site.register(User)

