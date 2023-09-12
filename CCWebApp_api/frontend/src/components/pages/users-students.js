import React, { useState, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState, setpageHeader } from '../../redux/actions/main';

import { Card, Col } from 'react-bootstrap';

function UsersStudents(props) {

  useEffect(() => {
    props.setsidebarState('users');
    props.setsubsidebarState('students');
    props.setpageHeader('Manage Students', '{semester} {SY: 20xx-20xx}', 'Manage students here. Enroll, Update, Evaluate etc.')
  }, []);

  return (
      <>
      <div style={{backgroundColor:'#e9ecef', borderTopLeftRadius:'8px', borderTopRightRadius:'8px'}}>
      <div style={{backgroundColor:'#ffffff', height: '72px', borderRadius:'8px'}}>
      </div>
      

      <div style={{height: '40px', backgroundColor:'rgba(51, 51, 51, 0.00)', margin: '0px'}}>
      </div>

      <div style={{backgroundColor:'#ffffff', display:'flex', borderRadius:'8px'}}>
        <h1>User-Students</h1>
      </div>
      </div>
      
      </>
    );
}

UsersStudents.propTypes = {
  sidebarState: PropTypes.string,
  subsidebarState: PropTypes.string,
  pageHeader: PropTypes.object,
  setsidebarState: PropTypes.func.isRequired,
  setsubsidebarState: PropTypes.func.isRequired,
  setpageHeader: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  sidebarState: state.main.sidebarState,
  subsidebarState: state.main.subsidebarState,
  pageHeader: state.main.pageHeader,
  });

export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setpageHeader})(UsersStudents))