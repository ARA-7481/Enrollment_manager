import React, { useState, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState } from '../../redux/actions/main';

import { Col } from 'react-bootstrap';

function UsersStudents(props) {

  useEffect(() => {
    props.setsidebarState('users');
    props.setsubsidebarState('students');
  }, []);

  return (
      <>
      <Col>
      <div style={{display:'flex'}}>
          <h1>User-Students</h1>
      </div>
      <div>
          
      </div>
      </Col>
      
      </>
    );
}

UsersStudents.propTypes = {
  sidebarState: PropTypes.string,
  subsidebarState: PropTypes.string,
  setsidebarState: PropTypes.func.isRequired,
  setsubsidebarState: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  sidebarState: state.main.sidebarState,
  subsidebarState: state.main.subsidebarState
  });

export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState})(UsersStudents))