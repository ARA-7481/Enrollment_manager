import React, { useState, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState } from '../../redux/actions/main';

import { Col } from 'react-bootstrap';

function Dashboard(props) {

  useEffect(() => {
    props.setsidebarState('dashboard');
    props.setsubsidebarState(null);
  }, []);

  return (
      <>
      <Col>
      <div style={{display:'flex'}}>
          <h1>Dashboard</h1>
      </div>
      <div>
          
      </div>
      </Col>
      
      </>
    );
}

Dashboard.propTypes = {
  sidebarState: PropTypes.string,
  setsidebarState: PropTypes.func.isRequired,
  subsidebarState: PropTypes.string,
  setsubsidebarState: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  sidebarState: state.main.sidebarState,
  subsidebarState: state.main.subsidebarState,
  });

export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState})(Dashboard))