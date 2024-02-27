import React, { useState, Fragment, useEffect } from 'react'
import PropTypes, { func } from 'prop-types';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';

import { setsidebarState, setsubsidebarState, setpageHeader, setLoading, getCourses, registerStudent, registerStudentSHS } from '../../redux/actions/main';
import { Form, InputGroup, Button, Spinner, Card } from 'react-bootstrap';
import { RedExclamation, SimpleCalendar, BlueExclamation } from '../../assets/svg/clnsmpl-icon';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function RegisterUserstudent(props) {
    const navigate = useNavigate()
    const [submissionComplete, setSubmission] = useState(false)
    const [usertype, setUsertype] = useState('Student')

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

    const [fathername, setFathername] = useState('')
    const [mothername, setMothername] = useState('')
    const [fathernumber, setFathercontact] = useState('')
    const [mothernumber, setMothercontact] = useState('')
    const [guardianname, setGuardianname] = useState('')
    const [guardiannumber, setGuardiannumber] = useState('')
    const [guardianrelationship, setGuardianrelationship] = useState('')

    const [enrollmentform, setEnrollmentform] = useState('')

    const [elementaryschool, setElementaryschool] = useState('')
    const [elementarycompletiondate, setElementarycompletiondate] = useState('')
    const [elementaryaddress, setElementaryaddress] = useState('')
    const [elementaryregion, setElementaryregion] = useState('')

    const [course, setCourse] = useState('');
    const [yearlevel, setYearlevel] = useState('');
    const [status, setStatus] = useState('');

    const [formData, setFormData] = useState({});
    const [JHSformdata, setJHSformdata] = useState({});
    const [SHSformdata, setSHSformdata] = useState({});

    const [inputKey, setInputKey] = useState(Date.now());
    const [referencefile, setReferencefile] = useState(null);
    const [prevfile, setPrevfile] = useState(null);
    const [preview, setPreview] = useState("");

    const [pept, SetPept] = useState(false)
    const [peptcompletion, SetPeptcompletion] = useState('')
    // const [petpclc,SetPetpclc] = useState('')
    const [ae,SetAe] = useState(false)
    const [aecompletion,SetAecompletion] = useState('')
    const [clc,SetClc] = useState('')
    const [clcaddress,SetClcaddress] = useState('')
    const [jhs,SetJhs] = useState('')
    const [jhsaddress,SetJhsaddress] = useState('')
    const [jhscompletion,SetJhscompletion] = useState('')
    const [jhsregion,SetJhsregion] = useState('')
    const [jhsaverage,SetJhsaverage] = useState('')
    const [peptjhs,SetPeptjhs] = useState(false)
    const [peptcompletionjhs,SetPeptcompletionjhs] = useState('')
    // const [petpclcjhs,SetPetpclcjhs] = useState('')
    const [aejhs,SetAejhs] = useState(false)
    const [aecompletionjhs,SetAecompletionjhs] = useState('')
    const [clcjhs,SetClcjhs] = useState('')
    const [clcaddressjhs,SetClcaddressjhs] = useState('')
    const [shs1,SetShs1] = useState('')
    const [shs1address,SetShs1address] = useState('')
    const [shs1track1,SetShs1track1] = useState('')
    const [shs1strand1,SetShs1strand1] = useState('')
    const [shs1track2,SetShs1track2] = useState('')
    const [shs1strand2,SetShs1strand2] = useState('')
    const [shs2,SetShs2] = useState('')
    const [shs2address,SetShs2address] = useState('')
    const [shs2track1,SetShs2track1] = useState('')
    const [shs2strand1,SetShs2strand1] = useState('')
    const [shs2track2,SetShs2track2] = useState('')
    const [shs2strand2,SetShs2strand2] = useState('')

    const [strand,SetStrand] = useState('')
    const [track,SetTrack] = useState('')
    const [specialization,SetSpecialization] = useState('')
    const [description,setDescription] = useState('')

    const handlepept = (event) => {
      const { checked }  = event.target
      if (checked){
        SetPept(true)
      }else{
        SetPept(false)
      }
    }

    const handleae = (event) => {
      const { checked }  = event.target
      if (checked){
        SetAe(true)
      }else{
        SetAe(false)
      }
    }

    const handlepeptjhs = (event) => {
      const { checked }  = event.target
      if (checked){
        SetPeptjhs(true)
      }else{
        SetPeptjhs(false)
      }
    }

    const handleaejhs = (event) => {
      const { checked }  = event.target
      if (checked){
        SetAejhs(true)
      }else{
        SetAejhs(false)
      }
    }

    const handleSubmit = () => {
        if(enrollmentform === "JHS Form"){
          props.setLoading('isLoading')
          props.registerStudent(formData, JHSformdata)
          setSubmission(true)
        }else if(enrollmentform === "SHS Form"){
          props.setLoading('isLoading')
          props.registerStudentSHS(formData, SHSformdata)
          setSubmission(true)
        }
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
        props.setsubsidebarState('students-create');
        props.setpageHeader('Enroll a Student', '', 'Enrollment Page for JHS, SHS and Transferees');
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
        setJHSformdata({
          father_name: fathername,
          father_mobile: fathernumber,
          mother_name: mothername,
          mother_mobile: mothernumber,
          guardian_name: guardianname,
          guardian_mobile: guardiannumber,
          guardian_relationship: guardianrelationship,
          elementaryschool: elementaryschool,
          elementarycompletiondate: elementarycompletiondate,
          elementaryaddress: elementaryaddress,
          elementaryregion: elementaryregion,
          description: description,
        })
        setSHSformdata({
          gradelevel : "Grade 11",
          father_name: fathername,
          father_mobile: fathernumber,
          mother_name: mothername,
          mother_mobile: mothernumber,
          guardian_name: guardianname,
          guardian_mobile: guardiannumber,
          guardian_relationship: guardianrelationship,
          elementaryschool: elementaryschool,
          elementarycompletiondate: elementarycompletiondate,
          elementaryaddress: elementaryaddress,
          elementaryregion: elementaryregion,
          pept:pept,

          ...(peptcompletion ? { peptcompletion: peptcompletion } : {}),

          ae:ae,

          ...(aecompletion ? { aecompletion: aecompletion } : {}),

          clc:clc,
          clcaddress:clcaddress,
          jhs:jhs,
          jhsaddress:jhsaddress,
          jhscompletion:jhscompletion,
          jhsregion:jhsregion,
          jhsaverage:jhsaverage,
          peptjhs:peptjhs,

          ...(peptcompletionjhs ? { peptcompletionjhs: peptcompletionjhs } : {}),

          aejhs:aejhs,

          ...(aecompletionjhs ? { aecompletionjhs: aecompletionjhs } : {}),

          clcjhs:clcjhs,
          clcaddressjhs:clcaddressjhs,

          // shs1:shs1,
          // shs1address:shs1address,
          // shs1track1:shs1track1,
          // shs1strand1:shs1strand1,
          // shs1track2:shs1track2,
          // shs1strand2:shs1strand2,
          // shs2:shs2,
          // shs2address:shs2address,
          // shs2track1:shs2track1,
          // shs2strand1:shs2strand1,
          // shs2track2:shs2track2,
          // shs2strand2:shs2strand2,

          strand:strand,
          track:track,
          specialization:specialization,
          description: description,
        })
    
      }, [props.loadingState, props.error, props.success, enrollmentform, firstname, middlename, lastname, extensionname,
           email, contact, usertype, gender, birthdate, birthplace, nationality, address1, address2, address3, referencefile,
           fathername, fathernumber, mothername, mothernumber, guardianname, guardiannumber, guardianrelationship, elementaryschool,
            elementarycompletiondate, elementaryaddress, elementaryregion, pept, peptcompletion, ae, aecompletion, clc, clcaddress, jhs, jhsaddress,
            jhscompletion, jhsregion, jhsaverage, peptjhs, peptcompletionjhs, aejhs, aecompletionjhs, clcjhs, clcaddressjhs, shs1, shs1address, shs1track1,
            shs1strand1, shs1track2, shs1strand2, shs2, shs2address, shs2track1, shs2strand1, shs2track2, shs2strand2, strand, specialization, track, description]);

      return (
        <>
          <div style={{backgroundColor:'#ffffff', borderRadius:'8px', paddingBottom: '48px'}}>
            <div style={{padding: '24px'}}>
              <h1 className='card-title'>Student Personal Information</h1>
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


                <Card style={{border: '2px solid #3A57E8', width: '100%', height: '60px', backgroundColor: '#D8DDFA', borderRadius: '4px', justifyContent: 'center', marginBottom: '8px', marginTop: '24px'}}>
                  <div style={{display:'flex', paddingLeft: '12px'}}>
                  <BlueExclamation/><h1 style={{color:'#293DA2', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '16px', paddingTop: '4px', paddingLeft: '8px'}}>Junior High, Senior High and Transferees have different enrollment processes. Please select the appropriate form.</h1>
                  </div>
                </Card>

                <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', gap: '8px'}}>
                  <div className="form-group text-left"style={{width: '50%'}}>
                        <Form.Group>
                          <div style={{display: 'flex'}}>
                          <Form.Select id="enrollmentform" value={enrollmentform} onChange={e => setEnrollmentform(e.target.value)} className='formselect-border'>
                          <option value="" disabled >Select Enrollment Form</option>
                          <option value="JHS Form" >JHS Form</option>
                          <option value="SHS Form" >SHS Form</option>
                          <option value="Transferee" >Transferee Form</option>
                          </Form.Select>
                          {!enrollmentform &&
                            <div style={{transform: 'translate( -55px, 5px)', width: '0px', pointerEvents: 'none'}}>
                            <RedExclamation/>
                            </div>
                            }
                          </div>
                        </Form.Group>
                  </div>
                </div>

                {enrollmentform === "JHS Form" && 
                
                <div style={{border: '1px solid gray', borderRadius: '8px', width: '100%', backgroundColor: 'rgb(232, 255, 245, 0.4)', padding: '24px'}}>
                <h1 className='inter-700-28px' style={{textAlign: 'center', marginBottom: '12px'}}>JHS ENROLLMENT FORM</h1>
                <h1 className='card-title'>Parents'/Guardian's Information</h1>

                  <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>

                      <div className="form-group text-left"style={{width: '50%', marginRight: '8px'}}>
                        <Form.Group>
                        <Form.Label htmlFor="fathername" className='form-label'>Full Name of Father</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" value={fathername} placeholder="" id="fathername" onChange={e => setFathername(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                        </Form.Group>
                      </div>

                      <div className="form-group text-left"style={{width: '50%'}}>
                        <Form.Group>
                        <Form.Label htmlFor="fathernumber" className='form-label'>Contact Number of Father</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" value={fathernumber} placeholder="" id="fathernumber" onChange={e => setFathercontact(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                        </Form.Group>
                      </div>

                    </div>

                    
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', gap: '8px'}}>
                      
                      <div className="form-group text-left"style={{width: '50%'}}>
                        <Form.Group>
                        <Form.Label htmlFor="mothername" className='form-label'>Full Name of Mother</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" value={mothername} placeholder="" id="mothername" onChange={e => setMothername(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                        </Form.Group>
                      </div>
                      
                      <div className="form-group text-left"style={{width: '50%'}}>
                        <Form.Group>
                        <Form.Label htmlFor="mothernumber" className='form-label'>Contact Number of Mother</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" value={mothernumber} placeholder="" id="mothernumber" onChange={e => setMothercontact(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                        </Form.Group>
                      </div>
                      
                    </div>
                    

                    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', gap: '8px'}}>
                      
                      <div className="form-group text-left"style={{width: '50%'}}>
                        <Form.Group>
                        <Form.Label htmlFor="guardianname" className='form-label'>Full Name of Guardian</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" value={guardianname} placeholder="Fill this up if the student is not living with his/her parents." id="guardianname" onChange={e => setGuardianname(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                        </Form.Group>
                      </div>
                      
                      <div className="form-group text-left"style={{width: '50%'}}>
                        <Form.Group>
                        <Form.Label htmlFor="guardiannumber" className='form-label'>Contact Number of Guardian</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" value={guardiannumber} placeholder="Fill this up if the student is not living with his/her parents." id="guardiannumber" onChange={e => setGuardiannumber(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                        </Form.Group>
                      </div>
                      
                    </div>

                    <div className="form-group text-left"style={{width: '50%'}}>
                        <Form.Group>
                        <Form.Label htmlFor="guardianrelationship" className='form-label'>Relationship with Guardian</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" value={guardianrelationship} placeholder="Fill this up if the student is not living with his/her parents." id="guardianrelationship" onChange={e => setGuardianrelationship(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                        </Form.Group>
                      </div>

                    <h1 className='card-title' style={{marginTop: '24px'}}>Elementary Education</h1>

                    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', gap: '8px'}}>

                      <div className="form-group text-left"style={{width: '50%'}}>
                        <Form.Group>
                        <Form.Label htmlFor="elementaryschool" className='form-label'>Elementary School</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" value={elementaryschool} placeholder="Do not abbreviate." id="elementaryschool" onChange={e => setElementaryschool(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        {!elementaryschool &&
                            <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                            <RedExclamation/>
                            </div>
                          }
                        </div>
                        </Form.Group>
                      </div>

                      <div className="form-group text-left"style={{width: '50%'}}>
                        <Form.Group>
                        <Form.Label htmlFor="elementarycompletiondate" className='form-label'>Completion Date</Form.Label>
                        <div className='date-picker-wrapper' style={{display: 'flex'}}>
                        <DatePicker className='date-picker' placeholderText='Select Date(Type the year for quick date search)' popperPlacement="bottom-end" selected={elementarycompletiondate} onChange={(date) => setElementarycompletiondate(date)} />
                        <div style={{transform: 'translate( -33px, 7px)', width: '0px', pointerEvents: 'none'}}>
                        <SimpleCalendar/>
                        </div>
                        {!elementarycompletiondate &&
                          <div style={{transform: 'translate( -55px, 7px)', width: '0px', pointerEvents: 'none'}}>
                          <RedExclamation/>
                          </div>
                        }
                        </div>
                        </Form.Group>
                      </div>

                    </div>

                    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', gap: '8px'}}>

                      <div className="form-group text-left"style={{width: '90%'}}>
                        <Form.Group>
                        <Form.Label htmlFor="elementaryaddress" className='form-label'>Elementary School Address</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" value={elementaryaddress} placeholder="" id="elementaryaddress" onChange={e => setElementaryaddress(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        {!elementaryaddress &&
                            <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                            <RedExclamation/>
                            </div>
                          }
                        </div>
                        </Form.Group>
                      </div>

                      <div className="form-group text-left"style={{width: '10%'}}>
                        <Form.Group>
                        <Form.Label htmlFor="elementaryregion" className='form-label'>Region</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" value={elementaryregion} placeholder="" id="elementaryregion" onChange={e => setElementaryregion(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        {!elementaryregion &&
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
                        <Form.Label htmlFor="description" className='form-label'>Description/Notes</Form.Label>
                        <Form.Control value={description} as="textarea" rows={3} type="text" placeholder="Enter student description or additional notes here (Optional)." id="description" onChange={e => setDescription(e.target.value)} style={{width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                      </Form.Group>
                    </div>
                    
                </div>
                }

{/* SHS FORM */}
                {enrollmentform === "SHS Form" && 
                
                <div style={{border: '1px solid gray', borderRadius: '8px', width: '100%', backgroundColor: 'rgb(255,239,213, 0.4)', padding: '24px'}}>
                <h1 className='inter-700-28px' style={{textAlign: 'center', marginBottom: '12px'}}>SHS ENROLLMENT FORM</h1>
                <h1 className='card-title'>Parents'/Guardian's Information</h1>
                <div style={{paddingBottom: '20px', borderBottom: '1px solid gray'}}>

                  <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>

                      <div className="form-group text-left"style={{width: '50%', marginRight: '8px'}}>
                        <Form.Group>
                        <Form.Label htmlFor="fathername" className='form-label'>Full Name of Father</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" value={fathername} placeholder="" id="fathername" onChange={e => setFathername(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                        </Form.Group>
                      </div>

                      <div className="form-group text-left"style={{width: '50%'}}>
                        <Form.Group>
                        <Form.Label htmlFor="fathernumber" className='form-label'>Contact Number of Father</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" value={fathernumber} placeholder="" id="fathernumber" onChange={e => setFathercontact(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                        </Form.Group>
                      </div>

                    </div>
                    
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', gap: '8px'}}>
                      
                      <div className="form-group text-left"style={{width: '50%'}}>
                        <Form.Group>
                        <Form.Label htmlFor="mothername" className='form-label'>Full Name of Mother</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" value={mothername} placeholder="" id="mothername" onChange={e => setMothername(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                        </Form.Group>
                      </div>
                      
                      <div className="form-group text-left"style={{width: '50%'}}>
                        <Form.Group>
                        <Form.Label htmlFor="mothernumber" className='form-label'>Contact Number of Mother</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" value={mothernumber} placeholder="" id="mothernumber" onChange={e => setMothercontact(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                        </Form.Group>
                      </div>
                      
                    </div>
                    
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', gap: '8px'}}>
                      
                      <div className="form-group text-left"style={{width: '50%'}}>
                        <Form.Group>
                        <Form.Label htmlFor="guardianname" className='form-label'>Full Name of Guardian</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" value={guardianname} placeholder="Fill this up if the student is not living with his/her parents." id="guardianname" onChange={e => setGuardianname(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                        </Form.Group>
                      </div>
                      
                      <div className="form-group text-left"style={{width: '50%'}}>
                        <Form.Group>
                        <Form.Label htmlFor="guardiannumber" className='form-label'>Contact Number of Guardian</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" value={guardiannumber} placeholder="Fill this up if the student is not living with his/her parents." id="guardiannumber" onChange={e => setGuardiannumber(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                        </Form.Group>
                      </div>
                      
                    </div>

                    <div className="form-group text-left"style={{width: '50%'}}>
                        <Form.Group>
                        <Form.Label htmlFor="guardianrelationship" className='form-label'>Relationship with Guardian</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" value={guardianrelationship} placeholder="Fill this up if the student is not living with his/her parents." id="guardianrelationship" onChange={e => setGuardianrelationship(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                        </Form.Group>
                      </div>
                  </div>

                    <h1 className='card-title' style={{marginTop: '24px'}}>Elementary Education</h1>


                    <div style={{paddingBottom: '20px', borderBottom: '1px solid gray'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', gap: '8px'}}>

                      <div className="form-group text-left"style={{width: '50%'}}>
                        <Form.Group>
                        <Form.Label htmlFor="elementaryschool" className='form-label'>Elementary School</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" value={elementaryschool} placeholder="Do not abbreviate." id="elementaryschool" onChange={e => setElementaryschool(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        {!elementaryschool &&
                            <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                            <RedExclamation/>
                            </div>
                          }
                        </div>
                        </Form.Group>
                      </div>

                      <div className="form-group text-left"style={{width: '50%'}}>
                        <Form.Group>
                        <Form.Label htmlFor="elementarycompletiondate" className='form-label'>Completion Date</Form.Label>
                        <div className='date-picker-wrapper' style={{display: 'flex'}}>
                        <DatePicker className='date-picker' placeholderText='Select Date(Type the year for quick date search)' popperPlacement="bottom-end" selected={elementarycompletiondate} onChange={(date) => setElementarycompletiondate(date)} />
                        <div style={{transform: 'translate( -33px, 7px)', width: '0px', pointerEvents: 'none'}}>
                        <SimpleCalendar/>
                        </div>
                        {!elementarycompletiondate &&
                          <div style={{transform: 'translate( -55px, 7px)', width: '0px', pointerEvents: 'none'}}>
                          <RedExclamation/>
                          </div>
                        }
                        </div>
                        </Form.Group>
                      </div>

                    </div>

                    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', gap: '8px'}}>

                      <div className="form-group text-left"style={{width: '90%'}}>
                        <Form.Group>
                        <Form.Label htmlFor="elementaryaddress" className='form-label'>Elementary School Address</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" value={elementaryaddress} placeholder="" id="elementaryaddress" onChange={e => setElementaryaddress(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        {!elementaryaddress &&
                            <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                            <RedExclamation/>
                            </div>
                          }
                        </div>
                        </Form.Group>
                      </div>

                      <div className="form-group text-left"style={{width: '10%'}}>
                        <Form.Group>
                        <Form.Label htmlFor="elementaryregion" className='form-label'>Region</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" value={elementaryregion} placeholder="" id="elementaryregion" onChange={e => setElementaryregion(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        {!elementaryregion &&
                            <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                            <RedExclamation/>
                            </div>
                          }
                        </div>
                        </Form.Group>
                      </div>
                      
                    </div>

                    <div style={{marginBottom: '20px'}}>
                      <Form.Group>
                      <div style={{display: 'flex', width: '100%', gap: '8px'}}>

                        <div style={{width: '50%'}}>
                          <Form.Label className='form-label'>Elementary Level - PEPT</Form.Label>
                          <div style={{display: 'flex', gap: '8px'}}>
                            <Form.Check
                              type="checkbox"
                              onChange={handlepept}
                              style={{marginLeft: '24px'}}
                            />
                            <h1 className='inter-400-16px-dark' style={{paddingTop: '2px'}}>Elementary Level - Philippine Education Placement Test Passer?</h1>
                          </div>
                        </div>
                        
                        <div style={{width: '50%'}}>
                          <Form.Label htmlFor="elementarycompletiondate" className='form-label'>Completion Date</Form.Label>
                          <div className='date-picker-wrapper' style={{display: 'flex'}}>
                            <DatePicker className='date-picker' placeholderText='Select Date(Type the year for quick date search)' popperPlacement="bottom-end" selected={peptcompletion} onChange={(date) => SetPeptcompletion(date)} />
                            <div style={{transform: 'translate( -33px, 7px)', width: '0px', pointerEvents: 'none'}}>
                              <SimpleCalendar/>
                            </div>
                          </div>
                        </div>


                      </div>
                      </Form.Group>
                    </div>

                    <div style={{marginBottom: '20px'}}>
                      <Form.Group>
                      <div style={{display: 'flex', width: '100%', gap: '8px'}}>

                        <div style={{width: '50%'}}>
                          <Form.Label className='form-label'>Elementary Level - A&E</Form.Label>
                          <div style={{display: 'flex', gap: '8px'}}>
                            <Form.Check
                              type="checkbox"
                              onChange={handleae}
                              style={{marginLeft: '24px'}}
                            />
                            <h1 className='inter-400-16px-dark' style={{paddingTop: '2px'}}>Elementary Level - Accreditation and Equivalency Test Passer?</h1>
                          </div>
                        </div>
                        
                        <div style={{width: '50%'}}>
                          <Form.Label className='form-label'>Completion Date</Form.Label>
                          <div className='date-picker-wrapper' style={{display: 'flex'}}>
                            <DatePicker className='date-picker' placeholderText='Select Date(Type the year for quick date search)' popperPlacement="bottom-end" selected={aecompletion} onChange={(date) => SetAecompletion(date)} />
                            <div style={{transform: 'translate( -33px, 7px)', width: '0px', pointerEvents: 'none'}}>
                              <SimpleCalendar/>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Form.Group>
                    </div>

                    {(pept || ae ) && 
                    <>
                    <div style={{width: '100%'}}>
                      <div className="form-group text-left"style={{width: '100%'}}>
                        <Form.Group>
                        <Form.Label className='form-label'>Community Learning Center</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" value={clc} placeholder="Do not abbreviate." id="clc" onChange={e => SetClc(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                        </Form.Group>
                      </div>
                    </div>

                    <div style={{width: '100%'}}>
                      <div className="form-group text-left"style={{width: '100%'}}>
                        <Form.Group>
                        <Form.Label className='form-label'>Community Learning Center - Address</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" value={clcaddress} placeholder="Do not abbreviate." id="clcaddress" onChange={e => SetClcaddress(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                        </Form.Group>
                      </div>
                    </div>
                    </>
                    } 
                  </div>



                    <h1 className='card-title' style={{marginTop: '24px'}}>Junior High School Education</h1>

                    <div style={{paddingBottom: '20px', borderBottom: '1px solid gray'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', gap: '8px'}}>

                      <div className="form-group text-left"style={{width: '50%'}}>
                        <Form.Group>
                        <Form.Label className='form-label'>Junior High School</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" value={jhs} placeholder="Do not abbreviate." id="jhs" onChange={e => SetJhs(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        {!jhs &&
                            <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                            <RedExclamation/>
                            </div>
                          }
                        </div>
                        </Form.Group>
                      </div>

                      <div className="form-group text-left"style={{width: '50%'}}>
                        <Form.Group>
                        <Form.Label className='form-label'>Completion Date</Form.Label>
                        <div className='date-picker-wrapper' style={{display: 'flex'}}>
                        <DatePicker className='date-picker' placeholderText='Select Date(Type the year for quick date search)' popperPlacement="bottom-end" selected={jhscompletion} onChange={(date) => SetJhscompletion(date)} />
                        <div style={{transform: 'translate( -33px, 7px)', width: '0px', pointerEvents: 'none'}}>
                        <SimpleCalendar/>
                        </div>
                        {!jhscompletion &&
                          <div style={{transform: 'translate( -55px, 7px)', width: '0px', pointerEvents: 'none'}}>
                          <RedExclamation/>
                          </div>
                        }
                        </div>
                        </Form.Group>
                      </div>

                    </div>

                    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', gap: '8px'}}>

                      <div className="form-group text-left"style={{width: '90%'}}>
                        <Form.Group>
                        <Form.Label className='form-label'>Junior High School Address</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" value={jhsaddress} placeholder="" id="jhsaddress" onChange={e => SetJhsaddress(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        {!jhsaddress &&
                            <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                            <RedExclamation/>
                            </div>
                          }
                        </div>
                        </Form.Group>
                      </div>

                      <div className="form-group text-left"style={{width: '10%'}}>
                        <Form.Group>
                        <Form.Label className='form-label'>Region</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" value={jhsregion} placeholder="" id="jhsregion" onChange={e => SetJhsregion(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        {!jhsregion &&
                            <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                            <RedExclamation/>
                            </div>
                          }
                        </div>
                        </Form.Group>
                      </div>
                      
                    </div>

                    <div style={{marginBottom: '20px'}}>
                      <Form.Group>
                      <div style={{display: 'flex', width: '100%', gap: '8px'}}>

                        <div style={{width: '50%'}}>
                          <Form.Label className='form-label'>JHS Level - PEPT</Form.Label>
                          <div style={{display: 'flex', gap: '8px'}}>
                            <Form.Check
                              type="checkbox"
                              onChange={handlepeptjhs}
                              style={{marginLeft: '24px'}}
                            />
                            <h1 className='inter-400-16px-dark' style={{paddingTop: '2px'}}>JHS Level - Philippine Education Placement Test Passer?</h1>
                          </div>
                        </div>
                        
                        <div style={{width: '50%'}}>
                          <Form.Label className='form-label'>Completion Date</Form.Label>
                          <div className='date-picker-wrapper' style={{display: 'flex'}}>
                            <DatePicker className='date-picker' placeholderText='Select Date(Type the year for quick date search)' popperPlacement="bottom-end" selected={peptcompletionjhs} onChange={(date) => SetJhscompletion(date)} />
                            <div style={{transform: 'translate( -33px, 7px)', width: '0px', pointerEvents: 'none'}}>
                              <SimpleCalendar/>
                            </div>
                          </div>
                        </div>


                      </div>
                      </Form.Group>
                    </div>

                    <div style={{marginBottom: '20px'}}>
                      <Form.Group>
                      <div style={{display: 'flex', width: '100%', gap: '8px'}}>

                        <div style={{width: '50%'}}>
                          <Form.Label className='form-label'>JHS Level - A&E</Form.Label>
                          <div style={{display: 'flex', gap: '8px'}}>
                            <Form.Check
                              type="checkbox"
                              onChange={handleaejhs}
                              style={{marginLeft: '24px'}}
                            />
                            <h1 className='inter-400-16px-dark' style={{paddingTop: '2px'}}>JHS Level - Accreditation and Equivalency Test Passer?</h1>
                          </div>
                        </div>
                        
                        <div style={{width: '50%'}}>
                          <Form.Label className='form-label'>Completion Date</Form.Label>
                          <div className='date-picker-wrapper' style={{display: 'flex'}}>
                            <DatePicker className='date-picker' placeholderText='Select Date(Type the year for quick date search)' popperPlacement="bottom-end" selected={aecompletionjhs} onChange={(date) => SetAecompletionjhs(date)} />
                            <div style={{transform: 'translate( -33px, 7px)', width: '0px', pointerEvents: 'none'}}>
                              <SimpleCalendar/>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Form.Group>
                    </div>

                    {(peptjhs || aejhs ) && 
                    <>
                    <div style={{width: '100%'}}>
                      <div className="form-group text-left"style={{width: '100%'}}>
                        <Form.Group>
                        <Form.Label className='form-label'>JHS - Community Learning Center</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" value={clcjhs} placeholder="Do not abbreviate." id="clcjhs" onChange={e => SetClcjhs(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                        </Form.Group>
                      </div>
                    </div>

                    <div style={{width: '100%'}}>
                      <div className="form-group text-left"style={{width: '100%'}}>
                        <Form.Group>
                        <Form.Label className='form-label'>JHS - Community Learning Center - Address</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" value={clcaddressjhs} placeholder="Do not abbreviate." id="clcaddressjhs" onChange={e => SetClcaddressjhs(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                        </Form.Group>
                      </div>
                    </div>
                    </>
                    }
                    <div className="form-group text-left"style={{width: '50%'}}>
                        <Form.Group>
                        <Form.Label className='form-label'>JHS General Average</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" value={jhsaverage} placeholder="Enter Grade (0-100%)" id="jhsaverage" onChange={e => SetJhsaverage(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        {!jhsaverage &&
                            <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                            <RedExclamation/>
                            </div>
                          }
                        </div>
                        </Form.Group>
                      </div>
                    </div>

                    <h1 className='card-title' style={{marginTop: '24px'}}>Senior High School Details</h1>

                    <div style={{paddingBottom: '20px'}}>

                    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', gap: '8px'}}>

                      <div className="form-group text-left"style={{width: '50%'}}>
                        <Form.Group>
                          <Form.Label className='form-label'>Track</Form.Label>
                          <div style={{display: 'flex'}}>
                          <Form.Select id="track" value={track} onChange={e => SetTrack(e.target.value)} className='formselect-border'>
                          <option value="" disabled >Select Track</option>
                          <option value="Technical Vocational & Livelihood" >Technical Vocational & Livelihood</option>
                          </Form.Select>
                          {!track &&
                            <div style={{transform: 'translate( -55px, 5px)', width: '0px', pointerEvents: 'none'}}>
                            <RedExclamation/>
                            </div>
                            }
                          </div>
                        </Form.Group>
                      </div>

                      <div className="form-group text-left"style={{width: '50%'}}>
                        <Form.Group>
                          <Form.Label className='form-label'>Strand</Form.Label>
                          <div style={{display: 'flex'}}>
                          <Form.Select id="strand" value={strand} onChange={e => SetStrand(e.target.value)} className='formselect-border'>
                          <option value="" disabled >Select Strand</option>
                          <option value="Industrial Arts" >Industrial Arts</option>
                          <option value="Home Economics" >Home Economics</option>
                          </Form.Select>
                          {!strand &&
                            <div style={{transform: 'translate( -55px, 5px)', width: '0px', pointerEvents: 'none'}}>
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
                        <Form.Label className='form-label'>Specialization</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Select id="specialization" value={specialization} onChange={e => SetSpecialization(e.target.value)} className='formselect-border'>
                        <option value="" disabled >Select Specialization</option>
                        {strand === "Industrial Arts" &&
                        <option value="Electrical Installation and Maintenance" >Electrical Installation and Maintenance</option>
                          }
                        {strand === "Home Economics" &&
                        <>
                        <option value="Cookery" > Cookery</option>
                        <option value="Food & Beverage Services" >Food & Beverage Services</option>
                        <option value="Bread & Pastry Production" >Bread & Pastry Production</option>
                        </>
                          }
                        </Form.Select>
                        {!specialization &&
                          <div style={{transform: 'translate( -55px, 5px)', width: '0px', pointerEvents: 'none'}}>
                          <RedExclamation/>
                          </div>
                          }
                        </div>
                      </Form.Group>
                    </div>

                    </div>

                    <div style={{width: '100%'}}>
                      <Form.Group>
                        <Form.Label htmlFor="description" className='form-label'>Description/Notes</Form.Label>
                        <Form.Control value={description} as="textarea" rows={3} type="text" placeholder="Enter student description or additional notes here (Optional)." id="description" onChange={e => setDescription(e.target.value)} style={{width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                      </Form.Group>
                    </div>

                    </div>

                  </div>
                }

              </InputGroup>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '32px' }}>
            <Button disabled={!firstname || !lastname || !birthdate || !birthplace || !gender || !nationality ||
                                !email || !contact || !address1 || !address2 || !address3 || !enrollmentform || 
                                (enrollmentform === "JHS Form" && !elementaryschool) || (enrollmentform === "JHS Form" && !elementarycompletiondate) || 
                                (enrollmentform === "JHS Form" && !elementaryaddress) || (enrollmentform === "JHS Form" && !elementaryregion) }
                                type="button" onClick={handleSubmit} 
                                style={{borderColor:'#3A57E8', borderRadius: '4px', backgroundColor: '#3A57E8', width: '15%', height: '48px', alignContent: 'center', marginRight: '24px'}}>
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
  registerStudentSHS: PropTypes.func,
  
}

const mapStateToProps = (state) => ({
  loadingState: state.main.loadingState,
  coursesList: state.main.coursesList,
  error: state.main.error,
  success: state.main.success,
})


export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setpageHeader, setLoading, getCourses, registerStudent, registerStudentSHS })(RegisterUserstudent))