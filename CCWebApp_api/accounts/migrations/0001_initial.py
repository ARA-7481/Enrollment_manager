# Generated by Django 4.2.7 on 2023-11-15 16:18

import accounts.models
import django.contrib.auth.models
from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('id', models.CharField(default=accounts.models.random_code_generator, editable=False, max_length=10, primary_key=True, serialize=False, unique=True)),
                ('username', models.CharField(blank=True, max_length=200, null=True)),
                ('first_name', models.CharField(max_length=200, null=True)),
                ('last_name', models.CharField(max_length=200, null=True)),
                ('email', models.EmailField(max_length=254, unique=True, verbose_name='email address')),
                ('address_value', models.CharField(max_length=200, null=True)),
                ('mobile_number', models.CharField(max_length=200, null=True, unique=True)),
                ('suspended', models.BooleanField(default=False)),
                ('state', models.CharField(choices=[('Verified', 'Verified'), ('Pending', 'Pending'), ('Not Verified', 'Not Verified')], default='Pending', max_length=20)),
                ('usertype', models.CharField(choices=[('Admin', 'Admin'), ('Faculty', 'Faculty'), ('Student', 'Student'), ('Sub-admin', 'Sub-admin')], max_length=20, null=True)),
                ('registration_datetime', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='FacultyProfile',
            fields=[
                ('id', models.CharField(default=accounts.models.student_code_generator, editable=False, primary_key=True, serialize=False, unique=True)),
                ('position', models.CharField(choices=[('Dean', 'Dean'), ('Assistant Dean', 'Assistant Dean'), ('Professor', 'Professor'), ('Part-Time', 'Part-Time'), ('Teacher', 'Teacher'), ('Laboratory Attendant', 'Laboratory Attendant')], default='Teacher', max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='StaffProfile',
            fields=[
                ('id', models.CharField(default=accounts.models.student_code_generator, editable=False, primary_key=True, serialize=False, unique=True)),
                ('role', models.CharField(choices=[('Admin', 'Admin'), ('Staff', 'Staff'), ('Not Specified', 'Not Specified'), ('Registrar', 'Registrar'), ('Guidance', 'Guidance')], default='Not Specified', max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='StudentProfile',
            fields=[
                ('id', models.CharField(default=accounts.models.student_code_generator, editable=False, primary_key=True, serialize=False, unique=True)),
                ('yearlevel', models.CharField(choices=[('1st', '1st'), ('2nd', '2nd'), ('3rd', '3rd'), ('4th', '4th'), ('5th', '5th'), ('Irregular', 'Irregular')], default='1st', max_length=20)),
                ('status', models.CharField(choices=[('Draft', 'Draft'), ('For Evaluation', 'For Evaluation'), ('Evaluation In Progress', 'Evaluation In Progress'), ('Evaluation Complete', 'Evaluation Complete'), ('Pending Payment', 'Pending Payment'), ('Payment Received', 'Payment Received'), ('Enrolled', 'Enrolled'), ('Verification Failed', 'Verification Failed')], default='Draft', max_length=50)),
            ],
        ),
    ]
