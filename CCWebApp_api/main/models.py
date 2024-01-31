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
    prerequisite = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, related_name='postrequisite', blank=True)
    corequisite = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, related_name='related_corequisite', blank=True)
    first_sem = models.BooleanField(default=True)
    second_sem = models.BooleanField(default=True)
    lecture = models.FloatField(blank=False, default=0)
    lab = models.FloatField(blank=False, default=0)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.code

class Course(models.Model):
    code = models.CharField(max_length=10, primary_key=True, null=False, unique=True)
    description = models.CharField(max_length=200)
    subjects_11 = models.ManyToManyField(Subject, related_name='y1s1', blank=True)
    subjects_12 = models.ManyToManyField(Subject, related_name='y1s2', blank=True)
    subjects_21 = models.ManyToManyField(Subject, related_name='y2s1', blank=True)
    subjects_22 = models.ManyToManyField(Subject, related_name='y2s2', blank=True)
    subjects_31 = models.ManyToManyField(Subject, related_name='y3s1', blank=True)
    subjects_32 = models.ManyToManyField(Subject, related_name='y3s2', blank=True)
    subjects_41 = models.ManyToManyField(Subject, related_name='y4s1', blank=True)
    subjects_42 = models.ManyToManyField(Subject, related_name='y4s2', blank=True)
    subjects_51 = models.ManyToManyField(Subject, related_name='y5s1', blank=True)
    subjects_52 = models.ManyToManyField(Subject, related_name='y5s2', blank=True)
    department = models.ForeignKey(Department, on_delete=models.SET_NULL, null=True, related_name='related_course')
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

   
class Pointers(models.Model):
    code = models.CharField(max_length=20, primary_key=True, null=False, unique=True)
    description = models.CharField(max_length=200, null=True, blank=True)
    prompt = models.CharField(max_length=500, null=True, blank=True)
    
class Classes(models.Model):
    CLASS_TYPE = (
        ('Face to Face' , 'Face to Face'),
        ('Virtual' , 'Virtual'),
        ('Hybrid' , 'Hybrid'),
    )
    code = models.CharField(max_length=200, primary_key=True, null=False, unique=True)
    description = models.CharField(max_length=200, null=True)
    course = models.ForeignKey(Course, on_delete=models.SET_NULL, null=True)
    yearlevel = models.CharField(max_length=20, null=True)
    type = models.CharField(max_length=200, choices=CLASS_TYPE, null=False, default= 'Face to Face')
    subject = models.ForeignKey(Subject, on_delete=models.SET_NULL, null=True)
    students = models.ManyToManyField(StudentProfile, related_name='student_related_class', blank=True)
    teacher = models.ForeignKey(FacultyProfile, on_delete=models.SET_NULL, null=True, related_name='teacher_related_class')
    schedule = models.ManyToManyField(ScheduleInstance, related_name='related_class', blank=True)
    startdate = models.DateField(null=True)
    enddate = models.DateField(null=True)
    date_created = models.DateTimeField(auto_now_add=True)
    bg_gradient = models.CharField(max_length=500, null=True, blank=True)

    def __str__(self):
        return self.code
    
class Activities(models.Model):
    ACTIVITY_TYPE = (
        ('CAD Evaluation' , 'CAD Evaluation'),
        ('Quiz/Exam' , 'Quiz/Exam'),
        ('Others' , 'Others'),
    )
    id = models.CharField(max_length=10, primary_key=True, unique=True, default=random_code_generator, editable=False)
    start = models.DateField(null=True)
    deadline = models.DateField(null=True)
    activity_type = models.CharField(max_length=20, choices=ACTIVITY_TYPE, null=False, default= 'CAD Evaluation')
    title = models.CharField(max_length=200, null=True)
    instruction = models.CharField(max_length=5000, null=True)
    referencefile = models.FileField(null=True, blank=True, upload_to='uploads/')
    classroom = models.ForeignKey(Classes, on_delete=models.SET_NULL, related_name='related_activities', null=True)

class ActivityEntry(models.Model):
    id = models.CharField(max_length=10, primary_key=True, unique=True, default=random_code_generator, editable=False)
    file = models.FileField(null=True, blank=True, upload_to='uploads/')
    activity = models.ForeignKey(Activities, on_delete=models.SET_NULL, related_name='related_entry', null=True)
    submitted_by = models.ForeignKey(StudentProfile, on_delete=models.SET_NULL, null=True, blank=True)
    grade = models.FloatField(null=True, blank=True)