from rest_framework import routers
from accounts.views import UserViewset
from .views import SubjectViewSet, RoomViewSet, StudentsViewSet, FacultyViewSet, StaffViewSet, GetStudentsViewSet, GetFacultyViewset, SchoolYearViewset, SectionViewset, SectionAddViewset, ClassesAddViewset, ClassesViewset, GetClassesViewset, GradesViewset

router = routers.DefaultRouter()
router.register('api/users', UserViewset, 'users')
router.register('api/students', StudentsViewSet, 'students')
router.register('api/getstudents', GetStudentsViewSet, 'getstudents')
router.register('api/faculty', FacultyViewSet, 'faculty')
router.register('api/getfaculty', GetFacultyViewset, 'getfaculty')
router.register('api/staff', StaffViewSet, 'staff')
router.register('api/subject', SubjectViewSet , 'subject')
router.register('api/rooms', RoomViewSet , 'rooms')
router.register('api/section', SectionViewset , 'section')
router.register('api/addsection', SectionAddViewset , 'addsection')
router.register('api/classes', ClassesViewset , 'classes')
router.register('api/addclass', ClassesAddViewset , 'addclass')
router.register('api/schoolyear', SchoolYearViewset , 'schoolyear')
router.register('api/getclass', GetClassesViewset , 'getclass')
router.register('api/grades', GradesViewset , 'grades')

urlpatterns = router.urls