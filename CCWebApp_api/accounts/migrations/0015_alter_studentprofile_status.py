# Generated by Django 4.2.5 on 2023-09-15 07:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0014_alter_studentprofile_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='studentprofile',
            name='status',
            field=models.CharField(choices=[('Draft', 'Draft'), ('For Evaluation', 'For Evaluation'), ('Evaluation In Progress', 'Evaluation In Progress'), ('Evaluation Complete', 'Evaluation Complete'), ('Pending Payment', 'Pending Payment'), ('Payment Received', 'Payment Received'), ('Enrolled', 'Enrolled'), ('Verification Failed', 'Verification Failed')], default='Draft', max_length=50),
        ),
    ]
