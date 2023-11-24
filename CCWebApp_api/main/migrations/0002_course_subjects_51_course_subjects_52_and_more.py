# Generated by Django 4.2.7 on 2023-11-20 22:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='subjects_51',
            field=models.ManyToManyField(blank=True, related_name='y5s1', to='main.subject'),
        ),
        migrations.AddField(
            model_name='course',
            name='subjects_52',
            field=models.ManyToManyField(blank=True, related_name='y5s2', to='main.subject'),
        ),
        migrations.AlterField(
            model_name='course',
            name='subjects_11',
            field=models.ManyToManyField(blank=True, related_name='y1s1', to='main.subject'),
        ),
        migrations.AlterField(
            model_name='course',
            name='subjects_12',
            field=models.ManyToManyField(blank=True, related_name='y1s2', to='main.subject'),
        ),
        migrations.AlterField(
            model_name='course',
            name='subjects_21',
            field=models.ManyToManyField(blank=True, related_name='y2s1', to='main.subject'),
        ),
        migrations.AlterField(
            model_name='course',
            name='subjects_22',
            field=models.ManyToManyField(blank=True, related_name='y2s2', to='main.subject'),
        ),
        migrations.AlterField(
            model_name='course',
            name='subjects_31',
            field=models.ManyToManyField(blank=True, related_name='y3s1', to='main.subject'),
        ),
        migrations.AlterField(
            model_name='course',
            name='subjects_32',
            field=models.ManyToManyField(blank=True, related_name='y3s2', to='main.subject'),
        ),
        migrations.AlterField(
            model_name='course',
            name='subjects_41',
            field=models.ManyToManyField(blank=True, related_name='y4s1', to='main.subject'),
        ),
        migrations.AlterField(
            model_name='course',
            name='subjects_42',
            field=models.ManyToManyField(blank=True, related_name='y4s2', to='main.subject'),
        ),
    ]
