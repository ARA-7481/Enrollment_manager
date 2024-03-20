import React, { useState, Fragment, useEffect, useRef } from 'react'
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState, setpageHeader, getStudents, setLoading, getStudentdata, setStudentPromotion } from '../../redux/actions/main';

import { Card, Col, Table, Form, Dropdown, Button, Placeholder } from 'react-bootstrap';
import { Magnifier, Draft, ForEvaluation, EvaluationInProgress, EvaluationComplete, PendingPayment, PaymentReceived, Enrolled, VerificationFailed, New} from '../../assets/svg/clnsmpl-icon';

function UsersStudents(props) {

  const navigate = useNavigate();
  const [queryStatus, setQueryStatus] = useState('');
  const [queryYearlevel, setQueryYearlevel] = useState('');
  const [queryDepartment, setQueryDepartment] = useState('');
  const [queryCourse, setQueryCourse] = useState('');

  const [sortStatus, setsortStatus] = useState ('Newest-Oldest')
  const [statusStatus, setstatusStatus] = useState('All Status');
  const [value, setValue] = useState('');

  const handleEnrollment = (gradelevel,studentid) => {
    props.setStudentPromotion(gradelevel,'Enrolled',studentid)
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleViewgrade = (studentid) => {
    props.getStudentdata(studentid)
    navigate('/admins/studentgrades');
}

  const handleSearch = (query) => {
    props.getStudents(queryStatus,queryYearlevel,queryDepartment,queryCourse, query)
    props.setLoading('isLoading')
  };

  const handleSort = (sort) => {
    setsortStatus(sort)
  }

  const handleStatus = (statuscode) => {
    setstatusStatus(statuscode)
    if (statuscode === 'All Status'){
      setQueryStatus('')
      props.getStudents('',queryYearlevel,queryDepartment,queryCourse, '')
    }
    else{
      setQueryStatus(statuscode)
      props.getStudents(statuscode,queryYearlevel,queryDepartment,queryCourse, '')
    }
  };


  useEffect(() => {
    if (props.studentsList.length == 0){
      props.setLoading('isLoading');
    }
    props.setsidebarState('users');
    props.setsubsidebarState('students');
    props.setpageHeader('Manage Students', '', 'Manage students here. Enroll, Update, Evaluate etc.');
    props.getStudents();

   
    }, []);

  return (
      <>
      <div style={{backgroundColor:'#e9ecef', borderTopLeftRadius:'8px', borderTopRightRadius:'8px'}}>           
        <div style={{backgroundColor:'#ffffff', height: !props.isLess800? '72px': '120px', borderRadius:'8px', display: !props.isLess800? 'flex': '', alignItems: 'center', padding: '24px'}}>
          
          <div style={{display: 'flex', width: !props.isLess800? '40%': '100%'}}>
            <div onClick={() => handleSearch(value)} style={{cursor: 'pointer', marginTop: '7px'}}>
              <Magnifier/>
            </div>
            <Form style={{width: '62.5%'}}>
              <Form.Group controlId="searchbar">
                <Form.Control type='search' placeholder="Search student name or student id..." value={value} onChange={handleChange} style={{border: 'none', width:'100%', minWidth: '145px'}}/>
              </Form.Group>
            </Form>
        
            <h1 className='inter-500-16px' style={{paddingTop: '10px'}}>
              Sort: 
            </h1>
            <Dropdown style={{width: '37.5%', minWidth: '1px'}}>
                <Dropdown.Toggle id="dropdown-basic" 
                                style={{border: 'none', backgroundColor: 'rgba(51, 51, 51, 0.00)', color: 'black', width: '100%', 
                                        display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'space-between'}}>
                  <div style={{overflow: 'hidden'}}>{sortStatus}</div>
                </Dropdown.Toggle>

                <Dropdown.Menu style={{minWidth: '1px', width: '100%'}}>
                  {sortStatus !== 'Newest-Oldest'  && <Dropdown.Item onClick={() => handleSort('Newest-Oldest')}><div className="zooming-text">Newest-Oldest</div></Dropdown.Item>}
                  {sortStatus !== 'Oldest-Newest'  && <Dropdown.Item onClick={() => handleSort('Oldest-Newest')}><div className="zooming-text">Oldest-Newest</div></Dropdown.Item>}
                  {sortStatus !== 'A-Z'  && <Dropdown.Item onClick={() => handleSort('A-Z')}><div className="zooming-text">A-Z</div></Dropdown.Item>}
                  {sortStatus !== 'Z-A'  && <Dropdown.Item onClick={() => handleSort('Z-A')}><div className="zooming-text">Z-A</div></Dropdown.Item>}
                </Dropdown.Menu>
            </Dropdown>
          </div>
        
          <div style={{display: 'flex', width: !props.isLess800? '60%': '100%'}}>
            <h1 className='inter-500-16px' style={{paddingTop: '10px', marginLeft: '20px'}}>
              Filter: 
            </h1>
            
          </div>
        </div>
      

        <div style={{height: '40px', backgroundColor:'rgba(51, 51, 51, 0.00)', margin: '0px'}}>
        </div>

        <div style={{backgroundColor:'#ffffff', borderRadius:'8px', minWidth: '1px', overflowX: 'auto'}}>
          <div style={{height: '81px', display: 'flex'}}>
            <h1 className='table-title'>List of Students</h1>
          </div>
          {props.loadingState == 'isLoading' ?  
          <div style={{marginLeft: '20px', marginRight: '40px', marginTop: '7px'}}>
            <div style={{display:'flex', marginBottom: '27px'}}>
            <Placeholder animation="glow" style={{width: '15%', color: 'rgba(51, 51, 51, 0.20)'}}>
              <Placeholder xs={2} />
            </Placeholder>
            <Placeholder animation="glow" style={{width: '30%', color: 'rgba(51, 51, 51, 0.20)'}}>
              <Placeholder xs={8} />
            </Placeholder>
            <Placeholder animation="glow" style={{width: '13%', color: 'rgba(51, 51, 51, 0.20)'}}>
              <Placeholder xs={7} />
            </Placeholder>
            <Placeholder animation="glow" style={{width: '20%', color: 'rgba(51, 51, 51, 0.20)'}}>
              <Placeholder xs={8} />
            </Placeholder>
            <Placeholder animation="glow" style={{width: '10%', color: 'rgba(51, 51, 51, 0.20)'}}>
              <Placeholder xs={4} />
            </Placeholder>
            <Placeholder animation="glow" style={{width: '25%', color: 'rgba(51, 51, 51, 0.20)'}}>
              <Placeholder xs={5} />
            </Placeholder>
            <Placeholder animation="glow" style={{color: 'rgba(51, 51, 51, 0.20)'}}>
              <Placeholder xs={12} />
            </Placeholder>
            </div> 
          <div style={{marginBottom: '35px'}}>
          <Placeholder animation="glow" style={{color: 'rgba(51, 51, 51, 0.20)'}}>
            <Placeholder xs={12} />
          </Placeholder>
          </div>
          <div style={{marginBottom: '35px'}}>
          <Placeholder animation="glow" style={{color: 'rgba(51, 51, 51, 0.20)'}}>
            <Placeholder xs={12} />
          </Placeholder>
          </div>
          <div style={{marginBottom: '35px'}}>
          <Placeholder animation="glow" style={{color: 'rgba(51, 51, 51, 0.20)'}}>
            <Placeholder xs={12} />
          </Placeholder>
          </div>
          <div style={{marginBottom: '35px'}}>
          <Placeholder animation="glow" style={{color: 'rgba(51, 51, 51, 0.20)'}}>
            <Placeholder xs={12} />
          </Placeholder>
          </div>
          <div style={{marginBottom: '35px'}}>
          <Placeholder animation="glow" style={{color: 'rgba(51, 51, 51, 0.20)'}}>
            <Placeholder xs={12} />
          </Placeholder>
          </div>
          <div style={{marginBottom: '35px'}}>
          <Placeholder animation="glow" style={{color: 'rgba(51, 51, 51, 0.20)'}}>
            <Placeholder xs={12} />
          </Placeholder>
          </div>
          </div>
        :
        <div>
          <Table hover style={{border: 'none'}}>
          <thead>
            <tr>
            <th className='table-head' style={{width: '15%', paddingLeft:'20px'}}>IDs</th>
              <th className='table-head' style={{width: '23%'}}>FULL NAME</th>
              <th className='table-head' style={{width: '13%'}}>GRADE LEVEL</th>
              <th className='table-head' style={{width: '15%'}}>SECTION</th>
              <th className='table-head' style={{width: '15%'}}>DATE ENROLLED</th>
              <th className='table-head' style={{width: '13%'}}>STATUS</th>
              <th className='table-head'>ACTION</th>
            </tr>
          </thead>

          <tbody style={{cursor: 'pointer'}}>
            {[...props.studentsList]
                .sort((a, b) => {
                  switch (sortStatus) {
                    case 'Newest-Oldest':
                      return new Date(b.userprofile.date_joined) - new Date(a.userprofile.date_joined);
                    case 'Oldest-Newest':
                      return new Date(a.userprofile.date_joined) - new Date(b.userprofile.date_joined);
                    case 'A-Z':
                      return a.userprofile.last_name.localeCompare(b.userprofile.last_name);
                    case 'Z-A':
                      return b.userprofile.last_name.localeCompare(a.userprofile.last_name);
                    default:
                      return 0;
                  }
                })
                ?.map((student) =>(
                <tr key={student.id} style={{border: 'none'}}>
                  <td className='table-body' style={{paddingLeft:'20px'}}>
                    {student.id}</td>
                  <td className='table-body'>
                    {student.userprofile.first_name} {student.userprofile.last_name} {new Date() - new Date(student.userprofile.date_joined) <= 3 * 24 * 60 * 60 * 1000 && <New/>}</td>
                  <td className='table-body'>
                    {student.gradelevel}</td>
                  <td className='table-body'>
                    {student.section}</td>
                  <td className='table-body'>
                    {student.userprofile.date_joined}</td>
                  <td className='table-body'>
                    
                    {(() => {
                      switch(student.status) {
                        case 'Failed': return <VerificationFailed/>;
                        case 'For Evaluation': return <ForEvaluation/>;
                        case 'Evaluation In Progress': return <EvaluationInProgress/>;
                        case 'Evaluation Complete': return <EvaluationComplete/>;
                        case 'Pending Payment': return <PendingPayment/>;
                        case 'Payment Received': return <PaymentReceived/>;
                        case 'Enrolled': return <Enrolled/>;
                        default: return <Draft/>;
                      }
                      })()}
                      
                    </td>
                  <td className='table-body'>
                  
                  <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic" style={{border: 'none', backgroundColor: '#e9ecef', color: 'rgba(51, 51, 51, 0.00)', width: '38px', height: '38px', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'center', marginLeft: '10px'}}>
                        <h2 style={{color: '#8A92A6', marginLeft: '12px', marginBottom: '15px'}}>...</h2>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {student.status === 'Verification Failed'  && 
                          <>
                            <Dropdown.Item><h1 className='dropdown-item'>View Student</h1></Dropdown.Item>
                          </>}
                        {student.status === 'For Evaluation'  && 
                          <>
                            <Dropdown.Item onClick={() => handleViewgrade(student.id)}><h1 className='dropdown-item'>View Student</h1></Dropdown.Item>
                            <Dropdown.Item onClick={() => handleEnrollment(student.gradelevel, student.id)}><h1 className='dropdown-item'>Enroll</h1></Dropdown.Item>
                            <Dropdown.Item><h1 className='dropdown-item'>Reject This Student</h1></Dropdown.Item>
                          </>}
                        {student.status === 'Evaluation In Progress'  && 
                          <>
                            <Dropdown.Item><h1 className='dropdown-item'>View Student</h1></Dropdown.Item>
                            <Dropdown.Item><h1 className='dropdown-item'>Evaluation Complete</h1></Dropdown.Item>
                            <Dropdown.Item><h1 className='dropdown-item'>Contact Student</h1></Dropdown.Item>
                          </>}
                        {student.status === 'Evaluation Complete'  && 
                          <>
                          <Dropdown.Item><h1 className='dropdown-item'>View Student</h1></Dropdown.Item>
                          <Dropdown.Item><h1 className='dropdown-item'>Notify Student Via Portal & Email</h1></Dropdown.Item>
                          </>}
                        {student.status === 'Pending Payment'  && 
                          <>
                          <Dropdown.Item><h1 className='dropdown-item'>View Student</h1></Dropdown.Item>
                          <Dropdown.Item><h1 className='dropdown-item'>Input Payment Information</h1></Dropdown.Item>
                          </>}
                        {student.status === 'Payment Received'  && 
                          <>
                          <Dropdown.Item><h1 className='dropdown-item'>View Student</h1></Dropdown.Item>
                          <Dropdown.Item><h1 className='dropdown-item'>Marked As Enrolled</h1></Dropdown.Item>
                          <Dropdown.Item><h1 className='dropdown-item'>Student Verification Failed</h1></Dropdown.Item>
                          </>}
                        {student.status === 'Enrolled'  && 
                          <>
                          <Dropdown.Item><h1 className='dropdown-item'>View Student</h1></Dropdown.Item>
                          </>}
                        {student.status === 'Draft'  && 
                          <>
                          <Dropdown.Item><h1 className='dropdown-item'>Update Student Info</h1></Dropdown.Item>
                          <Dropdown.Item><h1 className='dropdown-item'>Delete</h1></Dropdown.Item>
                          </>}
                      </Dropdown.Menu>
                  </Dropdown>

                  </td>
                </tr>
            ))}
          </tbody>
          </Table>
          </div>
        }
        </div>
      </div> 
      </>
    );
}

UsersStudents.propTypes = {
  sidebarState: PropTypes.string,
  subsidebarState: PropTypes.string,
  pageHeader: PropTypes.object,
  studentsList: PropTypes.array,
  setsidebarState: PropTypes.func,
  setsubsidebarState: PropTypes.func,
  setpageHeader: PropTypes.func,
  getStudents: PropTypes.func,
  setLoading: PropTypes.func,
  loadingState: PropTypes.string,
  isLess800: PropTypes.bool,
  getStudentdata: PropTypes.func,
  setStudentPromotion: PropTypes.func,
}

const mapStateToProps = (state) => ({
  sidebarState: state.main.sidebarState,
  subsidebarState: state.main.subsidebarState,
  pageHeader: state.main.pageHeader,
  studentsList: state.main.studentsList,
  loadingState: state.main.loadingState,
  isLess800: state.main.isLess800,
  });

export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setpageHeader, getStudents, setLoading, getStudentdata, setStudentPromotion})(UsersStudents))