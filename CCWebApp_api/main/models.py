from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.db.models import JSONField
from accounts.models import User
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

    def __str__(self):
        return self.code

class Course(models.Model):
    code = models.CharField(max_length=10, primary_key=True, null=False, unique=True)
    description = models.CharField(max_length=200)
    subjects = models.ManyToManyField(Subject)
    department = models.ForeignKey(Department, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.code

class Classes(models.Model):
    code = models.CharField(max_length=10, primary_key=True, null=False, unique=True)
    room = models.CharField(max_length=50, null=False, default='none-allocated')
    subject = models.ForeignKey(Subject, on_delete=models.SET_NULL, null=True)
    students = models.ManyToManyField(User, related_name='student_user')
    teacher = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='teacher_user')

    def __str__(self):
        return self.code

