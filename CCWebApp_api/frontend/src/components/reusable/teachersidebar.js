import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
import { Card, Container, Accordion } from 'react-bootstrap';
import { setsidebarState, setsubsidebarState} from '../../redux/actions/main';

import {ConnectedAccordionIconClose, ConnectedAccordionIconOpen, ConnectedDashboardIcon, ConnectedUsersIcon, ConnectedSchedulesIcon, ConnectedClassIcon, ConnectedSubjectsIcon, ConnectedCourseIcon, ConnectedRoomsIcon, ConnectedSettingsIcon, ConnectedDotIconStudents, ConnectedDotIconTeachers, ConnectedDotIconAdmin, ConnectedDotIconMasterlist, MainIcon, ToogleIcon, ColoredHat, ToogleIconOn } from '../../assets/svg/clnsmpl-icon';


function Teachersidebar(props){
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    setIsToggled(!isToggled);
  };


 useEffect(() => {
  if(!isCollapsed){
    if(window.innerWidth < 1140){
      handleCollapse()
    }
  }
  
}, [isCollapsed, isToggled, props.sidebarState, props.subsidebarState, window.innerWidth]);

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial', }}>

      <CDBSidebar toggled={isToggled} breakpoint={200} textColor='#8A92A6' backgroundColor="#fff" collapsed={isCollapsed} maxWidth={isCollapsed ? '92px' : '257px'} minWidth='92px' style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '16px'}}>

        <CDBSidebarHeader prefix={
          <div style={{display: 'flex'}}>

            <div style={{transform: 'translate( 0px, 6px)'}}>
            {isCollapsed && 
             <Nav.Link href="/#/teachers/dashboard" onClick={handleCollapse}>
              <ColoredHat />
            </Nav.Link>
            }
            </div>
          {(window.innerWidth >= 1140) &&
          <Card onClick={handleCollapse} style={{backgroundColor:'rgba(51, 51, 51, 0.00)', transform: 'translate(86px, 6px)', position:'fixed', width:'10px'}}>
          {!isCollapsed && 
              <ToogleIcon />
            }
            {isCollapsed && 
              <ToogleIconOn />
            }
          </Card>
          }
          </div>
                                  }

         style={{display: 'flex', height: '78px'}} 
        >
            {!isCollapsed && 
            <Nav.Link href="/#/teachers/dashboard" style={{transform: 'translate( 0px, -12px)'}}>
              <MainIcon />
            </Nav.Link>
            }
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu style={{  display:'flex', justifyContent: 'start', paddingLeft:'24px'}}>

            <Nav.Link href="/#/teachers/dashboard" style={{paddingBottom: '8px'}}>
            <div title={isCollapsed ? 'Activities':''} className='zooming-icon' style={{color: props.sidebarState === 'dashboard' ? 'white' : '', backgroundColor: props.sidebarState === 'dashboard' ? '#3A57E8' : '' ,display:'flex', justifyContent: isCollapsed ? 'center':'start', alignItems: 'center', width: isCollapsed ? '45px' : '210px', height:'44px', borderRadius:'4px'}}>
            <div style={{marginLeft: isCollapsed ? '20px':'10px'}}>
            <ConnectedDashboardIcon/>
            </div>
            <div style={{paddingLeft: '20px'}}>
            {!isCollapsed && 'Activities'}
            </div>
            </div>
            </Nav.Link>
           
            

            {/* <Nav.Link href="/#/" style={{paddingBottom: '8px'}}>
            <div title={isCollapsed ? 'My Schedules':''} className='zooming-icon' style={{color: props.sidebarState === 'schedules' ? 'white' : '', backgroundColor: props.sidebarState === 'schedules' ? '#3A57E8' : '' ,display:'flex', justifyContent: isCollapsed ? 'center':'start', alignItems: 'center', width: isCollapsed ? '45px' : '210px', height:'44px', borderRadius:'4px'}}>
            <div style={{marginLeft: isCollapsed ? '20px':'10px'}}>
            <ConnectedSchedulesIcon/>
            </div>
            <div style={{paddingLeft: '20px'}}>
            {!isCollapsed && 'My Schedules'}
            </div>
            </div>
            </Nav.Link> */}


            <Nav.Link href="/#/" style={{paddingBottom: '8px'}}>
            <div title={isCollapsed ? 'My Profile':''} className='zooming-icon' style={{color: props.sidebarState === 'settings' ? 'white' : '', backgroundColor: props.sidebarState === 'settings' ? '#3A57E8' : '' ,display:'flex', justifyContent: isCollapsed ? 'center':'start', alignItems: 'center', width: isCollapsed ? '45px' : '210px', height:'44px', borderRadius:'4px'}}>
            <div style={{marginLeft: isCollapsed ? '20px':'10px'}}>
            <ConnectedSettingsIcon/>
            </div>
            <div style={{paddingLeft: '20px'}}>
            {!isCollapsed && 'My profile'}
            </div>
            </div>
            </Nav.Link>

          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

Teachersidebar.propTypes = {
  sidebarState: PropTypes.string,
  subsidebarState: PropTypes.string,
  setsidebarState: PropTypes.func.isRequired,
  setsubsidebarState: PropTypes.func.isRequired,
  windowDimensions: PropTypes.object,
}

const mapStateToProps = (state) => ({
  sidebarState: state.main.sidebarState,
  subsidebarState: state.main.subsidebarState,
  windowDimensions: state.main.windowDimensions,
  });


export default connect(mapStateToProps, {setsidebarState, setsubsidebarState})(Teachersidebar);