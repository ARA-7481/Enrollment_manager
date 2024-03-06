import React, { useState, Fragment, useEffect } from 'react'
import PropTypes, { func } from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState, setpageHeader, setLoading, getSchoolYearList, getFaculty, getStudents, addSection } from '../../redux/actions/main';

import { Form, InputGroup, Button, Spinner, Dropdown, Table } from 'react-bootstrap';
import { RedExclamation, ConnectedAccordionIconOpen, RedX } from '../../assets/svg/clnsmpl-icon';

function SectionCreate(props) {

    const navigate = useNavigate();
    const [submissionComplete, setSubmission] = useState(false)

    const [sectioncode, setSectioncode] = useState('')
    const [schoolyear, setSchoolyear] = useState('')
    const [adviser, setAdviser] = useState('')
    const [gradelevel, setGradelevel] = useState('')
    const [track, setTrack] = useState('')
    const [updatedstudentlist, setUpdatedstudentlist] = useState([])
    const [studentobjectarray, setStudentobjectarray] = useState([])

    const [studentID, setStudentID] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const [formData, setFormData] = useState({});

    const filteredStudents = props.studentsList.filter(student =>{
        return student.id.toLowerCase().includes(studentID.toLowerCase()) || 
         student.userprofile.first_name.toLowerCase().includes(studentID.toLowerCase())||
         student.userprofile.middle_name.toLowerCase().includes(studentID.toLowerCase()) ||
         student.userprofile.last_name.toLowerCase().includes(studentID.toLowerCase())
    })

    const handleSubmit = () => {
        props.setLoading('isLoading')
        props.addSection(formData)
        setSubmission(true)
    }

    const handleAddstudent = (id, student) => {
        if(id && !updatedstudentlist.includes(id)){
            setUpdatedstudentlist([...updatedstudentlist, id])
            setStudentobjectarray([...studentobjectarray, student])
            setStudentID('')
        }
    }

    const handleToggle = (isOpen) => {
        setIsOpen(isOpen);
    }

    const handleDeleteStudent = (idToDelete) => {
        const updatedList = updatedstudentlist.filter(id => id !== idToDelete);
        const updatedObjectlist = studentobjectarray.filter(student => student.id !== idToDelete);
        setUpdatedstudentlist(updatedList)
        setStudentobjectarray(updatedObjectlist)
    }

    const handleStudentsearch = (e) => {
        if (isOpen){
          e.stopPropagation()
        }
      }


    useEffect(() => {
        props.setsidebarState('rooms')
        props.setsubsidebarState(null)
        props.setpageHeader('Create a Section', '', 'Fill Information to Create a Section')
        props.getSchoolYearList()
        props.getFaculty('','')
        props.getStudents()
    },[])
    useEffect(() => {
        if (props.loadingState === 'isNotLoading' && submissionComplete) {
          if(props.error){
            setSubmission(false)
          }else if(props.success){
            navigate('/admins/sections');
          }
          }
        setFormData({
          code : sectioncode,
          schoolyear : schoolyear,
          gradelevel: gradelevel,
          adviser : adviser,
          track : track,
          students : updatedstudentlist
        })
    
      }, [props.loadingState, props.success, props.error, sectioncode, schoolyear, gradelevel, adviser, track, updatedstudentlist]);

    return (
        <>
        <div style={{backgroundColor:'#ffffff', borderRadius:'8px', paddingBottom: '48px'}}>
          <div style={{padding: '24px'}}>
            <h1 className='card-title'>Section Information</h1>
            <InputGroup>

              <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>

                <div className="form-group text-left"style={{width: '50%', marginRight: '8px'}}>
                    <Form.Group>
                        <Form.Label className='form-label'>Section Code</Form.Label>
                        <div style={{display: 'flex'}}>
                            <Form.Control type="text" value={sectioncode} placeholder="Enter Unique Section Code" id="sectioncode" onChange={e => setSectioncode(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                            {!sectioncode &&
                            <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                            <RedExclamation/>
                            </div>
                            }
                        </div>
                    </Form.Group>
                </div>

                <div className="form-group text-left"style={{width: '50%'}}>
                      <Form.Group>
                        <Form.Label className='form-label'>School Year</Form.Label>
                        <div style={{display: 'flex'}}>
                            <Form.Select id="schoolyear" value={schoolyear} onChange={e => setSchoolyear(e.target.value)} className='formselect-border'>
                            <option value="" disabled >Specify the School Year</option>
                            {props.schoolyearList.map((year) =>(
                                <option key={year.code} value={year.code}>{year.code}</option>
                            ))}
                            </Form.Select>
                            {!schoolyear &&
                            <div style={{transform: 'translate( -55px, 5px)', width: '0px', pointerEvents: 'none'}}>
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
                            <Form.Label className='form-label'>Grade Level</Form.Label>
                            <div style={{display: 'flex'}}>
                                <Form.Select id="gradelevel" value={gradelevel} onChange={e => setGradelevel(e.target.value)} className='formselect-border'>
                                <option value="" disabled >Select Grade Level</option>
                                <option value="Grade 7" >Grade 7</option>
                                <option value="Grade 8" >Grade 8</option>
                                <option value="Grade 9" >Grade 9</option>
                                <option value="Grade 10" >Grade 10</option>
                                <option value="Grade 11" >Grade 11</option>
                                <option value="Grade 12" >Grade 12</option>
                                </Form.Select>
                                {!gradelevel &&
                                <div style={{transform: 'translate( -55px, 5px)', width: '0px', pointerEvents: 'none'}}>
                                <RedExclamation/>
                                </div>
                                }
                            </div>
                        </Form.Group>
                </div>

                <div className="form-group text-left"style={{width: '50%'}}>
                        <Form.Group>
                            <Form.Label className='form-label'>Track</Form.Label>
                            <div style={{display: 'flex'}}>
                                <Form.Select disabled={gradelevel != "Grade 11" && gradelevel != "Grade 12"} id="track" value={track} onChange={e => setTrack(e.target.value)} className='formselect-border'>
                                <option value="" disabled >Select Track</option>
                                <option value="Technical Vocational & Livelihood" >Technical Vocational & Livelihood</option>
                                </Form.Select>
                            </div>
                        </Form.Group>
                </div>

            </div>

            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>

                <div className="form-group text-left"style={{width: '50%'}}>
                      <Form.Group>
                        <Form.Label className='form-label'>Section Adviser</Form.Label>
                        <div style={{display: 'flex'}}>
                            <Form.Select id="adviser" value={adviser} onChange={e => setAdviser(e.target.value)} className='formselect-border'>
                            <option value="" disabled >Select Adviser</option>
                            {props.facultyList.map((faculty) =>(
                                <option key={faculty.id} value={faculty.id}>{faculty.userprofile.last_name}, {faculty.userprofile.first_name} {faculty.userprofile.middle_name}</option>
                            ))}
                            </Form.Select>
                            {!adviser &&
                            <div style={{transform: 'translate( -55px, 5px)', width: '0px', pointerEvents: 'none'}}>
                            <RedExclamation/>
                            </div>
                            }
                        </div>
                      </Form.Group>
                </div>

              </div>
              <Form.Label className='form-label'>Student List</Form.Label>
              <Table hover style={{border: '1px solid #EEEEEE'}}>
                <thead >
                    <tr>
                        <th className='table-head' style={{width: '20%', paddingLeft:'20px'}}>IDs</th>
                        <th className='table-head' style={{width: '30%'}}>FULL NAME</th>
                        <th className='table-head' style={{width: '5%'}}>REMOVE</th>
                    </tr>
                </thead>
                <tbody style={{cursor: 'pointer', border: 'none'}}>
                    {studentobjectarray.map((studentobject) =>(
                    <tr key={studentobject.id}>
                       <td className='table-body'>
                            {studentobject.id}
                       </td>
                       <td className='table-body'>
                            {studentobject.userprofile.last_name}, {studentobject.userprofile.first_name} {studentobject.userprofile.middle_name}
                       </td>
                       <td className='table-body'>
                            <div style={{marginLeft: '15px'}} onClick={() => handleDeleteStudent(studentobject.id)}><RedX/></div>
                       </td>
                    </tr> 
                    ))} 
                </tbody>
              </Table>
              
              <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                <div style={{width: '50%', marginRight: '8px'}}>
                    <Form.Group >
                    <Form.Label htmlFor="subject" className='form-label'>Add Student</Form.Label>
                    <div style={{display: 'flex'}}>
                        <Dropdown style={{width: '50%'}} onToggle={handleToggle}>
                            <Dropdown.Toggle id="dropdown-basic" className='formselect-border-wide drop-noarrow' style={{border: '1px solid #EEEEEE', backgroundColor: 'rgba(51, 51, 51, 0.00)',  width: '100%', display: 'flex', alignItems: 'center', outline: 'none'}}>
                                <div style={{width:'100%', padding: '0px'}}>
                                <Form.Control 
                                className='formcontrolnoborder' 
                                type='search' 
                                placeholder="Search Student ID/Name" 
                                style={{border: 'none', height:'24px'}}
                                value={studentID}
                                onClick={handleStudentsearch}
                                onChange={e => setStudentID(e.target.value)}
                                />
                                </div>
                                <ConnectedAccordionIconOpen/>
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{width: '50%', maxHeight: '120px', overflow: 'auto'}}>
                                {filteredStudents.sort((a, b) => a.id.localeCompare(b.id)).map((student) => (
                                    <Dropdown.Item key={student.id} onClick={() => handleAddstudent(student.id, student)}>{student.id} - {student.userprofile.last_name}, {student.userprofile.first_name} {student.userprofile.middle_name} </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    </Form.Group>
                    </div>
              </div>

            </InputGroup>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '32px' }}>
        <Button type="button" onClick={handleSubmit} style={{borderColor:'#3A57E8', borderRadius: '4px', backgroundColor: '#3A57E8', width: '15%', height: '48px', alignContent: 'center', marginRight: '24px'}}>
            <h1 style={{color:'white', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '18px', paddingTop: '8px'}}>
            {props.loadingState == 'isNotLoading'? <>Create Section</> : <div style={{transform: 'translate( 0px, -6px)'}}><Spinner animation="border" variant="light"/></div>}</h1>
        </Button>
        </div>
        </div>
        </>
    )
}

SectionCreate.propTypes = {
    sidebarState: PropTypes.string,
    setsidebarState: PropTypes.func,
    subsidebarState: PropTypes.string,
    setsubsidebarState: PropTypes.func,
    pageHeader: PropTypes.object,
    setLoading: PropTypes.func,
    loadingState: PropTypes.string,
    error: PropTypes.string,
    success: PropTypes.string,
    getSchoolYearList: PropTypes.func,
    schoolyearList: PropTypes.array,
    getFaculty: PropTypes.func,
    facultyList: PropTypes.array,
    getStudents: PropTypes.func,
    studentsList: PropTypes.array,
    addSection: PropTypes.func,
  }
  
  const mapStateToProps = (state) => ({
    sidebarState: state.main.sidebarState,
    subsidebarState: state.main.subsidebarState,
    pageHeader: state.main.pageHeader,
    loadingState: state.main.loadingState,
    error: state.main.error,
    success: state.main.success,
    schoolyearList: state.main.schoolyearList,
    facultyList: state.main.facultyList,
    studentsList: state.main.studentsList,
    });


export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setpageHeader, setLoading, getSchoolYearList, getFaculty, getStudents, addSection})(SectionCreate))