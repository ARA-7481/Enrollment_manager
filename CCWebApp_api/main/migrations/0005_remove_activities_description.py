# Generated by Django 4.2.7 on 2023-12-19 11:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_activities'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='activities',
            name='description',
        ),
    ]
