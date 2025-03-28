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
          <div style={{backgroundColor:'#ffffff', height: !props.isLess800? '72px': '120px', borderRadius:'8px', display: !props.isLess800? 'flex': '', alignItems: 'center', padding: '24px'}}>
         
            <div style={{display: 'flex', width: !props.isLess800? '40%': '100%'}}>
              <div onClick={() => handleSearch(value)} style={{cursor: 'pointer', marginTop: '7px'}}>
                <Magnifier/>
              </div>
              <Form style={{width: '62.5%'}}>
                <Form.Group controlId="searchbar">
                  <Form.Control type='search' placeholder="Search Class, Subject or Teacher" value={value} onChange={handleChange} style={{border: 'none', width:'100%', minWidth: '145px'}}/>
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

                <Dropdown style={{width: '50%', minWidth: '1px'}}>
                    <Dropdown.Toggle id="dropdown-basic" style={{border: 'none', backgroundColor: 'rgba(51, 51, 51, 0.00)', color: 'black', width: '100%', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'space-between'}}>
                      <div style={{overflow: 'hidden'}}>{yearlevelStatus}</div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ width: '100%'}}>
                      {yearlevelStatus !== 'All Year Levels'  && <Dropdown.Item onClick={() => handleYearlevel('All Year Levels')}><div className="zooming-text">All Year Levels</div></Dropdown.Item>}
                      {yearlevelStatus !== 'First Year'  && <Dropdown.Item onClick={() => handleYearlevel('First Year')}><div className="zooming-text">First Year</div></Dropdown.Item>}
                      {yearlevelStatus !== 'Second Year'  && <Dropdown.Item onClick={() => handleYearlevel('Second Year')}><div className="zooming-text">Second Year</div></Dropdown.Item>}
                      {yearlevelStatus !== 'Third Year'  && <Dropdown.Item onClick={() => handleYearlevel('Third Year')}><div className="zooming-text">Third Year</div></Dropdown.Item>}
                      {yearlevelStatus !== 'Fourth Year'  && <Dropdown.Item onClick={() => handleYearlevel('Fourth Year')}><div className="zooming-text">Fourth Year</div></Dropdown.Item>}
                      {yearlevelStatus !== 'Fifth Year'  && <Dropdown.Item onClick={() => handleYearlevel('Fifth Year')}><div className="zooming-text">Fifth Year</div></Dropdown.Item>}
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown style={{width: '50%', minWidth: '1px'}}>
                    <Dropdown.Toggle id="dropdown-basic" style={{border: 'none', backgroundColor: 'rgba(51, 51, 51, 0.00)', color: 'black', width: '100%', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'space-between'}}>
                      <div style={{overflow: 'hidden'}}>{departmentStatus}</div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ width: '100%' }}>
                      {departmentStatus !== 'All Departments'  && <Dropdown.Item onClick={() => handleDepartment('All Departments')}><div className="zooming-text">All Departments</div></Dropdown.Item>}
                      {props.departmentsList.filter(dept => dept.code !== departmentStatus).map((department) => (
                        <Dropdown.Item key={department.code} onClick={() => handleDepartment(department.code)}><div className="zooming-text">{department.code}</div></Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown style={{width: '50%', minWidth: '1px'}}>
                  <Dropdown.Toggle id="dropdown-basic" style={{border: 'none', backgroundColor: 'rgba(51, 51, 51, 0.00)', color: 'black', width: '100%', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'space-between'}}>
                    <div style={{overflow: 'hidden'}}>{courseStatus}</div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu style={{ width: '100%'}}>
                      {courseStatus !== 'All Courses'  && <Dropdown.Item onClick={() => handleCourse('All Courses')}><div className="zooming-text">All Courses</div></Dropdown.Item>}
                      {departmentStatus === 'All Departments' ? 
                        props.departmentsList.flatMap(dept => dept.related_course).filter(course => course !== courseStatus).map((course, index) => (
                          <Dropdown.Item key={index} onClick={() => handleCourse(course)}><div className="zooming-text">{course}</div></Dropdown.Item>
                        ))
                      :
                        props.departmentsList.filter(dept => dept.code === departmentStatus)[0]?.related_course.filter(course => course !== courseStatus).map((course) => (
                          <Dropdown.Item key={course} onClick={() => handleCourse(course)}><div className="zooming-text">{course}</div></Dropdown.Item>
                        ))
                      }
                  </Dropdown.Menu>
                </Dropdown>
            </div>
          </div>

          <div style={{height: '40px', backgroundColor:'rgba(51, 51, 51, 0.00)', margin: '0px'}}>
          </div>

          <div style={{backgroundColor:'#ffffff', borderRadius:'8px', minWidth: '1px', overflowX: 'auto'}}>
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
  isLess800: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  sidebarState: state.main.sidebarState,
  subsidebarState: state.main.subsidebarState,
  classState: state.main.classState,
  pageHeader: state.main.pageHeader,
  classesListForTable: state.main.classesListForTable,
  departmentsList: state.main.departmentsList,
  loadingState: state.main.loadingState,
  isLess800: state.main.isLess800,
  });

export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setclassState, setpageHeader, getClassesList, getDepartments, setLoading})(Class))