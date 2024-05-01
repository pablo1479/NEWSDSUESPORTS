# views.py

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import User, Merchandise, Stream
from .serializers import UserSerializer, MerchandiseSerializer, StreamSerializer
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny

class RegisterAPIView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = User.objects.filter(username=username).first()
        if user and user.check_password(password):
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid username or password'}, status=status.HTTP_401_UNAUTHORIZED)

class LogoutAPIView(APIView):
    def post(self, request):
        request.user.auth_token.delete()
        return Response(status=status.HTTP_200_OK)

class MerchandiseListCreateAPIView(APIView):
    def get(self, request):
        merchandise = Merchandise.objects.all()
        serializer = MerchandiseSerializer(merchandise, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = MerchandiseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class StreamListAPIView(APIView):
    def get(self, request):
        streams = Stream.objects.all()
        serializer = StreamSerializer(streams, many=True)
        return Response(serializer.data)
