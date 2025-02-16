import React, { useState, Fragment, useEffect, useRef } from 'react'
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState, setpageHeader, setLoading, getPlumbingDevice, updateplumbingTrigger, valveError } from '../../redux/actions/main';

import { Card, Col, Table, Form, Dropdown, Button, Placeholder } from 'react-bootstrap';
import { Motor, TankPipe, MotorPipe, BallValve, BallPipe, PressureSensor, CurvePipe, Valve, FlowSensor } from '../../assets/svg/clnsmpl-icon';

function WaterBilling(props) {
    const navigate = useNavigate();

  const handleDashboard = () => {
        navigate('/water/dashboard');
      }

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))


  useEffect(() => {
    props.setsidebarState('class');
    props.setsubsidebarState(null);
    props.setpageHeader('Billing', '', 'Monitor Your Bill');
    props.getPlumbingDevice('dp6yAKsQAc');
   }, [props.isLess800]);

   const websocket = useRef(null);
   useEffect(() =>{
         websocket.current = new WebSocket(`wss://${window.location.host}/ws/dbupdatetrigger/`);
         websocket.current.onmessage = (event) => {
         const data = JSON.parse(event.data);
         console.log(data) 
         console.log(data.event.event)
         if (data.event.event === 'model_update') {
             props.getPlumbingDevice('dp6yAKsQAc');
         }
         };
         return () => {
         if (websocket.current) {
             websocket.current.close();
         }
         }
     },[props.plumbingDeviceData])

  return (
    <>
        <div style={{display:'flex', backgroundColor:'rgba(69, 96, 248, 0.2)', borderRadius:'8px',height: '700px', transform: !props.isLess800 ? 'translate(0px, 0px) scale(1)' :'translate(0px, 0px) scale(0.85)'}}>

            <div style={{padding: '10px', width:'50%'}}>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                <h1 className="inter-600-30px-light">Total Consumed Volume:  </h1>
                </div>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                <h1 className="inter-600-15px-light">Account Name:  </h1>
                </div>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                <h1 className="inter-700-40px-light">Billing Cycle:  </h1>
                </div>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                <h1 style={{marginBottom: '40px'}} className="inter-700-40px-light">Rate Per m3:  </h1>
                </div>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                <h1 className="inter-700-40px-light">Current Month Consumption:  </h1>
                </div>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                <h1 className="inter-700-40px-light">Projected Bill:  </h1>
                </div>

            </div>

            <div style={{padding: '10px', width:'50%'}}>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                            {(() => {
                                switch (user.solenoid_address) {
                                    case '001':
                                        return <h1 className="inter-600-30px-light">{(props.plumbingDeviceData.billedvolume1)/450000}m3</h1>;
                                    case '002':
                                        return <h1 className="inter-600-40px-light">{(props.plumbingDeviceData.billedvolume2)/450000}m3</h1>;
                                    case '003':
                                        return <h1 className="inter-600-40px-light">{(props.plumbingDeviceData.billedvolume3)/450000}m3</h1>;
                                    default:
                                        return null;
                                }
                            })()}
                </div>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                <h1 className="inter-700-40px-light">{user.first_name}{'  '}{user.last_name}</h1> 
                </div>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                <h1 className="inter-700-40px-light">1st Day of the Month</h1> 
                </div>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                <h1 style={{marginBottom:'40px'}} className="inter-700-40px-light">₱{props.plumbingDeviceData.conversionrate}</h1>
                </div>
                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                            {(() => {
                                switch (user.solenoid_address) {
                                    case '001':
                                        return <h1 className="inter-700-40px-light">{(props.plumbingDeviceData.billedvolume1_month)/450000}m3</h1>;
                                    case '002':
                                        return <h1 className="inter-700-40px-light">{(props.plumbingDeviceData.billedvolume2_month)/450000}m3</h1>;
                                    case '003':
                                        return <h1 className="inter-700-40px-light">{(props.plumbingDeviceData.billedvolume3_month)/450000}m3</h1>;
                                    default:
                                        return null;
                                }
                            })()}
                </div>  

                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                            {(() => {
                                switch (user.solenoid_address) {
                                    case '001':
                                        return <h1 className="inter-700-40px-light">₱{((props.plumbingDeviceData.billedvolume1_month)/450000)*props.plumbingDeviceData.conversionrate}</h1>;
                                    case '002':
                                        return <h1 className="inter-700-40px-light">₱{((props.plumbingDeviceData.billedvolume2_month)/450000)*props.plumbingDeviceData.conversionrate}</h1>;
                                    case '003':
                                        return <h1 className="inter-700-40px-light">₱{((props.plumbingDeviceData.billedvolume3_month)/450000)*props.plumbingDeviceData.conversionrate}</h1>;
                                    default:
                                        return null;
                                }
                            })()}
                </div>  
            </div>

        </div>
       {props.isLess800 && <Button onClick={handleDashboard} style={{backgroundColor: '#556BD9', color:'#ffffff', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '13px', maxHeight: '30px', paddingTop: '5px'}}>Dashboard</Button>}
            
    </>
    );
}

WaterBilling.propTypes = {
  sidebarState: PropTypes.string,
  subsidebarState: PropTypes.string,
  pageHeader: PropTypes.object,
  setsidebarState: PropTypes.func,
  setsubsidebarState: PropTypes.func,
  setLoading: PropTypes.func,
  loadingState: PropTypes.string,
  isLess800: PropTypes.bool,
  getPlumbingDevice: PropTypes.func,
  plumbingDeviceData: PropTypes.object,
  updateplumbingTrigger: PropTypes.func,
  valveError: PropTypes.func,
}

const mapStateToProps = (state) => ({
  sidebarState: state.main.sidebarState,
  subsidebarState: state.main.subsidebarState,
  pageHeader: state.main.pageHeader,
  loadingState: state.main.loadingState,
  isLess800: state.main.isLess800,
  plumbingDeviceData: state.main.plumbingDeviceData,
  });

export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setpageHeader, setLoading, getPlumbingDevice, updateplumbingTrigger, valveError})(WaterBilling))