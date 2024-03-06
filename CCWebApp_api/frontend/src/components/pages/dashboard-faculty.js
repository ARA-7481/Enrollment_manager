import React, { useState, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState, setpageHeader, getTeacherdata, setSelectedBG } from '../../redux/actions/main';

import { Placeholder } from 'react-bootstrap';


function FacultyDashboard(props) {

  const [avatar, setAvatar] = useState(JSON.parse(localStorage.getItem('user')).avatar);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  const navigate = useNavigate();
  const date = new Date();
  const currentDay = date.getDay();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    if (!user){
      navigate('/auth/admin-signin');
    }

  useEffect(() => {
    props.setsidebarState('dashboard');
    props.setsubsidebarState(null);
    props.setpageHeader(`Hello ${user.first_name}`, '', 'Welcome to your dashboard');
    props.getTeacherdata(user.facultyprofile)
    props.setSelectedBG('https://ccwebappbucket.s3.ap-southeast-1.amazonaws.com/uploads/bg0.png')
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

                    <div style={{marginLeft: '24px'}}>
                        <div style={{display: 'flex'}}>
                        <h1 className='inter-700-28px'>{user.first_name} {user.last_name}</h1>
                        <div style={{marginLeft: '8px', marginTop: '3px'}}>
                            <h1 className='inter-400-16px' style={{paddingTop: '5px'}}>- {props.teacherData.position }</h1>
                        </div>
                        </div>
                        {props.teacherData.id}
                    </div>
                </div>
            </div>
      </>
    );
}

FacultyDashboard.propTypes = {
  sidebarState: PropTypes.string,
  setsidebarState: PropTypes.func.isRequired,
  subsidebarState: PropTypes.string,
  setsubsidebarState: PropTypes.func.isRequired,
  setpageHeader: PropTypes.func,
  getTeacherdata: PropTypes.func,
  teacherData: PropTypes.object,
  setSelectedBG: PropTypes.func,
  newAvatar: PropTypes.string,
}

const mapStateToProps = (state) => ({
  sidebarState: state.main.sidebarState,
  subsidebarState: state.main.subsidebarState,
  teacherData: state.main.teacherData,
  newAvatar: state.main.newAvatar
  });

export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setpageHeader, getTeacherdata, setSelectedBG})(FacultyDashboard))