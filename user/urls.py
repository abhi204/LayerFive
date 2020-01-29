from rest_framework import routers
from user.views import UserViewSet

urlpatterns = []

router = routers.DefaultRouter(trailing_slash=False)
router.register('',UserViewSet, basename='user')

urlpatterns += router.urls