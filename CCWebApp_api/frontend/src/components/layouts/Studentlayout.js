import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Studentsidebar from '../reusable/studentsidebar';
import TopNavbar from '../reusable/topnavbar';
import Footer from '../reusable/footer';
import MainNavbar from '../reusable/mainnavbar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { debounce } from 'lodash';

import ErrorPopupMain from '../reusable/error-main';
import SuccessPopupMain from '../reusable/success';
import { setResolution, setCollapseState } from '../../redux/actions/main';

const Studentlayout = (props) => {
  
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
    
    <div style={{display: 'flex', backgroundColor: '#e9ecef', height: windowHeight, overflow: 'hidden', minWidth: '10px'}} > 
            <div style={{zIndex: 9999}}>
            <Studentsidebar/>
            </div>
            <div style={{width: windowWidth, position: 'relative', minWidth: '1px'}}>
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
              <div style={{minHeight: '64.5vh'}}>
              <div style={{transform: 'translate( 0px, -36px)', backgroundColor: '#ffffff', marginRight: !props.isLess800? '40px': '15px', marginLeft: !props.isLess800? '40px': '15px', borderRadius:'8px', minHeight: '1px'}}>
              <Outlet/>
              </div>
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

Studentlayout.propTypes = {
    errorMessage: PropTypes.string,
    setResolution: PropTypes.func,
    isLess800: PropTypes.bool,
    setCollapseState: PropTypes.func,
    error: PropTypes.string,
    success: PropTypes.string,
}

const mapStateToProps = (state) => ({
    errorMessage: state.main.errorMessage,
    isLess800: state.main.isLess800,
    error: state.main.error,
    success: state.main.success,
  });

  
  export default connect(mapStateToProps, {setResolution, setCollapseState})(Studentlayout);