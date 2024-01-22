import React, { useState, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState, setpageHeader, setLoading, addActivityentry, getClassdata, checkEntry, analyzeImages, getPointers} from '../../redux/actions/main';

import { Button, Form, InputGroup, Spinner, Table, Dropdown } from 'react-bootstrap';
import { BlueExclamation, RedExclamation, SimpleCalendar, Document, NoSubmission } from '../../assets/svg/clnsmpl-icon';
import { propTypes } from 'react-bootstrap/esm/Image';


function VeiwDetail(props) {

    const navigate = useNavigate();

    const [referencefile, setRefencefile] = useState(null);
    const [prompt, setPrompt] = useState('None');
    const [pointerslist, setPointers] = useState([]);
    const [grade, setGrade] = useState(null)

    const handleCheck = (referencefile, entryfile) => {
        props.setLoading('isLoading')
        const prompts = pointerslist.map(pointer => pointer.prompt);
        const combinedPrompts = prompts.join(' ')
        console.log(combinedPrompts)
        props.analyzeImages(referencefile, entryfile, combinedPrompts, prompt);
    }

    const handleGrade = () => {

    }

    const handlePointers = (pointer, event) => {
        const { checked } = event.target;
    
        setPointers(initialPointers => {
          if (checked) {
            return [...initialPointers, pointer];
          } else {
            return initialPointers.filter(item => item.code !== pointer.code);
          }
        });
      };


    useEffect(() => {
        props.setsidebarState('dashboard');
        props.setsubsidebarState('inclass');
        props.setpageHeader(`${props.selectedClass} - ${props.activityData.title}`, '', '');
        props.getPointers();
        
        setRefencefile(props.activityData.referencefile)
        // console.log(pointerslist)

    }, [props.activityData, props.GPTresponse]);

    return (
        <>
            <div style={{backgroundColor:'#ffffff', borderRadius:'8px', paddingBottom: '48px'}}>
                <div style={{padding: '24px'}}>
                    <h1 className='card-title'>Submission Details</h1>
                    <InputGroup>
                        <div style={{width: '100%', marginRight: '8px'}}>
                        <Form.Group>
                            <Form.Label htmlFor="activitytitle" className='form-label'>Submitted By</Form.Label>
                            <div style={{display: 'flex'}}>
                                <h1 className='inter-500-19px-nopadding'>{props.submittingStudent}</h1>
                            </div>
                        </Form.Group>

                        </div>
                      
                    <div style={{display: 'flex', gap: '16px', width: '100%'}}>
                        <div style={{width: '50%', paddingTop: '24px'}}>
                            <Form.Group>
                            <Form.Label htmlFor="reference" className='form-label'>Reference File</Form.Label>
                            <div>
                            <img href={referencefile} target="_blank" rel="noopener noreferrer" style={{width: '100%'}} src={referencefile} />
                            </div>
                            </Form.Group>
                        </div>

                        <div style={{width: '50%', paddingTop: '24px'}}>
                            <Form.Group>
                            <Form.Label htmlFor="reference" className='form-label'>Submitted File</Form.Label>
                            <div>
                            <img href={props.entryData.file} target="_blank" rel="noopener noreferrer" style={{width: '100%'}} src={props.entryData.file} />
                            </div>
                            </Form.Group>
                        </div>
                    </div>
                    <div style={{width: '100%', paddingTop: '24px'}}>
                            <Form.Group>
                            <Form.Label htmlFor="customprompt" className='form-label'>Custom Prompt</Form.Label>
                            <Form.Control as="textarea" rows={2} type="text" placeholder="Enter additional prompts you want to give to the CAD checker. (OPTIONAL)" id="prompt" onChange={e => setPrompt(e.target.value)} 
                                        style={{
                                                    width: '100%', 
                                                    border: '1px solid #EEEEEE', 
                                                    borderRadius:'4px'
                                            }}
                                        maxLength='1500'/>
                            </Form.Group>
                        </div>
                        <div style={{width: '100%', paddingTop: '24px'}}>
                            <Form.Group>
                            <Form.Label htmlFor="pointers" className='form-label'>CAD Checker Tools</Form.Label>
                                <div className='pointer-container' style={{marginLeft: '24px', marginRight: '24px'}}>
                                {props.pointers.map(pointer =>(
                                    <div key={pointer.code} title={pointer.description}>
                                    <label className='inter-400-16px'> 
                                    <Form.Check
                                        type="checkbox"
                                        name={pointer.code}
                                        onChange={(event) => handlePointers(pointer, event)}
                                    />
                                    {pointer.code}
                                    </label>
                                    </div>
                                ))}
                                </div>
                            </Form.Group>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '32px' }}>
                            <Button disabled={pointerslist.length < 1} onClick={() => handleCheck(referencefile, props.entryData.file)} type="button" style={{borderColor:'#3A57E8', borderRadius: '4px', backgroundColor: '#3A57E8', width: '250px', height: '48px', alignContent: 'center', marginRight: '24px', marginBottom: '24px'}}>
                                <h1 style={{color:'white', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '18px', paddingTop: '8px'}}>
                                {props.loadingState == 'isNotLoading'? <>Analyze Submission</> : <div style={{transform: 'translate( 0px, -6px)'}}><Spinner animation="border" variant="light"/></div>}</h1>
                            </Button>
                        </div>
                        {props.GPTresponse ? (() => {
                            const response = props.GPTresponse;
                            const firstbrace = response.indexOf('{');
                            const lastbrace = response.lastIndexOf('}');
                            const jsonString = response.slice(firstbrace, lastbrace + 1);
                            const jsonObject = JSON.parse(jsonString);

                            return Object.entries(jsonObject).map(([key, value]) => {
                                return (
                                    <div key={key}>
                                        <h1 className='inter-400-16px'>{key}: {JSON.stringify(value)}</h1>
                                    </div>
                                    );
                                });
                            })() : <><h2>no response</h2></>}
                        <div style={{display: 'flex'}}>
                        <div style={{width: '20%', marginRight: '8px'}}>
                            <Form.Group>
                                <Form.Label htmlFor="grade" className='form-label'>Class Name</Form.Label>
                                <div style={{display: 'flex'}}>
                                <Form.Control type="text" value={grade} placeholder="Grade the student's submission" id="grade" onChange={e => setGrade(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                                </div>
                            </Form.Group>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '32px' }}>
                            <Button disabled={pointerslist.length < 1} onClick={handleGrade} type="button" style={{borderColor:'#3A57E8', borderRadius: '4px', backgroundColor: '#3A57E8', width: '100px', height: '32px', alignContent: 'center', marginRight: '24px', marginBottom: '24px'}}>
                                <h1 style={{color:'white', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '18px', paddingTop: '8px'}}>
                                {props.loadingState == 'isNotLoading'? <>Set Grade</> : <div style={{transform: 'translate( 0px, -6px)'}}><Spinner animation="border" variant="light"/></div>}</h1>
                            </Button>
                        </div>
                        </div>
                    </InputGroup>

                </div>
            </div>
        </>
        );
    }

VeiwDetail.propTypes = {
    sidebarState: PropTypes.string,
    setsidebarState: PropTypes.func.isRequired,
    subsidebarState: PropTypes.string,
    setsubsidebarState: PropTypes.func.isRequired,
    setpageHeader: PropTypes.func,
    selectedClass: PropTypes.string,
    setLoading: PropTypes.func,
    loadingState: PropTypes.string,
    analyzeImages: PropTypes.func,
    entryData: PropTypes.object,
    submittingStudent: PropTypes.string,
    activityData: PropTypes.object,
    pointers: PropTypes.array,
    getPointers: PropTypes.func,
    GPTresponse: PropTypes.string,
    }

const mapStateToProps = (state) => ({
    sidebarState: state.main.sidebarState,
    subsidebarState: state.main.subsidebarState,
    selectedClass: state.main.selectedClass,
    loadingState: state.main.loadingState,
    entryData: state.main.entryData,
    submittingStudent: state.main.submittingStudent,
    activityData: state.main.activityData,
    pointers: state.main.pointers,
    GPTresponse: state.main.GPTresponse,
    });

export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setpageHeader, setLoading, analyzeImages, getPointers})(VeiwDetail))