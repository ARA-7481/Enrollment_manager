import React, { useState, Fragment, useEffect } from 'react'
import PropTypes, { func } from 'prop-types';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';

import { setsidebarState, setsubsidebarState, setpageHeader, setLoading, getCourses, registerTeacher } from '../../redux/actions/main';
import { Form, InputGroup, Dropdown, Button, Spinner, Card } from 'react-bootstrap';
import { RedExclamation, CloseButtonSmall, SimpleCalendar, BlueExclamation } from '../../assets/svg/clnsmpl-icon';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function RegisterUserteacher(props) {
    const navigate = useNavigate()
    const [submissionComplete, setSubmission] = useState(false)
    const [usertype, setUsertype] = useState('Faculty')

    const [firstname, setFirstname] = useState('')
    const [middlename, setMiddlename] = useState('')
    const [lastname, setLastname] = useState('')
    const [extensionname, setExtensionname] = useState('')
    const [gender, setGender] = useState('')
    const [birthdate, setBirthdate] = useState('');
    const [birthplace, setBirthplace] = useState('')
    const [nationality, setNationality] = useState('')

    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')
    const [address3, setAddress3] = useState('')
    const [password, setPassword] = useState('1234')

    const [inputKey, setInputKey] = useState(Date.now());
    const [referencefile, setReferencefile] = useState(null);
    const [prevfile, setPrevfile] = useState(null);
    const [preview, setPreview] = useState("");

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

    const handleRemovefile = () => {
        setReferencefile(null)
        setPreview('')
        setInputKey(Date.now()); 
        }
    
    const onImageChange = e => {
        if (e.target.files.length > 0) { 
          setPrevfile(e.target.files[0]);
          setReferencefile(e.target.files[0]);

          const reader = new FileReader();
          reader.onloadend = () => {
              setPreview(reader.result);
            };
          reader.readAsDataURL(e.target.files[0]);
        }else {
          setPreview('');
          setReferencefile(null)
          }
        };

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
        first_name: firstname,
        middle_name: middlename,
        last_name: lastname,
        extension_name: extensionname,
        email: email,
        mobile_number: contact,
        usertype: usertype,
        gender: gender,
        birthdate: birthdate,
        birthplace: birthplace,
        nationality: nationality,
        address_value1: address1,
        address_value2: address2,
        address_value3: address3,
        addressketch: referencefile,
        password : password,
        })
      setTeacherformdata({
        position : position,
        })
    
      }, [props.loadingState, firstname, middlename, lastname, extensionname, email, contact, usertype, gender, birthdate, birthplace, nationality, address1, address2,
        address3, referencefile, password, props.error, props.success, position]);

      return (
        <>
          <div style={{backgroundColor:'#ffffff', borderRadius:'8px', paddingBottom: '48px'}}>
            <div style={{padding: '24px'}}>

              <h1 className='card-title'>Faculty Personal Information</h1>
              <InputGroup>
                <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', gap: '8px'}}>
                  <div className="form-group text-left"style={{width: '30%'}}>
                    <Form.Group>
                      <Form.Label htmlFor="firstname" className='form-label'>First Name</Form.Label>
                      <div style={{display: 'flex'}}>
                      <Form.Control type="text" value={firstname} placeholder="" id="firstname" onChange={e => setFirstname(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                      {!firstname &&
                        <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                        <RedExclamation/>
                        </div>
                        }
                      </div>
                    </Form.Group>
                  </div>
    
                  <div className="form-group text-left"style={{width: '30%'}}>
                    <Form.Group>
                      <Form.Label htmlFor="middlename" className='form-label'>Middle Name</Form.Label>
                      <div style={{display: 'flex'}}>
                        <Form.Control type="text" value={middlename} placeholder="" id="middlename" onChange={e => setMiddlename(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                      </div>
                    </Form.Group>
                  </div>

                  <div className="form-group text-left"style={{width: '30%'}}>
                    <Form.Group>
                      <Form.Label htmlFor="lastname" className='form-label'>Last Name</Form.Label>
                      <div style={{display: 'flex'}}>
                      <Form.Control type="text" value={lastname} placeholder="" id="lastname" onChange={e => setLastname(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                      {!lastname &&
                        <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                        <RedExclamation/>
                        </div>
                        }
                      </div>
                    </Form.Group>
                  </div>

                  <div className="form-group text-left"style={{width: '10%'}}>
                    <Form.Group>
                      <Form.Label htmlFor="extensionname" className='form-label'>Suffix</Form.Label>
                      <div style={{display: 'flex'}}>
                      <Form.Control type="text" value={extensionname} placeholder="ex: JR, SR, II, etc." id="extensionname" onChange={e => setExtensionname(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                      </div>
                    </Form.Group>
                  </div>
    
                </div>

                <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', gap: '8px'}}>  
                  <div className="form-group text-left"style={{width: '50%'}}>
                      <Form.Group>
                      <Form.Label htmlFor="birthdate" className='form-label'>Birth Date</Form.Label>
                      <div className='date-picker-wrapper' style={{display: 'flex'}}>
                      <DatePicker className='date-picker' placeholderText='Select Date(Type the year for quick date search)' popperPlacement="bottom-end" selected={birthdate} onChange={(date) => setBirthdate(date)} />
                      <div style={{transform: 'translate( -33px, 7px)', width: '0px', pointerEvents: 'none'}}>
                      <SimpleCalendar/>
                      </div>
                      {!birthdate &&
                      <div style={{transform: 'translate( -55px, 7px)', width: '0px', pointerEvents: 'none'}}>
                      <RedExclamation/>
                      </div>
                      }
                      </div>
                    </Form.Group>
                  </div>

                  <div className="form-group text-left"style={{width: '50%'}}>
                      <Form.Group>
                    <Form.Label htmlFor="birthplace" className='form-label'>Birth Place</Form.Label>
                    <div style={{display: 'flex'}}>
                    <Form.Control type="text" value={birthplace} placeholder="" id="birthplace" onChange={e => setBirthplace(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                    {!birthplace &&
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
                        <Form.Label htmlFor="gender" className='form-label'>Gender</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Select id="yearlevel" value={gender} onChange={e => setGender(e.target.value)} className='formselect-border'>
                        <option value="" disabled >Select Gender</option>
                        <option value="Male" >Male</option>
                        <option value="Female" >Female</option>
                        </Form.Select>
                        {!gender &&
                          <div style={{transform: 'translate( -55px, 5px)', width: '0px', pointerEvents: 'none'}}>
                          <RedExclamation/>
                          </div>
                          }
                        </div>
                      </Form.Group>
                  </div>

                  <div className="form-group text-left"style={{width: '50%'}}>
                        <Form.Group>
                      <Form.Label htmlFor="nationality" className='form-label'>Nationality</Form.Label>
                      <div style={{display: 'flex'}}>
                      <Form.Control type="text" value={nationality} placeholder="" id="nationality" onChange={e => setNationality(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                      {!nationality &&
                        <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                        <RedExclamation/>
                        </div>
                        }
                      </div>
                      </Form.Group>
                  </div>
                
                </div>


                <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                  <div className="form-group text-left"style={{width: '50%', marginRight: '8px'}}>
                      <Form.Group>
                    <Form.Label htmlFor="email" className='form-label'>Email Address</Form.Label>
                    <div style={{display: 'flex'}}>
                    <Form.Control type="text" value={email} placeholder="" id="email" onChange={e => setEmail(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                    {!email &&
                      <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                      <RedExclamation/>
                      </div>
                      }
                    </div>
                    </Form.Group>
                  </div>

                  <div className="form-group text-left"style={{width: '50%'}}>
                    <Form.Group>
                    <Form.Label htmlFor="contact" className='form-label'>Mobile Contact Number</Form.Label>
                    <div style={{display: 'flex'}}>
                    <Form.Control type="text" value={contact} placeholder="" id="contact" onChange={e => setContact(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                    {!contact &&
                      <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                      <RedExclamation/>
                      </div>
                      }
                    </div>
                    </Form.Group>
                  </div>
                </div>

              <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', gap: '8px'}}>       
                <div className="form-group text-left"style={{width: '100%'}}>
                  <Form.Group>
                  <Form.Label htmlFor="address1" className='form-label'>House No./Street/Purok</Form.Label>
                  <div style={{display: 'flex'}}>
                  <Form.Control type="text" value={address1} placeholder="" id="address1" onChange={e => setAddress1(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                  {!address1 &&
                    <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                    <RedExclamation/>
                    </div>
                    }
                  </div>
                  </Form.Group>
                </div>

                <div className="form-group text-left"style={{width: '100%'}}>
                  <Form.Group>
                  <Form.Label htmlFor="address2" className='form-label'>Baranggay</Form.Label>
                  <div style={{display: 'flex'}}>
                  <Form.Control type="text" value={address2} placeholder="" id="address2" onChange={e => setAddress2(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                  {!address2 &&
                    <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                    <RedExclamation/>
                    </div>
                    }
                  </div>
                  </Form.Group>
                </div>

                <div className="form-group text-left"style={{width: '100%'}}>
                  <Form.Group>
                  <Form.Label htmlFor="address3" className='form-label'>City/Municipality/Province</Form.Label>
                  <div style={{display: 'flex'}}>
                  <Form.Control type="text" value={address3} placeholder="" id="address3" onChange={e => setAddress3(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                  {!address3 &&
                    <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                    <RedExclamation/>
                    </div>
                    }
                  </div>
                  </Form.Group>
                </div>
              </div>

              <div style={{width: '100%'}}>
                            <Form.Group>
                            <h1 className='form-label'>Detailed Address Sketch - PNG/JPG/JPEG</h1>
                            <div style={{display: 'flex', gap: '16px'}}>
                                <div className='document-div'>
                                <input  key={inputKey}
                                        style={{
                                                width: '90%', 
                                                padding: '5px'}} 
                                                type="file" 
                                        onChange={onImageChange} 
                                        accept=".png, .jpg, .jpeg"/>
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

                  <div className="form-group text-left"style={{width: '50%', marginLeft: '8px', marginTop: '20px'}}>
                    <Form.Group>
                      <Form.Label htmlFor="position" className='form-label'>Position</Form.Label>
                      <div style={{display: 'flex'}}>
                      <Form.Select id="position" value={position} onChange={e => setPosition(e.target.value)} className='formselect-border'>
                      <option value="" disabled >Select Position</option>
                      <option value="Principal" >Principal</option>
                      <option value="Assistant Principal" >Assistant Principal</option>
                      <option value="Part-Time" >Part-Time</option>
                      <option value="Teacher-1" >Teacher-1</option>
                      <option value="Teacher-2" >Teacher-2</option>
                      <option value="Teacher-3" >Teacher-3</option>
                      <option value="Laboratory Attendant" >Laboratory Attendant</option>
                      <option value="Unspecified" >Unspecified</option>
                      </Form.Select>
                      {!position &&
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
              <Button disabled={!firstname || !lastname || !birthdate || !birthplace || !gender || !nationality ||
                                !email || !contact || !address1 || !address2 || !address3 || !position } type="button" onClick={handleSubmit} style={{borderColor:'#3A57E8', borderRadius: '4px', backgroundColor: '#3A57E8', width: '15%', height: '48px', alignContent: 'center', marginRight: '24px'}}>
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