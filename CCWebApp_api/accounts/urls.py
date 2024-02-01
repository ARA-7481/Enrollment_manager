from django.urls import path, include
from .views import LogInView, RegisterView, CustomTokenRefreshView, SuccessView, LogOutView
from rest_framework_simplejwt.views import (
    TokenVerifyView
)

urlpatterns = [
    path('api/login/', LogInView.as_view(), name='log_in'),
    path('api/logout/', LogOutView.as_view(), name='log_out'),
    path('api/register/', RegisterView.as_view(), name='register'),
    path('api/token/refresh/', CustomTokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('api/success/', SuccessView.as_view(), name='success'),
]