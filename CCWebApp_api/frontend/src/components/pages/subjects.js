import React, { useState, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState } from '../../redux/actions/main';

import { Col } from 'react-bootstrap';

function Subjects(props) {

  useEffect(() => {
    props.setsidebarState('subjects');
  }, []);

  return (
      <>
      <Col>
      <div style={{display:'flex'}}>
          <h1>Subjects</h1>
      </div>
      <div>
          
      </div>
      </Col>
      
      </>
    );
}

Subjects.propTypes = {
  sidebarState: PropTypes.string,
  setsidebarState: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  sidebarState: state.main.sidebarState
  });

export default withAuth(connect(mapStateToProps, {setsidebarState})(Subjects))