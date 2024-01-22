import { Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, Navbar, Button } from 'react-bootstrap';
import withAuth from '../common/withAuth';

import {SignOut} from '../../redux/actions/auth';

function MainNavbar(props){
    const handleSignout = () => {
      props.SignOut()
      return <Navigate to="/auth/admin-signin" />;
    }

    const user = JSON.parse(localStorage.getItem('user'))
    if (!user){
      return <Navigate to="/auth/admin-signin" />;
    }

    return(
        <div style={{display:'flex', justifyContent: 'flex-end', width: '100%', height:'76px', paddingRight: '20px', backgroundColor: 'white', paddingTop: '15px'}}>
        <div>
          <h1 style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '16px'}}>{user.first_name} {user.last_name}</h1>
          <Button onClick={handleSignout} style={{backgroundColor: '#556BD9', color:'#ffffff', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '13px', maxHeight: '30px', paddingTop: '5px'}}>Log Out</Button>
        </div>
        </div>
    )
}

MainNavbar.propTypes = {
  SignOut: PropTypes.func,
}

const mapStateToProps = (state) => ({

})

export default withAuth(connect(mapStateToProps, {SignOut})(MainNavbar))