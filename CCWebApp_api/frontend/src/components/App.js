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

const Fallback = lazy(() =>  import('./reusable/fallback'))
const AuthLayout = lazy(() =>  import('./layouts/Authlayout'))
const MainLayout = lazy(() =>  import('./layouts/Mainlayout'))
const Studentlayout = lazy(() =>  import('./layouts/Studentlayout'))
const Teacherlayout = lazy(() =>  import('./layouts/Teacherlayout'))
const Signin = lazy(() =>  import('./accounts/admin-signin'))
const Dashboard = lazy(() => import('./pages/admin-dashboard'))
const Schedules = lazy(() =>  import('./pages/schedules'))
const Class = lazy(() =>  import('./pages/class'))
const Subjects = lazy(() =>  import('./pages/subjects'))
const Course = lazy(() =>  import('./pages/course'))
const Rooms = lazy(() =>  import('./pages/rooms'))
const Settings = lazy(() =>  import('./pages/settings'))
const UsersAdmin = lazy(() =>  import('./pages/users-admin'))
const UsersStudents = lazy(() =>  import('./pages/users-students'))
const UsersTeachers = lazy(() =>  import('./pages/users-teachers'))
const UsersMasterlist = lazy(() =>  import('./pages/users-masterlist'))
const ClassCreate = lazy(() =>  import('./pages/class-create'))
const SubjectCreate = lazy(() =>  import('./pages/subject-create'))
const RoomCreate = lazy(() =>  import('./pages/room-create'))
const CourseCreate = lazy(() =>  import('./pages/course-create'))

const Studentdashboard = lazy(() => import('./pages/student-dashboard'))
const Studentclasspage = lazy(() => import('./pages/student-classpage'))
const ActivitySubmit = lazy(() => import('./pages/student-activitysubmit'))

const TeacherDashboard = lazy(() => import('./pages/teacher-dashboard'))
const Teacherclasspage = lazy(() => import('./pages/teacher-classpage'))
const ActivityCreate = lazy(() => import('./pages/activity-create'))
const EntryView = lazy(() => import('./pages/teacher-entryview'))
const VeiwDetail = lazy(() => import('./pages/teacher-viewdetail'))


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

         <Route path="" element={<Signin />} />

          <Route path='/auth' element={<AuthLayout/>}>
          <Route index element={<Signin />} />
          <Route path="admin-signin" element={<Signin />} />
          </Route>

          <Route path='/admins' element={<MainLayout/>}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="schedules" element={<Schedules />} />
          <Route path="class" element={<Class />} />
          <Route path="class-create" element={<ClassCreate />} />
          <Route path="subjects" element={<Subjects />} />
          <Route path="subjects-create" element={<SubjectCreate />} />
          <Route path="course" element={<Course />} />
          <Route path="course-create" element={<CourseCreate />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="rooms-create" element={<RoomCreate />} />
          <Route path="settings" element={<Settings />} />
          <Route path="users-admin" element={<UsersAdmin />} />
          <Route path="users-students" element={<UsersStudents />} />
          <Route path="users-teachers" element={<UsersTeachers />} />
          <Route path="users-masterlist" element={<UsersMasterlist />} />
          </Route>

          <Route path='/students' element={<Studentlayout/>}>
          <Route index element={<Studentdashboard />} />
          <Route path="dashboard" element={<Studentdashboard />} />
          <Route path="classdashboard" element={<Studentclasspage />} />
          <Route path="activity-submit" element={<ActivitySubmit />} />
          </Route>

          <Route path='/teachers' element={<Teacherlayout/>}>
          <Route index element={<TeacherDashboard />} />
          <Route path="dashboard" element={<TeacherDashboard />} />
          <Route path="classdashboard" element={<Teacherclasspage />} />
          <Route path="activity-create" element={<ActivityCreate />} />
          <Route path="activity-entryview" element={<EntryView />} />
          <Route path="activity-viewdetail" element={<VeiwDetail />} />
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