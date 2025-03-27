from django.db import models
from django.contrib.auth.models import AbstractUser
from datetime import datetime
from django.core.exceptions import ValidationError
import random
import string

def random_code_generator(length=10):
    return ''.join(random.choices(string.ascii_letters + string.digits, k=length))
def random_code_generator_fourdigit(length=4):
    return ''.join(random.choices(string.ascii_letters + string.digits, k=length))

class User(AbstractUser):
    USERTYPE = (
        ('Admin','Admin'),
        ('Faculty', 'Faculty'),
        ('Student', 'Student'),
        ('Sub-admin', 'Sub-admin'),
    )

    GENDER = (
        ('Male', 'Male'),
        ('Female', 'Female'),
    )

    id = models.CharField(max_length=10, primary_key=True, unique=True, default=random_code_generator, editable=False)
    username = models.CharField(max_length=200, null=True, unique=False, blank=True)
    first_name = models.CharField(max_length=200, null=True)
    middle_name = models.CharField(max_length=200, null=True)
    last_name = models.CharField(max_length=200, null=True)
    extension_name = models.CharField(max_length=200, null=True)
    email = models.EmailField(blank=False, max_length=254, verbose_name='email address', unique=True)
    mobile_number = models.CharField(max_length=200, unique=True, null=True)
    usertype = models.CharField(max_length=20, choices=USERTYPE, null=True)
    registration_datetime = models.DateTimeField(auto_now_add=True)
    avatar = models.FileField(upload_to='uploads/', default='avatar.webp')

    solenoid_address = models.CharField(max_length=200, null=True)

    gender = models.CharField(max_length=20, choices=GENDER, null=False, default='Unspecified')
    birthdate = models.DateField(null=True)
    birthplace = models.CharField(max_length=200, null=True, blank=True)
    nationality = models.CharField(max_length=200, null=True, blank=True)
    address_value1 = models.CharField(max_length=200, null=True)
    address_value2 = models.CharField(max_length=200, null=True)
    address_value3 = models.CharField(max_length=200, null=True)
    addressketch = models.FileField(upload_to='uploads/', null=True, blank=True)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'username']

    def __str__(self):
        return self.email


class PlumbingProfile(models.Model):
    id = models.CharField(primary_key=True, unique=True, default=random_code_generator, editable=False)
    name = models.CharField(null=True, blank=True)
    trigger = models.IntegerField(null=True, blank=True)
    ballvalve = models.IntegerField(null=True, blank=True)
    solenoid1 = models.IntegerField(null=True, blank=True)
    solenoid2 = models.IntegerField(null=True, blank=True)
    solenoid3 = models.IntegerField(null=True, blank=True)
    dcmotor = models.IntegerField(null=True, blank=True)
    pressureanalog = models.IntegerField(null=True, blank=True)
    flowspeedpulse1 = models.IntegerField(null=True, blank=True)
    flowspeedpulse2 = models.IntegerField(null=True, blank=True)
    flowspeedpulse3 = models.IntegerField(null=True, blank=True)
    ultrasonic = models.IntegerField(null=True, blank=True)
    flowspeed1 = models.FloatField(null=True, blank=True)
    flowspeed2 = models.FloatField(null=True, blank=True)
    flowspeed3 = models.FloatField(null=True, blank=True)
    billedvolume1 = models.IntegerField(null=True, blank=True)
    billedvolume2 = models.IntegerField(null=True, blank=True)
    billedvolume3 = models.IntegerField(null=True, blank=True)
    billedvolume1_month = models.IntegerField(null=True, blank=True)
    billedvolume2_month = models.IntegerField(null=True, blank=True)
    billedvolume3_month = models.IntegerField(null=True, blank=True)
    conversionrate = models.FloatField(null=True, blank=True)