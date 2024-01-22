import React, { useState, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState, setpageHeader, setLoading, addActivityentry, getClassdata, getEntry, setSubmittingStudent} from '../../redux/actions/main';

import { Button, Form, InputGroup, Spinner, Table, Dropdown } from 'react-bootstrap';
import { Document, NoSubmission } from '../../assets/svg/clnsmpl-icon';

import "react-datepicker/dist/react-datepicker.css";


function ActivitySubmit(props) {

    const user = JSON.parse(localStorage.getItem('user'))

    const navigate = useNavigate();

    const [activitytitle, setActivitytitle] = useState('');
    const [startdate, setStartdate] = useState('');
    const [deadline, setDeadline] = useState('');
    const [activitytype, setActivitytype] = useState('CAD Evaluation');
    const [instruction, setInstruction] = useState('');
    const [referencefile, setRefencefile] = useState(null);
    const [tools, setTools] = useState([]);
    const [prompt, setPrompt] = useState('');
    
    const [formData, setFormData] = useState({});

    const handleDetail = (entryID, student) => {
        props.getEntry(entryID);
        props.setSubmittingStudent(student)
        navigate('/teachers/activity-viewdetail');
    }

    useEffect(() => {
        props.setsidebarState('dashboard');
        props.setsubsidebarState('inclass');
        props.setpageHeader(`${props.selectedClass} - ${props.activityData.title}`, '', '');
        props.getClassdata(props.selectedClass)
        
        setActivitytitle(props.activityData.title)
        setStartdate(props.activityData.start)
        setDeadline(props.activityData.deadline)
        setInstruction(props.activityData.instruction)
        setRefencefile(props.activityData.referencefile)
        setTools(props.activityData.pointers)
        setPrompt(props.activityData.customprompt)

    }, [props.activityData]);

    return (
        <>
            <div style={{backgroundColor:'#ffffff', borderRadius:'8px', paddingBottom: '48px'}}>
                <div style={{padding: '24px'}}>
                    <h1 className='card-title'>Activity Details</h1>
                    <InputGroup>
                        <div style={{width: '100%', marginRight: '8px'}}>
                        <Form.Group>
                            <Form.Label htmlFor="activitytitle" className='form-label'>Activity Title</Form.Label>
                            <div style={{display: 'flex'}}>
                                <Form.Control type="text" defaultValue={activitytitle} id="classname" disabled={true}
                                            style={{
                                                        width: '100%', 
                                                        border: '1px solid #EEEEEE', 
                                                        borderRadius:'4px'
                                                    }}/>
                            </div>
                        </Form.Group>
                        </div>
                        <div style={{display: 'flex', width: '100%', paddingTop: '24px'}}>
                            <div style={{width: '33%', marginRight: '8px'}}>
                            <Form.Group>
                            <Form.Label htmlFor="activitytype" className='form-label' style={{paddingBottom: '7px'}}>Activity Type</Form.Label>
                            <div style={{display: 'flex', color:'#8A92A6', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '16px',}}>
                            <Form.Check 
                                style={{paddingRight: '8%', minWidth: '0px', overflow: 'hidden'}}
                                type='radio'
                                id='option1'
                                label='CAD Evaluation'
                                name='groupOptions'
                                onChange={() =>handleType('CAD Evaluation')}
                                defaultChecked={true}
                            />
                            </div>
                            </Form.Group>
                            </div>
                            <div style={{width: '33%', marginRight: '8px'}}>
                            <Form.Group>
                                <Form.Label htmlFor="startdate" className='form-label'>Start Date</Form.Label> 
                                <Form.Control type="text" defaultValue={startdate} id="startdate" disabled={true}
                                            style={{
                                                        width: '100%', 
                                                        border: '1px solid #EEEEEE', 
                                                        borderRadius:'4px'
                                                    }}/>
                            </Form.Group>
                            </div>
                            <div style={{width: '33%', marginLeft: '8px'}}>
                            <Form.Group>
                                <Form.Label htmlFor="deadline" className='form-label'>Deadline</Form.Label>
                                <Form.Control type="text" defaultValue={deadline} id="deadline" disabled={true}
                                            style={{
                                                        width: '100%', 
                                                        border: '1px solid #EEEEEE', 
                                                        borderRadius:'4px'
                                                    }}/>
                            </Form.Group>
                            </div>
                        </div>
                        <div style={{width: '100%', paddingTop: '24px'}}>
                            <Form.Group>
                            <Form.Label htmlFor="instruction" className='form-label'>Instructions</Form.Label>
                            <Form.Control as="textarea" type="text" id="instruction" defaultValue={instruction} disabled={true} 
                                        style={{
                                                    width: '100%', 
                                                    border: '1px solid #EEEEEE', 
                                                    borderRadius:'4px'
                                            }}/>
                            </Form.Group>
                        </div>

                        <div style={{width: '100%', paddingTop: '24px'}}>
                            <Form.Group>
                                <Form.Label htmlFor="pointers" className='form-label'>CAD Checker Tools</Form.Label>
                                    <div className='pointer-container' style={{marginLeft: '24px', marginRight: '24px'}}>
                                       
                                     {tools? tools.map(tool =>(
                                        <div key={tool} >
                                        <label className='inter-400-16px'> 
                                        <Form.Check
                                            type="checkbox"
                                            defaultChecked={true}
                                        />
                                        {tool}
                                        </label>
                                        </div>
                                    )) : <></>} 
                                    </div>
                            </Form.Group>
                        </div>

                        <div style={{width: '100%', paddingTop: '24px'}}>
                            <Form.Group>
                            <Form.Label htmlFor="reference" className='form-label'>Reference File</Form.Label>
                            <div>
                            <img style={{width: '100%'}} src={referencefile} />
                            </div>
                            </Form.Group>
                        </div>
                    </InputGroup>
                    <div style={{width: '100%', paddingTop: '24px'}}>
                            <h1 className='card-title'>Submissions List</h1>
                            <Table hover style={{border: 'none'}}>
                                <thead>
                                    <tr>
                                    <th className='table-head' style={{width: '30%', paddingLeft:'20px'}}>IDs</th>
                                    <th className='table-head' style={{width: '33%'}}>FULL NAME</th>
                                    <th className='table-head' style={{width: '20%'}}>SUBMITTED FILE</th>
                                    <th className='table-head' style={{width: '10%'}}>GRADE</th>
                                    <th className='table-head' style={{width: '7%'}}>ACTIONS</th>
                                    </tr>
                                </thead>
                                <tbody style={{cursor: 'pointer'}}>
                                    {props.classData.students? props.classData.students.sort((a, b) => { a.userprofile.last_name.localeCompare(b.userprofile.last_name) })?.map(student => {
                                    const entry = props.activityData.related_entry.find((entry) => 
                                        entry.submitted_by === student.id)
                                    return(
                                        <tr key={student.id} style={{border: 'none'}}>
                                        <td className='table-body'>
                                            {student.id}</td>
                                        <td className='table-body'>
                                            {student.userprofile.first_name} {student.userprofile.last_name}</td>
                                        <td className='table-body'>
                                            {entry? <a className='inter-400-16px-link' href={entry.file} target="_blank" rel="noopener noreferrer">
                                            <Document/>View File</a> : <NoSubmission/>}
                                            </td>
                                        <td className='table-body'>
                                            NG</td>
                                        <td className='table-body'>
                                            <Dropdown>
                                            <Dropdown.Toggle id="dropdown-basic" style={{border: 'none', backgroundColor: '#e9ecef', color: 'rgba(51, 51, 51, 0.00)', width: '38px', height: '38px', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'center', marginLeft: '10px'}}>
                                                <h2 style={{color: '#8A92A6', marginLeft: '12px'}}>...</h2>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                            {entry &&
                                                <Dropdown.Item onClick={() => handleDetail(entry.id, `${student.userprofile.first_name} ${student.userprofile.last_name}`)}> <h1 className='dropdown-item' style={{marginTop: '8px'}}>View Details</h1></Dropdown.Item>
                                            }
                                            </Dropdown.Menu>
                                            </Dropdown>
                                            </td>
                                        </tr>
                                    )}) : <></>}
                                </tbody>
                            </Table>
                    </div>
                </div>
            </div>
        </>
        );
    }

ActivitySubmit.propTypes = {
    sidebarState: PropTypes.string,
    setsidebarState: PropTypes.func.isRequired,
    subsidebarState: PropTypes.string,
    setsubsidebarState: PropTypes.func.isRequired,
    setpageHeader: PropTypes.func,
    selectedClass: PropTypes.string,
    setLoading: PropTypes.func,
    loadingState: PropTypes.string,
    activityData: PropTypes.object,
    addActivityentry: PropTypes.func,
    studentData: PropTypes.array,
    classData: PropTypes.object,
    getClassdata: PropTypes.func,
    getEntry: PropTypes.func,
    setSubmittingStudent: PropTypes.func,
    }

const mapStateToProps = (state) => ({
    sidebarState: state.main.sidebarState,
    subsidebarState: state.main.subsidebarState,
    selectedClass: state.main.selectedClass,
    loadingState: state.main.loadingState,
    activityData: state.main.activityData,
    studentData: state.main.studentData,
    classData: state.main.classData,
    });

export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setpageHeader, setLoading, addActivityentry, getClassdata, getEntry, setSubmittingStudent})(ActivitySubmit))