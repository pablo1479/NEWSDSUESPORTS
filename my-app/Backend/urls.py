from django.urls import path
from my-app.views import RegisterAPIView, LoginAPIView, LogoutAPIView, MerchandiseListCreateAPIView, StreamListAPIView

urlpatterns = [
    path('api/register/', RegisterAPIView.as_view(), name='register'),
    path('api/login/', LoginAPIView.as_view(), name='login'),
    path('api/logout/', LogoutAPIView.as_view(), name='logout'),
    path('api/merchandise/', MerchandiseListCreateAPIView.as_view(), name='merchandise-list-create'),
    path('api/streams/', StreamListAPIView.as_view(), name='stream-list'),
    path('api/merchandise/<int:pk>/', MerchandiseDetailAPIView.as_view(), name='merchandise-detail'),
]