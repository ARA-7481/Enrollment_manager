import React, { useState } from 'react';
import { useEffect } from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import Nav from 'react-bootstrap/Nav';
import { Card } from 'react-bootstrap';

import { MainIcon, UsersIcon, SchedulesIcon, DashboardIcon, ClassIcon, SubjectsIcon, CourseIcon, RoomsIcon, SettingsIcon, ToogleIcon, ColoredHat, ToogleIconOn } from '../../assets/svg/clnsmpl-icon';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
  }, [isCollapsed, isToggled]);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    setIsToggled(!isToggled);
  };


  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>

      <CDBSidebar toggled={isToggled} breakpoint={200} textColor='#8A92A6' backgroundColor="#fff" collapsed={isCollapsed} maxWidth='245px' minWidth='80px' style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '16px'}}>

        <CDBSidebarHeader prefix={
          <div style={{display: 'flex'}}>

            <div style={{transform: 'translate(-6px, 6px)', position:'fixed'}}>
            {isCollapsed && 
             <Nav.Link href="/">
              <ColoredHat />
            </Nav.Link>
            }
            </div>

            
          <Card onClick={handleCollapse} style={{ transform: 'translate(50px, 6px)', position:'fixed', width:'10px'}}>
          {!isCollapsed && 
              <ToogleIcon />
            }
            {isCollapsed && 
              <ToogleIconOn />
            }
          </Card>


          </div>
                                  }


         style={{display: 'flex', height: '100px'}} 
        >
            {!isCollapsed && 
            <Nav.Link href="/" style={{}}>
              <MainIcon />
            </Nav.Link>
            }
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu style={{display:'flex', justifyContent: 'center', paddingLeft: isCollapsed ? '20px' : '0px'}}>

            <Nav.Link href="/" style={{paddingBottom: '24px'}}>
            <div style={{display:'flex', justifyContent: 'start', alignItems: 'center'}}>
            <DashboardIcon/>
            <div style={{paddingLeft: '20px'}}>
            {!isCollapsed && 'Dashboard'}
            </div>
            </div>
            </Nav.Link>

            <Nav.Link href="/" style={{paddingBottom: '24px'}}>
            <div style={{display:'flex', justifyContent: 'start', alignItems: 'center'}}>
            <UsersIcon/>
            <div style={{paddingLeft: '20px'}}>
            {!isCollapsed && 'Users'}
            </div>
            </div>
            </Nav.Link>

            <Nav.Link href="/" style={{paddingBottom: '24px'}}>
            <div style={{display:'flex', justifyContent: 'start', alignItems: 'center'}}>
            <SchedulesIcon/>
            <div style={{paddingLeft: '20px'}}>
            {!isCollapsed && 'Schedules'}
            </div>
            </div>
            </Nav.Link>

            <Nav.Link href="/" style={{paddingBottom: '24px'}}>
            <div style={{display:'flex', justifyContent: 'start', alignItems: 'center'}}>
            <ClassIcon/>
            <div style={{paddingLeft: '20px'}}>
            {!isCollapsed && 'Class'}
            </div>
            </div>
            </Nav.Link>

            <Nav.Link href="/" style={{paddingBottom: '24px'}}>
            <div style={{display:'flex', justifyContent: 'start', alignItems: 'center'}}>
            <SubjectsIcon/>
            <div style={{paddingLeft: '20px'}}>
            {!isCollapsed && 'Subjects'}
            </div>
            </div>
            </Nav.Link>

            <Nav.Link href="/" style={{paddingBottom: '24px'}}>
            <div style={{display:'flex', justifyContent: 'start', alignItems: 'center'}}>
            <CourseIcon/>
            <div style={{paddingLeft: '20px'}}>
            {!isCollapsed && 'Course'}
            </div>
            </div>
            </Nav.Link>
            
            <Nav.Link href="/" style={{paddingBottom: '24px'}}>
            <div style={{display:'flex', justifyContent: 'start', alignItems: 'center'}}>
            <RoomsIcon/>
            <div style={{paddingLeft: '20px'}}>
            {!isCollapsed && 'Rooms'}
            </div>
            </div>
            </Nav.Link>

            <Nav.Link href="/" style={{paddingBottom: '24px'}}>
            <div style={{display:'flex', justifyContent: 'start', alignItems: 'center'}}>
            <SettingsIcon/>
            <div style={{paddingLeft: '20px'}}>
            {!isCollapsed && 'Settings'}
            </div>
            </div>
            </Nav.Link>

          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;