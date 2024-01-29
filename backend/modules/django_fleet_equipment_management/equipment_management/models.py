from django.db import models


class Equipment(models.Model):
    EQUIPMENT_TYPES = (
        ('shovel', 'Shovel'),
        ('loader', 'Loader'),
        ('drill', 'Drill'),
        ('dipper', 'Dipper'),
    )
    STATUS_CHOICES = (
        ('active', 'Active'),
        ('maintenance', 'Maintenance'),
        ('out_of_service', 'Out of Service'),
    )
    type = models.CharField(max_length=50, choices=EQUIPMENT_TYPES)
    status = models.CharField(max_length=50, choices=STATUS_CHOICES)
    image = models.ImageField(upload_to='equipment_images/')
    basicStats = models.JSONField()
    
    def __str__(self):
        return f'{self.get_type_display()} - {self.status}'