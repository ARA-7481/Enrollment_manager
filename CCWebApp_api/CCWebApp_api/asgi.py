"""

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/howto/deployment/asgi/
"""

import os
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'CCWebApp_api.settings')

def get_websocket_application():
    from main.middleware import TokenAuthMiddleware
    from channels.routing import URLRouter
    import main.routing

    return TokenAuthMiddleware(
        URLRouter(
            main.routing.websocket_urlpatterns
        )
    )

application = ProtocolTypeRouter({
    'http': get_asgi_application(),
    'websocket': get_websocket_application(),
})