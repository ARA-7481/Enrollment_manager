from channels.middleware import BaseMiddleware
from channels.db import database_sync_to_async
from rest_framework_simplejwt.tokens import UntypedToken
from rest_framework_simplejwt.exceptions import InvalidToken, TokenError
from accounts.models import User

@database_sync_to_async
def get_user(token_key):
    try:
        token = UntypedToken(token_key)
        token.check_blacklist()
        user = User.objects.get(id=token['user_id'])
        return user
    except (InvalidToken, TokenError, User.DoesNotExist):
        return None

class TokenAuthMiddleware(BaseMiddleware):
    async def __call__(self, scope, receive, send):
        headers = dict(scope['headers'])
        if b'authorization' in headers:
            token_name, token_key = headers[b'authorization'].decode().split()
            if token_name == 'Bearer':
                scope['user'] = await get_user(token_key)
        return await super().__call__(scope, receive, send)