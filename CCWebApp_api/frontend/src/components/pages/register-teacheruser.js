import React, { useState, Fragment, useEffect } from 'react'
import PropTypes, { func } from 'prop-types';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';

import { setsidebarState, setsubsidebarState, setpageHeader, setLoading, getCourses, registerTeacher } from '../../redux/actions/main';
import { Form, InputGroup, Dropdown, Button, Spinner } from 'react-bootstrap';
import { RedExclamation, CloseButtonSmall } from '../../assets/svg/clnsmpl-icon';

function RegisterUserteacher(props) {
    const navigate = useNavigate()
    const [submissionComplete, setSubmission] = useState(false)
    const [usertype, setUsertype] = useState('Faculty')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [address, setAddress] = useState('')
    const [password, setPassword] = useState('1234')

    const [courses, setCourses] = useState([]);
    const [position, setPosition] = useState('');

    const [formData, setFormData] = useState({});
    const [formTeacherdata, setTeacherformdata] = useState({});

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = (isOpen) => {
        setIsOpen(isOpen);
    }
    
    const handleSubmit = () => {
        props.setLoading('isLoading')
        props.registerTeacher(formData, formTeacherdata)
        setSubmission(true)
        }

    const handleCourses = (course) => {
        if (!courses.includes(course)){
        setCourses(initialCourses => {
              return [...initialCourses, course];
          })};
    }

    const handleRemoveCourse = (course) => {
        setCourses(initialCourses => {
            return initialCourses.filter(item => item !== course)
        })
    }

    useEffect(() => {
        props.setsidebarState('users');
        props.setsubsidebarState('teachers-create');
        props.setpageHeader('Add a Faculty', '', '');
        props.getCourses()
    },[])

    useEffect(() => {
        if (props.loadingState === 'isNotLoading' && submissionComplete) {
          if(props.error){
            setSubmission(false)
          }else if(props.success){
            navigate('/admins/users-teachers');
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
        setTeacherformdata({
          courses : courses,
          position : position,
        })
    
      }, [props.loadingState, firstname, lastname, email, contact, address, password, courses, position, usertype, props.error, props.success]);

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
                
                <h1 className='card-title'>User Faculty Information</h1>
                <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                    <div className="form-group text-left"style={{width: '50%', marginRight: '8px'}}>
                    <Form.Group>
                    <Form.Label htmlFor="course" className='form-label'>Course/s</Form.Label>

                    <div style={{display: 'flex'}}>
                        <Dropdown onToggle={handleToggle}>
                            <Dropdown.Toggle id="dropdown-basic" className='formselect-border' style={{border: 'none', backgroundColor: 'rgba(51, 51, 51, 0.00)',  width: '100%', display: 'flex', alignItems: 'center', outline: 'none'}}>
                                <div style={{width:'100%', padding: '0px', display: 'flex', height: '24px'}}>
                                {courses.map((course) => (
                                    <div className='tag-container' key={course} style={{ paddingInline: '4px', color: 'Black', display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
                                        {course}
                                        <div style={{marginLeft: '8px', borderRadius: '2px', height: '20px', width: '20px'}} onClick={(event) => {handleRemoveCourse(course); event.stopPropagation();}}>
                                            <CloseButtonSmall/>
                                        </div>
                                    </div>
                                ))}
                                </div>
                                
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{ width: '49%', maxHeight: '150px', overflow: 'auto'}}>
                                {[...props.coursesList].sort((a, b) => a.code.localeCompare(b.code)).map((course) => (
                                    <Dropdown.Item key={course.code} onClick={() => handleCourses(course.code)}>{course.code}</Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                        {courses.length < 1 &&
                    <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                    <RedExclamation/>
                    </div>
                    }
                  </div>



                  </Form.Group>
                  </div>

                  <div className="form-group text-left"style={{width: '50%', marginLeft: '8px'}}>
                  <Form.Group>
                  <Form.Label htmlFor="position" className='form-label'>Position</Form.Label>
                  <div style={{display: 'flex'}}>
                  <Form.Select id="position" value={position} onChange={e => setPosition(e.target.value)} className='formselect-border'>
                  <option value="" disabled >Select Position</option>
                  <option value="Dean" >Dean</option>
                  <option value="Assistant Dean" >Assistant Dean</option>
                  <option value="Professor" >Professor</option>
                  <option value="Part-Time" >Part-Time</option>
                  <option value="Teacher" >Teacher</option>
                  <option value="Laboratory Attendant" >Laboratory Attendant</option>
                  </Form.Select>
                  {!position &&
                    <div style={{transform: 'translate( -55px, 5px)', width: '0px', pointerEvents: 'none'}}>
                    <RedExclamation/>
                    </div>
                    }
                  </div>
                  </Form.Group>
                  </div>

                </div>

              </InputGroup>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '32px' }}>
              <Button disabled={!firstname || !lastname || !email || !contact || !address || courses.length < 1 || !position } type="button" onClick={handleSubmit} style={{borderColor:'#3A57E8', borderRadius: '4px', backgroundColor: '#3A57E8', width: '15%', height: '48px', alignContent: 'center', marginRight: '24px'}}>
                  <h1 style={{color:'white', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '18px', paddingTop: '8px'}}>
                  {props.loadingState == 'isNotLoading'? <>Register</> : <div style={{transform: 'translate( 0px, -6px)'}}><Spinner animation="border" variant="light"/></div>}</h1>
              </Button>
            </div>
          </div>
          </>
    )
    
    }

RegisterUserteacher.propTypes = {
  setsidebarState: PropTypes.func,
  setsubsidebarState: PropTypes.func,
  setpageHeader: PropTypes.func,
  setLoading: PropTypes.func,
  getCourses: PropTypes.func,
  registerTeacher: PropTypes.func,
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


export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setpageHeader, setLoading, getCourses, registerTeacher})(RegisterUserteacher))