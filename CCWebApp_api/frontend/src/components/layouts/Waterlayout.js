import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Watersidebar from '../reusable/watersidebaruser';
import TopNavbar from '../reusable/topnavbar';
import Footer from '../reusable/footer';
import MainNavbar from '../reusable/mainnavbar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { debounce } from 'lodash';

import ErrorPopupMain from '../reusable/error-main';
import SuccessPopupMain from '../reusable/success';
import { setResolution, setCollapseState } from '../../redux/actions/main';
import logo from '../../assets/images/backgrounds/R.png'

const Waterlayout = (props) => {
  
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
    
    <div style={{display: 'flex', backgroundColor: props.isLess800? '#ffffff' : '#e9ecef', height: windowHeight, overflow: 'hidden', minWidth: '10px'}} > 
            <div style={{zIndex: 9999}}>
            {!props.isLess800?<Watersidebar/> : '' }
            </div>
            <div style={{width: windowWidth, position: 'relative', minWidth: '1px'}}>
              {props.errorMessage && 
              <div style={{position: 'fixed', left: '56%', transform: 'translateX(-50%)', zIndex: 9999}}>
              <ErrorPopupMain/>
              </div>
              }
              <div style={{maxHeight:windowHeight, overflowY: 'auto', zIndex: 9999}}>

              <div style={{position: 'sticky', top:0, zIndex: 9998, display:'flex'}}>
                {props.isLess800? <div style={{transform: 'translate( 20px, 15px)'}}>
                                    <img className="school-logo" src={logo} alt="description" />
                                    
                                  </div> : ''}
              <MainNavbar/>
              </div>
              <div>
                {!props.isLess800?<TopNavbar/> : '' }
              
              </div>
              <div style={{minHeight: '70vh', backgroundColor: '#ffffff', marginRight: !props.isLess800? '40px': '0px', marginLeft: !props.isLess800? '40px': '0px'}}>
                <div style={{transform: !props.isLess800? 'translate( 0px, -36px) scale(1)' : 'translate( 0px, 0px) scale(1)', backgroundColor: '#ffffff', minHeight: '1px', borderRadius:'8px'}}>
                <Outlet/>
                </div>
              </div>
              {/* <div style={{position: 'sticky', bottom: 0, backgroundColor: '#ffffff', width: '100%'}}>
              <Footer/>
              </div>  */}
              </div>
              
            </div>
             
      </div>
  </>
  );
};

Waterlayout.propTypes = {
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

  
  export default connect(mapStateToProps, {setResolution, setCollapseState})(Waterlayout);