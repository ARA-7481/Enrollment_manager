import React from 'react';
import { Outlet } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import Sidebar from '../reusable/sidebar';
import TopNavbar from '../reusable/topnavbar';
import Footer from '../reusable/footer';
import PropTypes, { func } from 'prop-types';
import { connect, useDispatch } from 'react-redux';

import ErrorPopupmain from '../reusable/error-main';


const MainLayout = (props) => {
  return (
    <>
    
    <div style={{display: 'flex', backgroundColor: '#e9ecef'}} > 
            <Sidebar/>
            <div style={{width: '100%', position: 'relative'}}>
              {props.errorMessage && 
              <div style={{position: 'fixed', left: '56%', transform: 'translateX(-50%)', zIndex: 9999}}>
              <ErrorPopupmain/>
              </div>
              }
              <div>
              <TopNavbar/>
              </div>
              <div style={{transform: 'translate( 40px, -36px)', backgroundColor: '#ffffff', marginRight: '80px', borderRadius:'8px', minHeight: '64.5vh'}}>
              <Outlet/>
              </div> 
              <div style={{position: 'sticky', bottom: 0, backgroundColor: '#ffffff'}}>
              <Footer/>
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