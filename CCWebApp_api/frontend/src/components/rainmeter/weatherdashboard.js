import React, { useState, Fragment, useEffect, useRef } from 'react'
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState, setpageHeader, getDevice } from '../../redux/actions/main';

import {} from '../../assets/svg/clnsmpl-icon';
import { propTypes } from 'react-bootstrap/esm/Image';

function WeatherDashboard(props) {

  useEffect(() => {
    props.setsidebarState('dashboard');
    props.setsubsidebarState(null);
    props.setpageHeader('Dashboard', '', 'Welcome to the dashboard');
    props.getDevice('c5Y1An7aOd');
  }, []);

  const websocket = useRef(null);

  useEffect(() =>{
    websocket.current = new WebSocket(`wss://${window.location.host}/ws/dbupdatetrigger/`);
    websocket.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data)
      console.log(data.event.event)
      if (data.event.event === 'model_update') {
        props.getDevice('c5Y1An7aOd');
      }
    };
    return () => {
      if (websocket.current) {
        websocket.current.close();
      }
    }
  },[])

  return (
      <>
      <div style={{backgroundColor:'rgba(51, 51, 51, 0.70)', display: 'flex', borderRadius:'8px', padding: '100px', width: '100%', gap: '120px'}}>
        <div>
          <div style={{display: 'flex', backgroundColor:'rgba(51, 51, 51, 0.00)', marginBottom: '20px'}}>
            <h1 className='inter-400-28px'>RAINFALL INTENSITY</h1>
          </div>
          <div style={{display: 'flex', backgroundColor:'rgba(51, 51, 51, 0.00)'}}>
            <h1 className='inter-400-16px' style={{marginRight: '8px'}}>Active Module:  </h1>
            <h1 className='inter-400-16px-dark'>{props.deviceData.name}</h1>
          </div>
          <div style={{display: 'flex', backgroundColor:'rgba(51, 51, 51, 0.00)'}}>
            <h1 className='inter-400-16px' style={{marginRight: '8px'}}>Device ID:  </h1>
            <h1 className='inter-400-16px-dark'>{props.deviceData.id}</h1>
          </div>
          <div style={{display: 'flex', alignItems: 'center'}}>
          <h1 className='inter-700-170px-light' style={{color:'rgba(30,144,255, 0.4)' }}>{parseFloat(props.deviceData.rainrate).toFixed(2)}</h1>
          <h1 className='inter-400-16px-dark'> mm/hr</h1>
          </div>
          <div style={{display: 'flex', alignItems: 'center'}}>
          <h1 className='inter-400-16px' style={{marginRight: '8px'}}>Alert Code:</h1>
          {(props.deviceData.rainrate > 7.5 && props.deviceData.rainrate <= 15 )? <h1 className='inter-600-20px' style={{color: 'yellow'}}>YELLOW</h1>:
           (props.deviceData.rainrate > 15 && props.deviceData.rainrate <= 30 )? <h1 className='inter-600-20px' style={{color: 'orange'}}>ORANGE</h1> :
            (props.deviceData.rainrate > 30)? <h1 className='inter-600-20px' style={{color: 'yellow'}}>RED</h1> : <h1 className='inter-600-20px' style={{color: 'gray'}}>NONE</h1>}
            </div>
        </div>


        <div>
          <div style={{display: 'flex', backgroundColor:'rgba(51, 51, 51, 0.00)', marginBottom: '20px'}}>
            <h1 className='inter-400-28px'>WATER LEVEL</h1>
          </div>
          <div style={{display: 'flex', backgroundColor:'rgba(51, 51, 51, 0.00)'}}>
            <h1 className='inter-400-16px' style={{marginRight: '8px'}}>Active Module:  </h1>
            <h1 className='inter-400-16px-dark'>RaspberryPi3B-Ultrasonic</h1>
          </div>
          <div style={{display: 'flex', backgroundColor:'rgba(51, 51, 51, 0.00)'}}>
            <h1 className='inter-400-16px' style={{marginRight: '8px'}}>Device ID:  </h1>
            <h1 className='inter-400-16px-dark'>XKi0WuagbB</h1>
          </div>
          <div style={{display: 'flex', alignItems: 'center'}}>
          <h1 className='inter-700-170px-light' style={{color:'rgba(30,144,255, 0.4)' }}>1.75</h1>
          <h1 className='inter-400-16px-dark'> meters</h1>
          </div>
          <div style={{display: 'flex', alignItems: 'center'}}>
          <h1 className='inter-400-16px' style={{marginRight: '8px'}}>Alert Code:</h1>
          {(props.deviceData.rainrate > 7.5 && props.deviceData.rainrate <= 15 )? <h1 className='inter-600-20px' style={{color: 'yellow'}}>YELLOW</h1>:
           (props.deviceData.rainrate > 15 && props.deviceData.rainrate <= 30 )? <h1 className='inter-600-20px' style={{color: 'orange'}}>ORANGE</h1> :
            (props.deviceData.rainrate > 30)? <h1 className='inter-600-20px' style={{color: 'yellow'}}>RED</h1> : <h1 className='inter-600-20px' style={{color: 'gray'}}>NONE</h1>}
            </div>
        </div>

        <div style={{height: '500px'}}>

        </div>
      </div>
      </>
    );
}

WeatherDashboard.propTypes = {
  sidebarState: PropTypes.string,
  setsidebarState: PropTypes.func,
  subsidebarState: PropTypes.string,
  setsubsidebarState: PropTypes.func,
  setpageHeader: PropTypes.func,
  getDevice: PropTypes.func,
  deviceData: PropTypes.object,
}

const mapStateToProps = (state) => ({
  sidebarState: state.main.sidebarState,
  subsidebarState: state.main.subsidebarState,
  deviceData: state.main.deviceData,
  });

export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setpageHeader, getDevice})(WeatherDashboard))