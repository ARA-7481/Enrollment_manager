import React, { useState, Fragment, useEffect, useRef } from 'react'
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState, setpageHeader, setUseravatar, setUseremail, setPassword } from '../../redux/actions/main';

import { Form, Button } from 'react-bootstrap';
import { Draft, ForEvaluation, EvaluationInProgress, EvaluationComplete, PendingPayment, PaymentReceived, Enrolled, VerificationFailed } from '../../assets/svg/clnsmpl-icon';


function StudentProfile(props) {

    const fileInput = useRef(null);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    const [email, setEmail] = useState(user.email);
    const [contact, setContact] = useState(user.mobile_number);
    const [oldpw, setOldpw] = useState('');
    const [newpw, setNewpw] = useState('');
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
    const handleSubmitinfo = () => {
        props.setUseremail(contact, email, user.id);
    }
    const handleUpdatepw = () => {
        props.setPassword(oldpw, newpw)
    }
    useEffect(() => {
        props.setsidebarState('settings');
        props.setsubsidebarState(null);
        props.setpageHeader('Profile', '', 'View and Update Account Information');
    }, []);

    useEffect(() => {
        if(props.newAvatar){
            setAvatar(props.newAvatar)
        }
        if(props.newUserdata.id){
            setUser(props.newUserdata)
        }
    }, [email, contact, oldpw, newpw, user, props.newAvatar, props.newUserdata]);

  return (
      <>
      <div style={{backgroundColor:'#ffffff', borderRadius:'8px', padding: '24px'}}>
        <div style={{backgroundColor:'#ffffff', height: '124px', borderRadius:'8px', display: 'flex', alignItems: 'center', paddingRight: '24px', paddingTop: '24px', marginBottom: '48px'}}>
            <div onClick={handleAvatarClick} style={{marginRight: '24px'}}>
                <img className="circular-avatar" src={avatar} alt="description" style={{border: '2px solid #556BD9'}} />
                <input  key={inputKey}  ref={fileInput}
                                        style={{
                                                display: 'none'}} 
                                                type="file" 
                                        onChange={onImageChange} 
                                        accept=".png, .jpg, .jpeg, .webp"/>
            </div>
            <div>
                <div style={{display: 'flex'}}>
                <h1 className='inter-700-28px'>{user.first_name} {user.last_name}</h1>
                <div style={{marginLeft: '8px', marginTop: '3px'}}>
                    {props.studentData.id && (() => {
                            switch(props.studentData.status){
                                case 'Draft':
                                    return <Draft/>
                                case 'For Evaluation':
                                    return <ForEvaluation/>
                                case 'Evaluation In Progress':
                                    return <EvaluationInProgress/>
                                case 'Evaluation Complete':
                                    return <EvaluationComplete/>
                                case 'Pending Payment':
                                    return <PendingPayment/>
                                case 'Payment Received':
                                    return <PaymentReceived/>
                                case 'Enrolled':
                                    return <Enrolled/>
                                case 'Verification Failed':
                                    return <VerificationFailed/>
                                default: 
                                    return <></>
                            }
                        })()}
                </div>
                </div>
                {props.studentData.id && (() => {
                        switch(props.studentData.yearlevel){
                            case '1st':
                                return <h1 className='inter-500-16px-dark'>First Year</h1>
                            case '2nd':
                                return <h1 className='inter-500-16px-dark'>Second Year</h1>
                            case '3rd':
                                return <h1 className='inter-500-16px-dark'>Third Year</h1>
                            case '4th':
                                return <h1 className='inter-500-16px-dark'>Fourth Year</h1>
                            case '5th':
                                return <h1 className='inter-500-16px-dark'>Fifth Year</h1>
                            case 'Irregular':
                                return <h1 className='inter-500-16px-dark'>Irregular</h1>
                            default: 
                                return <h1 className='inter-500-16px-dark'>-</h1>
                        }
                    })()}

                <div style={{display: 'flex'}}>
                    {props.studentData.id && <h1 className='inter-400-16px' style={{marginRight: '8px'}}>{props.studentData.course}</h1> }
                </div>
            </div>
        </div>
            <div style={{borderBottom: '1px solid gray', borderTop: '1px solid gray', paddingBottom: '24px', paddingTop: '24px'}}>
                <h1 className='card-title'>Account Information</h1>
                <div className="form-group text-left"style={{width: '70%', marginRight: '8px'}}>
                    <Form.Group>
                        <Form.Label htmlFor="id" className='form-label'>ID</Form.Label>
                        <div style={{display: 'flex'}}>
                            <h1 className='inter-500-16px-dark'>{props.studentData.id && props.studentData.id}</h1>
                        </div>
                    </Form.Group>
                </div>
                <div className="form-group text-left"style={{width: '70%', marginRight: '8px'}}>
                    <Form.Group>
                        <Form.Label htmlFor="email" className='form-label'>Email</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" value={email} id="email" onChange={e => setEmail(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                    </Form.Group>
                </div>
                <div className="form-group text-left"style={{width: '70%', marginRight: '8px'}}>
                    <Form.Group>
                        <Form.Label htmlFor="contact" className='form-label'>Contact Number</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" value={contact} id="contact" onChange={e => setContact(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                    </Form.Group>
                </div>
                <Button disabled={ !email || !contact || (email === user.email && contact === user.mobile_number)} 
                          className='buttonsonforms'
                          onClick={handleSubmitinfo}
                          type="button" 
                          style={{minWidth: '15%', height: '40px', marginRight: '24px'}}>
                    <h1 className='inter-500-18px' style={{color:'white'}}>
                        Save Changes
                    </h1>
                  </Button>
            </div>
            <div style={{borderBottom: '1px solid gray',}}>
                <h1 className='card-title' style={{marginTop: '24px'}}>Change Password</h1>
                <div className="form-group text-left"style={{width: '70%', marginRight: '8px'}}>
                    <Form.Group>
                        <Form.Label htmlFor="oldpw" className='form-label'>Old Password</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="password" value={oldpw} id="oldpw" onChange={e => setOldpw(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                    </Form.Group>
                </div>
                <div className="form-group text-left"style={{width: '70%', marginRight: '8px'}}>
                    <Form.Group>
                        <Form.Label htmlFor="newpw" className='form-label'>New Password</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="password" value={newpw} id="newpw" onChange={e => setNewpw(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                    </Form.Group>
                </div>
                <Button disabled={ !oldpw || !newpw } 
                          className='buttonsonforms'
                          onClick={handleUpdatepw}
                          type="button" 
                          style={{minWidth: '15%', height: '40px', marginRight: '24px', marginBottom: '24px'}}>
                    <h1 className='inter-500-18px' style={{color:'white'}}>
                        Update Password
                    </h1>
                </Button>
            </div>
      </div>
      </>
    );
}

StudentProfile.propTypes = {
  sidebarState: PropTypes.string,
  setsidebarState: PropTypes.func,
  subsidebarState: PropTypes.string,
  setsubsidebarState: PropTypes.func,
  setpageHeader: PropTypes.func,
  studentData: PropTypes.object,
  setUseravatar: PropTypes.func,
  newAvatar: PropTypes.string,
  setUseremail: PropTypes.func,
  newUserdata: PropTypes.object,
  setPassword: PropTypes.func,
}

const mapStateToProps = (state) => ({
  sidebarState: state.main.sidebarState,
  subsidebarState: state.main.subsidebarState,
  studentData: state.main.studentData,
  newAvatar: state.main.newAvatar,
  newUserdata: state.main.newUserdata,
  });

export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setpageHeader, setUseravatar, setUseremail, setPassword})(StudentProfile))