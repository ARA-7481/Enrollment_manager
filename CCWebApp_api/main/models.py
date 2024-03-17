from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.db.models import JSONField
from accounts.models import User, FacultyProfile, StudentProfile
import random
import string

def random_code_generator(length=10):
    return ''.join(random.choices(string.ascii_letters + string.digits, k=length))

class Subject(models.Model):
    code = models.CharField(max_length=10, primary_key=True, null=False, unique=True)
    description = models.CharField(max_length=200)
    prerequisite = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, related_name='postrequisite', blank=True)
    corequisite = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, related_name='related_corequisite', blank=True)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.code
    
class Room(models.Model):
    ROOM_TYPE = (
        ('Lecture' , 'Lecture'),
        ('Laboratory' , 'Laboratory'),
        ('Unspecified' , 'Unspecified'),
    )
    code = models.CharField(max_length=10, primary_key=True, null=False, unique=True)
    description = models.CharField(max_length=200)
    type = models.CharField(max_length=20, choices=ROOM_TYPE, null=False, default= 'Unspecified')
    capacity = models.IntegerField(null=True)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.code    
    
class ScheduleInstance(models.Model):
    time_in = models.TimeField()
    time_out = models.TimeField()
    day = models.CharField(max_length=200, null=True)
    room = models.ForeignKey(Room, on_delete=models.SET_NULL, null=True)

class SchoolYear(models.Model):
    code = models.CharField(max_length=200, primary_key=True, null=False, unique=True)
    description = models.CharField(max_length=200, null=True)
    principal = models.ForeignKey(FacultyProfile, on_delete=models.SET_NULL, null=True, blank=True, related_name='principal_related_schoolyear')
    assistantprincipal = models.ForeignKey(FacultyProfile, on_delete=models.SET_NULL, null=True, blank=True, related_name='asstprincipal_related_schoolyear')

class Track(models.Model):
    code = models.CharField(max_length=200, primary_key=True, null=False, unique=True)
    description = models.CharField(max_length=200, null=True)

    def __str__(self):
        return self.code

class Strand(models.Model):
    code = models.CharField(max_length=200, primary_key=True, null=False, unique=True)
    description = models.CharField(max_length=200, null=True)

class Section(models.Model):
    GRADELEVEL = (
        ('Grade 7','Grade 7'),
        ('Grade 8', 'Grade 8'),
        ('Grade 9', 'Grade 9'),
        ('Grade 10', 'Grade 10'),
        ('Grade 11', 'Grade 11'),
        ('Grade 12', 'Grade 12')
    )
    code = models.CharField(max_length=200, primary_key=True, null=False, unique=True)
    schoolyear = models.ForeignKey(SchoolYear, on_delete=models.SET_NULL, null=True, blank=True)
    adviser = models.ForeignKey(FacultyProfile, on_delete=models.SET_NULL, null=True, blank=True, related_name='teacher_related_section')
    students = models.ManyToManyField(StudentProfile, related_name='student_related_section', blank=True)
    gradelevel = models.CharField(max_length=20, choices=GRADELEVEL, null=False, default='Grade 7')
    track = models.CharField(null=True, blank=True)
    bg_gradient = models.CharField(max_length=500, null=True, blank=True, default='https://ccwebappbucket.s3.ap-southeast-1.amazonaws.com/uploads/bg3.png')


class Class(models.Model):
    code = models.CharField(max_length=200, primary_key=True, null=False, unique=True)
    description = models.CharField(max_length=200, null=True)
    
    section = models.ForeignKey(Section, on_delete=models.SET_NULL, null=True, blank=True)
    subject = models.ForeignKey(Subject, on_delete=models.SET_NULL, null=True, blank=True)

    teacher = models.ForeignKey(FacultyProfile, on_delete=models.SET_NULL, null=True, blank=True, related_name='teacher_related_class')
    span = models.IntegerField(null=True, blank=True)
    strand = models.CharField(null=True, blank=True)
    bg_gradient = models.CharField(max_length=500, null=True, blank=True, default='https://ccwebappbucket.s3.ap-southeast-1.amazonaws.com/uploads/bg1.png')


class GradeSheet(models.Model):
    id = models.CharField(max_length=10, primary_key=True, unique=True, default=random_code_generator, editable=False)
    student = models.ForeignKey(StudentProfile, on_delete=models.SET_NULL, null=True, blank=True, related_name='related_grade_entities')
    quarter1 = models.FloatField(null=True, blank=True)
    quarter2 = models.FloatField(null=True, blank=True)
    quarter3 = models.FloatField(null=True, blank=True)
    quarter4 = models.FloatField(null=True, blank=True)
    in_class = models.ForeignKey(Class, on_delete=models.SET_NULL, null=True, blank=True, related_name='class_related_score')
    remarks = models.CharField(max_length=300, null=True, blank=True)