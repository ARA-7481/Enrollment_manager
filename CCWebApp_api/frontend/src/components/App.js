import React, { Component, Fragment } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/reducers/store';
import '../assets/css/text.css'
import '../assets/css/forms.css'

import AuthLayout from './layouts/Authlayout';
import MainLayout from './layouts/Mainlayout';

import Signin from './accounts/admin-signin';
import Dashboard from './pages/admin-dashboard';
import Schedules from './pages/schedules';
import Class from './pages/class';
import Subjects from './pages/subjects';
import Course from './pages/course';
import Rooms from './pages/rooms';
import Settings from './pages/settings';
import UsersAdmin from './pages/users-admin';
import UsersStudents from './pages/users-students';
import UsersTeachers from './pages/users-teachers';
import UsersMasterlist from './pages/users-masterlist';
import ClassCreate from './pages/class-create';


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
            <AppContent />
          </Router>
        </Provider>
      );
    }
  }

root.render(<App />);