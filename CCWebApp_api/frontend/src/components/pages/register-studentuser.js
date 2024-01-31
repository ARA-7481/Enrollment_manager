import React, { useState, Fragment, useEffect } from 'react'
import PropTypes, { func } from 'prop-types';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';

import { setsidebarState, setsubsidebarState, setpageHeader, setLoading, getCourses, registerStudent } from '../../redux/actions/main';
import { Form, InputGroup, Button, Spinner } from 'react-bootstrap';
import { RedExclamation } from '../../assets/svg/clnsmpl-icon';

function RegisterUserstudent(props) {
    const navigate = useNavigate()
    const [submissionComplete, setSubmission] = useState(false)
    const [usertype, setUsertype] = useState('Student')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [address, setAddress] = useState('')
    const [password, setPassword] = useState('1234')

    const [course, setCourse] = useState('');
    const [yearlevel, setYearlevel] = useState('');
    const [status, setStatus] = useState('');

    const [formData, setFormData] = useState({});
    const [formStudentdata, setStudentformdata] = useState({});
    
    const handleSubmit = () => {
        props.setLoading('isLoading')
        props.registerStudent(formData, formStudentdata)
        setSubmission(true)
        }

    useEffect(() => {
        props.setsidebarState('users');
        props.setsubsidebarState('students-create');
        props.setpageHeader('Add a Student', '', '');
        props.getCourses()
      },[])

    useEffect(() => {
        if (props.loadingState === 'isNotLoading' && submissionComplete) {
            if(props.error){
              setSubmission(false)
            }else if(props.success){
              navigate('/admins/users-students');
            }
          }
        setFormData({
          first_name : firstname,
          last_name : lastname,
          email : email,
          mobile_number : contact,
          address_value : address,
          password : password,
          usertype : usertype
        })
        setStudentformdata({
          course : course,
          yearlevel : yearlevel,
          status : status,
        })
    
      }, [props.loadingState, props.error, props.success, firstname, lastname, email, contact, address, password, course, yearlevel, status, usertype]);

      return (
        <>
          <div style={{backgroundColor:'#ffffff', borderRadius:'8px', paddingBottom: '48px'}}>
            <div style={{padding: '24px'}}>
              <h1 className='card-title'>User Personal Information</h1>
              <InputGroup>
                <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                    <div className="form-group text-left"style={{width: '50%', marginRight: '8px'}}>
                    <Form.Group>
                  <Form.Label htmlFor="firstname" className='form-label'>First Name</Form.Label>
                  <div style={{display: 'flex'}}>
                  <Form.Control type="text" value={firstname} placeholder="Enter First Name" id="firstname" onChange={e => setFirstname(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                  {!firstname &&
                    <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                    <RedExclamation/>
                    </div>
                    }
                  </div>
                  </Form.Group>
                  </div>
    
                  <div className="form-group text-left"style={{width: '50%', marginLeft: '8px'}}>
                  <Form.Group>
                  <Form.Label htmlFor="lastname" className='form-label'>Last Name</Form.Label>
                  <div style={{display: 'flex'}}>
                  <Form.Control type="text" value={lastname} placeholder="Enter Last Name" id="lastname" onChange={e => setLastname(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                  {!lastname &&
                    <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                    <RedExclamation/>
                    </div>
                    }
                  </div>
                  </Form.Group>
                  </div>
    
                </div>

                <div className="form-group text-left"style={{width: '100%'}}>
                    <Form.Group>
                  <Form.Label htmlFor="email" className='form-label'>Email Address</Form.Label>
                  <div style={{display: 'flex'}}>
                  <Form.Control type="text" value={email} placeholder="Enter Email Address" id="email" onChange={e => setEmail(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                  {!email &&
                    <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                    <RedExclamation/>
                    </div>
                    }
                  </div>
                  </Form.Group>
                </div>

                <div className="form-group text-left"style={{width: '100%'}}>
                    <Form.Group>
                  <Form.Label htmlFor="contact" className='form-label'>Mobile Contact Number</Form.Label>
                  <div style={{display: 'flex'}}>
                  <Form.Control type="text" value={contact} placeholder="Enter Mobile Contact Number" id="contact" onChange={e => setContact(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                  {!contact &&
                    <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                    <RedExclamation/>
                    </div>
                    }
                  </div>
                  </Form.Group>
                </div>

                <div className="form-group text-left"style={{width: '100%'}}>
                    <Form.Group>
                  <Form.Label htmlFor="address" className='form-label'>Address</Form.Label>
                  <div style={{display: 'flex'}}>
                  <Form.Control type="text" value={address} placeholder="Enter Address" id="address" onChange={e => setAddress(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                  {!address &&
                    <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                    <RedExclamation/>
                    </div>
                    }
                  </div>
                  </Form.Group>
                </div>
                
                <h1 className='card-title'>User Student Information</h1>
                <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                    <div className="form-group text-left"style={{width: '50%', marginRight: '8px'}}>
                    <Form.Group>
                    <Form.Label htmlFor="course" className='form-label'>Course</Form.Label>
                    <div style={{display: 'flex'}}>
                    <Form.Select id="course" value={course} onChange={e => setCourse(e.target.value)} className='formselect-border'>
                    <option value="" disabled >Select Course</option>
                    {props.coursesList.sort().map((course) => (
                      <option key={course.code} value={course.code}>{course.code}</option>
                    ))}
                    </Form.Select>
                    {!course &&
                    <div style={{transform: 'translate( -55px, 5px)', width: '0px', pointerEvents: 'none'}}>
                    <RedExclamation/>
                    </div>
                    }
                    </div>
                  </Form.Group>
                  </div>

                  <div className="form-group text-left"style={{width: '50%', marginLeft: '8px'}}>
                  <Form.Group>
                  <Form.Label htmlFor="yearlevel" className='form-label'>Year Level</Form.Label>
                  <div style={{display: 'flex'}}>
                  <Form.Select id="yearlevel" value={yearlevel} onChange={e => setYearlevel(e.target.value)} className='formselect-border'>
                  <option value="" disabled >Select Year Level</option>
                  <option value="1st" >First Year</option>
                  <option value="2nd" >Second Year</option>
                  <option value="3rd" >Third Year</option>
                  <option value="4th" >Fourth Year</option>
                  <option value="5th" >Fifth Year</option>
                  </Form.Select>
                  {!yearlevel &&
                    <div style={{transform: 'translate( -55px, 5px)', width: '0px', pointerEvents: 'none'}}>
                    <RedExclamation/>
                    </div>
                    }
                  </div>
                  </Form.Group>
                  </div>

                </div>

                <div className="form-group text-left"style={{width: '100%'}}>
                  <Form.Group>
                  <Form.Label htmlFor="status" className='form-label'>Status</Form.Label>
                  <div style={{display: 'flex'}}>
                  <Form.Select id="status" value={status} onChange={e => setStatus(e.target.value)} className='formselect-border'>
                  <option value="" disabled >Select Status</option>
                  <option value="For Evaluation" >For Evaluation</option>
                  <option value="Evaluation In Progress" >Evaluation In Progress</option>
                  <option value="Evaluation Complete" >Evaluation Complete</option>
                  <option value="Pending Payment" >Pending Payment</option>
                  <option value="Payment Received" >Payment Received</option>
                  <option value="Enrolled" >Enrolled</option>
                  </Form.Select>
                  {!yearlevel &&
                    <div style={{transform: 'translate( -55px, 5px)', width: '0px', pointerEvents: 'none'}}>
                    <RedExclamation/>
                    </div>
                    }
                  </div>
                  </Form.Group>
                </div>

              </InputGroup>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '32px' }}>
              <Button disabled={!firstname || !lastname || !email || !contact || !address || !course || !yearlevel || !status } type="button" onClick={handleSubmit} style={{borderColor:'#3A57E8', borderRadius: '4px', backgroundColor: '#3A57E8', width: '15%', height: '48px', alignContent: 'center', marginRight: '24px'}}>
                  <h1 style={{color:'white', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '18px', paddingTop: '8px'}}>
                  {props.loadingState == 'isNotLoading'? <>Register</> : <div style={{transform: 'translate( 0px, -6px)'}}><Spinner animation="border" variant="light"/></div>}</h1>
              </Button>
            </div>
          </div>
          </>
    )
    
    }

RegisterUserstudent.propTypes = {
  setsidebarState: PropTypes.func,
  setsubsidebarState: PropTypes.func,
  setpageHeader: PropTypes.func,
  setLoading: PropTypes.func,
  getCourses: PropTypes.func,
  registerStudent: PropTypes.func,
  loadingState: PropTypes.string,
  coursesList: PropTypes.array,
  error: PropTypes.string,
  success: PropTypes.string,
  
}

const mapStateToProps = (state) => ({
  loadingState: state.main.loadingState,
  coursesList: state.main.coursesList,
  error: state.main.error,
  success: state.main.success,
})


export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setpageHeader, setLoading, getCourses, registerStudent})(RegisterUserstudent))