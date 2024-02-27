from rest_framework import routers
from .views import SubjectViewSet, RoomViewSet, StudentsViewSet, FacultyViewSet, StaffViewSet, GetStudentsViewSet, GetFacultyViewset, SchoolYearViewset, SectionViewset

router = routers.DefaultRouter()
router.register('api/students', StudentsViewSet, 'students')
router.register('api/getstudents', GetStudentsViewSet, 'getstudents')
router.register('api/faculty', FacultyViewSet, 'faculty')
router.register('api/getfaculty', GetFacultyViewset, 'getfaculty')
router.register('api/staff', StaffViewSet, 'staff')
router.register('api/subject', SubjectViewSet , 'subject')
router.register('api/rooms', RoomViewSet , 'rooms')
router.register('api/section', SectionViewset , 'section')
router.register('api/schoolyear', SchoolYearViewset , 'schoolyear')

urlpatterns = router.urls