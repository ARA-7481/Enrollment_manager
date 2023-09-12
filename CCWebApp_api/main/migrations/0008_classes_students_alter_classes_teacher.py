# Generated by Django 4.2.5 on 2023-09-12 11:23

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('main', '0007_remove_classes_students_classes_teacher'),
    ]

    operations = [
        migrations.AddField(
            model_name='classes',
            name='students',
            field=models.ManyToManyField(related_name='classes_as_student', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='classes',
            name='teacher',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='classes_as_teacher', to=settings.AUTH_USER_MODEL),
        ),
    ]
