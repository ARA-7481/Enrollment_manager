from django.urls import re_path
from . import consumers

websocket_urlpatterns = [
    re_path(r'/dbupdatetrigger/', consumers.DBUpdateTriggerConsumer.as_asgi()),
]