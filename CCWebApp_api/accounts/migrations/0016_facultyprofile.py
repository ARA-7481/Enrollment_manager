# Generated by Django 4.2.5 on 2023-09-16 14:25

import accounts.models
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0012_alter_course_department'),
        ('accounts', '0015_alter_studentprofile_status'),
    ]

    operations = [
        migrations.CreateModel(
            name='FacultyProfile',
            fields=[
                ('id', models.CharField(default=accounts.models.student_code_generator, editable=False, primary_key=True, serialize=False, unique=True)),
                ('position', models.CharField(choices=[('Dean', 'Dean'), ('Assistant Dean', 'Assistant Dean'), ('Professor', 'Professor'), ('Part-Time', 'Part-Time'), ('Teacher', 'Teacher'), ('Laboratory Attendant', 'Laboratory Attendant')], default='Draft', max_length=50)),
                ('course', models.ManyToManyField(to='main.course')),
                ('userprofile', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
