import React, { useState, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState, setpageHeader, getTeacherdata, getActivities, setSelectedBG, setClassbackground, getActivity, getClassdata } from '../../redux/actions/main';
import Modal from 'react-modal'
Modal.setAppElement('#app');

import avatar2 from '../../assets/images/avatars/avatar.webp'

import { Button } from 'react-bootstrap';
import { Document, CloseButton } from '../../assets/svg/clnsmpl-icon';

function Teacherclasspage(props) {
    const navigate = useNavigate();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const bg_options = ['http://localhost:8000/media/bg1.png','http://localhost:8000/media/bg2.png','http://localhost:8000/media/bg3.png','http://localhost:8000/media/bg4.png','http://localhost:8000/media/bg5.png',
                        'http://localhost:8000/media/bg6.png','http://localhost:8000/media/bg7.png','http://localhost:8000/media/bg8.png','http://localhost:8000/media/bg9.png','http://localhost:8000/media/bg10.png',]
    const handleSetBG = (option) => {
        props.setSelectedBG(option)
        props.setClassbackground(option,props.selectedClass)
    }
    const handleModalopen = () => {
        setModalIsOpen(true);
      }
    const handleModalclose = () => {
        setModalIsOpen(false);
      }
    const handleSubmissionView = (id) => {
        props.getActivity(id)
        navigate('/teachers/activity-entryview');

    }
    const user = JSON.parse(localStorage.getItem('user'))
    useEffect(() => {
        props.setsidebarState('dashboard');
        props.setsubsidebarState('inclass');
        props.setpageHeader(props.selectedClass, '', '');
        props.getActivities(props.selectedClass);
    }, [props.selectedClass]);

    return (
        <>
            <div style={{backgroundColor:'#e9ecef', borderTopLeftRadius:'8px', borderTopRightRadius:'8px', width: '100%'}}> 
                <div style={{backgroundColor:'#ffffff', height: '124px', borderRadius:'8px', display: 'flex', alignItems: 'center', padding: '24px'}}>
                        <div style={{transform: 'translate( 0px, -60px)', display:'flex'}}>
                            <img className="circular-avatar" src={avatar2} alt="description" />
                        </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <h1 className='inter-700-28px'>{user.first_name} {user.last_name}</h1>
                        <h1 className='inter-400-16px' style={{marginLeft: '15px'}}>{props.teacherData.length != 0 && props.teacherData[0].position }</h1>
                    </div>
                    <div style={{display: 'flex', gap: '16px', maxHeight: '36px'}}>
                        <Button className='buttonsonnavbars-v2' type="button" href='/#/teachers/activity-create'>
                            <div style={{maxHeight: '20px'}}>
                                <h1 className='buttons-font-v2'>Create Activity</h1>
                            </div>
                        </Button>
                        <Button className='buttonsonnavbars-v2' type="button" onClick={() => handleModalopen()}>
                            <div style={{maxHeight: '20px'}}>
                                <h1 className='buttons-font-v2'>Set Background</h1>
                            </div>
                        </Button>
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={handleModalclose}
                            contentLabel="Subject Creation"
                            shouldCloseOnOverlayClick={false}
                            style={{
                                overlay: {
                                    backgroundColor: 'rgba(0, 0, 0, 0.50)'
                                  },
                            content: {
                                width: '65%',
                                height: '65%',
                                left: '50%',
                                transform: 'translate(-40%, 40%)',
                            }
                            }}>
                            <>
                            <div style={{display: 'flex', width: '100%', justifyContent: 'flex-end'}}>
                            <button onClick={handleModalclose} style={{backgroundColor:'rgba(51, 51, 51, 0.00)', borderColor:'rgba(51, 51, 51, 0.00)', paddingLeft: '0px', paddingRight:'0px', paddingBottom:'5px', left:0}}><CloseButton/></button>
                            </div>
                            
                            <div className='class-container'>
                                {bg_options.map((option, index) => (
                                    <div key={index} className='bg-item' onClick={()=> handleSetBG(option)}>
                                        <img src={option} style={{width: '100%'}} />
                                    </div>
                                ))}
                            </div>


                            <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                            </div>
                            </>
                        </Modal>
                    </div>
                    </div>
                </div>
                <div style={{display: 'flex', gap: '40px'}}>
                    <div className='ongoing-activity-container'>
                        <h1 className='card-title' style={{borderBottom: '1px solid #EEEEEE'}}>Upcoming and Ongoing Activities</h1>
                        {props.activitiesOnclass.map(activity => {

                            const currentDate = new Date();
                            const deadlineDate = new Date(activity.deadline);

                            if (currentDate <= deadlineDate) {
                                return (
                                    <div key={activity.id} className='activity-item'>
                                        <h1 className='inter-500-19px-nopadding'>{activity.title}</h1>
                                        <h1 className='inter-500-16px-dark'>{activity.activity_type}</h1>
                                        <h1 className='inter-400-16px' style={{whiteSpace: 'nowrap', overflow: 'hidden', marginTop: '24px'}}>{activity.instruction}</h1>
                                        <a className='inter-400-16px-link' href={activity.referencefile} target="_blank" rel="noopener noreferrer">
                                            <Document/> File Reference
                                        </a>
                                        <div style={{display: 'flex', gap: '10px'}}>
                                        <h1 className='inter-400-16px' style={{marginTop: '12px', whiteSpace: 'nowrap', overflow: 'hidden'}}>Start Date: {activity.start}</h1>
                                        <h1 className='inter-400-16px' style={{marginTop: '12px', whiteSpace: 'nowrap', overflow: 'hidden'}}>Deadline: {activity.deadline}</h1>
                                        </div>
                                        <Button onClick={() => handleSubmissionView(activity.id)} type="button" style={{borderColor:'#3A57E8', borderRadius: '4px', backgroundColor: '#3A57E8', width: '30%', height: '48px', alignContent: 'center', marginRight: '24px', maxWidth: '180px'}}>
                                            <h1 style={{color:'white', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '18px', paddingTop: '8px', whiteSpace: 'nowrap', overflow: 'hidden'}}>
                                            View Submissions </h1>
                                        </Button>
                                    </div>
                                )}})}
                    </div>
                    <div className='finished-activity-container' style={{width: '43%'}}>
                        <h1 className='card-title' style={{borderBottom: '1px solid #EEEEEE'}}>Completed Activities</h1>
                        {props.activitiesOnclass.map(activity => {

                        const currentDate = new Date();
                        const deadlineDate = new Date(activity.deadline);

                        if (currentDate > deadlineDate) {
                            return (
                                <div key={activity.id} className='activity-item'>
                                    <h1 className='inter-500-19px-nopadding'>{activity.title}</h1>
                                    <h1 className='inter-500-16px-dark'>{activity.activity_type}</h1>
                                    <h1 className='inter-400-16px' style={{whiteSpace: 'nowrap', overflow: 'hidden', marginTop: '24px'}}>{activity.instruction}</h1>
                                    <a className='inter-400-16px-link' href={activity.referencefile} target="_blank" rel="noopener noreferrer">
                                        <Document/> File Reference
                                    </a>
                                    <div style={{display: 'flex', gap: '10px'}}>
                                    <h1 className='inter-400-16px' style={{marginTop: '12px', whiteSpace: 'nowrap', overflow: 'hidden'}}>Start Date: {activity.start}</h1>
                                    <h1 className='inter-400-16px' style={{marginTop: '12px', whiteSpace: 'nowrap', overflow: 'hidden'}}>Deadline: {activity.deadline}</h1>
                                    </div>
                                    <Button onClick={() => handleSubmissionView(activity.id)} type="button" style={{borderColor:'#3A57E8', borderRadius: '4px', backgroundColor: '#3A57E8', width: '30%', height: '48px', alignContent: 'center', marginRight: '24px', maxWidth: '180px'}}>
                                        <h1 style={{color:'white', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '18px', paddingTop: '8px', whiteSpace: 'nowrap', overflow: 'hidden'}}>
                                        View Submissions </h1>
                                    </Button>
                                </div>
                            )}})}
                    </div>

                </div>
            </div>
        </>
        );
    }

Teacherclasspage.propTypes = {
    sidebarState: PropTypes.string,
    setsidebarState: PropTypes.func.isRequired,
    subsidebarState: PropTypes.string,
    setsubsidebarState: PropTypes.func.isRequired,
    setpageHeader: PropTypes.func,
    selectedClass: PropTypes.string,
    selectedBG: PropTypes.string,
    getActivities: PropTypes.func,
    setSelectedBG: PropTypes.func,
    setClassbackground: PropTypes.func,
    teacherData: PropTypes.array,
    getActivity: PropTypes.func,
    getClassdata: PropTypes.func,
    }

const mapStateToProps = (state) => ({
    sidebarState: state.main.sidebarState,
    subsidebarState: state.main.subsidebarState,
    selectedClass: state.main.selectedClass,
    selectedBG: state.main.selectedBG,
    activitiesOnclass: state.main.activitiesOnclass,
    teacherData: state.main.teacherData,
    });

    export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setpageHeader, getActivities, setSelectedBG, setClassbackground, getActivity, getClassdata})(Teacherclasspage))