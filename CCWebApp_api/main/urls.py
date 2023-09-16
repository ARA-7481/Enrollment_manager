from rest_framework import routers
from accounts.views import StudentsViewSet
from .views import DepartmentViewSet

router = routers.DefaultRouter()
router.register('api/students', StudentsViewSet, 'students')
router.register('api/departments', DepartmentViewSet , 'departments')


urlpatterns = router.urls