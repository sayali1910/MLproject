from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('Prediction.urls')),
    path('api/auth/', include('users.urls')),
    path('', include('rest_framework.urls', namespace='rest_framework')),
]
