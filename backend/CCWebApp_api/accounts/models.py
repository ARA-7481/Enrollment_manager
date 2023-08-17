from django.db import models
from django.contrib.auth.models import AbstractUser
import random
import string

def random_code_generator(length=10):
    return ''.join(random.choices(string.ascii_letters + string.digits, k=length))

class User(AbstractUser):
    STATE = (
        ('Verified','Verified'),
        ('Pending', 'Pending'),
        ('Not Verified', 'Not Verified'),
    )
    id = models.CharField(max_length=10, primary_key=True, unique=True, default=random_code_generator, editable=False)
    first_name = models.CharField(max_length=200, null=True)
    last_name = models.CharField(max_length=200, null=True)
    username = models.CharField(max_length=200, unique=True)
    address_value1 = models.CharField(max_length=200, null=True)
    address_value2 = models.CharField(max_length=200, null=True)
    address_value3 = models.CharField(max_length=200, null=True)
    #user_thumbnail = models.ImageField(upload_to='', null=True)
    mobile_number = models.CharField(max_length=200, unique=True, null=True)
    #useremail = models.EmailField(max_length=200, unique=True, blank=True)
    suspended = models.BooleanField(default=False)
    freelancer = models.BooleanField(default=False)
    state = models.CharField(max_length=20, choices=STATE)
    registration_datetime = models.DateTimeField(auto_now_add=True)


    


    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def __str__(self):
        return self.username