# Generated by Django 4.2.5 on 2023-09-12 11:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_class'),
    ]

    operations = [
        migrations.CreateModel(
            name='Classes',
            fields=[
                ('code', models.CharField(max_length=10, primary_key=True, serialize=False, unique=True)),
                ('subject', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='main.subject')),
            ],
        ),
        migrations.DeleteModel(
            name='Class',
        ),
    ]
