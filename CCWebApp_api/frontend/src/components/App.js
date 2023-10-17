import React, { Component, Fragment, lazy, Suspense } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/reducers/store';
import '../assets/css/text.css'
import '../assets/css/forms.css'

const AuthLayout = lazy(() =>  import('./layouts/Authlayout'))
const MainLayout = lazy(() =>  import('./layouts/Mainlayout'))
const Signin = lazy(() =>  import('./accounts/admin-signin'))
const Dashboard = lazy(() => wait(1000).then(() => import('./pages/admin-dashboard')))
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

const container = document.getElementById('app');
const root = ReactDOMClient.createRoot(container);

function AppContent() {
    const location = useLocation();
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
          <Route path="course" element={<Course />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="settings" element={<Settings />} />
          <Route path="users-admin" element={<UsersAdmin />} />
          <Route path="users-students" element={<UsersStudents />} />
          <Route path="users-teachers" element={<UsersTeachers />} />
          <Route path="users-masterlist" element={<UsersMasterlist />} />
          </Route>

        </Routes>
        </Fragment>
    )}

class App extends Component {
    render() {
      return (
        <Provider store={store}>
          <Router>
            <Suspense fallback={<h1>Loading...</h1>}>
            <AppContent />
            </Suspense>
          </Router>
        </Provider>
      );
    }
  }

function wait(time){
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

root.render(<App />);