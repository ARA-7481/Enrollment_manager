from django.db import models
from django.contrib.auth.models import AbstractUser
import random
import string

def random_code_generator(length=10):
    return ''.join(random.choices(string.ascii_letters + string.digits, k=length))

class StudentProfile(models.Model):
    course = models.ForeignKey('main.Course', on_delete=models.SET_NULL, null=True)

class User(AbstractUser):
    STATE = (
        ('Verified','Verified'),
        ('Pending', 'Pending'),
        ('Not Verified', 'Not Verified'),
    )
    USERTYPE = (
        ('Admin','Admin'),
        ('Faculty', 'Faculty'),
        ('Student', 'Student'),
        ('Sub-admin', 'Sub-admin'),
    )
    id = models.CharField(max_length=10, primary_key=True, unique=True, default=random_code_generator, editable=False)
    username = models.CharField(max_length=200, null=True, unique=False)
    first_name = models.CharField(max_length=200, null=True)
    last_name = models.CharField(max_length=200, null=True)
    email = models.EmailField(blank=False, max_length=254, verbose_name='email address', unique=True)
    address_value = models.CharField(max_length=200, null=True)
    mobile_number = models.CharField(max_length=200, unique=True, null=True)
    suspended = models.BooleanField(default=False)
    state = models.CharField(max_length=20, choices=STATE, default='Pending')
    usertype = models.CharField(max_length=20, choices=USERTYPE, null=True)
    registration_datetime = models.DateTimeField(auto_now_add=True)
    studentprofile = models.OneToOneField(StudentProfile, null=True, on_delete=models.CASCADE)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'username']

    def __str__(self):
        return self.id
    


# class TeacherProfile(models.Model):
#     user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
#     position = models.CharField(max_length=50, default='not specified')
   