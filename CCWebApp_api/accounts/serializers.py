from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from .models import User, StudentProfile, FacultyProfile, StaffProfile
from main.models import Subject, Room, ScheduleInstance

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['email'] = user.email
        return token
    
class PasswordChangeSerializer(serializers.Serializer):
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)

class UserSerializer(serializers.ModelSerializer):
    date_joined = serializers.DateTimeField(format="%m-%d-%Y", read_only=True)
    class Meta:
        model = User
        fields = ('id', 'first_name', 'middle_name', 'last_name', 'extension_name', 'email', 'mobile_number', 'usertype', 'avatar', 'facultyprofile', 'studentprofile', 'gender', 'birthdate', 'birthplace', 'nationality', 'address_value1', 'address_value2', 'address_value3', 'date_joined')

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'date_joined')

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentProfile
        fields = '__all__'

class GetStudentSerializer(serializers.ModelSerializer):
    userprofile = UserSerializer(read_only=False)
    student_related_section = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
   
    class Meta:
        model = StudentProfile
        fields = '__all__'

class SubjectSerializer(serializers.ModelSerializer):
    postrequisite = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    related_corequisite = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model = Subject
        fields = '__all__'

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = '__all__'

class ScheduleInstanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = ScheduleInstance
        fields = '__all__'

class FacultySerializer(serializers.ModelSerializer):
    userprofile = UserProfileSerializer(read_only=False)
    
    class Meta:
        model = FacultyProfile
        fields = '__all__'

class StaffSerializer(serializers.ModelSerializer):
    userprofile = UserProfileSerializer(read_only=False)

    class Meta:
        model = StaffProfile
        fields = '__all__'

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'middle_name', 'last_name', 'extension_name', 'email', 'mobile_number', 'usertype', 'avatar', 'gender', 'birthdate', 'birthplace', 'nationality', 'address_value1', 'address_value2', 'address_value3', 'addressketch', 'password')
        extra_kwargs = {'password':{'write_only': True},}

    def create(self, validated_data):
        user = User.objects.create(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user
    
# class ClassesSerializer(serializers.ModelSerializer):
#     schedule = ScheduleInstanceSerializer(many=True)

#     class Meta:
#         model = Classes
#         fields = '__all__'
    
#     def create(self, validated_data):
#         schedule_data = validated_data.pop('schedule')
#         class_instance = Classes.objects.create(**validated_data)
#         schedule_instances = []
#         for schedule_item in schedule_data:
#             schedule_instance = ScheduleInstance.objects.create(**schedule_item)
#             schedule_instances.append(schedule_instance)
        
#         class_instance.schedule.set(schedule_instances)
#         return class_instance