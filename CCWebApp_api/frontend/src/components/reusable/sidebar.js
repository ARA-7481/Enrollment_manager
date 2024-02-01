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
import logo from '../../assets/images/backgrounds/logo.png'

import {ConnectedAccordionIconClose, ConnectedAccordionIconOpen, ConnectedDashboardIcon, ConnectedUsersIcon, ConnectedSchedulesIcon, ConnectedClassIcon, ConnectedSubjectsIcon, ConnectedCourseIcon, ConnectedRoomsIcon, ConnectedSettingsIcon, ConnectedDotIconStudents, ConnectedDotIconTeachers, ConnectedDotIconAdmin, ConnectedDotIconMasterlist, MainIcon, ToogleIcon, ColoredHat, ToogleIconOn } from '../../assets/svg/clnsmpl-icon';


function Sidebar(props){
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [open, setOpen] = useState(false);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    setIsToggled(!isToggled);
  };

  const handleAccordion = () => {
    if (props.subsidebarState === 'admin'){
    navigate('/admins/users-admin');
    }
    else if (props.subsidebarState === 'student'){
    navigate('/admins/users-students');
    }
    else if (props.subsidebarState === 'teachers'){
      navigate('/admins/users-teachers');
      }
    // else if (props.subsidebarState === 'masterlist'){
    //   navigate('/admins/users-masterlist');
    //   }
    else if(props.subsidebarState === null){
      navigate('/admins/users-students');
      }

    if(open && props.sidebarState !== 'users'){
      setOpen(false)
    }
    else{
    setOpen(!open);
    props.setsidebarState('users');
      }
 };

 useEffect(() => {
  if(!isCollapsed){
    if(window.innerWidth < 1140){
      handleCollapse()
    }
  }
  
}, [isCollapsed, isToggled, props.sidebarState, open, props.subsidebarState, window.innerWidth]);

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial', }}>

      <CDBSidebar toggled={isToggled} breakpoint={200} textColor='#8A92A6' backgroundColor="#fff" collapsed={isCollapsed} maxWidth={isCollapsed ? '92px' : '257px'} minWidth='92px' style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '16px'}}>

        <CDBSidebarHeader prefix={
          <div style={{display: 'flex'}}>

            <div style={{transform: 'translate( 0px, 6px)'}}>
            {isCollapsed && 
             <Nav.Link href="/#/admins/users-students" onClick={handleCollapse}>
              <ColoredHat />
            </Nav.Link>
            }
            </div>
          {(window.innerWidth >= 1140) &&
          <Card onClick={handleCollapse} style={{backgroundColor:'rgba(51, 51, 51, 0.00)', transform: 'translate(68px, 6px)', position:'fixed', width:'10px'}}>
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

         style={{display: 'flex', height: '170px'}} 
        >
            {!isCollapsed && 
            <Nav.Link href="/#/admins/users-students" style={{transform: 'translate( 0px, -12px)'}}>
              <div style={{transform: 'translate( 35px, 0px)'}}>
                    <img className="circular-avatar" src={logo} alt="description" />
              
              </div>
              <h1 className='inter-500-16px-dark' style={{ marginTop: '8px'}}>SCHOOL MANAGEMENT</h1>
            </Nav.Link>
            }
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu style={{  display:'flex', justifyContent: 'start', paddingLeft:'24px'}}>

            {/* <Nav.Link href="/#/admins/dashboard" style={{paddingBottom: '8px'}}>
            <div title={isCollapsed ? 'Dashboard':''} className='zooming-icon' style={{color: props.sidebarState === 'dashboard' ? 'white' : '', backgroundColor: props.sidebarState === 'dashboard' ? '#3A57E8' : '' ,display:'flex', justifyContent: isCollapsed ? 'center':'start', alignItems: 'center', width: isCollapsed ? '45px' : '210px', height:'44px', borderRadius:'4px'}}>
            <div style={{marginLeft: isCollapsed ? '20px':'10px'}}>
            <ConnectedDashboardIcon/>
            </div>
            <div style={{paddingLeft: '20px'}}>
            {!isCollapsed && 'Dashboard'}
            </div>
            </div>
            </Nav.Link> */}

           
           
            <Accordion defaultActiveKey="0" style={{paddingBottom: '8px'}}>
            <div title={isCollapsed ? 'Users':''} className='zooming-icon' onClick={handleAccordion} style={{cursor: 'pointer', color: props.sidebarState === 'users' ? 'white' : '', backgroundColor: props.sidebarState === 'users' ? '#3A57E8' : '' ,display:'flex', justifyContent: isCollapsed ? 'center':'start', alignItems: 'center', width: isCollapsed ? '45px' : '210px', height:'44px', borderRadius:'4px'}}>
            <div style={{marginLeft: isCollapsed ? '20px':'10px'}}>
            <ConnectedUsersIcon/>
            </div>
            <div style={{paddingLeft: '20px'}}>
            {!isCollapsed && 'Users'}
            </div>
            <div style={{marginLeft: 'auto', paddingRight: isCollapsed ? '0px':'12px'}}>
            {!isCollapsed && open && 
            <ConnectedAccordionIconOpen/>
            }
            {!isCollapsed && !open && 
            <ConnectedAccordionIconClose/>
            }
            </div>
            </div>
            {open && (
            <Accordion.Collapse eventKey="0">
               
              <>
              <Nav.Link href="/#/admins/users-students" style={{paddingLeft: isCollapsed ? '0px' : '12px', paddingTop: '8px'}}>
              <div title={isCollapsed ? 'Students':''} className='zooming-icon' style={{color: props.subsidebarState === 'students' ? 'white' : '', backgroundColor: props.subsidebarState === 'students' ? '#3A57E8' : '' ,display:'flex', justifyContent: isCollapsed ? 'center':'start', alignItems: 'center', width: isCollapsed ? '45px' : '198px', height:'44px', borderRadius:'4px'}}>
              {isCollapsed && <h6 style={{paddingLeft: '20px', paddingTop: '10px'}}>S</h6>}
              {!isCollapsed && (
                <div style={{ marginLeft: isCollapsed ? '20px' : '10px' }}>
              <ConnectedDotIconStudents/>
              </div>
                )}
              <div style={{paddingLeft: '20px'}}>
              {!isCollapsed && 'Students'}
              </div>
              </div>
              </Nav.Link>

              <Nav.Link href="/#/admins/users-teachers" style={{paddingLeft: isCollapsed ? '0px' : '12px', paddingTop: '8px'}}>
              <div title={isCollapsed ? 'Teachers':''} className='zooming-icon' style={{color: props.subsidebarState === 'teachers' ? 'white' : '', backgroundColor: props.subsidebarState === 'teachers' ? '#3A57E8' : '' ,display:'flex', justifyContent: isCollapsed ? 'center':'start', alignItems: 'center', width: isCollapsed ? '45px' : '198px', height:'44px', borderRadius:'4px'}}>
              {isCollapsed && <h6 style={{paddingLeft: '20px', paddingTop: '10px'}}>T</h6>}
              {!isCollapsed && (
                <div style={{ marginLeft: isCollapsed ? '20px' : '10px' }}>
                  <ConnectedDotIconTeachers />
                </div>
                )}
              <div style={{paddingLeft: '20px'}}>
              {!isCollapsed && 'Teachers'}
              </div>
              </div>
              </Nav.Link>

              <Nav.Link href="/#/admins/users-admin" style={{paddingLeft: isCollapsed ? '0px' : '12px', paddingTop: '8px'}}>
              <div title={isCollapsed ? 'Admin & Staff':''} className='zooming-icon' style={{color: props.subsidebarState === 'admin' ? 'white' : '', backgroundColor: props.subsidebarState === 'admin' ? '#3A57E8' : '' ,display:'flex', justifyContent: isCollapsed ? 'center':'start', alignItems: 'center', width: isCollapsed ? '45px' : '198px', height:'44px', borderRadius:'4px'}}>
              {isCollapsed && <h6 style={{paddingLeft: '20px', paddingTop: '10px'}}>A</h6>}
              {!isCollapsed && (
                <div style={{ marginLeft: isCollapsed ? '20px' : '10px' }}>
              <ConnectedDotIconAdmin/>
              </div>
                )}
              <div style={{paddingLeft: '20px'}}>
              {!isCollapsed && 'Admin & Staff'}
              </div>
              </div>
              </Nav.Link>

              {/* <Nav.Link href="/#/admins/users-masterlist" style={{paddingLeft: isCollapsed ? '0px' : '12px', paddingTop: '8px'}}>
              <div title={isCollapsed ? 'Masterlist':''} className='zooming-icon' style={{color: props.subsidebarState === 'masterlist' ? 'white' : '', backgroundColor: props.subsidebarState === 'masterlist' ? '#3A57E8' : '' ,display:'flex', justifyContent: isCollapsed ? 'center':'start', alignItems: 'center', width: isCollapsed ? '45px' : '198px', height:'44px', borderRadius:'4px'}}>
              {isCollapsed && <h6 style={{paddingLeft: '20px', paddingTop: '10px'}}>M</h6>}
              {!isCollapsed && (
                <div style={{ marginLeft: isCollapsed ? '20px' : '10px' }}>
              <ConnectedDotIconMasterlist/>
              </div>
                )}
              <div style={{paddingLeft: '20px'}}>
              {!isCollapsed && 'Masterlist'}
              </div>
              </div>
              </Nav.Link> */}
              </>


            </Accordion.Collapse>
              )}
           </Accordion>
           
            

            {/* <Nav.Link href="/#/admins/schedules" style={{paddingBottom: '8px'}}>
            <div title={isCollapsed ? 'Schedules':''} className='zooming-icon' style={{color: props.sidebarState === 'schedules' ? 'white' : '', backgroundColor: props.sidebarState === 'schedules' ? '#3A57E8' : '' ,display:'flex', justifyContent: isCollapsed ? 'center':'start', alignItems: 'center', width: isCollapsed ? '45px' : '210px', height:'44px', borderRadius:'4px'}}>
            <div style={{marginLeft: isCollapsed ? '20px':'10px'}}>
            <ConnectedSchedulesIcon/>
            </div>
            <div style={{paddingLeft: '20px'}}>
            {!isCollapsed && 'Schedules'}
            </div>
            </div>
            </Nav.Link> */}

            <Nav.Link href="/#/admins/class" style={{paddingBottom: '8px'}}>
            <div title={isCollapsed ? 'Class':''} className='zooming-icon' style={{color: props.sidebarState === 'class' ? 'white' : '', backgroundColor: props.sidebarState === 'class' ? '#3A57E8' : '' ,display:'flex', justifyContent: isCollapsed ? 'center':'start', alignItems: 'center', width: isCollapsed ? '45px' : '210px', height:'44px', borderRadius:'4px'}}>
            <div style={{marginLeft: isCollapsed ? '20px':'10px'}}>
            <ConnectedClassIcon/>
            </div>
            <div style={{paddingLeft: '20px'}}>
            {!isCollapsed && 'Class'}
            </div>
            </div>
            </Nav.Link>

            <Nav.Link href="/#/admins/subjects" style={{paddingBottom: '8px'}}>
            <div title={isCollapsed ? 'Subjects':''} className='zooming-icon' style={{color: props.sidebarState === 'subjects' ? 'white' : '', backgroundColor: props.sidebarState === 'subjects' ? '#3A57E8' : '' ,display:'flex', justifyContent: isCollapsed ? 'center':'start', alignItems: 'center', width: isCollapsed ? '45px' : '210px', height:'44px', borderRadius:'4px'}}>
            <div style={{marginLeft: isCollapsed ? '20px':'10px'}}>
            <ConnectedSubjectsIcon/>
            </div>
            <div style={{paddingLeft: '20px'}}>
            {!isCollapsed && 'Subjects'}
            </div>
            </div>
            </Nav.Link>

            {/* <Nav.Link href="/#/admins/course" style={{paddingBottom: '8px'}}>
            <div title={isCollapsed ? 'Course':''} className='zooming-icon' style={{color: props.sidebarState === 'course' ? 'white' : '', backgroundColor: props.sidebarState === 'course' ? '#3A57E8' : '' ,display:'flex', justifyContent: isCollapsed ? 'center':'start', alignItems: 'center', width: isCollapsed ? '45px' : '210px', height:'44px', borderRadius:'4px'}}>
            <div style={{marginLeft: isCollapsed ? '20px':'10px'}}>
            <ConnectedCourseIcon/>
            </div>
            <div style={{paddingLeft: '20px'}}>
            {!isCollapsed && 'Course'}
            </div>
            </div>
            </Nav.Link> */}
            
            <Nav.Link href="/#/admins/rooms" style={{paddingBottom: '8px'}}>
            <div title={isCollapsed ? 'Rooms':''} className='zooming-icon' style={{color: props.sidebarState === 'rooms' ? 'white' : '', backgroundColor: props.sidebarState === 'rooms' ? '#3A57E8' : '' ,display:'flex', justifyContent: isCollapsed ? 'center':'start', alignItems: 'center', width: isCollapsed ? '45px' : '210px', height:'44px', borderRadius:'4px'}}>
            <div style={{marginLeft: isCollapsed ? '20px':'10px'}}>
            <ConnectedRoomsIcon/>
            </div>
            <div style={{paddingLeft: '20px'}}>
            {!isCollapsed && 'Rooms'}
            </div>
            </div>
            </Nav.Link>

            {/* <Nav.Link href="/#/admins/settings" style={{paddingBottom: '8px'}}>
            <div title={isCollapsed ? 'Settings':''} className='zooming-icon' style={{color: props.sidebarState === 'settings' ? 'white' : '', backgroundColor: props.sidebarState === 'settings' ? '#3A57E8' : '' ,display:'flex', justifyContent: isCollapsed ? 'center':'start', alignItems: 'center', width: isCollapsed ? '45px' : '210px', height:'44px', borderRadius:'4px'}}>
            <div style={{marginLeft: isCollapsed ? '20px':'10px'}}>
            <ConnectedSettingsIcon/>
            </div>
            <div style={{paddingLeft: '20px'}}>
            {!isCollapsed && 'Settings'}
            </div>
            </div>
            </Nav.Link> */}

          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

Sidebar.propTypes = {
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


export default connect(mapStateToProps, {setsidebarState, setsubsidebarState})(Sidebar);