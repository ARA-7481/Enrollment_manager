import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import Weathersidebar from '../reusable/weathersidebar';
import WeatherTopBar from '../reusable/weathertopbar';
import WeatherFooter from '../reusable/weatherfooter';
import WeatherNavbar from '../reusable/weathernavbar';
import PropTypes, { func } from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { debounce } from 'lodash';

import ErrorPopupMain from '../reusable/error-main';
import SuccessPopupMain from '../reusable/success';
import { setResolution, setCollapseState } from '../../redux/actions/main';

import bg from '../../assets/images/backgrounds/rain.jpg'

const WeatherLayout = (props) => {
  
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
    <div style={{width: '100%', height: '100%', backgroundImage:`url(${bg})`}}>
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

    <div style={{display: 'flex', backgroundColor: '#e9ecef', height: windowHeight, overflow: 'hidden', minWidth: '720px', backgroundImage:`url(${bg})`}} > 
            <div style={{zIndex: 9999}}>
            <Weathersidebar/>
            </div>
            <div style={{width: windowWidth, position: 'relative', minWidth: '1px'}}>
              <div style={{maxHeight:windowHeight, zIndex: 9999}}>

              <div style={{position: 'sticky', top:0, zIndex: 9998, backgroundColor:'rgba(51, 51, 51, 0.00)'}}>
              <WeatherNavbar/>
              </div>
              <div style={{height: '200px'}}>
              {/* <WeatherTopBar/> */}
              </div>
              <div style={{minHeight: '64.5vh'}}>
              <div style={{transform: 'translate( 0px, -150px)', backgroundColor:'rgba(51, 51, 51, 0.00)', marginRight: !props.isLess800? '40px': '15px', marginLeft: !props.isLess800? '40px': '15px', borderRadius:'8px', minHeight: '1px'}}>
              <Outlet/>
              </div>
              </div>
              <div style={{position: 'sticky', bottom: 0, backgroundColor: '#ffffff', width: '100%', backgroundColor:'rgba(51, 51, 51, 0.00)'}}>
              <WeatherFooter/>
              </div> 
              </div>
              
            </div>
             
      </div>
      </div>
  </>
  );
};

WeatherLayout.propTypes = {
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

  
  export default connect(mapStateToProps, {setResolution, setCollapseState})(WeatherLayout);