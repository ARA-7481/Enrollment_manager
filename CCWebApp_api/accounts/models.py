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
    

class StudentProfile(models.Model):
    GRADELEVEL = (
        ('Grade 7','Grade 7'),
        ('Grade 8', 'Grade 8'),
        ('Grade 9', 'Grade 9'),
        ('Grade 10', 'Grade 10'),
        ('Grade 11', 'Grade 11'),
        ('Grade 12', 'Grade 12'),
        ('Graduated', 'Graduated'),
    )

    STATUS = (
        ('Failed', 'Failed'),
        ('For Evaluation', 'For Evaluation'),
        ('Evaluation In Progress', 'Evaluation In Progress'),
        ('Pending Payment', 'Pending Payment'),
        ('Enrolled', 'Enrolled'), 
    )

    id = models.CharField(primary_key=True, unique=True, default=student_code_generator, editable=False)
    description = models.CharField(max_length=500, null=True, blank=True)
    gradelevel = models.CharField(max_length=20, choices=GRADELEVEL, null=False, default='Grade 7')
    status = models.CharField(max_length=50, choices=STATUS, null=False, default= 'Enrolled')
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
    img = models.CharField(null=True, blank=True)
    triggercount = models.IntegerField(null=True, blank=True)
    hourcount = models.IntegerField(null=True, blank=True, default = 0)
    rainrate = models.FloatField(null=True, blank=True)
    waterlevel = models.FloatField(null=True, blank=True)
    waterlevelwarning = models.CharField(null=True, blank=True)
    rainwarning = models.CharField(null=True, blank=True)
    text = models.CharField(max_length=500, null=True, blank=True)
    mode = models.CharField(max_length=50, null=True, blank=True)

class ESP32Profile(models.Model):
    id = models.CharField(primary_key=True, unique=True, default=random_code_generator, editable=False)
    name = models.CharField(null=True, blank=True)
    ph_tower_one = models.FloatField(null=True, blank=True)
    ph_tower_two = models.FloatField(null=True, blank=True)
    status_tower_one = models.CharField(null=True, blank=True)
    status_tower_two = models.CharField(null=True, blank=True)
    temperature = models.FloatField(null=True, blank=True)

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

class ScheduleStaffProfile(models.Model):
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

class Events(models.Model):
    CATEGORY = (     
        ('Holiday', 'Holiday'),
        ('Allow-Conflict','Allow-Conflict'),
        ('No-Conflict', 'No-Conflict'),
        ('Special-Event', 'Special-Event'),
        ('Not-Specified', 'Not-Specified'),
        
    )
    id = models.CharField(primary_key=True, unique=True, default=random_code_generator, editable=False)
    date = models.DateTimeField(null=True)
    created_on = models.DateTimeField(auto_now_add=True, null=True)
    description = models.CharField(max_length=500, null=True, blank=True)
    avatar = models.FileField(upload_to='uploads/', default='avatar.webp')
    link = models.CharField(max_length=500, null=True, blank=True)
    category = models.CharField(max_length=50, choices=CATEGORY, null=False, default= 'Not-Specified')
    approval = models.CharField(max_length=50, null=True, blank=True, default="No" )
    time_start = models.DateTimeField(null=True)
    time_end = models.DateTimeField(null=True)

class EventsList(models.Model):
    CATEGORY = (     
        ('Holiday', 'Holiday'),
        ('Special-Event', 'Special-Event'),
        ('Academic-Event', 'Academinc-Event'),
        ('Not-Specified', 'Not-Specified'),
        
    )
    CONFLICT = (
        ('Allow-Conflict','Allow-Conflict'),
        ('No-Conflict', 'No-Conflict'),
    )
    TYPE = (
        ('Face-To-Face','Face-To-Face'),
        ('Online', 'Online'),
        ('Hybrid', 'Hybrid'),
        ('Holiday', 'Holiday'),
    )

    id = models.CharField(primary_key=True, unique=True, default=random_code_generator, editable=False)
    date = models.DateField(null=True, blank=True)
    created_on = models.DateTimeField(auto_now_add=True, null=True)
    description = models.CharField(max_length=1000, null=True, blank=True)
    link = models.CharField(max_length=500, null=True, blank=True)
    category = models.CharField(max_length=50, choices=CATEGORY, null=False, default= 'Not-Specified')
    conflict = models.CharField(max_length=50, choices=CONFLICT, null=False, default= 'Allow-Conflict')
    approval = models.CharField(max_length=50, null=True, blank=True, default="No" )
    time_start = models.TimeField(null=True)
    time_end = models.TimeField(null=True)
    title = models.CharField(max_length=500, null=True, blank=True, unique=True)
    participants = models.ManyToManyField(FacultyProfile, related_name='faculty_related_event', blank=True)
    location = models.CharField(max_length=500, null=True, blank=True)
    created_by = models.CharField(max_length=500, null=True, blank=True)
    participants_additional = models.CharField(max_length=500, null=True, blank=True)
    type = models.CharField(max_length=50, choices=TYPE, null=False, default= 'Face-To-Face')
    meetlink = models.CharField(max_length=500, null=True, blank=True)