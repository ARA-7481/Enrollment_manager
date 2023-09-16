import React, { useState, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState, setpageHeader, getStudents, getDepartments } from '../../redux/actions/main';

import { Card, Col, Table, Form, Dropdown, Button } from 'react-bootstrap';

import { Magnifier, Draft, ForEvaluation, EvaluationInProgress, EvaluationComplete, PendingPayment, PaymentReceived, Enrolled, VerificationFailed, New} from '../../assets/svg/clnsmpl-icon';

function UsersStudents(props) {

  const [queryStatus, setQueryStatus] = useState('');
  const [queryYearlevel, setQueryYearlevel] = useState('');
  const [queryDepartment, setQueryDepartment] = useState('');
  const [queryCourse, setQueryCourse] = useState('');

  const [sortStatus, setsortStatus] = useState ('Newest-Oldest')
  const [statusStatus, setstatusStatus] = useState('All Status');
  const [yearlevelStatus, setyearlevelStatus] = useState('All Year Levels');
  const [departmentStatus, setdepartmentStatus] = useState('All Departments');
  const [courseStatus, setcourseStatus] = useState('All Courses');
  
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSearch = (query) => {
    props.getStudents(queryStatus,queryYearlevel,queryDepartment,queryCourse, query)
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

  const handleYearlevel = (yearlevel) => {
    setyearlevelStatus(yearlevel)
    if (yearlevel === 'All Year Levels'){
      setQueryYearlevel('')
      props.getStudents(queryStatus,'',queryDepartment,queryCourse,'')
    }
    else{
      setQueryYearlevel(yearlevel)
      props.getStudents(queryStatus,yearlevel,queryDepartment,queryCourse,'')
    }
  };

  const handleDepartment = (departmentcode) => {
    setdepartmentStatus(departmentcode);
    setcourseStatus('All Courses');
    setQueryCourse('');
    if (departmentcode === 'All Departments'){
      setQueryDepartment('')
      props.getStudents(queryStatus,queryYearlevel,'','','')
    }
    else{
      setQueryDepartment(departmentcode)
      props.getStudents(queryStatus,queryYearlevel,departmentcode,'','')
    }
  };

  const handleCourse = (course) => {
    setcourseStatus(course);
    if (course === 'All Courses'){
      setQueryCourse('')
      props.getStudents(queryStatus,queryYearlevel,queryDepartment,'','')
    }
    else{
      setQueryCourse(course)
      props.getStudents(queryStatus,queryYearlevel,queryDepartment,course,'')
    }
  };

  useEffect(() => {
    props.setsidebarState('users');
    props.setsubsidebarState('students');
    props.setpageHeader('Manage Students', '{semester} {SY: 20xx-20xx}', 'Manage students here. Enroll, Update, Evaluate etc.');
    props.getStudents('','','','','');
    props.getDepartments();
  }, []);

  return (
      <>
      <div style={{backgroundColor:'#e9ecef', borderTopLeftRadius:'8px', borderTopRightRadius:'8px'}}>                           
      <div style={{backgroundColor:'#ffffff', height: '72px', borderRadius:'8px', display: 'flex', alignItems: 'center', padding: '24px'}}>
        <div onClick={() => handleSearch(value)} style={{cursor: 'pointer'}}>
        <Magnifier/>
        </div>
        <Form style={{width: '30%'}}>
          <Form.Group controlId="searchbar">
            <Form.Control type='search' placeholder="Search student name or student id..." value={value} onChange={handleChange} style={{border: 'none', width:'100%'}}/>
          </Form.Group>
        </Form>
      
        <h1 style={{color:'#8A92A6', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '16px', paddingTop: '10px'}}>
          Sort: 
        </h1>
        <Dropdown style={{width: '16%'}}>
            <Dropdown.Toggle id="dropdown-basic" style={{border: 'none', backgroundColor: 'rgba(51, 51, 51, 0.00)', color: 'black', width: '100%', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'space-between'}}>
              <div>{sortStatus}</div>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ width: '100%'}}>
              {sortStatus !== 'Newest-Oldest'  && <Dropdown.Item onClick={() => handleSort('Newest-Oldest')}>Newest-Oldest</Dropdown.Item>}
              {sortStatus !== 'Oldest-Newest'  && <Dropdown.Item onClick={() => handleSort('Oldest-Newest')}>Oldest-Newest</Dropdown.Item>}
              {sortStatus !== 'A-Z'  && <Dropdown.Item onClick={() => handleSort('A-Z')}>A-Z</Dropdown.Item>}
              {sortStatus !== 'Z-A'  && <Dropdown.Item onClick={() => handleSort('Z-A')}>Z-A</Dropdown.Item>}
            </Dropdown.Menu>
        </Dropdown>

        <h1 style={{color:'#8A92A6', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '16px', paddingTop: '10px', marginLeft: '20px'}}>
          Filter: 
        </h1>
        <Dropdown style={{width: '16%'}}>
            <Dropdown.Toggle id="dropdown-basic" style={{border: 'none', backgroundColor: 'rgba(51, 51, 51, 0.00)', color: 'black', width: '100%', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'space-between'}}>
              <div>{statusStatus}</div>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ width: '100%'}}>
              {statusStatus !== 'All Status'  && <Dropdown.Item onClick={() => handleStatus('All Status')}>All Status</Dropdown.Item>}
              {statusStatus !== 'Verification Failed'  && <Dropdown.Item onClick={() => handleStatus('Verification Failed')}>Verification Failed</Dropdown.Item>}
              {statusStatus !== 'For Evaluation'  && <Dropdown.Item onClick={() => handleStatus('For Evaluation')}>For Evaluation</Dropdown.Item>}
              {statusStatus !== 'Evaluation In Progress'  && <Dropdown.Item onClick={() => handleStatus('Evaluation In Progress')}>Evaluation In Progress</Dropdown.Item>}
              {statusStatus !== 'Evaluation Complete'  && <Dropdown.Item onClick={() => handleStatus('Evaluation Complete')}>Evaluation Complete</Dropdown.Item>}
              {statusStatus !== 'Pending Payment'  && <Dropdown.Item onClick={() => handleStatus('Pending Payment')}>Pending Payment</Dropdown.Item>}
              {statusStatus !== 'Payment Received'  && <Dropdown.Item onClick={() => handleStatus('Payment Received')}>Payment Received</Dropdown.Item>}
              {statusStatus !== 'Enrolled'  && <Dropdown.Item onClick={() => handleStatus('Enrolled')}>Enrolled</Dropdown.Item>}
              {statusStatus !== 'Draft'  && <Dropdown.Item onClick={() => handleStatus('Draft')}>Draft</Dropdown.Item>}
            </Dropdown.Menu>
        </Dropdown>

        <Dropdown style={{width: '16%'}}>
            <Dropdown.Toggle id="dropdown-basic" style={{border: 'none', backgroundColor: 'rgba(51, 51, 51, 0.00)', color: 'black', width: '100%', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'space-between'}}>
              <div>{yearlevelStatus}</div>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ width: '100%'}}>
              {yearlevelStatus !== 'All Year Levels'  && <Dropdown.Item onClick={() => handleYearlevel('All Year Levels')}>All Year Levels</Dropdown.Item>}
              {yearlevelStatus !== '1st'  && <Dropdown.Item onClick={() => handleYearlevel('1st')}>1st</Dropdown.Item>}
              {yearlevelStatus !== '2nd'  && <Dropdown.Item onClick={() => handleYearlevel('2nd')}>2nd</Dropdown.Item>}
              {yearlevelStatus !== '3rd'  && <Dropdown.Item onClick={() => handleYearlevel('3rd')}>3rd</Dropdown.Item>}
              {yearlevelStatus !== '4th'  && <Dropdown.Item onClick={() => handleYearlevel('4th')}>4th</Dropdown.Item>}
              {yearlevelStatus !== '5th'  && <Dropdown.Item onClick={() => handleYearlevel('5th')}>5th</Dropdown.Item>}
              {yearlevelStatus !== 'Irregular'  && <Dropdown.Item onClick={() => handleYearlevel('Irregular')}>Irregular</Dropdown.Item>}
            </Dropdown.Menu>
        </Dropdown>

        <Dropdown style={{width: '16%'}}>
            <Dropdown.Toggle id="dropdown-basic" style={{border: 'none', backgroundColor: 'rgba(51, 51, 51, 0.00)', color: 'black', width: '100%', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'space-between'}}>
              <div>{departmentStatus}</div>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ width: '100%'}}>
              {departmentStatus !== 'All Departments'  && <Dropdown.Item onClick={() => handleDepartment('All Departments')}>All Departments</Dropdown.Item>}
              {props.departmentsList.filter(dept => dept.code !== departmentStatus).map((department) => (
                <Dropdown.Item key={department.code} onClick={() => handleDepartment(department.code)}>{department.code}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
        </Dropdown>

        <Dropdown style={{width: '16%'}}>
            <Dropdown.Toggle id="dropdown-basic" style={{border: 'none', backgroundColor: 'rgba(51, 51, 51, 0.00)', color: 'black', width: '100%', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'space-between'}}>
              <div>{courseStatus}</div>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ width: '100%'}}>
                {courseStatus !== 'All Courses'  && <Dropdown.Item onClick={() => handleCourse('All Courses')}>All Courses</Dropdown.Item>}
                {departmentStatus === 'All Departments' ? 
                  props.departmentsList.flatMap(dept => dept.related_course).filter(course => course !== courseStatus).map((course, index) => (
                    <Dropdown.Item key={index} onClick={() => handleCourse(course)}>{course}</Dropdown.Item>
                  ))
                :
                  props.departmentsList.filter(dept => dept.code === departmentStatus)[0]?.related_course.filter(course => course !== courseStatus).map((course) => (
                    <Dropdown.Item key={course} onClick={() => handleCourse(course)}>{course}</Dropdown.Item>
                  ))
                }
            </Dropdown.Menu>
          </Dropdown>

      </div>
      

      <div style={{height: '40px', backgroundColor:'rgba(51, 51, 51, 0.00)', margin: '0px'}}>
      </div>

      <div style={{backgroundColor:'#ffffff', borderRadius:'8px'}}>
        <div style={{height: '81px', display: 'flex'}}>
          <h1 style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '30px', padding: '24px'}}>List of Students</h1>
        </div>
        <Table hover style={{border: 'none'}}>
        <thead >
          <tr>
            <th style={{color:'#8A92A6', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '16px', backgroundColor: '#F5F6FA', border: 'none', width: '15%', paddingLeft:'20px'}}>IDs</th>
            <th style={{color:'#8A92A6', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '16px', backgroundColor: '#F5F6FA', border: 'none', width: '23%'}}>FULL NAME</th>
            <th style={{color:'#8A92A6', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '16px', backgroundColor: '#F5F6FA', border: 'none', width: '13%'}}>COURSE</th>
            <th style={{color:'#8A92A6', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '16px', backgroundColor: '#F5F6FA', border: 'none', width: '13%'}}>DEPARTMENT</th>
            <th style={{color:'#8A92A6', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '16px', backgroundColor: '#F5F6FA', border: 'none', width: '10%'}}>YEAR</th>
            <th style={{color:'#8A92A6', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '16px', backgroundColor: '#F5F6FA', border: 'none', width: '20%'}}>STATUS</th>
            <th style={{color:'#8A92A6', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '16px', backgroundColor: '#F5F6FA', border: 'none'}}>ACTION</th>
          </tr>
        </thead>
        <tbody style={{cursor: 'pointer', }}>
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
                <td style={{color:'#232D42', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '16px', border: 'none', height:'62px', verticalAlign: 'middle', paddingLeft:'20px'}}>
                  {student.id}</td>
                <td style={{color:'#232D42', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '16px', border: 'none', height:'62px', verticalAlign: 'middle'}}>
                  {student.userprofile.first_name} {student.userprofile.last_name} {new Date() - new Date(student.userprofile.date_joined) <= 3 * 24 * 60 * 60 * 1000 && <New/>}</td>
                <td style={{color:'#232D42', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '16px', border: 'none', height:'62px', verticalAlign: 'middle'}}>
                  {student.course.code}</td>
                <td style={{color:'#232D42', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '16px', border: 'none', height:'62px', verticalAlign: 'middle'}}>
                  {student.course.department.code}</td>
                <td style={{color:'#232D42', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '16px', border: 'none', height:'62px', verticalAlign: 'middle'}}>
                  {student.yearlevel}</td>
                <td style={{color:'#232D42', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '16px', border: 'none', height:'62px', verticalAlign: 'middle'}}>
                  
                  {(() => {
                    switch(student.status) {
                      case 'Verification Failed': return <VerificationFailed/>;
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
                <td style={{color:'#232D42', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '16px', border: 'none', height:'62px', verticalAlign: 'middle'}}>
                
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" style={{border: 'none', backgroundColor: '#e9ecef', color: 'rgba(51, 51, 51, 0.00)', width: '38px', height: '38px', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'center', marginLeft: '10px'}}>
                      <h2 style={{color: '#8A92A6', marginLeft: '12px', marginBottom: '15px'}}>...</h2>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {student.status === 'Verification Failed'  && 
                        <>
                          <Dropdown.Item><h1 style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '14px', marginTop:'10px'}}>View Student</h1></Dropdown.Item>
                        </>}
                      {student.status === 'For Evaluation'  && 
                        <>
                          <Dropdown.Item><h1 style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '14px', marginTop:'10px'}}>View Student</h1></Dropdown.Item>
                          <Dropdown.Item><h1 style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '14px', marginTop:'10px'}}>Update To Evaluation In Progress</h1></Dropdown.Item>
                          <Dropdown.Item><h1 style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '14px', marginTop:'10px'}}>Reject This Student</h1></Dropdown.Item>
                        </>}
                      {student.status === 'Evaluation In Progress'  && 
                        <>
                          <Dropdown.Item><h1 style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '14px', marginTop:'10px'}}>View Student</h1></Dropdown.Item>
                          <Dropdown.Item><h1 style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '14px', marginTop:'10px'}}>Evaluation Complete</h1></Dropdown.Item>
                          <Dropdown.Item><h1 style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '14px', marginTop:'10px'}}>Contact Student</h1></Dropdown.Item>
                        </>}
                      {student.status === 'Evaluation Complete'  && 
                        <>
                        <Dropdown.Item><h1 style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '14px', marginTop:'10px'}}>View Student</h1></Dropdown.Item>
                        <Dropdown.Item><h1 style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '14px', marginTop:'10px'}}>Notify Student Via Portal & Email</h1></Dropdown.Item>
                        </>}
                      {student.status === 'Pending Payment'  && 
                        <>
                        <Dropdown.Item><h1 style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '14px', marginTop:'10px'}}>View Student</h1></Dropdown.Item>
                        <Dropdown.Item><h1 style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '14px', marginTop:'10px'}}>Input Payment Information</h1></Dropdown.Item>
                        </>}
                      {student.status === 'Payment Received'  && 
                        <>
                        <Dropdown.Item><h1 style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '14px', marginTop:'10px'}}>View Student</h1></Dropdown.Item>
                        <Dropdown.Item><h1 style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '14px', marginTop:'10px'}}>Marked As Enrolled</h1></Dropdown.Item>
                        <Dropdown.Item><h1 style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '14px', marginTop:'10px'}}>Student Verification Failed</h1></Dropdown.Item>
                        </>}
                      {student.status === 'Enrolled'  && 
                        <>
                        <Dropdown.Item><h1 style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '14px', marginTop:'10px'}}>View Student</h1></Dropdown.Item>
                        </>}
                      {student.status === 'Draft'  && 
                        <>
                        <Dropdown.Item><h1 style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '14px', marginTop:'10px'}}>Update Student Info</h1></Dropdown.Item>
                        <Dropdown.Item><h1 style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '14px', marginTop:'10px'}}>Delete</h1></Dropdown.Item>
                        </>}
                    </Dropdown.Menu>
                </Dropdown>

                </td>
              </tr>
          ))}
        </tbody>

        </Table>
      <div style={{height: '10px'}}>
        
      </div>
      </div>
      </div>
      
      </>
    );
}

UsersStudents.propTypes = {
  sidebarState: PropTypes.string,
  subsidebarState: PropTypes.string,
  pageHeader: PropTypes.object,
  studentsList: PropTypes.array.isRequired,
  setsidebarState: PropTypes.func.isRequired,
  setsubsidebarState: PropTypes.func.isRequired,
  setpageHeader: PropTypes.func.isRequired,
  getStudents: PropTypes.func.isRequired,
  getDepartments: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  sidebarState: state.main.sidebarState,
  subsidebarState: state.main.subsidebarState,
  pageHeader: state.main.pageHeader,
  studentsList: state.main.studentsList,
  departmentsList: state.main.departmentsList,
  });

export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setpageHeader, getStudents, getDepartments})(UsersStudents))