import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import Sidebar from '../reusable/sidebar';
import TopNavbar from '../reusable/topnavbar';
import Footer from '../reusable/footer';
import MainNavbar from '../reusable/mainnavbar';
import PropTypes, { func } from 'prop-types';
import { connect, useDispatch } from 'react-redux';

import ErrorPopupmain from '../reusable/error-main';


const MainLayout = (props) => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <>
    
    <div style={{display: 'flex', backgroundColor: '#e9ecef', height: windowHeight, overflow: 'hidden' }} > 
            <div style={{zIndex: 9999}}>
            <Sidebar/>
            </div>
            <div style={{width: '100%', position: 'relative'}}>
              {props.errorMessage && 
              <div style={{position: 'fixed', left: '56%', transform: 'translateX(-50%)', zIndex: 9999}}>
              <ErrorPopupmain/>
              </div>
              }
              <div style={{maxHeight:windowHeight, overflowY: 'auto', zIndex: 9999}}>

              <div style={{position: 'sticky', top:0, zIndex: 9998}}>
              <MainNavbar/>
              </div>
              <div>
              <TopNavbar/>
              </div>
              
              <div style={{transform: 'translate( 40px, -36px)', backgroundColor: '#ffffff', marginRight: '80px', borderRadius:'8px', minHeight: '64.5vh'}}>
              <Outlet/>
              </div>
              <div style={{position: 'sticky', bottom: 0, backgroundColor: '#ffffff', width: '100%'}}>
              <Footer/>
              </div> 
              </div> 

              
            </div>
             
      </div>
  </>
  );
};

MainLayout.propTypes = {
    errorMessage: PropTypes.string,
}

const mapStateToProps = (state) => ({
    errorMessage: state.main.errorMessage,
  });

  
  export default connect(mapStateToProps, {})(MainLayout);