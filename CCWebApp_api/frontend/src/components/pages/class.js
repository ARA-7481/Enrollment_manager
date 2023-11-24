import React, { useState, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState, setclassState, setpageHeader, getClassesList, getDepartments, setLoading } from '../../redux/actions/main';

import { Col, Table, Dropdown, Form, Placeholder } from 'react-bootstrap';
import { Magnifier } from '../../assets/svg/clnsmpl-icon';

function Class(props) {

  const [queryYearlevel, setQueryYearlevel] = useState('');
  const [queryDepartment, setQueryDepartment] = useState('');
  const [queryCourse, setQueryCourse] = useState('');

  const [sortStatus, setsortStatus] = useState ('Newest-Oldest')
  const [yearlevelStatus, setyearlevelStatus] = useState('All Year Levels');
  const [departmentStatus, setdepartmentStatus] = useState('All Departments');
  const [courseStatus, setcourseStatus] = useState('All Courses');
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSearch = (query) => {
    props.getClassesList(queryYearlevel,queryDepartment,queryCourse, query)
    props.setLoading('isLoading')
  };

  const handleSort = (sort) => {
    setsortStatus(sort)
  };

  const handleYearlevel = (yearlevel) => {
    setyearlevelStatus(yearlevel)
    if (yearlevel === 'All Year Levels'){
      setQueryYearlevel('')
      props.getClassesList('',queryDepartment,queryCourse,'')
    }
    else{
      setQueryYearlevel(yearlevel)
      props.getClassesList(yearlevel,queryDepartment,queryCourse,'')
    }
  };

  const handleDepartment = (departmentcode) => {
    setdepartmentStatus(departmentcode);
    setcourseStatus('All Courses');
    setQueryCourse('');
    if (departmentcode === 'All Departments'){
      setQueryDepartment('')
      props.getClassesList(queryYearlevel,'','','')
    }
    else{
      setQueryDepartment(departmentcode)
      props.getClassesList(queryYearlevel,departmentcode,'','')
    }
  };

  const handleCourse = (course) => {
    setcourseStatus(course);
    if (course === 'All Courses'){
      setQueryCourse('')
      props.getClassesList(queryYearlevel,queryDepartment,'','')
    }
    else{
      setQueryCourse(course)
      props.getClassesList(queryYearlevel,queryDepartment,course,'')
    }
  };

  useEffect(() => {
    if (props.classesListForTable.length == 0){
        props.setLoading('isLoading');
      }
    props.setsidebarState('class');
    props.setsubsidebarState(null);
    props.setclassState('list')
    props.setpageHeader('Manage Class', '', 'Add and update classes. Assign student, room and subjects');
    props.getClassesList('','','','');
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
            <Form.Control type='search' placeholder="Search Class, Subject or Teacher" value={value} onChange={handleChange} style={{border: 'none', width:'100%'}}/>
          </Form.Group>
        </Form>
      
        <h1 className='inter-500-16px' style={{paddingTop: '10px'}}>
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

        <h1 className='inter-500-16px' style={{paddingTop: '10px', marginLeft: '20px'}}>
          Filter: 
        </h1>

        <Dropdown style={{width: '16%'}}>
            <Dropdown.Toggle id="dropdown-basic" style={{border: 'none', backgroundColor: 'rgba(51, 51, 51, 0.00)', color: 'black', width: '100%', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'space-between'}}>
              <div>{yearlevelStatus}</div>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ width: '100%'}}>
              {yearlevelStatus !== 'All Year Levels'  && <Dropdown.Item onClick={() => handleYearlevel('All Year Levels')}>All Year Levels</Dropdown.Item>}
              {yearlevelStatus !== 'First Year'  && <Dropdown.Item onClick={() => handleYearlevel('First Year')}>First Year</Dropdown.Item>}
              {yearlevelStatus !== 'Second Year'  && <Dropdown.Item onClick={() => handleYearlevel('Second Year')}>Second Year</Dropdown.Item>}
              {yearlevelStatus !== 'Third Year'  && <Dropdown.Item onClick={() => handleYearlevel('Third Year')}>Third Year</Dropdown.Item>}
              {yearlevelStatus !== 'Fourth Year'  && <Dropdown.Item onClick={() => handleYearlevel('Fourth Year')}>Fourth Year</Dropdown.Item>}
              {yearlevelStatus !== 'Fifth Year'  && <Dropdown.Item onClick={() => handleYearlevel('Fifth Year')}>Fifth Year</Dropdown.Item>}
            </Dropdown.Menu>
        </Dropdown>

        <Dropdown style={{width: '16%'}}>
            <Dropdown.Toggle id="dropdown-basic" style={{border: 'none', backgroundColor: 'rgba(51, 51, 51, 0.00)', color: 'black', width: '100%', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'space-between'}}>
              <div>{departmentStatus}</div>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ width: '100%', maxHeight: '300px', overflow: 'auto'}}>
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

            <Dropdown.Menu style={{ width: '100%', maxHeight: '300px', overflow: 'auto'}}>
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
        <h1 className='table-title'>List of Classes</h1>
      </div>
      {props.loadingState == 'isLoading' ?  
        <div style={{marginLeft: '20px', marginRight: '40px', marginTop: '7px'}}>
          <div style={{display:'flex', marginBottom: '27px'}}>
          <Placeholder animation="glow" style={{width: '15%', color: 'rgba(51, 51, 51, 0.20)'}}>
            <Placeholder xs={5} />
          </Placeholder>
          <Placeholder animation="glow" style={{width: '15%', color: 'rgba(51, 51, 51, 0.20)'}}>
            <Placeholder xs={5} />
          </Placeholder>
          <Placeholder animation="glow" style={{width: '10%', color: 'rgba(51, 51, 51, 0.20)'}}>
            <Placeholder xs={5} />
          </Placeholder>
          <Placeholder animation="glow" style={{width: '10%', color: 'rgba(51, 51, 51, 0.20)'}}>
            <Placeholder xs={5} />
          </Placeholder>
          <Placeholder animation="glow" style={{width: '10%', color: 'rgba(51, 51, 51, 0.20)'}}>
            <Placeholder xs={5} />
          </Placeholder>
          <Placeholder animation="glow" style={{width: '10%', color: 'rgba(51, 51, 51, 0.20)'}}>
            <Placeholder xs={5} />
          </Placeholder>
          <Placeholder animation="glow" style={{width: '15%', color: 'rgba(51, 51, 51, 0.20)'}}>
            <Placeholder xs={5} />
          </Placeholder>
          <Placeholder animation="glow" style={{width: '15%', color: 'rgba(51, 51, 51, 0.20)'}}>
            <Placeholder xs={5} />
          </Placeholder>
          <Placeholder animation="glow" style={{width: '15%', color: 'rgba(51, 51, 51, 0.20)'}}>
            <Placeholder xs={5} />
          </Placeholder>
          <Placeholder animation="glow" style={{color: 'rgba(51, 51, 51, 0.20)'}}>
            <Placeholder xs={5} />
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
      <Table hover style={{border: 'none'}}>
      <thead >
        <tr>
          <th className='table-head' style={{width: '20%', paddingLeft:'20px'}}>CLASSNAME</th>
          <th className='table-head' style={{width: '10%'}}>SUBJECT</th>
          <th className='table-head' style={{width: '8%'}}>UNITS</th>
          <th className='table-head' style={{width: '8%'}}>LEC</th>
          <th className='table-head' style={{width: '8%'}}>LAB</th>
          <th className='table-head' style={{width: '15%'}}>YEAR</th>
          <th className='table-head' style={{width: '10%'}}>COURSE</th>
          <th className='table-head' style={{width: '10%'}}>STUDENTS</th>
          <th className='table-head' style={{width: '15%'}}>TEACHER</th>
          <th className='table-head'>ACTION</th>
        </tr>
      </thead>
      <tbody style={{cursor: 'pointer', }}>
      {[...props.classesListForTable]
            .sort((a, b) => {
              switch (sortStatus) {
                case 'Newest-Oldest':
                  return new Date(b.date_created) - new Date(a.date_created);
                case 'Oldest-Newest':
                  return new Date(a.date_created) - new Date(b.date_created);
                case 'A-Z':
                  return a.code.localeCompare(b.code);
                case 'Z-A':
                  return b.code.localeCompare(a.code);
                default:
                  return 0;
              }
            })
            ?.map((classes) =>(
              <tr key={classes.code} style={{border: 'none'}}>
                <td className='table-body' style={{paddingLeft:'20px'}}>
                  {classes.code}</td>
                <td className='table-body'>
                  {classes.subject.code}</td>
                <td className='table-body'>
                  {classes.subject.units}</td>
                <td className='table-body'>
                  {classes.subject.lecture}</td>
                <td className='table-body'>
                  {classes.subject.lab}</td>
                <td className='table-body'>
                  {classes.yearlevel}</td>
                <td className='table-body'>
                  {classes.course}</td>
                <td className='table-body'>
                  {classes.students.length}</td>
                <td className='table-body'>
                  {classes.teacher.userprofile.first_name} {classes.teacher.userprofile.last_name}</td>

                <td className='table-body'>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" style={{border: 'none', backgroundColor: '#e9ecef', color: 'rgba(51, 51, 51, 0.00)', width: '38px', height: '38px', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'center', marginLeft: '10px'}}>
                      <h2 style={{color: '#8A92A6', marginLeft: '12px', marginBottom: '15px'}}>...</h2>
                    </Dropdown.Toggle>
  
                    <Dropdown.Menu>
                          <Dropdown.Item><h1 className='dropdown-item'>View Students List</h1></Dropdown.Item>
                          <Dropdown.Item><h1 className='dropdown-item'>Update Class</h1></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
  
                </td>
              </tr>
          ))}
      </tbody>

      </Table>
      }
    <div style={{height: '10px'}}>
      
    </div>

      </div>
      
      </div>      
      </>
    );
}

Class.propTypes = {
  sidebarState: PropTypes.string,
  setsidebarState: PropTypes.func.isRequired,
  subsidebarState: PropTypes.string,
  setsubsidebarState: PropTypes.func.isRequired,
  classState: PropTypes.string,
  pageHeader: PropTypes.object,
  setpageHeader: PropTypes.func.isRequired,
  classesListForTable: PropTypes.array,
  getClassesList: PropTypes.func,
  getDepartments: PropTypes.func,
  departmentsList: PropTypes.array.isRequired,
  setLoading: PropTypes.func,
  loadingState: PropTypes.string,
}

const mapStateToProps = (state) => ({
  sidebarState: state.main.sidebarState,
  subsidebarState: state.main.subsidebarState,
  classState: state.main.classState,
  pageHeader: state.main.pageHeader,
  classesListForTable: state.main.classesListForTable,
  departmentsList: state.main.departmentsList,
  loadingState: state.main.loadingState,
  });

export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setclassState, setpageHeader, getClassesList, getDepartments, setLoading})(Class))