import React, { useState, Fragment, useEffect, useRef } from 'react'
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState, setpageHeader, setLoading, getPlumbingDevice, updateplumbingTrigger, valveError } from '../../redux/actions/main';

import { Card, Col, Table, Form, Dropdown, Button, Placeholder } from 'react-bootstrap';
import { Motor, TankPipe, MotorPipe, BallValve, BallPipe, PressureSensor, CurvePipe, Valve, FlowSensor } from '../../assets/svg/clnsmpl-icon';

function WaterDashboard(props) {
    const navigate = useNavigate();

    const handleBill = () => {
        navigate('/water/billing');
        }

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

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
   }, [props.isLess800]);

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
      <div style={{display:'flex', backgroundColor:'#ffffff', borderTopLeftRadius:'8px', borderTopRightRadius:'8px'}}>

      <div style={{backgroundColor:'#ffffff', borderRadius:'8px', height: '700px', width: '100%'}}>
        <div style={{display: 'flex'}}>
            <h4 style={{marginLeft: !props.isLess800 ? '30px' : '20px', paddingTop: '20px', paddingBottom: !props.isLess800 ? '20px' : '0px'}}>Interactive Diagram</h4>
        </div>
        <div style={{position: 'fixed', transform: !props.isLess800 ? 'translate(50px, 60px) scale(1)' :'translate(0px, 60px) scale(0.6)'}}>
            <div style={{height: '1px'}}>
                <Card style={{transform: 'translate( 0px, 325px)', height: '200px', width:'150px', borderColor:'black', borderWidth: '3px'}}>
                    <div style={{height:'200px', display: 'flex', alignItems: 'flex-end'}}>
                    <Card.Body id='watertank' style={{backgroundColor:'#556BD9', borderRadius:'3px', maxHeight: '200px', minHeight: '1px'}}>
                    </Card.Body>
                    </div>
                </Card>
            </div>
            <div style={{transform: 'translate( 75px, 437px) scale(0.15)', height: '1px'}}>
                <TankPipe/>
            </div>
            <div style={{transform: 'translate( 185px, 361px) scale(1.2)', height: '1px'}}>
                <Motor/>
            </div>
            <div style={{transform: 'translate( 117px, 335px) scale(0.13)', height: '1px'}}>
                <MotorPipe/>
            </div>
            <div style={{transform: 'translate( 125px, 245px) scale(0.4)', height: '1px', backgroundColor: props.plumbingDeviceData.trigger == 1 ? 'rgba(180, 40, 40, 0.5)': 'white'}}>
                <BallValve/>
            </div>
            <div style={{transform: 'translate( 117px, 179px) scale(0.13)', height: '1px'}}>
                <BallPipe/>
            </div>
            <div style={{transform: 'translate( 154px, 60px) scale(0.7)', height: '1px'}}>
                <PressureSensor/>
            </div>
            <div style={{transform: 'translate( 156px, -22px) scale(0.58)', height: '1px'}}>
                <CurvePipe/>
            </div>
            <div className='div-valve' onClick={() => handleValveToggle()} style={{transform: 'translate( 245px, -126px) scale(0.5)'}}>
                <Valve/>
            </div>
            <div style={{transform: 'translate( 362px, -212px) scale(0.9)'}}>
                <FlowSensor/>
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
      {/* <div style={{width: '50%', backgroundColor: 'black', height: '700px', right: 0}}>

      </div> */}
      </div>

      {props.isLess800 && <Button onClick={handleBill} style={{backgroundColor: '#556BD9', color:'#ffffff', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '13px', maxHeight: '30px', paddingTop: '5px'}}>Billing</Button>}
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
}

const mapStateToProps = (state) => ({
  sidebarState: state.main.sidebarState,
  subsidebarState: state.main.subsidebarState,
  pageHeader: state.main.pageHeader,
  loadingState: state.main.loadingState,
  isLess800: state.main.isLess800,
  plumbingDeviceData: state.main.plumbingDeviceData,
  });

export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setpageHeader, setLoading, getPlumbingDevice, updateplumbingTrigger, valveError})(WaterDashboard))