# Generated by Django 5.0.1 on 2024-01-30 12:57

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0004_user_avatar'),
    ]

    operations = [
        migrations.AlterField(
            model_name='studentprofile',
            name='userprofile',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='studentprofile', to=settings.AUTH_USER_MODEL),
        ),
    ]
