import React from 'react';
import { Outlet } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import Sidebar from '../reusable/sidebar';




const MainLayout = () => {
    return (
      <>

      <div style={{display: 'flex'}} > 
              <Sidebar/>
               <Outlet/>  
        </div>


    </>
    );
  };
  
  export default MainLayout;