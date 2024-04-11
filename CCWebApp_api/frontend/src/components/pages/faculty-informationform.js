import React, { useState, Fragment, useEffect } from 'react'
import PropTypes, { func } from 'prop-types';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';

import { setsidebarState, setsubsidebarState, setpageHeader, setLoading, getCourses, setStudentPromotiontoSHS } from '../../redux/actions/main';
import { Form, InputGroup, Button, Spinner, Card } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";

function Facultydatasheet(props) {
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
    const [avatar, setAvatar] = useState()
    const [addressimage, setAddressimage] = useState('')

    useEffect(() => {
        props.setpageHeader('Faculty Information Sheet', '', '')
      },[])

    useEffect(() => {
        try{
        setFirstname(props.teacherData.userprofile.first_name)
        if(props.teacherData.userprofile.middle_name){
            setMiddlename(props.teacherData.userprofile.middle_name)
          }else{setMiddlename('')}
        setLastname(props.teacherData.userprofile.last_name)
        if(props.teacherData.userprofile.extension_name){
        setExtensionname(props.teacherData.userprofile.extension_name)
          }else{setExtensionname('')}
        setBirthdate(props.teacherData.userprofile.birthdate)
        setBirthplace(props.teacherData.userprofile.birthplace)
        setGender(props.teacherData.userprofile.gender)
        setNationality(props.teacherData.userprofile.nationality)
        setEmail(props.teacherData.userprofile.email)
        setContact(props.teacherData.userprofile.mobile_number)
        setAddress1(props.teacherData.userprofile.address_value1)
        setAddress2(props.teacherData.userprofile.address_value2)
        setAddress3(props.teacherData.userprofile.address_value3)
        setAvatar(props.teacherData.userprofile.avatar)
        if(props.teacherData.userprofile.addressketch){
          setAddressimage(props.teacherData.userprofile.addressketch)
        }else{
          setAddressimage('')
        }
        }catch(error){}
      },[props.teacherData])

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

                { addressimage &&
                <div style={{marginRight: '24px', marginBottom: '12px', width: '80%'}}>
                  <img src={addressimage} alt="description" style={{border: '2px solid #556BD9'}} />
                </div>}
              </InputGroup>
            </div>
          </div>
          </>
    )
    
    }

Facultydatasheet.propTypes = {
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
  teacherData: PropTypes.object,
  sidebarState: PropTypes.string,
}

const mapStateToProps = (state) => ({
  loadingState: state.main.loadingState,
  coursesList: state.main.coursesList,
  error: state.main.error,
  success: state.main.success,
  teacherData: state.main.teacherData,
  sidebarState: state.main.sidebarState,
})


export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setpageHeader, setLoading, getCourses, setStudentPromotiontoSHS })(Facultydatasheet))