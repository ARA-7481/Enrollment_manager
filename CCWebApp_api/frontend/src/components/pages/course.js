import React, { useState, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState, setpageHeader, getDepartments, setLoading, getCoursesList, setcourseState} from '../../redux/actions/main';

import { Col, Table, Dropdown, Form, Placeholder } from 'react-bootstrap';
import { Magnifier } from '../../assets/svg/clnsmpl-icon';

function Course(props) {
  const [sortStatus, setsortStatus] = useState ('Newest-Oldest')

  const [queryDepartment, setQueryDepartment] = useState('');

  const [departmentStatus, setdepartmentStatus] = useState('All Departments');

  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSearch = (query) => {
    props.getCoursesList(queryDepartment,query)
    props.setLoading('isLoading')
  };

  const handleSort = (sort) => {
    setsortStatus(sort)
  };

  const handleDepartment = (department) => {
    console.log(department)
    setdepartmentStatus(department)
    if (department === 'All Departments'){
      setQueryDepartment('')
      props.getCoursesList('','')
    }
    else{
      setQueryDepartment(department)
      props.getCoursesList(department,'')
    }
  };

  useEffect(() => {
    if (props.coursesListForTable.length == 0){
      props.setLoading('isLoading');
    }
    props.setsidebarState('course');
    props.setsubsidebarState(null);
    props.setcourseState('list');
    props.setpageHeader('Manage Courses', '', 'Add and Update Course, Assign Subjects, etc.');
    props.getCoursesList('','')
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
          <Form.Control type='search' placeholder="Search Subject or Subject Code" value={value} onChange={handleChange} style={{border: 'none', width:'100%', minWidth: '145px'}}/>
        </Form.Group>
      </Form>
    
      <h1 className='inter-500-16px' style={{paddingTop: '10px'}}>
        Sort: 
      </h1>
      <Dropdown style={{width: '32.5%'}}>
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

      <h1 className='inter-500-16px' style={{paddingTop: '10px', marginLeft: '20px'}}>
          Filter: 
      </h1>

      <Dropdown style={{width: '32.5%'}}>
            <Dropdown.Toggle id="dropdown-basic" 
                             style={{border: 'none', backgroundColor: 'rgba(51, 51, 51, 0.00)', color: 'black', width: '100%', 
                                     display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'space-between'}}>
              <div style={{overflow: 'hidden'}}>{departmentStatus}</div>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{minWidth: '1px', width: '100%'}}>
              {departmentStatus !== 'All Departments'  && <Dropdown.Item onClick={() => handleDepartment('All Departments')}><div className="zooming-text">All Departments</div></Dropdown.Item>}
              {props.departmentsList.filter(dept => dept.code !== departmentStatus).map((department) => (
                <Dropdown.Item key={department.code} onClick={() => handleDepartment(department.code)}><div className="zooming-text">{department.code}</div></Dropdown.Item>
              ))}
            </Dropdown.Menu>
        </Dropdown>

    </div>
    <div style={{height: '40px', backgroundColor:'rgba(51, 51, 51, 0.00)', margin: '0px'}}>
    </div>
    <div style={{backgroundColor:'#ffffff', borderRadius:'8px'}}>
    <div style={{height: '81px', display: 'flex'}}>
      <h1 className='table-title'>List of Courses</h1>
    </div>

    {props.loadingState == 'isLoading' ?  
        <div style={{marginLeft: '20px', marginRight: '40px', marginTop: '7px'}}>
          <div style={{display:'flex', marginBottom: '27px'}}>
          <Placeholder animation="glow" style={{width: '15%', color: 'rgba(51, 51, 51, 0.20)'}}>
            <Placeholder xs={5} />
          </Placeholder>
          <Placeholder animation="glow" style={{width: '50%', color: 'rgba(51, 51, 51, 0.20)'}}>
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
            <th className='table-head' style={{width: '15%', paddingLeft:'20px'}}>CODE</th>
            <th className='table-head' style={{width: '40%'}}>DESCRIPTION</th>
            <th className='table-head' style={{width: '15%'}}>UNITS</th>
            <th className='table-head' style={{width: '20%'}}>EFFECTIVE DATE</th>
            <th className='table-head' style={{width: '20%'}}>DEPARTMENT</th>
            <th className='table-head'>ACTION</th>
          </tr>
        </thead>
        <tbody style={{cursor: 'pointer', }}>
        {[...props.coursesListForTable]
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
                  // case 'Units(ASC)':
                  //   return a.units.toString().localeCompare(b.units.toString());
                  // case 'Units(DESC)':
                  //   return b.units.toString().localeCompare(a.units.toString());
                  default:
                    return 0;
                }
              })
              ?.map((course) =>(
                <tr key={course.code} style={{border: 'none'}}>
                  <td className='table-body' style={{paddingLeft:'20px'}}>
                    {course.code}</td>
                  <td className='table-body'>
                    {course.description}</td>
                  <td className='table-body'>
                    {'-'}</td>
                  <td className='table-body'>
                    {course.date_created}</td>
                  <td className='table-body'>
                    {course.department.code}</td>
                  <td className='table-body'>
                  <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic" style={{border: 'none', backgroundColor: '#e9ecef', color: 'rgba(51, 51, 51, 0.00)', width: '38px', height: '38px', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'center', marginLeft: '10px'}}>
                        <h2 style={{color: '#8A92A6', marginLeft: '12px', marginBottom: '15px'}}>...</h2>
                      </Dropdown.Toggle>
    
                      <Dropdown.Menu>
                            <Dropdown.Item><h1 className='dropdown-item'>View Course</h1></Dropdown.Item>
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

Course.propTypes = {
  sidebarState: PropTypes.string,
  setsidebarState: PropTypes.func.isRequired,
  subsidebarState: PropTypes.string,
  setsubsidebarState: PropTypes.func.isRequired,
  pageHeader: PropTypes.object,
  setpageHeader: PropTypes.func.isRequired,
  getDepartments: PropTypes.func,
  departmentsList: PropTypes.array.isRequired,
  setLoading: PropTypes.func,
  loadingState: PropTypes.string,
  getCoursesList: PropTypes.func,
  coursesListForTable: PropTypes.array,
  setcourseState: PropTypes.func,
  courseState: PropTypes.string,
}

const mapStateToProps = (state) => ({
  sidebarState: state.main.sidebarState,
  subsidebarState: state.main.subsidebarState,
  pageHeader: state.main.pageHeader,
  departmentsList: state.main.departmentsList,
  loadingState: state.main.loadingState,
  coursesListForTable: state.main.coursesListForTable,
  courseState: state.main.courseState,
  });

export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setpageHeader, getDepartments, setLoading, getCoursesList, setcourseState})(Course))