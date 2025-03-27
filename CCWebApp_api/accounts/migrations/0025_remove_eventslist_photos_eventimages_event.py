# Generated by Django 5.0.4 on 2025-03-07 11:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0024_eventimages_date_added'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='eventslist',
            name='photos',
        ),
        migrations.AddField(
            model_name='eventimages',
            name='event',
            field=models.ManyToManyField(blank=True, related_name='event_related_photo', to='accounts.eventslist'),
        ),
    ]
