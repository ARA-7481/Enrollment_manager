# Generated by Django 4.2.7 on 2023-12-26 09:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0009_remove_classes_activitylist_activities_classroom'),
    ]

    operations = [
        migrations.AddField(
            model_name='classes',
            name='bg_gradient',
            field=models.FileField(blank=True, null=True, upload_to=''),
        ),
    ]
