import { Navigate } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, Navbar, Button } from 'react-bootstrap';
import withAuth from '../common/withAuth';

import {SignOut} from '../../redux/actions/auth';
import logo from '../../assets/images/backgrounds/R.png'
import { setUseravatar } from '../../redux/actions/main';

import { HomeButton, CalendarButton } from '../../assets/svg/clnsmpl-icon';

function SchedulerNavbar(props){
    const handleSignout = () => {
      props.SignOut()
      return <Navigate to="/auth/admin-signin" />;
    }

    const user = JSON.parse(localStorage.getItem('user'))
    if (!user){
      return <Navigate to="/auth/admin-signin" />;
    }

    const fileInput = useRef(null);
    const [avatar, setAvatar] = useState(JSON.parse(localStorage.getItem('user')).avatar);
    const [inputKey, setInputKey] = useState(Date.now());

    const onImageChange = e => {
            if (e.target.files.length > 0) {
              props.setUseravatar(e.target.files[0], user.id);
              }
            }
    const handleAvatarClick = () => {
            fileInput.current.click();
            }

    useEffect(() => {
            if(props.newAvatar){
                setAvatar(props.newAvatar)
            }
        }, [user, props.newAvatar]);

    return(
        <div style={{display:'flex', width: '100%', height:'100px', backgroundColor: '#556BD9', alignItems: 'center'}}>
          <div style={{width: '33%', display: 'flex', alignItems: 'center', margin: '20px'}}>
            <div>
                <img className="circular-logo" src={logo} alt="description" />
            </div>
            <div style={{marginLeft: '10px'}}>
                <h1 className='inter-500-22px-light'>BISU-Balilihan Events Calendar</h1>
            </div>
          </div>
          <div style={{display: 'flex', width: '33%', justifyContent: 'center'}}>
            <div className='scheduler-dashboard-options' style={{marginRight: '7%', justifyItems: 'center'}}>
            <HomeButton />
            <h1 className='inter-500-16px-light' style={{marginTop: '10px'}}>Home</h1>
            </div>
            <div className='scheduler-dashboard-options' style={{justifyItems: 'center'}}>
            <CalendarButton />
            <h1 className='inter-500-16px-light' style={{marginTop: '10px'}}>Manage</h1>
            </div>
          </div>
            <div style={{display:'flex', justifyContent:'flex-end', width:'34%', marginRight:'20px', alignItems: 'center'}}>
              <div>
                <h1 style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '24px', color:'white', marginRight: '20px'}}>{user.first_name} {user.last_name}</h1>
              </div>
              <div onClick={handleAvatarClick} style={{marginRight: '24px'}}>
                <img className="circular-logo" src={avatar} alt="description" style={{border: '2px solid #556BD9'}} />
                <input  key={inputKey}  ref={fileInput}
                                        style={{
                                                display: 'none'}} 
                                                type="file" 
                                        onChange={onImageChange} 
                                        accept=".png, .jpg, .jpeg, .webp"/>
            </div>
            </div>
        </div>
    )
}

SchedulerNavbar.propTypes = {
  SignOut: PropTypes.func,
  setUseravatar: PropTypes.func,
  newAvatar: PropTypes.string
}

const mapStateToProps = (state) => ({
  newAvatar: state.main.newAvatar,
})

export default withAuth(connect(mapStateToProps, {SignOut, setUseravatar })(SchedulerNavbar))