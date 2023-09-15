from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from .models import User, StudentProfile
from main.models import Course, Department

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['email'] = user.email
        return token
    
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'email', 'mobile_number')

class StudentUserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'date_joined')

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ('code', 'description')

class CourseSerializer(serializers.ModelSerializer):
    department = DepartmentSerializer(read_only=False)
    class Meta:
        model = Course
        fields = ('code','department',)

class StudentSerializer(serializers.ModelSerializer):
    userprofile = StudentUserProfileSerializer(read_only=False)
    course = CourseSerializer(read_only=False)

    class Meta:
        model = StudentProfile
        fields = ('id', 'userprofile', 'course', 'yearlevel', 'status' )

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'usertype', 'first_name', 'last_name', 'email', 'mobile_number', 'password')
        extra_kwargs = {'password':{'write_only': True},}

    def create(self, validated_data):
        user = User.objects.create(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user
