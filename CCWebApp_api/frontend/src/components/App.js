import React, { Component, Fragment } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

const container = document.getElementById('app');
const root = ReactDOMClient.createRoot(container);

function AppContent() {
    const location = useLocation();
    return (
        <Fragment>
            <h1>adril cute</h1>
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