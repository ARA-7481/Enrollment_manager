import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { Col } from 'react-bootstrap';


function Dashboard(props) {

  return (
      <>
      <Col style={{backgroundColor: '#e9ecef'}}>
      <div style={{display:'flex'}}>
          
      </div>
      <div>
          
      </div>
      </Col>
      
      </>
    );
}
const mapStateToProps = (state) => ({
  });

export default withAuth(connect(mapStateToProps)(Dashboard))