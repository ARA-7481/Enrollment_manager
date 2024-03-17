from django.db.models.signals import post_save, post_delete, pre_save
from django.dispatch import receiver
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
from accounts.models import StudentProfile, FacultyProfile, StaffProfile, User, DeviceProfile
from .models import Subject, Room, SchoolYear, Section, Class, GradeSheet

@receiver(post_save, sender=StudentProfile)
@receiver(post_save, sender=FacultyProfile)
@receiver(post_save, sender=StaffProfile)
@receiver(post_save, sender=User)
@receiver(post_save, sender=DeviceProfile)
@receiver(post_save, sender=Subject)
@receiver(post_save, sender=Room)
@receiver(post_save, sender=SchoolYear)
@receiver(post_save, sender=Section)
@receiver(post_save, sender=Class)
@receiver(post_save, sender=GradeSheet)
def announce_new_object(sender, instance, created, **kwargs):
    channel_layer = get_channel_layer()
    async_to_sync(channel_layer.group_send)('dbupdatetrigger', {
        'type': 'new.object',
        'event': 'model_update',
    })

@receiver(post_delete, sender=StudentProfile)
@receiver(post_delete, sender=FacultyProfile)
@receiver(post_delete, sender=StaffProfile)
@receiver(post_delete, sender=User)
@receiver(post_delete, sender=DeviceProfile)
@receiver(post_delete, sender=Subject)
@receiver(post_delete, sender=Room)
@receiver(post_delete, sender=SchoolYear)
@receiver(post_delete, sender=Section)
@receiver(post_delete, sender=Class)
@receiver(post_delete, sender=GradeSheet)
def announce_deleted_object(sender, instance, **kwargs):
    channel_layer = get_channel_layer()
    async_to_sync(channel_layer.group_send)('dbupdatetrigger', {
        'type': 'deleted.object',
        'event': 'model_update',
    })

@receiver(post_save, sender=StudentProfile)
@receiver(post_save, sender=FacultyProfile)
@receiver(post_save, sender=StaffProfile)
@receiver(post_save, sender=User)
@receiver(post_save, sender=DeviceProfile)
@receiver(post_save, sender=Subject)
@receiver(post_save, sender=Room)
@receiver(post_save, sender=SchoolYear)
@receiver(post_save, sender=Section)
@receiver(post_save, sender=Class)
@receiver(post_save, sender=GradeSheet)
def announce_updated_object(sender, instance, created, **kwargs):
    if not created:
        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)('dbupdatetrigger', {
            'type': 'updated.object',
            'event': 'model_update',
        })