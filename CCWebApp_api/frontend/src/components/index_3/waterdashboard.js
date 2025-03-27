import React, { useState, Fragment, useEffect, useRef } from 'react'
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState, setpageHeader, setLoading, getPlumbingDevice, updateplumbingTrigger, valveError } from '../../redux/actions/main';

import { Card, Col, Table, Form, Dropdown, Button, Placeholder } from 'react-bootstrap';
import { ConnectedMotor, ConnectedBallValve, ConnectedValve, ConnectedFlowSensor, ConnectedCurveLine, ConnectedBallPipe, ConnectedMotorPipe, ConnectedTankPipe, PressureSensor,
          SmallUser, SmallCalendar, Droplet 
 } from '../../assets/svg/clnsmpl-icon';
import { debounce } from 'lodash';

function WaterDashboard(props) {
    const navigate = useNavigate();

    const handleBill = () => {
        navigate('/water/billing');
        }

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    
    const [windowDimensions, setWindowdimensions] = useState({height: window.innerHeight,
        width: window.innerWidth})
    
      useEffect(() => {
        const handleResize = debounce(() => {
          setWindowdimensions({height: window.innerHeight,
            width: window.innerWidth})
        }, 1);
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, [windowDimensions]);

    const handleValveToggle = () => {
        if(props.plumbingDeviceData.trigger == 1){
            props.valveError();
        }else{
            if(user.solenoid_address == '001'){
                if(props.plumbingDeviceData.solenoid1 == 0){
                    if(props.plumbingDeviceData.solenoid2 == 1 && props.plumbingDeviceData.solenoid3 == 1){
                        props.updateplumbingTrigger('dp6yAKsQAc', 15000, 1, 1, 1, 1);
                    }else if(props.plumbingDeviceData.solenoid2 == 0 && props.plumbingDeviceData.solenoid3 == 1){
                        props.updateplumbingTrigger('dp6yAKsQAc', 10000, 1, 0, 1, 1);
                    }else if(props.plumbingDeviceData.solenoid2 == 1 && props.plumbingDeviceData.solenoid3 == 0){
                        props.updateplumbingTrigger('dp6yAKsQAc', 10000, 1, 1, 0, 1);
                    }else if(props.plumbingDeviceData.solenoid2 == 0 && props.plumbingDeviceData.solenoid3 == 0){
                        props.updateplumbingTrigger('dp6yAKsQAc', 5000, 1, 0, 0, 1);
                    }
                }else if(props.plumbingDeviceData.solenoid1 == 1){
                    if(props.plumbingDeviceData.solenoid2 == 1 && props.plumbingDeviceData.solenoid3 == 1){
                        props.updateplumbingTrigger('dp6yAKsQAc', 10000, 0, 1, 1, 1);
                    }else if(props.plumbingDeviceData.solenoid2 == 0 && props.plumbingDeviceData.solenoid3 == 1){
                        props.updateplumbingTrigger('dp6yAKsQAc', 5000, 0, 0, 1, 1);
                    }else if(props.plumbingDeviceData.solenoid2 == 1 && props.plumbingDeviceData.solenoid3 == 0){
                        props.updateplumbingTrigger('dp6yAKsQAc', 5000, 0, 1, 0, 1);
                    }else if(props.plumbingDeviceData.solenoid2 == 0 && props.plumbingDeviceData.solenoid3 == 0){
                        props.updateplumbingTrigger('dp6yAKsQAc', 1, 0, 0, 0, 0);
                    }
                }
            }else if(user.solenoid_address == '002'){
                if(props.plumbingDeviceData.solenoid2 == 0){
                    if(props.plumbingDeviceData.solenoid1 == 1 && props.plumbingDeviceData.solenoid3 == 1){
                        props.updateplumbingTrigger('dp6yAKsQAc', 15000, 1, 1, 1, 1);
                    }else if(props.plumbingDeviceData.solenoid1 == 0 && props.plumbingDeviceData.solenoid3 == 1){
                        props.updateplumbingTrigger('dp6yAKsQAc', 10000, 0, 1, 1, 1);
                    }else if(props.plumbingDeviceData.solenoid1 == 1 && props.plumbingDeviceData.solenoid3 == 0){
                        props.updateplumbingTrigger('dp6yAKsQAc', 10000, 1, 1, 0, 1);
                    }else if(props.plumbingDeviceData.solenoid1 == 0 && props.plumbingDeviceData.solenoid3 == 0){
                        props.updateplumbingTrigger('dp6yAKsQAc', 5000, 0, 1, 0, 1);
                    }
                    
                }else if(props.plumbingDeviceData.solenoid2 == 1){
                    if(props.plumbingDeviceData.solenoid1 == 1 && props.plumbingDeviceData.solenoid3 == 1){
                        props.updateplumbingTrigger('dp6yAKsQAc', 10000, 1, 0, 1, 1);
                    }else if(props.plumbingDeviceData.solenoid1 == 0 && props.plumbingDeviceData.solenoid3 == 1){
                        props.updateplumbingTrigger('dp6yAKsQAc', 5000, 0, 0, 1, 1);
                    }else if(props.plumbingDeviceData.solenoid1 == 1 && props.plumbingDeviceData.solenoid3 == 0){
                        props.updateplumbingTrigger('dp6yAKsQAc', 5000, 1, 0, 0, 1);
                    }else if(props.plumbingDeviceData.solenoid1 == 0 && props.plumbingDeviceData.solenoid3 == 0){
                        props.updateplumbingTrigger('dp6yAKsQAc', 1, 0, 0, 0, 0);
                    }
                }
            }else if(user.solenoid_address == '003'){
                if(props.plumbingDeviceData.solenoid3 == 0){
                    if(props.plumbingDeviceData.solenoid1 == 1 && props.plumbingDeviceData.solenoid2 == 1){
                        props.updateplumbingTrigger('dp6yAKsQAc', 15000, 1, 1, 1, 1);
                    }else if(props.plumbingDeviceData.solenoid1 == 0 && props.plumbingDeviceData.solenoid2 == 1){
                        props.updateplumbingTrigger('dp6yAKsQAc', 10000, 0, 1, 1, 1);
                    }else if(props.plumbingDeviceData.solenoid1 == 1 && props.plumbingDeviceData.solenoid2 == 0){
                        props.updateplumbingTrigger('dp6yAKsQAc', 10000, 1, 0, 1, 1);
                    }else if(props.plumbingDeviceData.solenoid1 == 0 && props.plumbingDeviceData.solenoid2 == 0){
                        props.updateplumbingTrigger('dp6yAKsQAc', 5000, 0, 0, 1, 1);
                    }
                    
                }else if(props.plumbingDeviceData.solenoid3 == 1){
                    if(props.plumbingDeviceData.solenoid1 == 1 && props.plumbingDeviceData.solenoid2 == 1){
                        props.updateplumbingTrigger('dp6yAKsQAc', 10000, 1, 1, 0, 1);
                    }else if(props.plumbingDeviceData.solenoid1 == 0 && props.plumbingDeviceData.solenoid2 == 1){
                        props.updateplumbingTrigger('dp6yAKsQAc', 5000, 0, 1, 0, 1);
                    }else if(props.plumbingDeviceData.solenoid1 == 1 && props.plumbingDeviceData.solenoid2 == 0){
                        props.updateplumbingTrigger('dp6yAKsQAc', 5000, 1, 0, 0, 1);
                    }else if(props.plumbingDeviceData.solenoid1 == 0 && props.plumbingDeviceData.solenoid2 == 0){
                        props.updateplumbingTrigger('dp6yAKsQAc', 1, 0, 0, 0, 0);
                    }
                }
            }
        }
      };

  useEffect(() => {
    props.setsidebarState('dashboard');
    props.setsubsidebarState(null);
    props.setpageHeader('Main Dashboard', '', 'Control Dedicated Valve & Read Metrics In Real-Time');
    props.getPlumbingDevice('dp6yAKsQAc');
   }, []);
   

   useEffect(() => {
    console.log(props.windowDimensions)
   }, [props.windowDimensions]);

   useEffect(() => {
    const cardHeightValue = (47.5 - props.plumbingDeviceData.ultrasonic)/47.5
    const cardHeight = `${cardHeightValue * 100}%`
    document.getElementById('watertank').style.height = cardHeight;
   }, [props.plumbingDeviceData]);

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
      <div style={{display:windowDimensions.width < 1500 ?'':'flex',borderTopLeftRadius:'8px', borderTopRightRadius:'8px'}}>

      <div style={{borderRadius:'8px', width: windowDimensions.width < 1500 ?'100%':'50%', height: windowDimensions.width > 1500 ?'50vh':windowDimensions.width > 800 ? '600px':'450px'}}>
        <div style={{display: 'flex', width:'100%', justifyContent:'center'}}>
            <h4 style={{ paddingTop: '20px'}}>Interactive Diagram</h4>
        </div>
        
        <div style={{ display:'flex', width:'100%', justifyContent:'center'}}>
        <div style={{width: windowDimensions.width > 1500 ?`524px` :  windowDimensions.width < 800 ?`286px` : `${524*(windowDimensions.width/1500)}px`, height:'600px', position: 'relative', display:'flex'}}>
        <div style={{left: 0, transformOrigin: 'left', position: 'absolute', transform: windowDimensions.width > 1500 ? `translate(0px, 50px) scale(0.8)` : windowDimensions.width < 800 ? `translate(0px, -40px) scale(0.55)` :windowDimensions.width/1500 > 0.8 ?`translate(0px, 40px) scale(0.8)` :  `translate(0px, 40px) scale(${(windowDimensions.width/1500)})`}}>
            <div style={{height: '1px'}}>
                <Card style={{transform: 'translate( 0px, 325px)', height: '200px', width:'150px', borderColor:'black', borderWidth: '3px'}}>
                    <div style={{height:'200px', display: 'flex', alignItems: 'flex-end'}}>
                    <Card.Body id='watertank' style={{backgroundColor:'#556BD9', borderRadius:'3px', maxHeight: '200px', minHeight: '1px'}}>
                    </Card.Body>
                    </div>
                </Card>
            </div>
            <div style={{transform: 'translate( 75px, 437px) scale(0.15)', height: '1px'}}>
                <ConnectedTankPipe/>
            </div>
            <div style={{transform: 'translate( 185px, 361px) scale(1.2)', height: '1px'}}>
                <ConnectedMotor/>
            </div>
            <div style={{transform: 'translate( 117px, 335px) scale(0.13)', height: '1px'}}>
                <ConnectedMotorPipe/>
            </div>
            <div style={{transform: 'translate( 125px, 245px) scale(0.4)', height: '1px', backgroundColor: props.plumbingDeviceData.trigger == 1 ? 'rgba(180, 40, 40, 0.5)': 'white'}}>
                <ConnectedBallValve/>
            </div>
            <div style={{transform: 'translate( 117px, 179px) scale(0.13)', height: '1px'}}>
                <ConnectedBallPipe/>
            </div>
            <div style={{transform: 'translate( 154px, 60px) scale(0.7)', height: '1px'}}>
                <PressureSensor/>
            </div>
            <div style={{transform: 'translate( 156px, -22px) scale(0.58)', height: '1px'}}>
                <ConnectedCurveLine/>
            </div>
            <div className='div-valve' onClick={() => handleValveToggle()} style={{transform: 'translate( 245px, -126px) scale(0.5)'}}>
                <ConnectedValve/>
            </div>
            <div style={{transform: 'translate( 362px, -212px) scale(0.9)'}}>
                <ConnectedFlowSensor/>
            </div>

            {/* flowsensor readings */}
            <div style={{ transform: 'translate(410px, -212px) scale(0.9)' }}>
                {(() => {
                    switch (user.solenoid_address) {
                        case '001':
                            return <h1 className="inter-700-40px-light">{props.plumbingDeviceData.flowspeed1}L/min</h1>;
                        case '002':
                            return <h1 className="inter-700-40px-light">{props.plumbingDeviceData.flowspeed2}L/min</h1>;
                        case '003':
                            return <h1 className="inter-700-40px-light">{props.plumbingDeviceData.flowspeed3}L/min</h1>;
                        default:
                            return null;
                    }
                })()}
            </div>


            {/* valve status */}
            <div style={{ transform: 'translate(295px, -245px) scale(0.9)' }}>
                {(() => {
                    switch (user.solenoid_address) {
                        case '001':
                            if (props.plumbingDeviceData.solenoid1 === 0) {
                                return <h1 className="inter-700-40px-light">Inactive</h1>;
                            } else if (props.plumbingDeviceData.solenoid1 === 1) {
                                return <h1 className="inter-700-40px-light">Active</h1>;
                            }
                            break;
                        case '002':
                            if (props.plumbingDeviceData.solenoid2 === 0) {
                                return <h1 className="inter-700-40px-light">Inactive</h1>;
                            } else if (props.plumbingDeviceData.solenoid2 === 1) {
                                return <h1 className="inter-700-40px-light">Active</h1>;
                            }
                            break;
                        case '003':
                            if (props.plumbingDeviceData.solenoid3 === 0) {
                                return <h1 className="inter-700-40px-light">Inactive</h1>;
                            } else if (props.plumbingDeviceData.solenoid3 === 1) {
                                return <h1 className="inter-700-40px-light">Active</h1>;
                            }
                            break;
                        default:
                            return null;
                    }
                })()}
            </div>

            {/* pressure readings */}
            <div style={{transform: 'translate( 300px, -195px) scale(0.9)'}}>
                <h1 className='inter-700-40px-white'>x</h1>
            </div>

            {/* ball valve status */}
            <div style={{ transform: 'translate(250px, -60px) scale(0.9)' }}>
                {(() => {
                    switch (props.plumbingDeviceData.ballvalve) {
                        case 1:
                            return <h1 className="inter-700-40px-light">Closed</h1>;
                        case 5000:
                            return <h1 className="inter-700-40px-light">33% Opening</h1>;
                        case 10000:
                            return <h1 className="inter-700-40px-light">67% Opening</h1>;
                        case 15000:
                            return <h1 className="inter-700-40px-light">100% Opening</h1>;
                        default:
                            return null;
                    }
                })()}
            </div>


            {/* pump status */}
            <div style={{ transform: 'translate(375px, 60px) scale(0.9)' }}>
                {(() => {
                    switch (props.plumbingDeviceData.dcmotor) {
                        case 0:
                            return <h1 className="inter-700-40px-light">Inactive</h1>;
                        case 1:
                            return <h1 className="inter-700-40px-light">Active</h1>;
                        default:
                            return null;
                    }
                })()}
            </div>

            {/* water level */}
            <div style={{transform: 'translate( 45px, -10px) scale(0.9)'}}>
                <h1 className='inter-700-40px-light'>{(((47.5 - props.plumbingDeviceData.ultrasonic)/47.5)*142.5).toFixed(2)}L</h1>
            </div>
        </div>
        </div>
        </div>
        

      </div>
      {/* <div style={{width: '50%', backgroundColor: 'black', height: '700px', right: 0}}>

      </div> */}
      <div style={{ justifySelf:'center', width:windowDimensions.width > 1500? '50%' : '90%', border: '1px solid rgba(69, 96, 248, 0.5)', borderRadius:'16px', marginLeft:'10px', marginRight:'10px', marginBottom:'10px', marginTop:'10px'}}>
        <div style={{display:'flex', width:'100%', justifyContent:'center'}}>
            <h4 style={{marginTop:'10px' }}>Metrics</h4>
        </div>
        <div style={{padding:'20px', display:'flex', gap:'10px', backgroundColor:'rgba(69, 96, 248, 0.0)', borderRadius:'8px', minHeight:'30vh' , transform: !props.isLess800 ? 'translate(0px, 0px) scale(1)' :'translate(0px, 0px) scale(1)'}}>
            
            <div style={{paddingLeft:'10px', width:'100%'}}>
                <div style={{display: 'flex', width:'100%'}}>
                    <div style={{width: '50%'}}>
                        <div style={{display: 'flex', gap: '7px'}}>
                            <SmallUser/>
                            <h1 className='inter-400-14px-dark'>Account</h1>                      
                        </div>
                        <h1 className='inter-500-16px-dark'>{user.first_name}{'  '}{user.last_name}</h1>
                    </div>

                    <div style={{width: '50%'}}>
                      <div style={{display: 'flex', gap: '7px'}}>
                        <SmallCalendar/>
                        <h1 className='inter-400-14px-dark'>Billing Cycle</h1>                      
                      </div>
                      <h1 className='inter-500-16px-dark'>Monthly</h1>
                    </div>
                </div>
                
                <div style={{display: 'flex', width:'100%'}}>
                    <div style={{width: '50%'}}>
                        <div style={{display: 'flex', gap: '7px'}}>
                            <h1 className='inter-400-14px-dark'>₱</h1> 
                            <h1 className='inter-400-14px-dark'>Rate Per m³</h1>                      
                        </div>
                        <h1 className='inter-500-16px-dark'>₱{props.plumbingDeviceData.conversionrate}</h1>
                    </div>

                    <div style={{width: '50%'}}>
                        <div style={{display: 'flex', gap: '7px'}}>
                            <Droplet/>
                            <h1 className='inter-400-14px-dark' style={{overflow:'hidden', textOverflow:'ellipsis'}}>{new Date().toLocaleString('default', { month: 'long' })} Consumption</h1>                      
                        </div>
                        {(() => {
                                switch (user.solenoid_address) {
                                    case '001':
                                        return <h1 className="inter-500-16px-dark">{((props.plumbingDeviceData.billedvolume1_month)/450000).toFixed(3)}m³</h1>;
                                    case '002':
                                        return <h1 className="inter-500-16px-dark">{((props.plumbingDeviceData.billedvolume2_month)/450000).toFixed(3)}m³</h1>;
                                    case '003':
                                        return <h1 className="inter-500-16px-dark">{((props.plumbingDeviceData.billedvolume3_month)/450000).toFixed(3)}m³</h1>;
                                    default:
                                        return null;
                                }
                            })()}
                    </div>
                </div>

                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap', gap:'20px', paddingTop:'25px', marginRight:'10px'}}>
                <h1 className='inter-500-19px-gray'>Total Consumption:  </h1>
                <div style={{marginLeft:'auto'}}>
                {(() => {
                                switch (user.solenoid_address) {
                                    case '001':
                                        return <h1 className="inter-500-19px-nopadding">{((props.plumbingDeviceData.billedvolume1)/450000).toFixed(3)}m³</h1>;
                                    case '002':
                                        return <h1 className="inter-500-19px-nopadding">{((props.plumbingDeviceData.billedvolume2)/450000).toFixed(3)}m³</h1>;
                                    case '003':
                                        return <h1 className="inter-500-19px-nopadding">{((props.plumbingDeviceData.billedvolume3)/450000).toFixed(3)}m³</h1>;
                                    default:
                                        return null;
                                }
                 })()}
                </div>
                </div>

                <div style={{display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap', gap:'20px', marginRight:'10px'}}>
                <h1 className='inter-500-19px-gray'>Projected Bill:  </h1>
                <div style={{marginLeft:'auto'}}>
                    {(() => {
                                    switch (user.solenoid_address) {
                                        case '001':
                                            return <h1 className="inter-700-22px">₱{(((props.plumbingDeviceData.billedvolume1_month)/450000)*props.plumbingDeviceData.conversionrate).toFixed(2)}</h1>;
                                        case '002':
                                            return <h1 className="inter-700-22px">₱{(((props.plumbingDeviceData.billedvolume2_month)/450000)*props.plumbingDeviceData.conversionrate).toFixed(2)}</h1>;
                                        case '003':
                                            return <h1 className="inter-700-22px">₱{(((props.plumbingDeviceData.billedvolume3_month)/450000)*props.plumbingDeviceData.conversionrate).toFixed(2)}</h1>;
                                        default:
                                            return null;
                                    }
                                })()}
                </div>
                </div>
            </div>
            </div>
        </div>
      
      </div>

      {/* {props.isLess800 && <Button onClick={handleBill} style={{backgroundColor: '#556BD9', color:'#ffffff', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '13px', maxHeight: '30px', paddingTop: '5px'}}>Billing</Button>} */}
    </>
    );
}

WaterDashboard.propTypes = {
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
  windowDimensions: PropTypes.object,
}

const mapStateToProps = (state) => ({
  sidebarState: state.main.sidebarState,
  subsidebarState: state.main.subsidebarState,
  pageHeader: state.main.pageHeader,
  loadingState: state.main.loadingState,
  isLess800: state.main.isLess800,
  plumbingDeviceData: state.main.plumbingDeviceData,
  windowDimensions: state.main.windowDimensions,
  });

export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setpageHeader, setLoading, getPlumbingDevice, updateplumbingTrigger, valveError})(WaterDashboard))