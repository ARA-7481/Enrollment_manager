from django.db import models
from django.contrib.auth.models import AbstractUser
from datetime import datetime
import random
import string

def random_code_generator(length=10):
    return ''.join(random.choices(string.ascii_letters + string.digits, k=length))
def random_code_generator_fourdigit(length=4):
    return ''.join(random.choices(string.ascii_letters + string.digits, k=length))

def student_code_generator():
    current_date = datetime.now().strftime('%Y')
    student_count = StudentProfile.objects.count()
    student_count_str = str(student_count).zfill(6)
    in_between = "-"
    student_unique_code = random_code_generator_fourdigit()
    return f'{current_date}{student_count_str}{in_between}{student_unique_code}'

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
    username = models.CharField(max_length=200, null=True, unique=False, blank=True)
    first_name = models.CharField(max_length=200, null=True)
    last_name = models.CharField(max_length=200, null=True)
    email = models.EmailField(blank=False, max_length=254, verbose_name='email address', unique=True)
    address_value = models.CharField(max_length=200, null=True)
    mobile_number = models.CharField(max_length=200, unique=True, null=True)
    suspended = models.BooleanField(default=False)
    state = models.CharField(max_length=20, choices=STATE, default='Pending')
    usertype = models.CharField(max_length=20, choices=USERTYPE, null=True)
    registration_datetime = models.DateTimeField(auto_now_add=True)
    avatar = models.FileField(upload_to='uploads/', default='avatar.webp')
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'username']

    def __str__(self):
        return self.email
    

class StudentProfile(models.Model):
    YEARLEVEL = (
        ('1st','1st'),
        ('2nd', '2nd'),
        ('3rd', '3rd'),
        ('4th', '4th'),
        ('5th', '5th'),
        ('Irregular', 'Irregular')
    )

    STATUS = (
        ('Draft','Draft'),
        ('For Evaluation', 'For Evaluation'),
        ('Evaluation In Progress', 'Evaluation In Progress'),
        ('Evaluation Complete', 'Evaluation Complete'),
        ('Pending Payment', 'Pending Payment'),
        ('Payment Received', 'Payment Received'),
        ('Enrolled', 'Enrolled'),
        ('Verification Failed','Verification Failed'),
        
        
    )
    id = models.CharField(primary_key=True, unique=True, default=student_code_generator, editable=False)
    course = models.ForeignKey('main.Course', on_delete=models.SET_NULL, null=True)
    yearlevel = models.CharField(max_length=20, choices=YEARLEVEL, null=False, default='1st')
    status = models.CharField(max_length=50, choices=STATUS, null=False, default= 'Draft')
    userprofile = models.OneToOneField(User, on_delete=models.CASCADE, null=True, related_name='studentprofile')

class FacultyProfile(models.Model):
    POSITION = (
        ('Dean','Dean'),
        ('Assistant Dean', 'Assistant Dean'),
        ('Professor', 'Professor'),
        ('Part-Time', 'Part-Time'),
        ('Teacher', 'Teacher'),
        ('Laboratory Attendant', 'Laboratory Attendant'),
        
    )
    id = models.CharField(primary_key=True, unique=True, default=student_code_generator, editable=False)
    courses = models.ManyToManyField('main.Course')
    position = models.CharField(max_length=50, choices=POSITION, null=False, default= 'Teacher')
    userprofile = models.OneToOneField(User, on_delete=models.CASCADE, null=True, related_name='facultyprofile')

    def __str__(self):
        return self.userprofile.id

class StaffProfile(models.Model):
    ROLE = (     
        ('Admin', 'Admin'),
        ('Staff','Staff'),
        ('Not Specified', 'Not Specified'),
        ('Registrar', 'Registrar'),
        ('Guidance', 'Guidance'),
        
    )
    id = models.CharField(primary_key=True, unique=True, default=student_code_generator, editable=False)
    role = models.CharField(max_length=50, choices=ROLE, null=False, default= 'Not Specified')
    userprofile = models.OneToOneField(User, on_delete=models.CASCADE, null=True)