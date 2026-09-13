from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CarViewSet, ServiceViewSet

router = DefaultRouter()
router.register(r'cars', CarViewSet, basename='car')
router.register(r'services', ServiceViewSet, basename='service')

urlpatterns = [
    path('', include(router.urls))
]