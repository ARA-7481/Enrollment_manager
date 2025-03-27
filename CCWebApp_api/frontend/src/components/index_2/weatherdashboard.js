import React, { useState, Fragment, useEffect, useRef } from 'react'
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState, setpageHeader, getDeviceRain, } from '../../redux/actions/main';

import {} from '../../assets/svg/clnsmpl-icon';
import { propTypes } from 'react-bootstrap/esm/Image';
import bg from '../../assets/images/backgrounds/plant.jpg'


function WeatherDashboard(props) {
  
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [windowDimensions, setWindowdimensions] = useState({height: window.innerHeight,
    width: window.innerWidth})  

  useEffect(() => {
    props.setsidebarState('dashboard');
    props.setsubsidebarState(null);
    props.setpageHeader('Dashboard', '', 'Welcome to the dashboard');
    props.getDeviceRain('c5Y1An7aOd');
  }, [props.isLess800]);

  const websocket = useRef(null);

  useEffect(() =>{
    websocket.current = new WebSocket(`wss://${window.location.host}/ws/dbupdatetrigger/`);
    websocket.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data)
      console.log(data.event.event)
      if (data.event.event === 'model_update') {
        props.getDeviceRain('c5Y1An7aOd');
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
      <div style={{display:'flex', backgroundColor:'#ffffff', borderRadius:'8px', borderTopRightRadius:'8px', backgroundColor:'rgba(51, 51, 51, 0.20)',
         }}>
        <div style={{backgroundColor:'#ffffff', borderRadius:'8px', width: '50%', backgroundColor:'rgba(14, 141, 12, 0.2)', margin: '5px'}}>
          <div style={{margin: '10px'}}>
          <h3 style={{color: 'green', marginBottom: '5px'}}>RAIN-GAUGE</h3>
            <div  style={{display: 'flex', transform: !props.isLess800 ? 'translate(0px, 0px) scale(1)' :'translate(0px, 0px) scale(0.7)'}}>
              <div style={{width: '50%', marginRight: '10px'}}>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                  <h5>Sensor:   </h5>
                </div>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                  <h5>Device Sytem ID:   </h5>
                </div>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                  <h5>Module:   </h5>
                </div>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                  <h5>Protocol:   </h5>
                </div>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                  <h5>Tip Counter:   </h5>
                </div>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                  <h5>Rainfall Intensity:   </h5>
                </div>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                  <h5>Alert Code:   </h5>
                </div>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                  <h5>Sampling Period:   </h5>
                </div>
              </div>
                <div style={{width: '50%'}}>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                  <h5 style={{color: 'white'}}>UART-6mL Tipping Bucket</h5>
                </div>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                  <h5 style={{color: 'white'}}>c5Y1An7aOd</h5>
                </div>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                  <h5 style={{color: 'white'}}>ESP-WROOM-32</h5>
                </div>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                  <h5 style={{color: 'white'}}>HTTP/HTTPS</h5>
                </div>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                  <h5 style={{color: 'white'}}>{props.deviceData.hourcount}</h5>
                </div>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                  <h5 style={{color: 'white'}}>{props.deviceData.rainrate}</h5>
                </div>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                  <h5 style={{color: 'white'}}>{props.deviceData.rainwarning}</h5>
                </div>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                  <h5 style={{color: 'white'}}>1st,16th,31st,46th minute</h5>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div style={{backgroundColor:'#ffffff', borderRadius:'8px', width: '50%', backgroundColor:'rgba(12, 31, 141, 0.2)', margin: '5px'}}>
          <div style={{margin: '10px'}}>
          <h3 style={{color: 'rgba(12, 36, 145, 1)', marginBottom: '5px'}}>FLOOD MONITOR</h3>
            <div  style={{display: 'flex', transform: !props.isLess800 ? 'translate(0px, 0px) scale(1)' :'translate(0px, 0px) scale(0.7)'}}>
              <div style={{width: '50%', marginRight: '10px'}}>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                  <h5>Sensors:   </h5>
                </div>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                  <h5>Device Sytem ID:   </h5>
                </div>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                  <h5>Module:   </h5>
                </div>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                  <h5>Protocol:   </h5>
                </div>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                  <h5>Sensor #1 Reading:   </h5>
                </div>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                  <h5>Sensor #2 Reading:   </h5>
                </div>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                  <h5>Alert Code #1:   </h5>
                </div>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                  <h5>Alert Code #2:   </h5>
                </div>
               
              </div>
                <div style={{width: '50%'}}>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                  <h5 style={{color: 'white'}}>Ultrasonic URM07</h5>
                </div>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                  <h5 style={{color: 'white'}}>bx5HHPfZhZ</h5>
                </div>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                  <h5 style={{color: 'white'}}>ESP-WROOM-32</h5>
                </div>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                  <h5 style={{color: 'white'}}>HTTP/HTTPS</h5>
                </div>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                  <h5 style={{color: 'white'}}>{props.deviceData.waterlevel}</h5>
                </div>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                  <h5 style={{color: 'white'}}>{props.deviceData.waterlevel2}</h5>
                </div>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                  <h5 style={{color: 'white'}}>{props.deviceData.waterlevelwarning}</h5>
                </div>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                  <h5 style={{color: 'white'}}>{props.deviceData.waterlevelwarning2}</h5>
                </div>
              </div>
            </div>
          </div>
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
  getDeviceRain: PropTypes.func,
  deviceData: PropTypes.object,
  isLess800: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  sidebarState: state.main.sidebarState,
  subsidebarState: state.main.subsidebarState,
  deviceData: state.main.deviceData,
  isLess800: state.main.isLess800,
  });

export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setpageHeader, getDeviceRain})(WeatherDashboard))