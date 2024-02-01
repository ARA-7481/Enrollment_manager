from rest_framework import routers
from .views import SubjectViewSet, RoomViewSet, StudentsViewSet, FacultyViewSet, StaffViewSet, GetStudentsViewSet

router = routers.DefaultRouter()
router.register('api/students', StudentsViewSet, 'students')
router.register('api/getstudents', GetStudentsViewSet, 'getstudents')
router.register('api/faculty', FacultyViewSet, 'faculty')
router.register('api/staff', StaffViewSet, 'staff')
router.register('api/subject', SubjectViewSet , 'subject')
router.register('api/rooms', RoomViewSet , 'rooms')

urlpatterns = router.urls