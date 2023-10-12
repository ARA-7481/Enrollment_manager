import React, { useState, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState, setpageHeader, getFaculty, getDepartments } from '../../redux/actions/main';

import { Card, Col, Table, Form, Dropdown, Button } from 'react-bootstrap';
import { Magnifier, New } from '../../assets/svg/clnsmpl-icon';

function UsersTeachers(props) {

  const [queryPosition, setQueryPosition] = useState('');
  const [queryDepartment, setQueryDepartment] = useState('');
  const [queryCourse, setQueryCourse] = useState('');

  const [sortStatus, setsortStatus] = useState ('Newest-Oldest')
  const [positionStatus, setpositionStatus] = useState ('All Positions')
  const [departmentStatus, setdepartmentStatus] = useState('All Departments');
  const [courseStatus, setcourseStatus] = useState('All Courses');

  const [value, setValue] = useState('');


  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSearch = (query) => {
    props.getFaculty(queryPosition,queryDepartment,queryCourse, query)
  };

  const handleSort = (sort) => {
    setsortStatus(sort)
  };

  const handlePosition = (position) => {
    setpositionStatus(position)
    if (position === 'All Positions'){
      setQueryPosition('')
      props.getFaculty('',queryDepartment,queryCourse,'')
    }
    else{
      setQueryPosition(position)
      props.getFaculty(position,queryDepartment,queryCourse,'')
    }
  };

  const handleDepartment = (departmentcode) => {
    setdepartmentStatus(departmentcode);
    setcourseStatus('All Courses');
    setQueryCourse('');
    if (departmentcode === 'All Departments'){
      setQueryDepartment('')
      props.getFaculty(queryPosition,'','','')
    }
    else{
      setQueryDepartment(departmentcode)
      props.getFaculty(queryPosition,departmentcode,'','')
    }
  };

  const handleCourse = (course) => {
    setcourseStatus(course);
    if (course === 'All Courses'){
      setQueryCourse('')
      props.getFaculty(queryPosition,queryDepartment,'','')
    }
    else{
      setQueryCourse(course)
      props.getFaculty(queryPosition,queryDepartment,course,'')
    }
  };

  useEffect(() => {
    props.setsidebarState('users');
    props.setsubsidebarState('teachers');
    props.setpageHeader('Manage Faculty', '', 'Manage faculty here. Add, Update, etc.');
    props.getFaculty('','','','');
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
          <Form.Control type='search' placeholder="Search faculty name or faculty id..." value={value} onChange={handleChange} style={{border: 'none', width:'100%'}}/>
        </Form.Group>
      </Form>
    
      <h1 className='inter-500-16px ' style={{paddingTop: '10px'}}>
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

      <h1 className='inter-500-16px ' style={{paddingTop: '10px', marginLeft: '20px'}}>
        Filter: 
      </h1>
      <Dropdown style={{width: '16%'}}>
          <Dropdown.Toggle id="dropdown-basic" style={{border: 'none', backgroundColor: 'rgba(51, 51, 51, 0.00)', color: 'black', width: '100%', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'space-between'}}>
            <div>{positionStatus}</div>
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ width: '100%'}}>
            {positionStatus !== 'All Positions'  && <Dropdown.Item onClick={() => handlePosition('All Positions')}>All Positions</Dropdown.Item>}
            {positionStatus !== 'Dean'  && <Dropdown.Item onClick={() => handlePosition('Dean')}>Dean</Dropdown.Item>}
            {positionStatus !== 'Assistant Dean'  && <Dropdown.Item onClick={() => handlePosition('Assistant Dean')}>Assistant Dean</Dropdown.Item>}
            {positionStatus !== 'Professor'  && <Dropdown.Item onClick={() => handlePosition('Professor')}>Professor</Dropdown.Item>}
            {positionStatus !== 'Part-Time'  && <Dropdown.Item onClick={() => handlePosition('Part-Time')}>Part-Time</Dropdown.Item>}
            {positionStatus !== 'Teacher'  && <Dropdown.Item onClick={() => handlePosition('Teacher')}>Teacher</Dropdown.Item>}
            {positionStatus !== 'Laboratory Attendant'  && <Dropdown.Item onClick={() => handlePosition('Laboratory Attendant')}>Laboratory Attendant</Dropdown.Item>}
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
        <h1 className='table-title'>List of Faculty</h1>
      </div>
      <Table hover style={{border: 'none'}}>
      <thead >
        <tr>
          <th className='table-head' style={{width: '15%', paddingLeft:'20px'}}>IDs</th>
          <th className='table-head' style={{width: '23%'}}>FULL NAME</th>
          <th className='table-head' style={{width: '20%'}}>COURSE</th>
          <th className='table-head' style={{width: '20%'}}>DEPARTMENT</th>
          <th className='table-head' style={{width: '16%'}}>POSITION</th>
          <th className='table-head' style={{border: 'none'}}>ACTION</th>
        </tr>
      </thead>
      <tbody style={{cursor: 'pointer', }}>
        {[...props.facultyList]
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
            ?.map((faculty) =>(
            <tr key={faculty.id} style={{border: 'none'}}>
              <td className='table-body' style={{paddingLeft:'20px'}}>
                {faculty.id}</td>
              <td className='table-body'>
                {faculty.userprofile.first_name} {faculty.userprofile.last_name} {new Date() - new Date(faculty.userprofile.date_joined) <= 3 * 24 * 60 * 60 * 1000 && <New/>}</td>
              <td className='table-body'>
              {faculty.courses.map((course, index) => (
                <div key={course.code}>{course.code}{index < faculty.courses.length - 1 ? ',' : ''}</div>
              ))}</td>
              <td className='table-body'>
              {faculty.courses
                .filter((course, index, self) =>
                  index === self.findIndex((t) => t.department.code === course.department.code)
                )
                .map((course, index, self) => (
                  <div key={`${course.department.code}-${index}`}>
                    {course.department.code}{index < self.length - 1 ? ',' : ''}
                  </div>
                ))}</td>
              <td className='table-body'>
                {faculty.position}</td>
              <td className='table-body'>
              
              <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic" style={{border: 'none', backgroundColor: '#e9ecef', color: 'rgba(51, 51, 51, 0.00)', width: '38px', height: '38px', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'center', marginLeft: '10px'}}>
                    <h2 style={{color: '#8A92A6', marginLeft: '12px', marginBottom: '15px'}}>...</h2>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                        <Dropdown.Item><h1 className='dropdown-item'>Update Info</h1></Dropdown.Item>
                        <Dropdown.Item><h1 className='dropdown-item'>Delete</h1></Dropdown.Item>
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

UsersTeachers.propTypes = {
  sidebarState: PropTypes.string,
  subsidebarState: PropTypes.string,
  pageHeader: PropTypes.object,
  facultyList: PropTypes.array.isRequired,
  departmentsList: PropTypes.array.isRequired,
  setsidebarState: PropTypes.func.isRequired,
  setsubsidebarState: PropTypes.func.isRequired,
  getFaculty: PropTypes.func.isRequired,
  getDepartments: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  sidebarState: state.main.sidebarState,
  subsidebarState: state.main.subsidebarState,
  pageHeader: state.main.pageHeader,
  facultyList: state.main.facultyList,
  departmentsList: state.main.departmentsList,
  });

export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setpageHeader, getFaculty, getDepartments})(UsersTeachers))