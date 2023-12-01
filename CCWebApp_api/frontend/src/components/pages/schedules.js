import React, { useState, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState, setpageHeader } from '../../redux/actions/main';

import { Col } from 'react-bootstrap';
import {ComingSoon} from '../../assets/svg/clnsmpl-icon';

function Schedules(props) {

  useEffect(() => {
    props.setsidebarState('schedules');
    props.setsubsidebarState(null);
    props.setpageHeader('Schedules', '', 'See class schedules');
  }, []);

  return (
    <div style={{backgroundColor:'#ffffff', display: 'flex', borderRadius:'8px', padding: '100px', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
    <div>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '24px'}}>
        <h1>Coming Soon</h1>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '48px'}}>
        <h6 className='inter-500-16px'>This page is a work in progress. We'll let you know once this page is published. </h6>
      </div>
      <ComingSoon/>
    </div>
  </div>
    );
}

Schedules.propTypes = {
  sidebarState: PropTypes.string,
  setsidebarState: PropTypes.func.isRequired,
  subsidebarState: PropTypes.string,
  setsubsidebarState: PropTypes.func.isRequired,
  setpageHeader: PropTypes.func,
}

const mapStateToProps = (state) => ({
  sidebarState: state.main.sidebarState,
  subsidebarState: state.main.subsidebarState
  });

export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setpageHeader})(Schedules))