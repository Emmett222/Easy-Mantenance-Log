from django.shortcuts import render
from rest_framework import viewsets
from .models import Car, Service
from .serializers import CarSerializer, ServiceSerializer

class CarViewSet(viewsets.ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer

class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
