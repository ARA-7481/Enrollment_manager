import React, { useState, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState, setpageHeader, getTeacherdata, setSelectedclass, setSelectedBG } from '../../redux/actions/main';

import { Card, Placeholder } from 'react-bootstrap';

function Teacherdashboard(props) {

    const [avatar, setAvatar] = useState(JSON.parse(localStorage.getItem('user')).avatar);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

    const navigate = useNavigate();
    const date = new Date();
    const currentDay = date.getDay();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    if (!user){
      navigate('/auth/admin-signin');
    }

    const handleClassSelection = (classcode, bg_url) => {
        props.setSelectedclass(classcode);
        props.setSelectedBG(bg_url);
        navigate('/teachers/classdashboard');
    }

    useEffect(() => {
        props.setsidebarState('dashboard');
        props.setsubsidebarState(null);
        props.setpageHeader('Hello Faculty', '', 'Welcome to your dashboard');
        props.getTeacherdata(user.email)
        props.setSelectedBG('');
    }, []);

    useEffect(() => {
        if(props.newAvatar){
            setAvatar(props.newAvatar)
        }
    }, [props.newAvatar]);

    

    return (
        <>
            <div style={{backgroundColor:'#e9ecef', borderTopLeftRadius:'8px', borderTopRightRadius:'8px', width: '100%'}}> 
                <div style={{backgroundColor:'#ffffff', height: '124px', borderRadius:'8px', display: 'flex', alignItems: 'center', padding: '24px'}}>
                    <div style={{transform: 'translate( 0px, -60px)'}}>
                        <img className="circular-avatar" src={avatar} alt="description" />
                    </div>
                    <h1 className='inter-700-28px'>{user.first_name} {user.last_name}</h1>
                    <h1 className='inter-400-16px' style={{marginLeft: '15px'}}>{props.teacherData.length != 0 && props.teacherData[0].position }</h1>
                </div>
                <div className='class-container'>
                    {props.teacherData.length != 0? [...props.teacherData[0].teacher_related_class].sort((a, b) => a.code.localeCompare(b.code)).map(item => (
                        <div key={item.code} className="class-item" onClick={() => handleClassSelection(item.code, item.bg_gradient)}>
                            <div className="class-itemheader" style={{backgroundImage: `url(${item.bg_gradient})`}}>
                            </div>
                            <div className="class-itemdata">
                                <h1 className='inter-500-19px-nopadding'>{item.code}</h1>
                                <h1 className='inter-500-16px'>{
                                    item.schedule.map((sched, index) => {
                                        if (sched.day === days[currentDay]){
                                            const timein = sched.time_in.split(':').slice(0, 2).join(':');
                                            const timeout = sched.time_out.split(':').slice(0, 2).join(':');
                                            return <span key={index}>{timein}-{timeout}  {'('}{sched.room}{')'}</span>
                                        }
                                        return <span key={index}>No schedule for today</span>
                                    })
                                    
                                }</h1>
                                <h1 className='inter-600-16px'>{item.students.length} students</h1>
                            </div>
                        </div>
                    )) : 
                        <div className='class-container'>
                            <div className="class-item" >
                                <div className="class-itemheader">
                                </div>
                                <div className="class-itemdata">
                                <div style={{marginBottom: '8px'}}>
                                    <Placeholder animation="glow" style={{ color: 'rgba(51, 51, 51, 0.20)'}}>
                                    <Placeholder xs={8} />
                                    </Placeholder>
                                    </div>
                                    <div style={{marginBottom: '8px'}}>
                                    <Placeholder animation="glow" style={{color: 'rgba(51, 51, 51, 0.20)'}}>
                                    <Placeholder xs={6} />
                                    </Placeholder>
                                    </div>
                                    <div style={{marginBottom: '8px'}}>
                                    <Placeholder animation="glow" style={{color: 'rgba(51, 51, 51, 0.20)'}}>
                                    <Placeholder xs={8} />
                                    </Placeholder>
                                    </div>
                                    <div style={{marginBottom: '8px'}}>
                                    <Placeholder animation="glow" style={{color: 'rgba(51, 51, 51, 0.20)'}}>
                                    <Placeholder xs={4} />
                                    </Placeholder>
                                    </div>
                                </div>
                            </div>
                            <div className="class-item" >
                                <div className="class-itemheader">
                                </div>
                                <div className="class-itemdata">
                                <div style={{marginBottom: '8px'}}>
                                    <Placeholder animation="glow" style={{ color: 'rgba(51, 51, 51, 0.20)'}}>
                                    <Placeholder xs={8} />
                                    </Placeholder>
                                    </div>
                                    <div style={{marginBottom: '8px'}}>
                                    <Placeholder animation="glow" style={{color: 'rgba(51, 51, 51, 0.20)'}}>
                                    <Placeholder xs={6} />
                                    </Placeholder>
                                    </div>
                                    <div style={{marginBottom: '8px'}}>
                                    <Placeholder animation="glow" style={{color: 'rgba(51, 51, 51, 0.20)'}}>
                                    <Placeholder xs={8} />
                                    </Placeholder>
                                    </div>
                                    <div style={{marginBottom: '8px'}}>
                                    <Placeholder animation="glow" style={{color: 'rgba(51, 51, 51, 0.20)'}}>
                                    <Placeholder xs={4} />
                                    </Placeholder>
                                    </div>
                                </div>
                            </div>
                            <div className="class-item" >
                                <div className="class-itemheader">
                                </div>
                                <div className="class-itemdata">
                                <div style={{marginBottom: '8px'}}>
                                    <Placeholder animation="glow" style={{ color: 'rgba(51, 51, 51, 0.20)'}}>
                                    <Placeholder xs={8} />
                                    </Placeholder>
                                    </div>
                                    <div style={{marginBottom: '8px'}}>
                                    <Placeholder animation="glow" style={{color: 'rgba(51, 51, 51, 0.20)'}}>
                                    <Placeholder xs={6} />
                                    </Placeholder>
                                    </div>
                                    <div style={{marginBottom: '8px'}}>
                                    <Placeholder animation="glow" style={{color: 'rgba(51, 51, 51, 0.20)'}}>
                                    <Placeholder xs={8} />
                                    </Placeholder>
                                    </div>
                                    <div style={{marginBottom: '8px'}}>
                                    <Placeholder animation="glow" style={{color: 'rgba(51, 51, 51, 0.20)'}}>
                                    <Placeholder xs={4} />
                                    </Placeholder>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        
        </>
    );
    }

    Teacherdashboard.propTypes = {
    sidebarState: PropTypes.string,
    setsidebarState: PropTypes.func.isRequired,
    subsidebarState: PropTypes.string,
    setsubsidebarState: PropTypes.func.isRequired,
    setpageHeader: PropTypes.func,
    getTeacherdata: PropTypes.func,
    teacherData: PropTypes.array,
    setSelectedclass: PropTypes.func,
    setSelectedBG: PropTypes.func,
    newAvatar: PropTypes.string,
    }

    const mapStateToProps = (state) => ({
    sidebarState: state.main.sidebarState,
    subsidebarState: state.main.subsidebarState,
    teacherData: state.main.teacherData,
    newAvatar: state.main.newAvatar
    });

    export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setpageHeader, getTeacherdata, setSelectedclass, setSelectedBG})(Teacherdashboard))