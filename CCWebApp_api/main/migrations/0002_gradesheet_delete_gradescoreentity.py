# Generated by Django 5.0.3 on 2024-03-07 14:26

import django.db.models.deletion
import main.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='GradeSheet',
            fields=[
                ('id', models.CharField(default=main.models.random_code_generator, editable=False, max_length=10, primary_key=True, serialize=False, unique=True)),
                ('quarter1', models.FloatField(blank=True, null=True)),
                ('quarter2', models.FloatField(blank=True, null=True)),
                ('quarter3', models.FloatField(blank=True, null=True)),
                ('quarter4', models.FloatField(blank=True, null=True)),
                ('remarks', models.CharField(blank=True, max_length=300, null=True)),
                ('in_class', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='class_related_score', to='main.class')),
                ('student', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='related_grade_entities', to='accounts.studentprofile')),
            ],
        ),
        migrations.DeleteModel(
            name='GradeScoreEntity',
        ),
    ]
