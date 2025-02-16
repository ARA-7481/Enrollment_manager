import React, { Component, Fragment, lazy, Suspense, useEffect } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/reducers/store';
import { Spinner } from 'react-bootstrap';
import '../assets/css/text.css'
import '../assets/css/forms.css'
import '../assets/css/skeleton.css'
import '../assets/css/popups.css'
import '../assets/css/sidebar.css'
import '../assets/css/avatars.css'
import '../assets/css/portalbody.css'
import '../assets/css/water.css'
import '../assets/css/calendar.css'
import '../assets/css/scheduler.css'
import '../assets/css/TimePicker.css'

const Fallback = lazy(() =>  import('./reusable/fallback'))
const WeatherLayout = lazy(() =>  import('./layouts/Weatherlayout'))
const AuthLayout = lazy(() =>  import('./layouts/Authlayout'))
const MainLayout = lazy(() =>  import('./layouts/Mainlayout'))
const Studentlayout = lazy(() =>  import('./layouts/Studentlayout'))
const Teacherlayout = lazy(() =>  import('./layouts/Teacherlayout'))
const Waterlayout = lazy(() =>  import('./layouts/Waterlayout'))
const Signin = lazy(() =>  import('./accounts/admin-signin'))
const Class = lazy(() =>  import('./index_4/class.js'))
const Subjects = lazy(() =>  import('./index_4/subjects.js'))
const Sections = lazy(() =>  import('./index_4/sections.js'))
const SectionPage = lazy(() =>  import('./index_4/section-studentmanagement.js'))
const UsersAdmin = lazy(() =>  import('./index_4/users-admin.js'))
const UsersStudents = lazy(() =>  import('./index_4/users-students.js'))
const UsersTeachers = lazy(() =>  import('./index_4/users-teachers.js'))
const UsersMasterlist = lazy(() =>  import('./index_4/users-masterlist.js'))
const ClassCreate = lazy(() =>  import('./index_4/class-create.js'))
const SubjectCreate = lazy(() =>  import('./index_4/subject-create.js'))
const SectionCreate = lazy(() =>  import('./index_4/section-create.js'))
const RoomCreate = lazy(() =>  import('./index_4/room-create.js'))
const RegisterUserstudent = lazy(() =>  import('./index_4/register-studentuser.js'))
const RegisterUserteacher = lazy(() =>  import('./index_4/register-teacheruser.js'))
const Studentgradesadmin = lazy(() =>  import('./index_4/dashboard-admin-studentgrade.js'))
const Updatestudentdata = lazy(() =>  import('./index_4/admin-updatestudentdata.js'))
const Studentdatasheet = lazy(() =>  import('./index_4/student-informationform.js'))
const Facultydatasheet = lazy(() =>  import('./index_4/faculty-informationform.js'))
const SchoolYear = lazy(() =>  import('./index_4/schoolyear.js'))

const Studentdashboard = lazy(() =>  import('./index_4/dashboard-student.js'))
const StudentProfile = lazy(() =>  import('./index_4/student-profile.js'))
const WaterProfile = lazy(() =>  import('./index_4/wateruserprofile.js'))

const FacultyDashboard = lazy(() =>  import('./index_4/dashboard-faculty.js'))
const FacultyDashboardAdvisory = lazy(() =>  import('./index_4/dashboard-faculty-advisory.js'))
const AdvisoryPage = lazy(() =>  import('./index_4/dashboard-faculty-sectionpage.js'))
const FacultyProfile = lazy(() =>  import('./index_4/faculty-profile.js'))
const ClassPage = lazy(() =>  import('./index_4/dashboard-faculty-classpage.js'))
const Studentgrades = lazy(() =>  import('./index_4/dashboard-faculty-advisorystudentgrade.js'))


const WeatherDashboard = lazy(() =>  import('./index_2/weatherdashboard'))
const GenSignin = lazy(() =>  import('./accounts/general-signin'))

const WaterDashboard = lazy(() =>  import('./index_3/waterdashboard.js'))
const WaterBilling = lazy(() =>  import('./index_3/billing.js'))

const SchedulerLayout = lazy(() =>  import('./layouts/Scheduler.js'))
const SchedulerDashboard = lazy(() => import('./main/calendar.js'))

const container = document.getElementById('app');
const root = ReactDOMClient.createRoot(container);

function AppContent() {
    const location = useLocation();
    useEffect(() => {
      // console.log('Page changed to: ', location.pathname);
      }, [location]);
    return (
        <Fragment>
        <Routes>

         <Route path="" element={<GenSignin />} />
         <Route path="login" element={<GenSignin />} />

         <Route path="signin" element={<GenSignin />} />

          <Route path='/auth' element={<AuthLayout/>}>
          <Route index element={<GenSignin />} />
          <Route path="admin-signin" element={<GenSignin />} />
          </Route>

          <Route path='/admins' element={<MainLayout/>}>
          <Route index element={<UsersStudents />} />
          <Route path="dashboard" element={<UsersStudents />} />
          <Route path="class" element={<Class />} />
          <Route path="class-create" element={<ClassCreate />} />
          <Route path="subjects" element={<Subjects />} />
          <Route path="subjects-create" element={<SubjectCreate />} />
          <Route path="sections" element={<Sections />} />
          <Route path="section-page" element={<SectionPage />} />
          <Route path="section-create" element={<SectionCreate />} />
          <Route path="rooms-create" element={<RoomCreate />} />
          <Route path="users-admin" element={<UsersAdmin />} />
          <Route path="users-students" element={<UsersStudents />} />
          <Route path="users-teachers" element={<UsersTeachers />} />
          <Route path="users-masterlist" element={<UsersMasterlist />} />
          <Route path="register-studentuser" element={<RegisterUserstudent />} />
          <Route path="register-teacheruser" element={<RegisterUserteacher />} />
          <Route path="schoolyear" element={<SchoolYear />} />
          <Route path="studentgrades" element={<Studentgradesadmin />} />
          <Route path="updatestudentdata" element={<Updatestudentdata />} />
          <Route path="informationform" element={<Studentdatasheet />} />
          <Route path="facultyinformationform" element={<Facultydatasheet />} />
          </Route>

          <Route path='/students' element={<Studentlayout/>}>
          <Route index element={<Studentdashboard />} />
          <Route path="dashboard" element={<Studentdashboard />} />
          <Route path="profile" element={<StudentProfile />} />
          </Route>

          <Route path='/faculty' element={<Teacherlayout/>}>
          <Route index element={<FacultyDashboard />} />
          <Route path="dashboard" element={<FacultyDashboard />} />
          <Route path="advisory" element={<FacultyDashboardAdvisory />} />
          <Route path="advisorypage" element={<AdvisoryPage />} />
          <Route path="profile" element={<FacultyProfile />} />
          <Route path="classpage" element={<ClassPage />} />
          <Route path="studentgrade" element={<Studentgrades />} />
          </Route>

          <Route path='/weather' element={<WeatherLayout/>}>
          <Route index element={<WeatherDashboard />} />
          <Route path="dashboard" element={<WeatherDashboard />} />
          </Route>

          <Route path='/water' element={<Waterlayout/>}>
          <Route index element={<WaterDashboard />} />
          <Route path="dashboard" element={<WaterDashboard />} />
          <Route path="profile" element={<WaterProfile />} />
          <Route path='billing' element={<WaterBilling />} />
          </Route>

        

          <Route path='/scheduler' element={<SchedulerLayout/>}>
          <Route index element={<SchedulerDashboard />} />
          <Route path="dashboard" element={<SchedulerDashboard />} />
          </Route>

          

        </Routes>
        </Fragment>
    )}

class App extends Component {
    render() {
      return (
        <Provider store={store}>
          <Router>
            <Suspense  fallback={<h1>loading...</h1>}>
            <AppContent />
            </Suspense>
          </Router>
        </Provider>
      );
    }
  }

root.render(<App />);