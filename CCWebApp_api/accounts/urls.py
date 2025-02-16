from django.urls import path, include
from .views import LogInView, RegisterView, CustomTokenRefreshView, SuccessView, LogOutView, ReceiveRainSignal, ReceiveFloodSignal, ReceiveHandReadingsRight, ReceiveHandReadingsLeft, CryTrigger, HungerTrigger, ESP32Trigger, PlumbingUpdateReadings, PlumbingTrigger, PlumbingTriggerEnd
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

    path('api/raintrigger/', ReceiveRainSignal.as_view(), name='raintrigger'),
    path('api/floodtrigger/', ReceiveFloodSignal.as_view(), name='floodtrigger'),
    path('api/receivehandsignalright/', ReceiveHandReadingsRight.as_view(), name='receivehandsignalright'),
    path('api/receivehandsignalleft/', ReceiveHandReadingsLeft.as_view(), name='receivehandsignalleft'),

    path('api/receivecrysignal/', CryTrigger.as_view(), name='receivecrysignal'),
    path('api/receivehungersignal/', HungerTrigger.as_view(), name='receivehungersignal'),
    path('api/receiveespdata/', ESP32Trigger.as_view(), name='receiveespdata'),

    path('api/plumbingtrigger/', PlumbingTrigger.as_view(), name='plumbingtrigger'),
    path('api/plumbingtriggerend/', PlumbingTriggerEnd.as_view(), name='plumbingtriggerend'),
    path('api/plumbingupdatereadings/', PlumbingUpdateReadings.as_view(), name='plumbingupdatereadings'),
]