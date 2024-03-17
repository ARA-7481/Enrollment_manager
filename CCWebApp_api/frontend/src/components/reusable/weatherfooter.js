import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Navbar } from 'react-bootstrap';



function WeatherFooter(){


return(
    <>
    <div style={{display: 'flex', verticalAlign: 'middle', height: '51px', margin: '0px', backgroundColor:'rgba(51, 51, 51, 0.4)'}}>
        <Nav.Link style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '12px', marginTop: '18px', marginLeft: '18px'}}>Privacy Policy</Nav.Link>
        <Nav.Link style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '12px', marginTop: '18px', marginLeft: '18px'}}>Terms of Use</Nav.Link>
    </div>
    </>
    )
}

export default (WeatherFooter);