from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from .models import User, StudentProfile, FacultyProfile, StaffProfile
from main.models import Course, Department, Subject, Room, Classes, ScheduleInstance

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

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'date_joined')

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ('code', 'related_course')

class CourseSerializer(serializers.ModelSerializer):
    department = DepartmentSerializer(read_only=False)
    date_created = serializers.DateTimeField(format="%m-%d-%Y", read_only=True)
    class Meta:
        model = Course
        fields = ('code','department', 'description', 'date_created', 'subjects_11', 'subjects_12', 'subjects_21', 'subjects_22', 'subjects_31', 'subjects_32', 'subjects_41', 'subjects_42', 'subjects_51', 'subjects_52')

class CourseSerializerPost(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ('code','department', 'description', 'subjects_11', 'subjects_12', 'subjects_21', 'subjects_22', 'subjects_31', 'subjects_32', 'subjects_41', 'subjects_42', 'subjects_51', 'subjects_52')

class SubjectSerializer(serializers.ModelSerializer):
    postrequisite = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    related_corequisite = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model = Subject
        fields = ('code','description','units','prerequisite', 'corequisite', 'first_sem', 'second_sem', 'lecture', 'lab', 'date_created', 'postrequisite', 'related_corequisite')

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('code','description', 'type', 'capacity', 'date_created')

class ScheduleInstanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = ScheduleInstance
        fields = '__all__'

class StudentSerializer(serializers.ModelSerializer):
    userprofile = UserProfileSerializer(read_only=False)
    course = CourseSerializer(read_only=False)

    class Meta:
        model = StudentProfile
        fields = ('id', 'userprofile', 'course', 'yearlevel', 'status' )

class FacultySerializer(serializers.ModelSerializer):
    userprofile = UserProfileSerializer(read_only=False)
    courses = CourseSerializer(many=True, read_only=True)

    class Meta:
        model = FacultyProfile
        fields = ('id', 'userprofile', 'courses', 'position' )

class StaffSerializer(serializers.ModelSerializer):
    userprofile = UserProfileSerializer(read_only=False)

    class Meta:
        model = StaffProfile
        fields = ('id', 'userprofile', 'role' )

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
    
class ClassesSerializer(serializers.ModelSerializer):
    schedule = ScheduleInstanceSerializer(many=True)
    class Meta:
        model = Classes
        fields = '__all__'
    
    def create(self, validated_data):
        schedule_data = validated_data.pop('schedule')
        class_instance = Classes.objects.create(**validated_data)
        schedule_instances = []
        for schedule_item in schedule_data:
            schedule_instance = ScheduleInstance.objects.create(**schedule_item)
            schedule_instances.append(schedule_instance)
        
        class_instance.schedule.set(schedule_instances)
        return class_instance
    
class ClassesListSerializer(serializers.ModelSerializer):
    schedule = ScheduleInstanceSerializer(many=True)
    teacher = FacultySerializer(read_only=False)
    subject = SubjectSerializer(read_only=False)
    students = StudentSerializer(many=True)

    class Meta:
        model = Classes
        fields = '__all__'
