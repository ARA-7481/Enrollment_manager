# Generated by Django 4.2.5 on 2023-09-28 06:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0019_alter_classes_students'),
    ]

    operations = [
        migrations.AlterField(
            model_name='classes',
            name='schedule',
            field=models.ManyToManyField(blank=True, related_name='related_class', to='main.scheduleinstance'),
        ),
    ]
