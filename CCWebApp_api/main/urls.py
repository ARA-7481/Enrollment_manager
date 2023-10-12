from rest_framework import routers
from accounts.views import StudentsViewSet, FacultyViewSet, StaffViewSet
from .views import DepartmentViewSet, CourseViewSet, SubjectViewSet, RoomViewSet, ClassesViewSet, ClassesListViewSet

router = routers.DefaultRouter()
router.register('api/students', StudentsViewSet, 'students')
router.register('api/faculty', FacultyViewSet, 'faculty')
router.register('api/staff', StaffViewSet, 'staff')
router.register('api/departments', DepartmentViewSet , 'departments')
router.register('api/courses', CourseViewSet , 'courses')
router.register('api/subject', SubjectViewSet , 'subject')
router.register('api/rooms', RoomViewSet , 'rooms')
router.register('api/classes', ClassesViewSet , 'classes')
router.register('api/classeslist', ClassesListViewSet , 'classeslist')


urlpatterns = router.urls