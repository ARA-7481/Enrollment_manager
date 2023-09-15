from rest_framework import permissions
from .models import User

class IsSuperAdmin(permissions.BasePermission):
    message = "Permission Level Restricted"
    
    def has_permission(self, request, view):
        user = User.objects.get(pk=request.user.pk)
        try:
            if user.usertype == 'Admin':
                return True
        except User.DoesNotExist:
            return False
        
class IsSubAdmin(permissions.BasePermission):
    message = "Restricted"
    
    def has_permission(self, request, view):
        user = User.objects.get(pk=request.user.pk)
        try:
            if user.usertype == 'Sub-admin':
                return True
        except User.DoesNotExist:
            return False
        
class IsFaculty(permissions.BasePermission):
    message = "Restricted"
    
    def has_permission(self, request, view):
        user = User.objects.get(pk=request.user.pk)
        try:
            if user.usertype == 'Faculty':
                return True
        except User.DoesNotExist:
            return False

class IsStudent(permissions.BasePermission):
    message = "Restricted"
    
    def has_permission(self, request, view):
        user = User.objects.get(pk=request.user.pk)
        try:
            if user.usertype == 'Student':
                return True
        except User.DoesNotExist:
            return False