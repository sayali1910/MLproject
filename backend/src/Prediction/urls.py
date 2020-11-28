from django.urls import path
import Prediction.views as views

urlpatterns = [
    path('predict/', views.Personality_Model_Predict.as_view(), name='predict'),
    path('predictjob/', views.Job_Model_Predict.as_view(), name='predictjob')
]
