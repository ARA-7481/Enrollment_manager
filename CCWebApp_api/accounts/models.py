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
    

class StudentProfile(models.Model):
    GRADELEVEL = (
        ('Grade 7','Grade 7'),
        ('Grade 8', 'Grade 8'),
        ('Grade 9', 'Grade 9'),
        ('Grade 10', 'Grade 10'),
        ('Grade 11', 'Grade 11'),
        ('Grade 12', 'Grade 12')
    )

    STATUS = (
        ('For Evaluation', 'For Evaluation'),
        ('Evaluation In Progress', 'Evaluation In Progress'),
        ('Pending Payment', 'Pending Payment'),
        ('Enrolled', 'Enrolled'), 
    )

    id = models.CharField(primary_key=True, unique=True, default=student_code_generator, editable=False)
    description = models.CharField(max_length=500, null=True, blank=True)
    gradelevel = models.CharField(max_length=20, choices=GRADELEVEL, null=False, default='Grade 7')
    status = models.CharField(max_length=50, choices=STATUS, null=False, default= 'For Evaluation')
    userprofile = models.OneToOneField(User, on_delete=models.CASCADE, null=True, related_name='studentprofile')
    facebook_url = models.CharField(max_length=200, null=True)

    guardian_name = models.CharField(max_length=200, null=True, blank=True)
    guardian_mobile = models.CharField(max_length=200, null=True, blank=True)
    guardian_relationship = models.CharField(max_length=200, null=True, blank=True)

    father_name = models.CharField(max_length=200, null=True, blank=True)
    father_mobile = models.CharField(max_length=200, null=True, blank=True)

    mother_name = models.CharField(max_length=200, null=True, blank=True)
    mother_mobile = models.CharField(max_length=200, null=True, blank=True)

    elementaryschool = models.CharField(max_length=200, null=True, blank=True)
    elementarycompletiondate = models.DateField(null=True)
    elementaryaddress = models.CharField(max_length=200, null=True, blank=True)
    elementaryregion = models.CharField(max_length=200, null=True, blank=True)

    pept = models.BooleanField(blank=True, null=True)
    peptcompletion = models.DateField(null=True)
    petpclc = models.CharField(max_length=200, null=True, blank=True)

    ae = models.BooleanField(blank=True, null=True)
    aecompletion = models.DateField(null=True)

    clc = models.CharField(max_length=200, null=True, blank=True)
    clcaddress = models.CharField(max_length=200, null=True, blank=True)

    jhs = models.CharField(max_length=200, null=True, blank=True)
    jhsaddress = models.CharField(max_length=200, null=True, blank=True)
    jhscompletion = models.DateField(null=True)
    jhsregion = models.CharField(max_length=200, null=True, blank=True)
    jhsaverage = models.FloatField(null=True, blank=True)

    peptjhs = models.BooleanField(blank=True, null=True)
    peptcompletionjhs = models.DateField(null=True)
    petpclcjhs = models.CharField(max_length=200, null=True, blank=True)

    aejhs = models.BooleanField(blank=True, null=True)
    aecompletionjhs = models.DateField(null=True)

    clcjhs = models.CharField(max_length=200, null=True, blank=True)
    clcaddressjhs = models.CharField(max_length=200, null=True, blank=True)

    shs1 = models.CharField(max_length=200, null=True, blank=True)
    shs1address = models.CharField(max_length=200, null=True, blank=True)
    shs1track1 = models.CharField(max_length=200, null=True, blank=True)
    shs1strand1 = models.CharField(max_length=200, null=True, blank=True)
    shs1track2 = models.CharField(max_length=200, null=True, blank=True)
    shs1strand2 = models.CharField(max_length=200, null=True, blank=True)

    shs2 = models.CharField(max_length=200, null=True, blank=True)
    shs2address = models.CharField(max_length=200, null=True, blank=True)
    shs2track1 = models.CharField(max_length=200, null=True, blank=True)
    shs2strand1 = models.CharField(max_length=200, null=True, blank=True)
    shs2track2 = models.CharField(max_length=200, null=True, blank=True)
    shs2strand2 = models.CharField(max_length=200, null=True, blank=True)

    # track = models.ForeignKey('main.Track', on_delete=models.SET_NULL, null=True, blank=True)
    # strand = models.ForeignKey('main.Strand', on_delete=models.SET_NULL, null=True, blank=True)
    track = models.CharField(max_length=200, null=True, blank=True)
    strand = models.CharField(max_length=200, null=True, blank=True)
    specialization = models.CharField(max_length=200, null=True, blank=True)


class FacultyProfile(models.Model):
    POSITION = (
        ('Principal','Principal'),
        ('Assistant Principal', 'Assistant Principal'),
        ('Part-Time', 'Part-Time'),
        ('Teacher-1', 'Teacher-1'),
        ('Teacher-2', 'Teacher-2'),
        ('Teacher-3', 'Teacher-3'),
        ('Laboratory Attendant', 'Laboratory Attendant'),
        ('Unspecified', 'Unspecified')
        
    )
    id = models.CharField(primary_key=True, unique=True, default=student_code_generator, editable=False)
    position = models.CharField(max_length=50, choices=POSITION, null=False, default= 'Unspecified')
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


class DeviceProfile(models.Model):
    id = models.CharField(primary_key=True, unique=True, default=random_code_generator, editable=False)
    name = models.CharField(null=True, blank=True)
    triggercount = models.IntegerField(null=True, blank=True)
    hourcount = models.IntegerField(null=True, blank=True, default = 0)
    rainrate = models.FloatField(null=True, blank=True)