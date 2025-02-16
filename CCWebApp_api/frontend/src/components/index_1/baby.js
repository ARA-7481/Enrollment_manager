import React, { useState, Fragment, useEffect, useRef } from 'react'
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import {getDevicebaby, triggerDeviceIdle } from '../../redux/actions/main';

import {} from '../../assets/svg/clnsmpl-icon';
import { propTypes } from 'react-bootstrap/esm/Image';

function Babydashboard(props) {

  const handleTap = () => {
    props.triggerDeviceIdle('XKi0WuagbB');
  }

  useEffect(() => {
    props.getDevicebaby('XKi0WuagbB');
  }, []);

  const websocket = useRef(null);
  useEffect(() =>{
        websocket.current = new WebSocket(`wss://${window.location.host}/ws/dbupdatetrigger/`);
        websocket.current.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log(data) 
        console.log(data.event.event)
        if (data.event.event === 'model_update') {
            props.getDevicebaby('XKi0WuagbB');
        }
        };
        return () => {
        if (websocket.current) {
            websocket.current.close();
        }
        }
    },[props.deviceData])

  return (
      <>
      <div style={{backgroundColor:'rgba(255, 255, 255, 1)', justifyContent: 'center', alignContent: 'center', width: '100%', padding: '35px'}}>
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
       <img src={props.deviceData.img}  style={{width: '70%', maxWidth: '500px', maxHeight: '500px'}}/>
       </div>
       <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '35px'}}>
       {(() => {
                      switch(props.deviceData.triggercount) {
                        case 1: return <h1 className='inter-700-40px-light'>BABY IS CRYING!</h1>;
                        case 2: return <h1 className='inter-700-40px-light'>BABY IS HUNGRY!</h1>;
                        case 3: return <h1 className='inter-700-40px-light'>BABY IS OK.</h1>;
                        default: return <h1 className='inter-700-40px-light'>BABY IS OK.</h1>;
                      }
                      })()}
       </div>
       {props.deviceData.triggercount !== 3 && <div onClick={handleTap} style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '35px'}}>
        <img src="https://ccwebappbucket.s3.ap-southeast-1.amazonaws.com/uploads/power_off_button.png" style={{width: '15%', maxWidth: '100px'}}/>
       </div>}
       
      </div>
      </>
    );
}

Babydashboard.propTypes = {
    getDevicebaby: PropTypes.func,
    deviceData: PropTypes.object,
    triggerDeviceIdle: PropTypes.func,
}

const mapStateToProps = (state) => ({
    deviceData: state.main.deviceData,
  });

export default withAuth(connect(mapStateToProps, {getDevicebaby, triggerDeviceIdle})(Babydashboard))