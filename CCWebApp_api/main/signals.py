from django.db.models.signals import post_save, post_delete, pre_save
from django.dispatch import receiver
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
from accounts.models import StudentProfile

@receiver(post_save, sender=StudentProfile)
def announce_new_object(sender, instance, created, **kwargs):
    if created:
        event_type = 'new.object'
        event = 'student_model_update'
    else:
        event_type = 'updated.object'
        event = 'student_model_update'

    channel_layer = get_channel_layer()
    async_to_sync(channel_layer.group_send)('dbupdatetrigger', {
        'type': event_type,
        'event': event,
    })

@receiver(post_delete, sender=StudentProfile)
def announce_deleted_object(sender, instance, **kwargs):
    channel_layer = get_channel_layer()
    async_to_sync(channel_layer.group_send)('dbupdatetrigger', {
        'type': 'deleted.object',
        'event': 'student_model_update',
    })