from rest_framework import routers
from accounts.views import StudentsViewSet

router = routers.DefaultRouter()
router.register('api/students', StudentsViewSet, 'students')


urlpatterns = router.urls