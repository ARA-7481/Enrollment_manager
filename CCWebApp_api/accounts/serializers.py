from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from .models import User, StudentProfile, FacultyProfile, StaffProfile, DeviceProfile
from main.models import Subject, Room, SchoolYear, Section, Class, GradeSheet

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
   
    class Meta:
        model = StudentProfile
        fields = '__all__'

class FacultySerializer(serializers.ModelSerializer):
    class Meta:
        model = FacultyProfile
        fields = '__all__'


# for dashboard start teacher
class SectionSerializerSectionAverage(serializers.ModelSerializer):
    class Meta:
        model = Section
        fields = '__all__'

class ClassesSerializerForSectionAverage(serializers.ModelSerializer):
    section = SectionSerializerSectionAverage(read_only=False)
    class Meta:
        model = Class
        fields = '__all__'        

class GradeScoreEntitySerializer(serializers.ModelSerializer):
    class Meta:
        model = GradeSheet
        fields = '__all__'

class GradeScoreEntitySerializerForDashboard(serializers.ModelSerializer):
    in_class = ClassesSerializerForSectionAverage(read_only=False)
    class Meta:
        model = GradeSheet
        fields = '__all__'

class GetStudentSerializerForDashboard(serializers.ModelSerializer):
    userprofile = UserSerializer(read_only=False)
    related_grade_entities = GradeScoreEntitySerializerForDashboard(read_only=False, many=True)
   
    class Meta:
        model = StudentProfile
        fields = '__all__'

class SectionSerializerForDashboard(serializers.ModelSerializer):
    students = GetStudentSerializerForDashboard(read_only=False, many=True)
    class Meta:
        model = Section
        fields = '__all__'

class ClassesSerializerForClassPage(serializers.ModelSerializer):
    class_related_score = GradeScoreEntitySerializer(read_only=False, many=True)
    section = SectionSerializerForDashboard(read_only=False)
    class Meta:
        model = Class
        fields = '__all__'

class ClassesSerializerForDashboard(serializers.ModelSerializer):
    section = SectionSerializerForDashboard(read_only=False)
    class Meta:
        model = Class
        fields = '__all__'

class GetFacultySerializer(serializers.ModelSerializer):
    userprofile = UserSerializer(read_only=False)
    teacher_related_class = ClassesSerializerForDashboard(read_only=False, many=True)
    teacher_related_section = SectionSerializerForDashboard(read_only=False, many=True)
   
    class Meta:
        model = FacultyProfile
        fields = '__all__'
# for dashboard end teacher
        

# for dashboard start student
class FacultySerializerForStudent(serializers.ModelSerializer):
    userprofile = UserSerializer(read_only=False)
    class Meta:
        model = FacultyProfile
        fields = '__all__'

class SectionSerializerForStudent(serializers.ModelSerializer):
    class Meta:
        model = Section
        fields = '__all__'

class ClassesSerializerForStudent(serializers.ModelSerializer):
    section = SectionSerializerForStudent(read_only=False)
    teacher = FacultySerializerForStudent(read_only=False)
    class Meta:
        model = Class
        fields = '__all__'

class GradeScoreEntitySerializerForStudent(serializers.ModelSerializer):
    in_class = ClassesSerializerForStudent(read_only=False)
    class Meta:
        model = GradeSheet
        fields = '__all__'

class GetStudentDataSerializer(serializers.ModelSerializer):
    userprofile = UserSerializer(read_only=False)
    related_grade_entities = GradeScoreEntitySerializerForStudent(read_only=False, many=True)
   
    class Meta:
        model = StudentProfile
        fields = '__all__'
# for dashboard end student


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

class SectionSerializer(serializers.ModelSerializer):
    adviser = GetFacultySerializer(read_only=False)
    class Meta:
        model = Section
        fields = '__all__'

class SectionAddSerializer(serializers.ModelSerializer):
    students = serializers.PrimaryKeyRelatedField(many=True, queryset=StudentProfile.objects.all())
    class Meta:
        model = Section
        fields = '__all__'

class StaffSerializer(serializers.ModelSerializer):
    userprofile = UserProfileSerializer(read_only=False)

    class Meta:
        model = StaffProfile
        fields = '__all__'

class SchoolyearSerializer(serializers.ModelSerializer):
    principal = GetFacultySerializer(read_only=False)
    assistantprincipal = GetFacultySerializer(read_only=False)
    class Meta:
        model = SchoolYear
        fields = '__all__'

class ClassesSerializer(serializers.ModelSerializer):
    teacher = GetFacultySerializer(read_only=False)
    section = SectionSerializer(read_only=False)
    class Meta:
        model = Class
        fields = '__all__'

class ClassesAddSerializer(serializers.ModelSerializer):
    class Meta:
        model = Class
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
    
#weather
class DeviceProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeviceProfile
        fields = '__all__'