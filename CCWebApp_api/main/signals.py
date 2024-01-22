from django.db.models.signals import post_save, post_delete, pre_save
from django.dispatch import receiver
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
from accounts.models import StudentProfile, FacultyProfile, StaffProfile
from .models import Department, Subject, Course, Room, Classes, ScheduleInstance

# @receiver(post_save, sender=StudentProfile)
# @receiver(post_save, sender=FacultyProfile)
# @receiver(post_save, sender=StaffProfile)
# @receiver(post_save, sender=Department)
# @receiver(post_save, sender=Subject)
# @receiver(post_save, sender=Course)
# @receiver(post_save, sender=Room)
# @receiver(post_save, sender=Classes)
# @receiver(post_save, sender=ScheduleInstance)
# def announce_new_object(sender, instance, created, **kwargs):
#     channel_layer = get_channel_layer()
#     async_to_sync(channel_layer.group_send)('dbupdatetrigger', {
#         'type': 'new.object',
#         'event': 'model_update',
#     })

# @receiver(post_delete, sender=StudentProfile)
# @receiver(post_delete, sender=FacultyProfile)
# @receiver(post_delete, sender=StaffProfile)
# @receiver(post_delete, sender=Department)
# @receiver(post_delete, sender=Subject)
# @receiver(post_delete, sender=Course)
# @receiver(post_delete, sender=Room)
# @receiver(post_delete, sender=Classes)
# @receiver(post_delete, sender=ScheduleInstance)
# def announce_deleted_object(sender, instance, **kwargs):
#     channel_layer = get_channel_layer()
#     async_to_sync(channel_layer.group_send)('dbupdatetrigger', {
#         'type': 'deleted.object',
#         'event': 'model_update',
#     })

# @receiver(post_save, sender=StudentProfile)
# @receiver(post_save, sender=FacultyProfile)
# @receiver(post_save, sender=StaffProfile)
# @receiver(post_save, sender=Department)
# @receiver(post_save, sender=Subject)
# @receiver(post_save, sender=Course)
# @receiver(post_save, sender=Room)
# @receiver(post_save, sender=Classes)
# @receiver(post_save, sender=ScheduleInstance)
# def announce_updated_object(sender, instance, created, **kwargs):
#     if not created:
#         channel_layer = get_channel_layer()
#         async_to_sync(channel_layer.group_send)('dbupdatetrigger', {
#             'type': 'updated.object',
#             'event': 'model_update',
#         })
