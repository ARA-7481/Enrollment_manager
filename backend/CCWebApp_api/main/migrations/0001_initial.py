# Generated by Django 4.1.5 on 2023-01-25 06:41

from django.conf import settings
import django.contrib.postgres.fields
from django.db import migrations, models
import django.db.models.deletion
import main.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('u_id', models.CharField(default=main.models.random_code_generator, editable=False, max_length=10, primary_key=True, serialize=False, unique=True)),
                ('name', models.CharField(max_length=200)),
                ('registration_datetime', models.DateTimeField(auto_now_add=True)),
                ('address_value1', models.CharField(max_length=200)),
                ('address_value2', models.CharField(max_length=200)),
                ('address_value3', models.CharField(max_length=200)),
                ('business_date', models.DateTimeField()),
                ('contact_numbers', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=200), size=None)),
                ('emails', django.contrib.postgres.fields.ArrayField(base_field=models.EmailField(blank=True, max_length=200, unique=True), size=None)),
                ('website', models.URLField(null=True)),
                ('owners', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=200), size=None)),
            ],
        ),
        migrations.CreateModel(
            name='Service',
            fields=[
                ('u_id', models.CharField(default=main.models.random_code_generator, editable=False, max_length=10, primary_key=True, serialize=False, unique=True)),
                ('tag', models.CharField(max_length=200)),
                ('available_to', models.CharField(choices=[('Company', 'Company'), ('Freelancer', 'Freelancer')], max_length=20, null=True)),
                ('state', models.CharField(choices=[('Disabled', 'Disabled'), ('Enabled', 'Enabled')], max_length=20, null=True)),
                ('requirements_template', models.JSONField()),
                ('verification_requirements', models.JSONField()),
                ('attachments', models.CharField(max_length=200)),
                ('added_by', models.CharField(max_length=200)),
                ('last_maintained_date', models.DateTimeField()),
            ],
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('u_id', models.CharField(default=main.models.random_code_generator, editable=False, max_length=10, primary_key=True, serialize=False, unique=True)),
                ('title', models.CharField(max_length=200)),
                ('details', models.JSONField()),
                ('requirements', models.JSONField()),
                ('private', models.BooleanField(default=True)),
                ('state', models.CharField(choices=[('Draft', 'Draft'), ('Preparation', 'Preparation'), ('On-going', 'On-going'), ('Paused', 'Paused'), ('Terminated', 'Terminated'), ('Closed', 'Closed'), ('Finished', 'Finished')], max_length=20)),
                ('company', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='main.company')),
                ('normal_user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Licenses',
            fields=[
                ('u_id', models.CharField(default=main.models.random_code_generator, editable=False, max_length=10, primary_key=True, serialize=False, unique=True)),
                ('state', models.CharField(choices=[('Verified', 'Verified'), ('Pending', 'Pending'), ('Suspended', 'Suspended')], max_length=20)),
                ('license_info', models.JSONField()),
                ('attachments', models.CharField(max_length=200)),
                ('registration_datetime', models.DateTimeField(auto_now_add=True)),
                ('modified_by', models.CharField(max_length=200)),
                ('service', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.service')),
            ],
        ),
        migrations.CreateModel(
            name='CompanyStaff',
            fields=[
                ('u_id', models.CharField(default=main.models.random_code_generator, editable=False, max_length=10, primary_key=True, serialize=False, unique=True)),
                ('role', models.CharField(choices=[('Admin', 'Admin'), ('Project Manager', 'Project Manager'), ('Virtual Assistant', 'Virtual Assistant'), ('Assistant', 'Assistant')], max_length=20)),
                ('company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.company')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Collaboration',
            fields=[
                ('u_id', models.CharField(default=main.models.random_code_generator, editable=False, max_length=10, primary_key=True, serialize=False, unique=True)),
                ('datetime', models.DateTimeField(auto_now_add=True)),
                ('state', models.CharField(choices=[('Draft', 'Draft'), ('Preparation', 'Preparation'), ('On-going', 'On-going'), ('Paused', 'Paused'), ('Terminated', 'Terminated'), ('Closed', 'Closed'), ('Finished', 'Finished')], max_length=20)),
                ('master_company', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='master1', to='main.company')),
                ('master_user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='master2', to=settings.AUTH_USER_MODEL)),
                ('project', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='main.project')),
                ('slave_company', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='slave1', to='main.company')),
                ('slave_freelancer', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='slave2', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
