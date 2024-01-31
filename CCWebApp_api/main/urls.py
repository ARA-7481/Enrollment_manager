from rest_framework import routers
from accounts.views import StudentsViewSet, FacultyViewSet, StaffViewSet, TeacherViewSet, StudentDataViewSet, CheckerView, AddStudentsViewSet, AddFacultyViewSet, UserViewset
from .views import DepartmentViewSet, CourseViewSet, SubjectViewSet, RoomViewSet, ClassesViewSet, ClassesListViewSet, CourseViewSetPost, PointersViewSet, ActivitiesViewSet, ClassesViewSetForFaculty, ActivityEntryViewSet, AddActivitiesViewSet, NormalClassesViewSet

router = routers.DefaultRouter()
router.register('api/students', StudentsViewSet, 'students')
router.register('api/addstudent', AddStudentsViewSet, 'addstudent')
router.register('api/faculty', FacultyViewSet, 'faculty')
router.register('api/addfaculty', AddFacultyViewSet, 'addfaculty')
router.register('api/staff', StaffViewSet, 'staff')
router.register('api/departments', DepartmentViewSet , 'departments')
router.register('api/courses', CourseViewSet , 'courses')
router.register('api/subject', SubjectViewSet , 'subject')
router.register('api/rooms', RoomViewSet , 'rooms')
router.register('api/normalclasses', NormalClassesViewSet , 'normalclasses')
router.register('api/classes', ClassesViewSet , 'classes')
router.register('api/classeslist', ClassesListViewSet , 'classeslist')

router.register('api/coursespost', CourseViewSetPost , 'coursespost')

router.register('api/teacher', TeacherViewSet, 'teacher')
router.register('api/pointers', PointersViewSet, 'pointers')
router.register('api/activities', ActivitiesViewSet, 'activities')
router.register('api/addactivities', AddActivitiesViewSet, 'addactivities')
router.register('api/classesforfaculty', ClassesViewSetForFaculty , 'classesforfaculty')
router.register('api/users', UserViewset, 'users')

router.register('api/studentdata', StudentDataViewSet, 'studentdata')
router.register('api/activityentry', ActivityEntryViewSet, 'activityentry')


urlpatterns = router.urls