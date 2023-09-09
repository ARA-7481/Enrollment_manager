import React, { Component, Fragment } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/reducers/store';

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
          <Route path="subjects" element={<Subjects />} />
          <Route path="course" element={<Course />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="settings" element={<Settings />} />
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