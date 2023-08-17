from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.db.models import JSONField
from accounts.models import User
import random
import string

def random_code_generator(length=10):
    return ''.join(random.choices(string.ascii_letters + string.digits, k=length))


class Company(models.Model):
    u_id = models.CharField(max_length=10, primary_key=True, unique=True, default=random_code_generator, editable=False)
    name = models.CharField(max_length=200)
    registration_datetime = models.DateTimeField(auto_now_add=True)
    address_value1 = models.CharField(max_length=200)
    address_value2 = models.CharField(max_length=200)
    address_value3 = models.CharField(max_length=200)
    business_date = models.DateTimeField()
    contact_numbers = ArrayField(models.CharField(max_length=200))
    emails = ArrayField(models.EmailField(max_length=200, unique=True, blank=True))
    website = models.URLField(max_length=200, null=True)
    owners = ArrayField(models.CharField(max_length=200))
    #licenses = ArrayField(models.ForeignKey('Licenses', on_delete=models.SET_NULL, null=True, to_field='u_id'))

class Service(models.Model):
    AVAILABLE_TO = (
        ('Company','Company'),
        ('Freelancer','Freelancer'),
    )
    STATE = (
        ('Disabled','Disabled'),
        ('Enabled', 'Enabled'),
    )
    u_id = models.CharField(max_length=10, primary_key=True, unique=True, default=random_code_generator, editable=False)
    tag = models.CharField(max_length=200)
    available_to = models.CharField(max_length=20, null=True, choices=AVAILABLE_TO)
    state = models.CharField(max_length=20, null=True, choices=STATE)
    requirements_template = JSONField()
    verification_requirements = JSONField()
    attachments = models.CharField(max_length=200)
    added_by = models.CharField(max_length=200)
    last_maintained_date = models.DateTimeField()

class Licenses(models.Model):
    STATE = (
        ('Verified','Verified'),
        ('Pending', 'Pending'),
        ('Suspended', 'Suspended'),
    )
    u_id = models.CharField(max_length=10, primary_key=True, unique=True, default=random_code_generator, editable=False)
    service = models.ForeignKey(Service, on_delete=models.CASCADE, to_field='u_id')
    state = models.CharField(max_length=20, choices=STATE)
    license_info = JSONField()
    attachments = models.CharField(max_length=200)
    registration_datetime = models.DateTimeField(auto_now_add=True)
    modified_by = models.CharField(max_length=200)

class CompanyStaff(models.Model):
    ROLE = (
        ('Admin','Admin'),
        ('Project Manager', 'Project Manager'),
        ('Virtual Assistant', 'Virtual Assistant'),
        ('Assistant', 'Assistant')
    )
    EMPLOYMENT_STATUS = (
        ('Regular Employee', 'Regular Employee'),
        ('Hired Freelancer', 'Hired Freelancer'),
    )
    u_id = models.CharField(max_length=10, primary_key=True, unique=True, default=random_code_generator, editable=False)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    role = models.CharField(max_length=20, choices=ROLE)

class Project(models.Model):
    STATE = (
        ('Draft', 'Draft'),
        ('Preparation', 'Preparation'),
        ('On-going', 'On-going'),
        ('Paused', 'Paused'),
        ('Terminated', 'Terminated'),
        ('Closed', 'Closed'),
        ('Finished', 'Finished'),
    )
    u_id = models.CharField(max_length=10, primary_key=True, unique=True, default=random_code_generator, editable=False)
    title = models.CharField(max_length=200)
    normal_user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    company = models.ForeignKey(Company, on_delete=models.SET_NULL, null=True)
    details = JSONField()
    requirements = JSONField()
    private = models.BooleanField(default=True)
    state = models.CharField(max_length=20, choices=STATE)

class Collaboration(models.Model):
    STATE = (
        ('Draft', 'Draft'),
        ('Preparation', 'Preparation'),
        ('On-going', 'On-going'),
        ('Paused', 'Paused'),
        ('Terminated', 'Terminated'),
        ('Closed', 'Closed'),
        ('Finished', 'Finished'),
    )
    u_id = models.CharField(max_length=10, primary_key=True, unique=True, default=random_code_generator, editable=False)
    master_company = models.ForeignKey(Company, on_delete=models.SET_NULL, null=True, related_name='master1')
    master_user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='master2')
    slave_company = models.ForeignKey(Company, on_delete=models.SET_NULL, null=True, related_name='slave1')
    slave_freelancer = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='slave2')
    project = models.ForeignKey(Project, on_delete=models.SET_NULL, null=True)
    #services = ArrayField(models.ForeignKey(Service, on_delete=models.SET_NULL, to_field='tag'))
    #sub_collaborations = ArrayField(models.ForeignKey('self', on_delete=models.SET_NULL))
    datetime = models.DateTimeField(auto_now_add=True)
    state = models.CharField(max_length=20, choices=STATE)

