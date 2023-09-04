import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';

function Dashboard(props) {

  return (
    <h1>Hello World</h1>
  )

}

const mapStateToProps = (state) => ({
  });

export default withAuth(connect(mapStateToProps)(Dashboard))