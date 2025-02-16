import React, { useState, Fragment, useEffect } from 'react'
import PropTypes, { func } from 'prop-types';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState, setclassState, setpageHeader, setLoading, getSubjectsList, getSectionList, getFaculty, addClass } from '../../redux/actions/main';

import { Form, InputGroup, Dropdown, Table, Button, Spinner } from 'react-bootstrap';
import { RedExclamation, ConnectedAccordionIconOpen } from '../../assets/svg/clnsmpl-icon';

function ClassCreate(props) {

    const navigate = useNavigate();
    const [submissionComplete, setSubmission] = useState(false)

    const [classcode, setClasscode] = useState('');
    const [description, setDescription] = useState('');
    const [section, setSection] = useState('');
    const [subject, setSubject] = useState('');
    const [teacher, setTeacher] = useState('');
    const [span, setSpan] = useState(4);
    const [strand, setStrand] = useState('NONE');

    const [formData, setFormData] = useState({});

    const handleSubmit = () => {
        props.setLoading('isLoading')
        props.addClass(formData)
        setSubmission(true)
    }

    useEffect(() => {
        props.setsidebarState('class')
        props.setsubsidebarState(null)
        props.setclassState('create-page-one')
        props.setpageHeader('Create a Class', '', 'Fill Information to Create a Class')
        props.getSubjectsList('');
        props.getSectionList('','');
        props.getFaculty('','');
      },[])

    useEffect(() => {
        if (props.loadingState === 'isNotLoading' && submissionComplete) {
          if(props.error){
            setSubmission(false)
          }else if(props.success){
            navigate('/admins/class');
          }
          }
        setFormData({
          code : classcode,
          description : description,
          section : section,
          subject : subject,
          teacher : teacher,
          span : span,
          strand : strand,

        })
      }, [classcode, description, section, subject, teacher, span, strand, props.loadingState, props.error, props.success]);

    return (
        <>
        <div style={{backgroundColor:'#ffffff', borderRadius:'8px', paddingBottom: '48px'}}>
          <div style={{padding: '24px'}}>
            <h1 className='card-title'>Class Information</h1>
            <InputGroup>
              <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', gap: '8px'}}>
                  <div className="form-group text-left"style={{width: '50%'}}>
                <Form.Group>
                <Form.Label className='form-label'>Class Code</Form.Label>
                <div style={{display: 'flex'}}>
                <Form.Control type="text" value={classcode} placeholder="Enter Unique Class Code" id="classcode" onChange={e => setClasscode(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                {!classcode &&
                  <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                  <RedExclamation/>
                  </div>
                  }
                </div>
                </Form.Group>
                </div>
  
                <div className="form-group text-left"style={{width: '50%'}}>
                <Form.Group>
                <Form.Label htmlFor="description" className='form-label'>Description</Form.Label>
                <div style={{display: 'flex'}}>
                <Form.Control type="text" value={description} placeholder="Enter Class Description" id="description" onChange={e => setDescription(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                {!description &&
                  <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                  <RedExclamation/>
                  </div>
                  }
                </div>
                </Form.Group>
                </div>
  
              </div>

              <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', gap: '8px'}}>
                <div className="form-group text-left"style={{width: '50%'}}>
                    <Form.Group>
                    <Form.Label className='form-label'>Section</Form.Label>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" className='formselect-border drop-noarrow' style={{border: 'none', backgroundColor: 'rgba(51, 51, 51, 0.00)', color: section? 'black': 'rgba(51, 51, 51, 0.80)', width: '100%', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'space-between'}}>
                            <div style={{width: '90%', textAlign: 'left'}}>{section? section: "Select Section"}</div>
                            {!section &&
                                <div style={{transform: 'translate( 1, -40px)', width: '0px', pointerEvents: 'none'}}>
                                <RedExclamation/>
                                </div>
                            }
                            <ConnectedAccordionIconOpen/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ width: '49.5%', maxHeight: '200px', overflow: 'auto'}}>
                            {[...props.sectionList].sort((a, b) => a.code.localeCompare(b.code)).map((section) => (
                                <Dropdown.Item key={section.code} onClick={() => setSection(section.code)}>{section.code}</Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    </Form.Group>
                    </div>

                <div className="form-group text-left"style={{width: '50%'}}>
                    <Form.Group>
                    <Form.Label className='form-label'>Subject</Form.Label>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" className='formselect-border drop-noarrow' style={{border: 'none', backgroundColor: 'rgba(51, 51, 51, 0.00)', color: subject? 'black': 'rgba(51, 51, 51, 0.80)', width: '100%', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'space-between'}}>
                            <div style={{width: '90%', textAlign: 'left'}}>{subject? subject: "Select Subject"}</div>
                            {!subject &&
                                <div style={{transform: 'translate( 1, -40px)', width: '0px', pointerEvents: 'none'}}>
                                <RedExclamation/>
                                </div>
                            }
                            <ConnectedAccordionIconOpen/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ width: '49.5%', maxHeight: '200px', overflow: 'auto'}}>
                            {[...props.subjectsListForTable].sort((a, b) => a.code.localeCompare(b.code)).map((subject) => (
                                <Dropdown.Item key={subject.code} onClick={() => setSubject(subject.code)}>{subject.code}</Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    </Form.Group>
                </div>
              </div>

              <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', gap: '8px'}}>
                <div className="form-group text-left"style={{width: '50%'}}>
                    <Form.Group>
                    <Form.Label className='form-label'>Class Teacher</Form.Label>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" className='formselect-border drop-noarrow' style={{border: 'none', backgroundColor: 'rgba(51, 51, 51, 0.00)', color: teacher? 'black': 'rgba(51, 51, 51, 0.80)', width: '100%', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'space-between'}}>
                            <div style={{width: '90%', textAlign: 'left'}}>{teacher? teacher: "Select Teacher"}</div>
                            {!teacher &&
                                <div style={{transform: 'translate( 1, -40px)', width: '0px', pointerEvents: 'none'}}>
                                <RedExclamation/>
                                </div>
                            }
                            <ConnectedAccordionIconOpen/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ width: '49.5%', maxHeight: '200px', overflow: 'auto'}}>
                            {[...props.facultyList].sort((a, b) => a.userprofile.last_name.localeCompare(b.userprofile.last_name)).map((faculty) => (
                                <Dropdown.Item key={faculty.id} onClick={() => setTeacher(faculty.id)}>{faculty.userprofile.last_name}, {faculty.userprofile.first_name} {faculty.userprofile.middle_name}</Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    </Form.Group>
                    </div>

                <div className="form-group text-left"style={{width: '50%'}}>
                    <Form.Group>
                    <Form.Label className='form-label'>Number Of Quarters</Form.Label>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" className='formselect-border drop-noarrow' style={{border: 'none', backgroundColor: 'rgba(51, 51, 51, 0.00)', color: span? 'black': 'rgba(51, 51, 51, 0.80)', width: '100%', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'space-between'}}>
                            <div style={{width: '90%', textAlign: 'left'}}>{span? span: "Set Number of Quarters"}</div>
                            {!span &&
                                <div style={{transform: 'translate( 1, -40px)', width: '0px', pointerEvents: 'none'}}>
                                <RedExclamation/>
                                </div>
                            }
                            <ConnectedAccordionIconOpen/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ width: '49.5%', maxHeight: '200px', overflow: 'auto'}}>
                                <Dropdown.Item onClick={() => setSpan(2)}>2</Dropdown.Item>
                                <Dropdown.Item onClick={() => setSpan(4)}>4</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </Form.Group>
                </div>
              </div>

              <div className="form-group text-left"style={{width: '50%'}}>
                    <Form.Group>
                    <Form.Label className='form-label'>Strand</Form.Label>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" className='formselect-border drop-noarrow' style={{border: 'none', backgroundColor: 'rgba(51, 51, 51, 0.00)', color: strand? 'black': 'rgba(51, 51, 51, 0.80)', width: '100%', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'space-between'}}>
                            <div style={{width: '90%', textAlign: 'left'}}>{strand? strand: "Select Strand(For SHS Classes ONLY)"}</div>
                            <ConnectedAccordionIconOpen/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ width: '50%', maxHeight: '200px', overflow: 'auto'}}>
                                <Dropdown.Item onClick={() => setStrand("Industrial Arts")}>Industrial Arts</Dropdown.Item>
                                <Dropdown.Item onClick={() => setStrand("Home Economics")}>Home Economics</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </Form.Group>
                </div>
    
            </InputGroup>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '32px' }}>
        <Button disabled={!classcode || !description || !section || !subject || !teacher} type="button" onClick={handleSubmit} style={{borderColor:'#3A57E8', borderRadius: '4px', backgroundColor: '#3A57E8', width: '15%', height: '48px', alignContent: 'center', marginRight: '24px'}}>
            <h1 style={{color:'white', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '18px', paddingTop: '8px'}}>
            {props.loadingState == 'isNotLoading'? <>Create Class</> : <div style={{transform: 'translate( 0px, -6px)'}}><Spinner animation="border" variant="light"/></div>}</h1>
        </Button>
        </div>
        </div>
        </>
    )
}

ClassCreate.propTypes = {
    sidebarState: PropTypes.string,
    setsidebarState: PropTypes.func.isRequired,
    subsidebarState: PropTypes.string,
    setsubsidebarState: PropTypes.func.isRequired,
    setclassState: PropTypes.func,
    classState: PropTypes.string,
    pageHeader: PropTypes.object,
    setLoading: PropTypes.func,
    loadingState: PropTypes.string,
    error: PropTypes.string,
    success: PropTypes.string,
    getSubjectsList: PropTypes.func,
    subjectsListForTable: PropTypes.array,
    getSectionList: PropTypes.func,
    sectionList: PropTypes.array,
    getFaculty: PropTypes.func,
    facultyList: PropTypes.array,
    addClass: PropTypes.func,
  }
  
  const mapStateToProps = (state) => ({
    sidebarState: state.main.sidebarState,
    subsidebarState: state.main.subsidebarState,
    classState: state.main.classState,
    pageHeader: state.main.pageHeader,
    loadingState: state.main.loadingState,
    subjectsListForTable: state.main.subjectsListForTable,
    error: state.main.error,
    success: state.main.success,
    sectionList: state.main.sectionList,
    facultyList: state.main.facultyList,
    });


export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setclassState, setpageHeader, setLoading, getSubjectsList, getSectionList, getFaculty, addClass})(ClassCreate))