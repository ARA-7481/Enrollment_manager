import React, { useState, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState, setpageHeader, getTeacherdata, getPointers, setLoading, addActivities } from '../../redux/actions/main';

import DatePicker from "react-datepicker";
import { Button, Form, InputGroup, Spinner } from 'react-bootstrap';
import { BlueExclamation, RedExclamation, SimpleCalendar } from '../../assets/svg/clnsmpl-icon';

import "react-datepicker/dist/react-datepicker.css";


function ActivityCreate(props) {

    const navigate = useNavigate();
    const [submissionComplete, setSubmission] = useState(false)
    const [activitytitle, setActivitytitle] = useState('');
    const [startdate, setStartdate] = useState('');
    const [deadline, setDeadline] = useState('');
    const [activitytype, setActivitytype] = useState('CAD Evaluation');
    const [instruction, setInstruction] = useState('None');
    const [referencefile, setReferencefile] = useState(null);
    const [prevfile, setPrevfile] = useState(null);
    const [preview, setPreview] = useState("");
    const [inputKey, setInputKey] = useState(Date.now());
    
    const [formData, setFormData] = useState({});

    const handleSubmit = () => {
        props.setLoading('isLoading')
        props.addActivities(formData)
        setSubmission(true)
    }

    const handleRemovefile = () => {
        setReferencefile(null)
        setPreview('')
        setInputKey(Date.now()); 
    }

    const onImageChange = e => {
        if (e.target.files.length > 0) {
          console.log(e.target.files)
          setPrevfile(e.target.files[0]);
          setReferencefile(e.target.files[0]);
      
          const reader = new FileReader();
          reader.onloadend = () => {
            setPreview(reader.result);
            // console.log(reader.result);
          };
          reader.readAsDataURL(e.target.files[0]);
        }else {
            setPreview('');
            setReferencefile(null)
          }
      };

    const handleType = (activitytype) => {
        setActivitytype(activitytype);
      }

    useEffect(() => {
        if (props.loadingState === 'isNotLoading' && submissionComplete) {
            navigate('/teachers/classdashboard');
          }
        props.setsidebarState('dashboard');
        props.setsubsidebarState('inclass');
        props.setpageHeader(`New Activity - ${props.selectedClass}`, '', 'Add Activity Details');

        setFormData({
            title : activitytitle,
            activity_type: activitytype,
            start : startdate,
            deadline : deadline,
            instruction : instruction,
            referencefile : referencefile,
            classroom: props.selectedClass,
          })

    }, [props.selectedClass,activitytitle,activitytype,startdate,deadline,instruction,referencefile,submissionComplete, props.loadingState]);

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
                                <Form.Control type="text" value={activitytitle} placeholder="Enter Activity Title" id="classname" onChange={e => setActivitytitle(e.target.value)} 
                                            style={{
                                                        width: '100%', 
                                                        border: '1px solid #EEEEEE', 
                                                        borderRadius:'4px'
                                                    }}/>
                                    {!activitytitle &&
                                        <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                                        <RedExclamation/>
                                        </div>
                                        }
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
                            {/* <Form.Check style={{paddingRight: '8%', minWidth: '0px', overflow: 'hidden'}}
                                type='radio'
                                id='option2'
                                label='Quiz/Exam'
                                name='groupOptions'
                                onChange={() =>handleType('Quiz/Exam')}
                            />
                            <Form.Check
                                style={{ minWidth: '0px', overflow: 'hidden'}}
                                type='radio'
                                id='option3'
                                label='Others'
                                name='groupOptions'
                                onChange={() =>handleType('Others')}
                            /> */}
                            </div>
                            </Form.Group>
                            </div>
                            <div style={{width: '33%', marginRight: '8px'}}>
                            <Form.Group>
                                <Form.Label htmlFor="startdate" className='form-label'>Start Date</Form.Label>
                                <div className='date-picker-wrapper' style={{display: 'flex'}}>
                                <DatePicker className='date-picker' placeholderText='Select Date' popperPlacement="bottom-end" selected={startdate} onChange={(date) => setStartdate(date)} />
                                <div style={{transform: 'translate( -33px, 7px)', width: '0px', pointerEvents: 'none'}}>
                                <SimpleCalendar/>
                                </div>
                                {!startdate &&
                                <div style={{transform: 'translate( -58px, 7px)', width: '0px', pointerEvents: 'none'}}>
                                <RedExclamation/>
                                </div>
                                }
                                </div>
                            </Form.Group>
                            </div>
                            <div style={{width: '33%', marginLeft: '8px'}}>
                            <Form.Group>
                                <Form.Label htmlFor="deadline" className='form-label'>Deadline</Form.Label>
                                <div className='date-picker-wrapper' style={{display: 'flex'}}>
                                <DatePicker className='date-picker' placeholderText='Select Date' popperPlacement="bottom-end" selected={deadline} onChange={(date) => setDeadline(date)}/>
                                <div style={{transform: 'translate( -33px, 7px)', width: '0px', pointerEvents: 'none'}}>
                                <SimpleCalendar/>
                                </div>
                                {!deadline &&
                                <div style={{transform: 'translate( -58px, 7px)', width: '0px', pointerEvents: 'none'}}>
                                <RedExclamation/>
                                </div>
                                }
                                </div>
                            </Form.Group>
                            </div>
                        </div>
                        <div style={{width: '100%', paddingTop: '24px'}}>
                            <Form.Group>
                            <Form.Label htmlFor="instruction" className='form-label'>Instructions</Form.Label>
                            <Form.Control as="textarea" rows={3} type="text" placeholder="Enter activity instructions here." id="instruction" onChange={e => setInstruction(e.target.value)} 
                                        style={{
                                                    width: '100%', 
                                                    border: '1px solid #EEEEEE', 
                                                    borderRadius:'4px'
                                            }}/>
                            </Form.Group>
                        </div>
                        <div style={{width: '100%', paddingTop: '24px'}}>
                            <h1 className='card-title'>Activity Reference File</h1>
                            <Form.Group>
                            <h1 className='form-label'>Upload Document</h1>
                            <div style={{display: 'flex', gap: '16px'}}>
                                <div className='document-div'>
                                <input  key={inputKey}
                                        style={{
                                                width: '90%', 
                                                padding: '5px'}} 
                                                type="file" 
                                        onChange={onImageChange} 
                                        accept=".png, .jpg, .jpeg, .pdf"/>
                                { preview &&
                                    <img src={preview} alt="No Preview Available For This Filetype" style={{maxHeight: '512px', maxWidth: '512px', paddingLeft: '100px', paddingTop: '12px', paddingBottom: '12px'}}/>
                                }
                                </div>
                                <div>
                                <Button className='document-remove-button' type="button" onClick={handleRemovefile}>
                                    Remove Document
                                </Button>
                                </div>
                            </div>
                            </Form.Group>
                        </div>
            
                    </InputGroup>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '32px' }}>
                <Button disabled={!activitytitle || !activitytype || !startdate || !deadline || instruction === 'None'} onClick={handleSubmit} type="button" style={{borderColor:'#3A57E8', borderRadius: '4px', backgroundColor: '#3A57E8', width: '15%', height: '48px', alignContent: 'center', marginRight: '24px'}}>
                    <h1 style={{color:'white', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '18px', paddingTop: '8px'}}>
                    {props.loadingState == 'isNotLoading'? <>Post Activity</> : <div style={{transform: 'translate( 0px, -6px)'}}><Spinner animation="border" variant="light"/></div>}</h1>
                </Button>
                </div>
            </div>
        </>
        );
    }

ActivityCreate.propTypes = {
    sidebarState: PropTypes.string,
    setsidebarState: PropTypes.func.isRequired,
    subsidebarState: PropTypes.string,
    setsubsidebarState: PropTypes.func.isRequired,
    setpageHeader: PropTypes.func,
    selectedClass: PropTypes.string,
    setLoading: PropTypes.func,
    loadingState: PropTypes.string,
    addActivities: PropTypes.func,
    }

const mapStateToProps = (state) => ({
    sidebarState: state.main.sidebarState,
    subsidebarState: state.main.subsidebarState,
    selectedClass: state.main.selectedClass,
    loadingState: state.main.loadingState,
    });

export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setpageHeader, setLoading, addActivities})(ActivityCreate))