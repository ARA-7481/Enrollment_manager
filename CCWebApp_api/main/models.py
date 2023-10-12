from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.db.models import JSONField
from accounts.models import User, FacultyProfile, StudentProfile
import random
import string

def random_code_generator(length=10):
    return ''.join(random.choices(string.ascii_letters + string.digits, k=length))

class Department(models.Model):
    code = models.CharField(max_length=50, primary_key=True, null=False, unique=True)
    description = models.CharField(max_length=200)

    def __str__(self):
        return self.code
    
class Subject(models.Model):
    code = models.CharField(max_length=10, primary_key=True, null=False, unique=True)
    description = models.CharField(max_length=200)
    units = models.IntegerField(blank=False, default=0)
    prerequisite = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, related_name='prerequisites', blank=True)
    corequisite = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, related_name='corequisites', blank=True)
    first_sem = models.BooleanField(default=True)
    second_sem = models.BooleanField(default=True)
    lecture = models.FloatField(blank=False, default=0)
    lab = models.FloatField(blank=False, default=0)

    def __str__(self):
        return self.code

class Course(models.Model):
    code = models.CharField(max_length=10, primary_key=True, null=False, unique=True)
    description = models.CharField(max_length=200)
    subjects = models.ManyToManyField(Subject)
    department = models.ForeignKey(Department, on_delete=models.SET_NULL, null=True, related_name='related_course')

    def __str__(self):
        return self.code
    
class Room(models.Model):
    code = models.CharField(max_length=10, primary_key=True, null=False, unique=True)
    description = models.CharField(max_length=200)

    def __str__(self):
        return self.code    
    
class ScheduleInstance(models.Model):
    time_in = models.TimeField()
    time_out = models.TimeField()
    day = models.CharField(max_length=200, null=True)
    room = models.ForeignKey(Room, on_delete=models.SET_NULL, null=True)

class Classes(models.Model):
    CLASS_TYPE = (
        ('Face to Face' , 'Face to Face'),
        ('Virtual' , 'Virtual'),
        ('Hybrid' , 'Hybrid'),
    )
    code = models.CharField(max_length=20, primary_key=True, null=False, unique=True)
    description = models.CharField(max_length=200, null=True)
    course = models.ForeignKey(Course, on_delete=models.SET_NULL, null=True)
    yearlevel = models.CharField(max_length=20, null=True)
    type = models.CharField(max_length=20, choices=CLASS_TYPE, null=False, default= 'Face to Face')
    subject = models.ForeignKey(Subject, on_delete=models.SET_NULL, null=True)
    students = models.ManyToManyField(StudentProfile, related_name='student_related_class', blank=True)
    teacher = models.ForeignKey(FacultyProfile, on_delete=models.SET_NULL, null=True, related_name='teacher_related_class')
    schedule = models.ManyToManyField(ScheduleInstance, related_name='related_class', blank=True)
    startdate = models.DateField(null=True)
    enddate = models.DateField(null=True)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.code