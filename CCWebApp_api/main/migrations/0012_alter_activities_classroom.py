# Generated by Django 4.2.7 on 2024-01-01 13:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0011_alter_classes_bg_gradient'),
    ]

    operations = [
        migrations.AlterField(
            model_name='activities',
            name='classroom',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='related_activities', to='main.classes'),
        ),
    ]
