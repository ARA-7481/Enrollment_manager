# Generated by Django 4.1.5 on 2023-08-22 02:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='e_mail',
        ),
    ]
