import React, { useState, Fragment, useEffect } from 'react'
import PropTypes, { func } from 'prop-types';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';

import { setsidebarState, setsubsidebarState, setpageHeader, setLoading, getCourses, setStudentPromotiontoSHS } from '../../redux/actions/main';
import { Form, InputGroup, Button, Spinner, Card } from 'react-bootstrap';
import { RedExclamation, SimpleCalendar, BlueExclamation } from '../../assets/svg/clnsmpl-icon';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Studentdatasheet(props) {
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
    const [avatar, setAvatar] = useState()
    const [addressimage, setAddressimage] = useState('')

    useEffect(() => {
        props.setpageHeader('Student Information Sheet', '', '');
        setAddressimage('')
      },[])

    useEffect(() => {
        try{
        setFirstname(props.studentData.userprofile.first_name)
        if(props.studentData.userprofile.middle_name){
            setMiddlename(props.studentData.userprofile.middle_name)
          }else{setMiddlename('')}
        setLastname(props.studentData.userprofile.last_name)
        if(props.studentData.userprofile.extension_name){
        setExtensionname(props.studentData.userprofile.extension_name)
          }else{setExtensionname('')}
        setBirthdate(props.studentData.userprofile.birthdate)
        setBirthplace(props.studentData.userprofile.birthplace)
        setGender(props.studentData.userprofile.gender)
        setNationality(props.studentData.userprofile.nationality)
        setEmail(props.studentData.userprofile.email)
        setContact(props.studentData.userprofile.mobile_number)
        setAddress1(props.studentData.userprofile.address_value1)
        setAddress2(props.studentData.userprofile.address_value2)
        setAddress3(props.studentData.userprofile.address_value3)
        if(props.studentData.father_name){
            setFathername(props.studentData.father_name)
            setFathercontact(props.studentData.father_mobile)
          }else{
            setFathername('')
            setFathercontact('')
          }
        if(props.studentData.mother_name){
            setMothername(props.studentData.mother_name)
            setMothercontact(props.studentData.mother_mobile)
          }else{
            setMothername('')
            setMothercontact('')
          }
        if(props.studentData.guardian_name){
            setGuardianname(props.studentData.guardian_name)
            setGuardiannumber(props.studentData.guardian_mobile)
            setGuardianrelationship(props.studentData.guardian_relationship)
          }else{
            setGuardianname('')
            setGuardiannumber('')
            setGuardianrelationship('')
          }
        setElementaryschool(props.studentData.elementaryschool)
        setElementarycompletiondate(props.studentData.elementarycompletiondate)
        setElementaryaddress(props.studentData.elementaryaddress)
        setElementaryregion(props.studentData.elementaryregion)
        if(props.studentData.pept){
            SetPeptcompletion(props.studentData.peptcompletion)
          }else{SetPeptcompletion('')}
        if(props.studentData.ae){
            SetAecompletion(props.studentData.aecompletion)
          }else{SetAecompletion('')}
        if(props.studentData.pept || props.studentData.ae){
            SetClc(props.studentData.clc)
            SetClcaddress(props.studentData.clcaddress)
          }else{
            SetClc('')
            SetClcaddress('')
          }
        if(props.studentData.jhs){
            SetJhs(props.studentData.jhs)
            SetJhsaddress(props.studentData.jhsaddress)
            SetJhscompletion(props.studentData.jhscompletion)
            SetJhsregion(props.studentData.jhsregion)
            SetJhsaverage(props.studentData.jhsaverage)
          }else{
            SetJhs('')
            SetJhsaddress('')
            SetJhscompletion('')
            SetJhsregion('')
            SetJhsaverage('')
          }
        if(props.studentData.peptjhs){
            SetPeptcompletionjhs(props.studentData.peptcompletionjhs)
          }else{
            SetPeptcompletionjhs('')
          }
        if(props.studentData.aejhs){
            SetAecompletionjhs(props.studentData.aecompletionjhs)
          }else{
            SetAecompletionjhs('')
          }
        if(props.studentData.track){
            SetTrack(props.studentData.track)
            SetStrand(props.studentData.strand)
            SetSpecialization(props.studentData.specialization)
          }else{
            SetTrack('')
            SetStrand('')
            SetSpecialization('')
          }
        setDescription(props.studentData.description)
        SetPept(props.studentData.pept)
        SetAe(props.studentData.ae)
        SetPeptjhs(props.studentData.peptjhs)
        SetAejhs(props.studentData.aejhs)
        setAvatar(props.studentData.userprofile.avatar)
        if(props.studentData.userprofile.addressketch){
          setAddressimage(props.studentData.userprofile.addressketch)
        }else{
          setAddressimage('')
        }
        }catch(error){}
        
      },[props.studentData])

    useEffect(() => {
        if (props.loadingState === 'isNotLoading' && submissionComplete) {
            if(props.error){
              setSubmission(false)
            }else if(props.success){
              if(props.sidebarState === 'users'){
                navigate('/admins/users-students');
              }else{
                navigate('/admins/section-page')
              }
            }
          }
          setSHSformdata({
            status : "Enrolled",
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
            shs1strand1, shs1track2, shs1strand2, shs2, shs2address, shs2track1, shs2strand1, shs2track2, shs2strand2, strand, specialization, track, description, avatar, addressimage]);

      return (
        <>
          <div style={{backgroundColor:'#ffffff', borderRadius:'8px', paddingBottom: '48px'}}>
            <div style={{padding: '24px'}}>
              <h1 className='card-title'>Student Personal Information</h1>

              <div style={{marginRight: '24px', marginBottom: '12px'}}>
                <img className="circular-avatar" src={avatar} alt="description" style={{border: '2px solid #556BD9'}} />
              </div>

              <InputGroup>
                <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', gap: '8px'}}>
                    <div className="form-group text-left"style={{width: '30%'}}>
                    <Form.Group>
                  <Form.Label htmlFor="firstname" className='form-label'>First Name</Form.Label>
                  <div style={{display: 'flex'}}>
                  <Form.Control type="text" disabled={true} defaultValue={firstname} id="firstname" style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                  </div>
                  </Form.Group>
                  </div>
    
                  <div className="form-group text-left"style={{width: '30%'}}>
                  <Form.Group>
                  <Form.Label htmlFor="middlename" className='form-label'>Middle Name</Form.Label>
                  <div style={{display: 'flex'}}>
                  <Form.Control type="text" disabled={true} defaultValue={middlename} id="middlename" style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                  </div>
                  </Form.Group>
                  </div>

                  <div className="form-group text-left"style={{width: '30%'}}>
                  <Form.Group>
                  <Form.Label htmlFor="lastname" className='form-label'>Last Name</Form.Label>
                  <div style={{display: 'flex'}}>
                  <Form.Control type="text" disabled={true} defaultValue={lastname} id="lastname" style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                  </div>
                  </Form.Group>
                  </div>

                  <div className="form-group text-left"style={{width: '10%'}}>
                  <Form.Group>
                  <Form.Label htmlFor="extensionname" className='form-label'>Suffix</Form.Label>
                  <div style={{display: 'flex'}}>
                  <Form.Control type="text" disabled={true} defaultValue={extensionname} id="extensionname" style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                  </div>
                  </Form.Group>
                  </div>
    
                </div>

                <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', gap: '8px'}}>  

                  <div className="form-group text-left"style={{width: '50%'}}>
                    <Form.Group>
                    <Form.Label htmlFor="extensionname" className='form-label'>Birth Date</Form.Label>
                    <div style={{display: 'flex'}}>
                    <Form.Control type="text" disabled={true} defaultValue={birthdate} id="birthdate" style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                    </div>
                    </Form.Group>
                  </div>

                  <div className="form-group text-left"style={{width: '50%'}}>
                    <Form.Group>
                    <Form.Label htmlFor="birthplace" className='form-label'>Birth Place</Form.Label>
                    <div style={{display: 'flex'}}>
                    <Form.Control type="text" disabled={true} defaultValue={birthplace} id="birthplace" style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                    </div>
                    </Form.Group>
                  </div>
                </div>

                <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', gap: '8px'}}>  

                  <div className="form-group text-left"style={{width: '50%'}}>
                    <Form.Group>
                        <Form.Label htmlFor="birthplace" className='form-label'>Gender</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" disabled={true} defaultValue={gender} id="gender" style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                    </Form.Group>
                    </div>

                  <div className="form-group text-left"style={{width: '50%'}}>
                        <Form.Group>
                      <Form.Label htmlFor="nationality" className='form-label'>Nationality</Form.Label>
                      <div style={{display: 'flex'}}>
                      <Form.Control type="text" disabled={true} defaultValue={nationality} id="nationality" style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                      </div>
                      </Form.Group>
                  </div>
                
                </div>


                <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                  <div className="form-group text-left"style={{width: '50%', marginRight: '8px'}}>
                      <Form.Group>
                    <Form.Label htmlFor="email" className='form-label'>Email Address</Form.Label>
                    <div style={{display: 'flex'}}>
                    <Form.Control type="text" disabled={true} defaultValue={email} id="email" style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                    </div>
                    </Form.Group>
                  </div>

                  <div className="form-group text-left"style={{width: '50%'}}>
                    <Form.Group>
                    <Form.Label htmlFor="contact" className='form-label'>Mobile Contact Number</Form.Label>
                    <div style={{display: 'flex'}}>
                    <Form.Control type="text" disabled={true} defaultValue={contact} id="contact" onChange={e => setContact(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                    </div>
                    </Form.Group>
                  </div>
                </div>

              <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', gap: '8px'}}>       
                <div className="form-group text-left"style={{width: '100%'}}>
                  <Form.Group>
                  <Form.Label htmlFor="address1" className='form-label'>House No./Street/Purok</Form.Label>
                  <div style={{display: 'flex'}}>
                  <Form.Control type="text" disabled={true} defaultValue={address1} id="address1" onChange={e => setAddress1(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                  </div>
                  </Form.Group>
                </div>

                <div className="form-group text-left"style={{width: '100%'}}>
                  <Form.Group>
                  <Form.Label htmlFor="address2" className='form-label'>Baranggay</Form.Label>
                  <div style={{display: 'flex'}}>
                  <Form.Control type="text" disabled={true} defaultValue={address2} id="address2" style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                  </div>
                  </Form.Group>
                </div>

                <div className="form-group text-left"style={{width: '100%'}}>
                  <Form.Group>
                  <Form.Label htmlFor="address3" className='form-label'>City/Municipality/Province</Form.Label>
                  <div style={{display: 'flex'}}>
                  <Form.Control type="text" disabled={true} defaultValue={address3} id="address3" style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                  </div>
                  </Form.Group>
                </div>
              </div>
{/* SHS FORM */}
                { addressimage &&
                <div style={{marginRight: '24px', marginBottom: '12px', width: '80%'}}>
                  <img src={addressimage} alt="description" style={{border: '2px solid #556BD9'}} />
                </div>}
                
                <div style={{border: '1px solid gray', borderRadius: '8px', width: '100%', backgroundColor: 'rgb(255,239,213, 0.4)', padding: '24px'}}>
                <h1 className='inter-700-28px' style={{textAlign: 'center', marginBottom: '12px'}}>INFORMATION</h1>
                <h1 className='card-title'>Parents'/Guardian's Information</h1>
                <div style={{paddingBottom: '20px', borderBottom: '1px solid gray'}}>

                  <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>

                      <div className="form-group text-left"style={{width: '50%', marginRight: '8px'}}>
                        <Form.Group>
                        <Form.Label htmlFor="fathername" className='form-label'>Full Name of Father</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" disabled={true} defaultValue={fathername} id="fathername" style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                        </Form.Group>
                      </div>

                      <div className="form-group text-left"style={{width: '50%'}}>
                        <Form.Group>
                        <Form.Label htmlFor="fathernumber" className='form-label'>Contact Number of Father</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" disabled={true} defaultValue={fathernumber}id="fathernumber" onChange={e => setFathercontact(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                        </Form.Group>
                      </div>

                    </div>
                    
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', gap: '8px'}}>
                      
                      <div className="form-group text-left"style={{width: '50%'}}>
                        <Form.Group>
                        <Form.Label htmlFor="mothername" className='form-label'>Full Name of Mother</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" disabled={true} defaultValue={mothername} id="mothername" style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                        </Form.Group>
                      </div>
                      
                      <div className="form-group text-left"style={{width: '50%'}}>
                        <Form.Group>
                        <Form.Label htmlFor="mothernumber" className='form-label'>Contact Number of Mother</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" disabled={true} defaultValue={mothernumber} id="mothernumber" style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                        </Form.Group>
                      </div>
                      
                    </div>
                    
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', gap: '8px'}}>
                      
                      <div className="form-group text-left"style={{width: '50%'}}>
                        <Form.Group>
                        <Form.Label htmlFor="guardianname" className='form-label'>Full Name of Guardian</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" disabled={true} defaultValue={guardianname} id="guardianname" style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                        </Form.Group>
                      </div>
                      
                      <div className="form-group text-left"style={{width: '50%'}}>
                        <Form.Group>
                        <Form.Label htmlFor="guardiannumber" className='form-label'>Contact Number of Guardian</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" disabled={true} defaultValue={guardiannumber} id="guardiannumber" style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                        </Form.Group>
                      </div>
                      
                    </div>

                    <div className="form-group text-left"style={{width: '50%'}}>
                        <Form.Group>
                        <Form.Label htmlFor="guardianrelationship" className='form-label'>Relationship with Guardian</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" disabled={true} defaultValue={guardianrelationship} id="guardianrelationship" style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
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
                        <Form.Control type="text" disabled={true} defaultValue={elementaryschool} id="elementaryschool" style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                        </Form.Group>
                      </div>

                      <div className="form-group text-left"style={{width: '50%'}}>
                        <Form.Group>
                        <Form.Label className='form-label'>Completion Date</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" disabled={true} defaultValue={elementarycompletiondate} id="elementarycompletiondate" style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                        </Form.Group>
                      </div>

                    </div>

                    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', gap: '8px'}}>

                      <div className="form-group text-left"style={{width: '90%'}}>
                        <Form.Group>
                        <Form.Label htmlFor="elementaryaddress" className='form-label'>Elementary School Address</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" disabled={true} defaultValue={elementaryaddress} id="elementaryaddress" style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                        </Form.Group>
                      </div>

                      <div className="form-group text-left"style={{width: '10%'}}>
                        <Form.Group>
                        <Form.Label htmlFor="elementaryregion" className='form-label'>Region</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" disabled={true} defaultValue={elementaryregion} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
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
                              defaultValue={pept}
                              disabled={true}
                              style={{marginLeft: '24px'}}
                            />
                            <h1 className='inter-400-16px-dark' style={{paddingTop: '2px'}}>Elementary Level - Philippine Education Placement Test Passer?</h1>
                          </div>
                        </div>
                        
                        <div className="form-group text-left"style={{width: '50%'}}>
                            <Form.Group>
                            <Form.Label className='form-label'>Completion Date</Form.Label>
                            <div style={{display: 'flex'}}>
                            <Form.Control type="text" disabled={true} defaultValue={peptcompletion} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                            </div>
                            </Form.Group>
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
                              defaultValue={ae}
                              disabled={true}
                              style={{marginLeft: '24px'}}
                            />
                            <h1 className='inter-400-16px-dark' style={{paddingTop: '2px'}}>Elementary Level - Accreditation and Equivalency Test Passer?</h1>
                          </div>
                        </div>
                        
                        <div className="form-group text-left"style={{width: '50%'}}>
                            <Form.Group>
                            <Form.Label className='form-label'>Completion Date</Form.Label>
                            <div style={{display: 'flex'}}>
                            <Form.Control type="text" disabled={true} defaultValue={aecompletion} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                            </div>
                            </Form.Group>
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
                        <Form.Control type="text" disabled={true} defaultValue={clc} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                        </Form.Group>
                      </div>
                    </div>

                    <div style={{width: '100%'}}>
                      <div className="form-group text-left"style={{width: '100%'}}>
                        <Form.Group>
                        <Form.Label className='form-label'>Community Learning Center - Address</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" disabled={true} defaultValue={clcaddress} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
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
                        <Form.Control type="text" disabled={true} defaultValue={jhs} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                        </Form.Group>
                      </div>

                      <div className="form-group text-left"style={{width: '50%'}}>
                            <Form.Group>
                            <Form.Label className='form-label'>Completion Date</Form.Label>
                            <div style={{display: 'flex'}}>
                            <Form.Control type="text" disabled={true} defaultValue={jhscompletion} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                            </div>
                            </Form.Group>
                        </div>

                    </div>

                    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', gap: '8px'}}>

                      <div className="form-group text-left"style={{width: '90%'}}>
                        <Form.Group>
                        <Form.Label className='form-label'>Junior High School Address</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" disabled={true} defaultValue={jhsaddress} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                        </Form.Group>
                      </div>

                      <div className="form-group text-left"style={{width: '10%'}}>
                        <Form.Group>
                        <Form.Label className='form-label'>Region</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" disabled={true} defaultValue={jhsregion} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
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
                              defaultValue={peptjhs}
                              disabled={true}
                              style={{marginLeft: '24px'}}
                            />
                            <h1 className='inter-400-16px-dark' style={{paddingTop: '2px'}}>JHS Level - Philippine Education Placement Test Passer?</h1>
                          </div>
                        </div>
                        
                        <div className="form-group text-left"style={{width: '50%'}}>
                            <Form.Group>
                            <Form.Label className='form-label'>Completion Date</Form.Label>
                            <div style={{display: 'flex'}}>
                            <Form.Control type="text" disabled={true} defaultValue={peptcompletionjhs} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                            </div>
                            </Form.Group>
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
                              defaultValue={aejhs}
                              disabled={true}
                              style={{marginLeft: '24px'}}
                            />
                            <h1 className='inter-400-16px-dark' style={{paddingTop: '2px'}}>JHS Level - Accreditation and Equivalency Test Passer?</h1>
                          </div>
                        </div>
                        
                        <div className="form-group text-left"style={{width: '50%'}}>
                            <Form.Group>
                            <Form.Label className='form-label'>Completion Date</Form.Label>
                            <div style={{display: 'flex'}}>
                            <Form.Control type="text" disabled={true} defaultValue={aecompletionjhs} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                            </div>
                            </Form.Group>
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
                        <Form.Control type="text" disabled={true} defaultValue={clcjhs} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                        </Form.Group>
                      </div>
                    </div>

                    <div style={{width: '100%'}}>
                      <div className="form-group text-left"style={{width: '100%'}}>
                        <Form.Group>
                        <Form.Label className='form-label'>JHS - Community Learning Center - Address</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" disabled={true} defaultValue={clcaddressjhs} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
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
                        <Form.Control type="text" disabled={true} defaultValue={jhsaverage} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
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
                        <Form.Control type="text" disabled={true} defaultValue={track} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                        </Form.Group>
                    </div>

                    <div className="form-group text-left"style={{width: '50%'}}>
                        <Form.Group>
                        <Form.Label className='form-label'>Strand</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" disabled={true} defaultValue={strand} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                        </Form.Group>
                      </div>
                    
                    </div>


                    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', gap: '8px'}}>

                    <div className="form-group text-left"style={{width: '100%'}}>
                        <Form.Group>
                        <Form.Label className='form-label'>Specialization</Form.Label>
                        <div style={{display: 'flex'}}>
                        <Form.Control type="text" disabled={true} defaultValue={specialization} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                        </Form.Group>
                      </div>

                    </div>

                    <div style={{width: '100%'}}>
                      <Form.Group>
                        <Form.Label htmlFor="description" className='form-label'>Description/Notes</Form.Label>
                        <Form.Control disabled={true} defaultValue={description} as="textarea" rows={3} type="text" id="description" style={{width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                      </Form.Group>
                    </div>

                    </div>

                  </div>
                


              </InputGroup>
            </div>
          </div>
          </>
    )
    
    }

Studentdatasheet.propTypes = {
  setsidebarState: PropTypes.func,
  setsubsidebarState: PropTypes.func,
  setpageHeader: PropTypes.func,
  setLoading: PropTypes.func,
  getCourses: PropTypes.func,
  loadingState: PropTypes.string,
  coursesList: PropTypes.array,
  error: PropTypes.string,
  success: PropTypes.string,
  setStudentPromotiontoSHS: PropTypes.func,
  studentData: PropTypes.object,
  sidebarState: PropTypes.string,
}

const mapStateToProps = (state) => ({
  loadingState: state.main.loadingState,
  coursesList: state.main.coursesList,
  error: state.main.error,
  success: state.main.success,
  studentData: state.main.studentData,
  sidebarState: state.main.sidebarState,
})


export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setpageHeader, setLoading, getCourses, setStudentPromotiontoSHS })(Studentdatasheet))