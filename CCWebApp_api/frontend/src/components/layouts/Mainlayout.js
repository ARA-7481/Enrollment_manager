import React from 'react';
import { Outlet } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import Sidebar from '../reusable/sidebar';
import TopNavbar from '../reusable/topnavbar';
import Footer from '../reusable/footer';


const MainLayout = () => {
    return (
      <>
      <div style={{display: 'flex', backgroundColor: '#e9ecef'}} > 
              <Sidebar/>
              <div style={{width: '100%'}}>
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
  
  export default MainLayout;