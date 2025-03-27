# Generated by Django 5.0.4 on 2025-03-06 11:57

import accounts.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0022_alter_eventslist_type'),
    ]

    operations = [
        migrations.CreateModel(
            name='EventImages',
            fields=[
                ('id', models.CharField(default=accounts.models.random_code_generator, editable=False, primary_key=True, serialize=False, unique=True)),
                ('picture', models.FileField(upload_to='uploads/')),
            ],
        ),
        migrations.AddField(
            model_name='eventslist',
            name='photos',
            field=models.ManyToManyField(blank=True, related_name='photo_related_event', to='accounts.eventimages'),
        ),
    ]
