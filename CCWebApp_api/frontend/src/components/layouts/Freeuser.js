import React, { useState, useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Studentsidebar from '../reusable/studentsidebar';
import TopNavbar from '../reusable/topnavbar';
import Footer from '../reusable/footer';
import SchedulerNavbar from '../reusable/scheduler-navbar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import { Form,
  Dropdown,
  Table,
  Button,
  Spinner } from 'react-bootstrap';

import ErrorPopupMain from '../reusable/error-main';
import SuccessPopupMain from '../reusable/success';
import { setResolution, setCollapseState } from '../../redux/actions/main';
import {SignOut} from '../../redux/actions/auth';

const FreeuserLayout = (props) => {

  const handleSignout = () => {
        props.SignOut()
        return <Navigate to="/auth/admin-signin" />;
      }
  
      const user = JSON.parse(localStorage.getItem('user'))
      if (!user){
        return <Navigate to="/auth/admin-signin" />;
      }
  
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [windowDimensions, setWindowdimensions] = useState({height: window.innerHeight,
    width: window.innerWidth})

  useEffect(() => {
    if (props.isLess800){
      if (window.innerWidth >= 800){
        props.setCollapseState(false)
      }
    }else if (!props.isLess800){
      if (window.innerWidth < 800){
        props.setCollapseState(true)
      }
    }

    const handleResize = debounce(() => {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
      setWindowdimensions({height: window.innerHeight,
        width: window.innerWidth})
      props.setResolution(windowDimensions)
    }, 1);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowDimensions, props.isLess800]);
  
  return (
    <>
    { props.error  &&
         <div style={{position: 'fixed', transform: 'translateX(-50%)', left: '50%', zIndex: 9999}}>
            <ErrorPopupMain errorMessage={props.error}/>
          </div>         
            }
    { props.success  &&
         <div style={{position: 'fixed', transform: 'translateX(-50%)', left: '50%', zIndex: 9999}}>
            <SuccessPopupMain />
          </div>          
            }
    
    <div style={{display: 'flex', backgroundColor: 'white', height: windowHeight, overflow: 'hidden', minWidth: '10px'}} > 
            <div style={{width: windowWidth, position: 'relative', minWidth: '1px'}}>
              {props.errorMessage && 
              <div style={{position: 'fixed', left: '56%', transform: 'translateX(-50%)', zIndex: 9999}}>
              <ErrorPopupMain/>
              </div>
              }
              <div style={{maxHeight:windowHeight, overflowY: 'auto', zIndex: 9999}}>
              <div style={{width:'100%', display:'flex', paddingTop:'10px', paddingRight:'10px'}}>
                <Button onClick={handleSignout} style={{marginLeft:'auto', width:'10%', minWidth:'100px', backgroundColor: '#556BD9', color:'#ffffff', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '13px', maxHeight: '30px', paddingTop: '5px'}}>Exit</Button>
              </div>
              <div style={{minHeight: '64.5vh'}}>
              <div style={{backgroundColor: '#ffffff', marginRight: !props.isLess800? '0px': '0px', marginLeft: !props.isLess800? '0px': '0px', borderRadius:'0px', minHeight: '1px'}}>
                <Outlet/>
              </div>
              </div>
              </div>
              
            </div>
             
      </div>
  </>
  );
};

FreeuserLayout.propTypes = {
    errorMessage: PropTypes.string,
    setResolution: PropTypes.func,
    isLess800: PropTypes.bool,
    setCollapseState: PropTypes.func,
    error: PropTypes.string,
    success: PropTypes.string,
    SignOut: PropTypes.func,
}

const mapStateToProps = (state) => ({
    errorMessage: state.main.errorMessage,
    isLess800: state.main.isLess800,
    error: state.main.error,
    success: state.main.success,
  });

  
  export default connect(mapStateToProps, {setResolution, setCollapseState, SignOut})(FreeuserLayout);