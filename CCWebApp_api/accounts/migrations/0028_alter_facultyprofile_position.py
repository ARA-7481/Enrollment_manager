# Generated by Django 4.2.7 on 2025-03-17 04:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0027_alter_eventslist_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='facultyprofile',
            name='position',
            field=models.CharField(choices=[('Principal', 'Principal'), ('Assistant Principal', 'Assistant Principal'), ('Part-Time', 'Part-Time'), ('Teacher-1', 'Teacher-1'), ('Teacher-2', 'Teacher-2'), ('Teacher-3', 'Teacher-3'), ('Laboratory Attendant', 'Laboratory Attendant'), ('Unspecified', 'Unspecified'), ('Dean', 'Dean'), ('Department-Head', 'Department-Head'), ('Regular Instructor', 'Regular Instructor')], default='Unspecified', max_length=50),
        ),
    ]
