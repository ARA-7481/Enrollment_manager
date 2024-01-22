import React, { useState, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState, setpageHeader, getActivities, setSelectedBG, setClassbackground, getActivity } from '../../redux/actions/main';

import avatar2 from '../../assets/images/avatars/avatar.webp'

import { Button } from 'react-bootstrap';
import { Document, CloseButton } from '../../assets/svg/clnsmpl-icon';

function Studentclasspage(props) {
    const navigate = useNavigate();

    const handleSubmitactivity = (id) => {
        props.getActivity(id)
        navigate('/students/activity-submit');
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
                    </div>
                    <div style={{display: 'flex', gap: '16px', maxHeight: '36px'}}>
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
                                if (activity.related_entry.length > 0){
                                const hasSubmitted = activity.related_entry.some(entry => 
                                    entry.submitted_by === props.studentData[0].id)
                                    if (!hasSubmitted){
                                        return (
                                            <div key={activity.id} className='activity-item'>
                                                <h1 className='inter-500-19px-nopadding'>{activity.title}</h1>
                                                <h1 className='inter-500-16px-dark'>{activity.activity_type}</h1>
                                                <h1 className='inter-400-16px' style={{whiteSpace: 'nowrap', overflow: 'hidden'}}>{activity.instruction}</h1>
                                                <div style={{display: 'flex', gap: '10px'}}>
                                                <h1 className='inter-400-16px' style={{whiteSpace: 'nowrap', overflow: 'hidden'}}>Start Date: {activity.start}</h1>
                                                <h1 className='inter-400-16px' style={{whiteSpace: 'nowrap', overflow: 'hidden'}}>Deadline: {activity.deadline}</h1>
                                                </div>
                                                <Button type="button" onClick={() => handleSubmitactivity(activity.id)} style={{borderColor:'#3A57E8', borderRadius: '4px', backgroundColor: '#3A57E8', width: '30%', height: '48px', alignContent: 'center', marginRight: '24px', maxWidth: '180px'}}>
                                                    <h1 style={{color:'white', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '18px', paddingTop: '8px', whiteSpace: 'nowrap', overflow: 'hidden'}}>
                                                    Submit Answer </h1>
                                                </Button>
                                            </div>
                                        )
                                    }
                                } else {
                                    return (
                                        <div key={activity.id} className='activity-item'>
                                            <h1 className='inter-500-19px-nopadding'>{activity.title}</h1>
                                            <h1 className='inter-500-16px-dark'>{activity.activity_type}</h1>
                                            <h1 className='inter-400-16px' style={{whiteSpace: 'nowrap', overflow: 'hidden'}}>{activity.instruction}</h1>
                                            <div style={{display: 'flex', gap: '10px'}}>
                                            <h1 className='inter-400-16px' style={{whiteSpace: 'nowrap', overflow: 'hidden'}}>Start Date: {activity.start}</h1>
                                            <h1 className='inter-400-16px' style={{whiteSpace: 'nowrap', overflow: 'hidden'}}>Deadline: {activity.deadline}</h1>
                                            </div>
                                            <Button type="button" onClick={() => handleSubmitactivity(activity.id)} style={{borderColor:'#3A57E8', borderRadius: '4px', backgroundColor: '#3A57E8', width: '30%', height: '48px', alignContent: 'center', marginRight: '24px', maxWidth: '180px'}}>
                                                <h1 style={{color:'white', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '18px', paddingTop: '8px', whiteSpace: 'nowrap', overflow: 'hidden'}}>
                                                Submit Answer </h1>
                                            </Button>
                                        </div>
                                    )
                                }
                                }})}
                    </div>
                    <div style={{width: '43%'}}>
                    <div className='finished-activity-container' style={{ maxHeight: '520px', overflowY: 'auto', width: '100%'}}>
                        <h1 className='card-title' style={{borderBottom: '1px solid #EEEEEE'}}>Finished Activities</h1>
                        {props.activitiesOnclass.map(activity => {

                        const currentDate = new Date();
                        const deadlineDate = new Date(activity.deadline);

                        if (currentDate <= deadlineDate) {
                            if (activity.related_entry.length > 0){
                                const hasSubmitted = activity.related_entry.some(entry => 
                                    entry.submitted_by == props.studentData[0].id)
                                    if (hasSubmitted){
                                        return (
                                            <div key={activity.id} className='activity-item'>
                                                <h1 className='inter-500-19px-nopadding'>{activity.title}</h1>
                                                <h1 className='inter-500-16px-dark'>{activity.activity_type}</h1>
                                                <h1 className='inter-400-16px' style={{whiteSpace: 'nowrap', overflow: 'hidden'}}>{activity.instruction}</h1>
                                                <div style={{display: 'flex', gap: '10px'}}>
                                                <h1 className='inter-400-16px' style={{whiteSpace: 'nowrap', overflow: 'hidden'}}>Start Date: {activity.start}</h1>
                                                <h1 className='inter-400-16px' style={{whiteSpace: 'nowrap', overflow: 'hidden'}}>Deadline: {activity.deadline}</h1>
                                                </div>
                                                <Button type="button" style={{borderColor:'#3A57E8', borderRadius: '4px', backgroundColor: '#3A57E8', width: '30%', height: '48px', alignContent: 'center', marginRight: '24px', maxWidth: '180px'}}>
                                                    <h1 style={{color:'white', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '18px', paddingTop: '8px', whiteSpace: 'nowrap', overflow: 'hidden'}}>
                                                    View Details </h1>
                                                </Button>
                                            </div>
                                        )}}}})} 
                    </div>
                    <div className='finished-activity-container' style={{ maxHeight: '520px', overflowY: 'auto', width: '100%'}}>
                        <h1 className='card-title' style={{borderBottom: '1px solid #EEEEEE'}}>Over-Due Activities</h1>
                        {props.activitiesOnclass.map(activity => {

                            const currentDate = new Date();
                            const deadlineDate = new Date(activity.deadline);

                            if (currentDate > deadlineDate) {
                                if (activity.related_entry.length > 0){
                                    const hasSubmitted = activity.related_entry.some(entry => 
                                        entry.submitted_by === props.studentData[0].id)
                                        if (!hasSubmitted){
                                            return (
                                                <div key={activity.id} className='activity-item'>
                                                    <h1 className='inter-500-19px-nopadding'>{activity.title}</h1>
                                                    <h1 className='inter-500-16px-dark'>{activity.activity_type}</h1>
                                                    <h1 className='inter-400-16px' style={{whiteSpace: 'nowrap', overflow: 'hidden'}}>{activity.instruction}</h1>
                                                    <div style={{display: 'flex', gap: '10px'}}>
                                                    <h1 className='inter-400-16px' style={{whiteSpace: 'nowrap', overflow: 'hidden'}}>Start Date: {activity.start}</h1>
                                                    <h1 className='inter-400-16px' style={{whiteSpace: 'nowrap', overflow: 'hidden'}}>Deadline: {activity.deadline}</h1>
                                                    </div>
                                                    <Button type="button" style={{borderColor:'#3A57E8', borderRadius: '4px', backgroundColor: '#3A57E8', width: '30%', height: '48px', alignContent: 'center', marginRight: '24px', maxWidth: '180px'}}>
                                                        <h1 style={{color:'white', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '18px', paddingTop: '8px', whiteSpace: 'nowrap', overflow: 'hidden'}}>
                                                        View Details </h1>
                                                    </Button>
                                                </div>
                                            )
                                        }
                                    }else{
                                        return (
                                            <div key={activity.id} className='activity-item'>
                                                <h1 className='inter-500-19px-nopadding'>{activity.title}</h1>
                                                <h1 className='inter-500-16px-dark'>{activity.activity_type}</h1>
                                                <h1 className='inter-400-16px' style={{whiteSpace: 'nowrap', overflow: 'hidden'}}>{activity.instruction}</h1>
                                                <div style={{display: 'flex', gap: '10px'}}>
                                                <h1 className='inter-400-16px' style={{whiteSpace: 'nowrap', overflow: 'hidden'}}>Start Date: {activity.start}</h1>
                                                <h1 className='inter-400-16px' style={{whiteSpace: 'nowrap', overflow: 'hidden'}}>Deadline: {activity.deadline}</h1>
                                                </div>
                                                <Button type="button" style={{borderColor:'#3A57E8', borderRadius: '4px', backgroundColor: '#3A57E8', width: '30%', height: '48px', alignContent: 'center', marginRight: '24px', maxWidth: '180px'}}>
                                                    <h1 style={{color:'white', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '18px', paddingTop: '8px', whiteSpace: 'nowrap', overflow: 'hidden'}}>
                                                    View Details </h1>
                                                </Button>
                                            </div>
                                        )
                                    }
                                
                              }})} 
                    </div>
                    </div>

                   

                </div>
            </div>
        </>
        );
    }

    Studentclasspage.propTypes = {
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
    getActivity: PropTypes.func,
    studentData: PropTypes.array,
    }

    const mapStateToProps = (state) => ({
    sidebarState: state.main.sidebarState,
    subsidebarState: state.main.subsidebarState,
    selectedClass: state.main.selectedClass,
    selectedBG: state.main.selectedBG,
    activitiesOnclass: state.main.activitiesOnclass,
    studentData: state.main.studentData,
    });

    export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setpageHeader, getActivities, setSelectedBG, setClassbackground, getActivity})(Studentclasspage))