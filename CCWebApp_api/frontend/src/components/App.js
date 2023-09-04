import React, { Component, Fragment } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/reducers/store';

import Signin from './accounts/admin-signin';
import Dashboard from './pages/admin-dashboard';

const container = document.getElementById('app');
const root = ReactDOMClient.createRoot(container);

function AppContent() {
    const location = useLocation();
    return (
        <Fragment>

        {/* {
       location.pathname !== '/admin-signin' && (
        <Header />
        )} */}

          <Routes>
          <Route exact path="*" element={<Signin />} />
          <Route exact path="/admin-signin" element={<Signin />} />
          <Route exact path="/admin-dashboard" element={<Dashboard />} />
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