# Generated by Django 5.0.3 on 2024-03-05 13:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_strand_track_remove_course_department_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='section',
            name='track',
            field=models.CharField(blank=True, null=True),
        ),
    ]
