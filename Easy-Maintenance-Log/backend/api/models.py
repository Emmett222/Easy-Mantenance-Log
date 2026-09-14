from django.db import models

class Car(models.Model):
    make = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    year = models.IntegerField()
    descriptor = models.CharField(max_length=100)
    milage = models.IntegerField()
    color = models.CharField(max_length=7, blank=True)

    def __str__(self):
        return self.descriptor

class Service(models.Model):
    car = models.ForeignKey(Car, on_delete=models.CASCADE, related_name='service')

    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    milage = models.IntegerField(blank=True)
    date = models.DateField(auto_now_add=True, blank=True)
    cost = models.FloatField(blank=True)

    next_milage = models.IntegerField(blank=True)
    next_time = models.IntegerField(blank=True)
    milage_dependant = models.BooleanField(default=False) 
    time_dependant = models.BooleanField(default=False) 