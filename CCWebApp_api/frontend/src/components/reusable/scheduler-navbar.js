import { Navigate, useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import withAuth from '../common/withAuth';

import {SignOut} from '../../redux/actions/auth';
import logo from '../../assets/images/backgrounds/R.png'
import { setUseravatar } from '../../redux/actions/main';

import { HomeButton, CalendarButton, FacultyButton } from '../../assets/svg/clnsmpl-icon';
import { Form,
         Dropdown,
         Table,
         Button,
         Spinner } from 'react-bootstrap';

function SchedulerNavbar(props){
    const navigate = useNavigate();
    const handleSignout = () => {
      props.SignOut()
      return <Navigate to="/auth/admin-signin" />;
    }
    const handleProfile = () => {
      setMenu('')
      navigate("/scheduler/profile");
    }
    const handleDashboard = () => {
      setMenu('dashboard')
      navigate("/scheduler/dashboard");
    }
    const handleHome = () => {
      setMenu('home')
      navigate("/scheduler/regularview");
    }
    const handleFaculty = () => {
      setMenu('facultylist')
      navigate("/scheduler/facultylist");
    }

    const user = JSON.parse(localStorage.getItem('user'))
    if (!user){
      return <Navigate to="/auth/admin-signin" />;
    }

    const fileInput = useRef(null);
    const [avatar, setAvatar] = useState(JSON.parse(localStorage.getItem('user')).avatar);
    const [inputKey, setInputKey] = useState(Date.now());
    const [menu, setMenu] = useState('home');

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
          <div style={{width: props.isLess800 ?'10%':'33%', display: 'flex', alignItems: 'center', margin: '20px'}}>
            <div>
                <img className="circular-logo" src={logo} alt="description" />
            </div>
            <div style={{marginLeft: '10px'}}>
              {!props.isLess800 ? 
                <h1 className='inter-500-22px-light'>BISU-Balilihan</h1>
                :<></>
              }
            </div>
          </div>
          <div style={{display: 'flex', width:props.isLess800 ?'70%':'33%', justifyContent: 'center'}}>
            <div onClick={handleHome} className='scheduler-dashboard-options' style={{marginRight: '7%', justifyItems: 'center', borderBottom:menu=='home'? 'solid 2px white':'none'}}>
            <HomeButton />
            {!props.isLess800 ? 
            <h1 className='inter-500-16px-light' style={{marginTop: '10px'}}>Home</h1>
            :<></>
            }
            </div>

            <div onClick={handleDashboard} className='scheduler-dashboard-options' style={{justifyItems: 'center', borderBottom:menu=='dashboard'? 'solid 2px white':'none'}}>
            <CalendarButton />
            {!props.isLess800 ? 
            <h1 className='inter-500-16px-light' style={{marginTop: '10px'}}>Manage</h1>
            :<></>
            }
            </div>

            {user.usertype == 'Admin'?
            <div onClick={handleFaculty} className='scheduler-dashboard-options' style={{marginLeft:'7%',justifyItems: 'center', borderBottom:menu=='facultylist'? 'solid 2px white':'none', textOverflow:'ellipsis'}}>
            <FacultyButton />
            {!props.isLess800 ? 
            <h1 className='inter-500-16px-light' style={{marginTop: '10px'}}>Faculty</h1>
            :<></>
            }
            </div>
            :<></>
            }
          </div>
            <div style={{display:'flex', justifyContent:'flex-end', width: props.isLess800?'20%':'34%', alignItems: 'center', marginLeft:props.isLess800?'auto':''}}>
              <div style={{display:'flex', alignItems:'center'}}>
                <Dropdown style={{marginTop:'5px', marginRight:'10px'}}>
                    <Dropdown.Toggle className='formselect-border-wide' style={{border: 'none', backgroundColor: 'rgba(51, 51, 51, 0.00)', color: 'white', minWidth: props.isLess800? '0px':'155px', height: '24px', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'center'}}>
                    {!props.isLess800 ? 
                      <h1 style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '24px', color:'white', marginTop:'10px', marginRight:'10px'}}>{user.first_name} {user.last_name}</h1>
                      :<></>
                      }
                      </Dropdown.Toggle>
                    <Dropdown.Menu style={{ width: '100%', borderRadius:'8px', overflow: 'auto', zIndex:9999}}>
                        <Dropdown.Item onClick={handleProfile}>
                           <h1 className='dropdown-item' style={{marginTop:'10px'}}>Profile</h1>
                        </Dropdown.Item>
                        <Dropdown.Item onClick={handleSignout}>
                           <h1 className='dropdown-item' style={{marginTop:'10px'}}>Logout</h1>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
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
  newAvatar: PropTypes.string,
  isLess800: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  newAvatar: state.main.newAvatar,
  isLess800: state.main.isLess800,
})

export default withAuth(connect(mapStateToProps, {SignOut, setUseravatar })(SchedulerNavbar))