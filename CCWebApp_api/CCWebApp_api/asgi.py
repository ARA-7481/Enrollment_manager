"""
ASGI config for ladderwise_api project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/howto/deployment/asgi/
"""

import os
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from main.middleware import TokenAuthMiddleware
import main.routing

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'CCWebApp_api.settings')

application = ProtocolTypeRouter({
    'http': get_asgi_application(),
    'https': get_asgi_application(),
    'websocket': TokenAuthMiddleware(
        URLRouter(
            main.routing.websocket_urlpatterns
        )
    ),
})