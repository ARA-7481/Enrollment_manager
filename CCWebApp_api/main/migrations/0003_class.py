# Generated by Django 4.2.5 on 2023-09-12 11:09

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('main', '0002_subject_course'),
    ]

    operations = [
        migrations.CreateModel(
            name='Class',
            fields=[
                ('code', models.CharField(max_length=10, primary_key=True, serialize=False, unique=True)),
                ('students', models.ManyToManyField(related_name='student_user', to=settings.AUTH_USER_MODEL)),
                ('subject', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='main.subject')),
                ('teacher', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='teacher_user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
