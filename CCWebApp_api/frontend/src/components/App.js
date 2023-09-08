import React, { Component, Fragment } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/reducers/store';

import AuthLayout from './layouts/Authlayout';
import MainLayout from './layouts/Mainlayout';

import Signin from './accounts/admin-signin';
import Dashboard from './pages/admin-dashboard';


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

          <Route path='/admin' element={<MainLayout/>}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
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