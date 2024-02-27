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
const Class = lazy(() =>  import('./pages/class'))
const Subjects = lazy(() =>  import('./pages/subjects'))
const Sections = lazy(() =>  import('./pages/sections'))
const UsersAdmin = lazy(() =>  import('./pages/users-admin'))
const UsersStudents = lazy(() =>  import('./pages/users-students'))
const UsersTeachers = lazy(() =>  import('./pages/users-teachers'))
const UsersMasterlist = lazy(() =>  import('./pages/users-masterlist'))
const ClassCreate = lazy(() =>  import('./pages/class-create'))
const SubjectCreate = lazy(() =>  import('./pages/subject-create'))
const RoomCreate = lazy(() =>  import('./pages/room-create'))
const RegisterUserstudent = lazy(() =>  import('./pages/register-studentuser'))
const RegisterUserteacher = lazy(() =>  import('./pages/register-teacheruser'))

const SchoolYear = lazy(() =>  import('./pages/schoolyear.js'))


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
          <Route index element={<UsersStudents />} />
          <Route path="dashboard" element={<UsersStudents />} />
          <Route path="class" element={<Class />} />
          <Route path="class-create" element={<ClassCreate />} />
          <Route path="subjects" element={<Subjects />} />
          <Route path="subjects-create" element={<SubjectCreate />} />
          <Route path="sections" element={<Sections />} />
          <Route path="rooms-create" element={<RoomCreate />} />
          <Route path="users-admin" element={<UsersAdmin />} />
          <Route path="users-students" element={<UsersStudents />} />
          <Route path="users-teachers" element={<UsersTeachers />} />
          <Route path="users-masterlist" element={<UsersMasterlist />} />
          <Route path="register-studentuser" element={<RegisterUserstudent />} />
          <Route path="register-teacheruser" element={<RegisterUserteacher />} />
          <Route path="schoolyear" element={<SchoolYear />} />
          </Route>

          <Route path='/students' element={<Studentlayout/>}>
          <Route index element={<UsersStudents />} />
          </Route>

          <Route path='/faculty' element={<Teacherlayout/>}>
          <Route index element={<UsersStudents />} />
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