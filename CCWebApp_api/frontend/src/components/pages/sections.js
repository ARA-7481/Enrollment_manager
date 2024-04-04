import React, { useState, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import withAuth from '../common/withAuth';
import { useNavigate } from 'react-router-dom';
import { setsidebarState, setsubsidebarState, setpageHeader, setLoading, getRoomsList, setsectionState, getSectionList, setSelectedsection, getSchoolYearList } from '../../redux/actions/main';

import {ComingSoon} from '../../assets/svg/clnsmpl-icon';

import { Col, Table, Dropdown, Form, Placeholder } from 'react-bootstrap';
import { Magnifier } from '../../assets/svg/clnsmpl-icon';

function Sections(props) {
  const navigate = useNavigate();
  const [sortStatus, setsortStatus] = useState ('Newest-Oldest')
  const [value, setValue] = useState('');
  const [searchquery, setSearchquery] = useState('');
  const [gradelevelquery, setGradelevelquery] = useState('');

  const [gradeleveldropdown, setGradeleveldropdown] = useState('All Grade Levels');
  // const 

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSearch = (query) => {
    props.getSectionList(query, gradelevelquery);
    props.setLoading('isLoading')
  };

  const handleGradelevelquery = (gradelevel) => {
    setGradeleveldropdown(gradelevel)
    setValue('')
    if (gradelevel === 'All Grade Levels'){
      setGradelevelquery('')
      setSearchquery('')
    }
    else{
      setGradelevelquery(gradelevel)
      setSearchquery('')
    }
  };

  const handleSort = (sort) => {
    setsortStatus(sort)
  };

  const handleSectionSelection = (sectioncode) => {
    props.setSelectedsection(sectioncode);
    navigate('/admins/section-page');
}

  useEffect(() => {
    if (props.roomsListForTable.length == 0){
      props.setLoading('isLoading');
    }
    props.getSchoolYearList();
    props.setsidebarState('sections');
    props.setsubsidebarState(null);
    props.setsectionState('list');
    props.setpageHeader('Manage Sections', '', 'Add and Update Sections');
    props.getSectionList(searchquery, gradelevelquery);
    console.log("--------")
  }, [searchquery, gradelevelquery]);

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
                <Form.Control type='search' placeholder="Search section name..." value={value} onChange={handleChange} style={{border: 'none', width:'100%', minWidth: '145px'}}/>
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

              <Dropdown style={{width: '30%', minWidth: '1px', marginLeft: '10px'}}>
                    <Dropdown.Toggle id="dropdown-basic" 
                                    style={{border: 'none', backgroundColor: 'rgba(51, 51, 51, 0.00)', color: 'black', width: '100%',
                                            display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'space-between'}}>
                      <div style={{overflow: 'hidden'}}>{gradeleveldropdown}</div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ width: '100%'}}>
                      {gradeleveldropdown !== 'All Grade Levels'  && <Dropdown.Item onClick={() => handleGradelevelquery('All Grade Levels')}><div className="zooming-text">All Grade Levels</div></Dropdown.Item>}
                      {gradeleveldropdown !== 'Grade 7'  && <Dropdown.Item onClick={() => handleGradelevelquery('Grade 7')}><div className="zooming-text">Grade 7</div></Dropdown.Item>}
                      {gradeleveldropdown !== 'Grade 8'  && <Dropdown.Item onClick={() => handleGradelevelquery('Grade 8')}><div className="zooming-text">Grade 8</div></Dropdown.Item>}
                      {gradeleveldropdown !== 'Grade 9'  && <Dropdown.Item onClick={() => handleGradelevelquery('Grade 9')}><div className="zooming-text">Grade 9</div></Dropdown.Item>}
                      {gradeleveldropdown !== 'Grade 10'  && <Dropdown.Item onClick={() => handleGradelevelquery('Grade 10')}><div className="zooming-text">Grade 10</div></Dropdown.Item>}
                      {gradeleveldropdown !== 'Grade 11'  && <Dropdown.Item onClick={() => handleGradelevelquery('Grade 11')}><div className="zooming-text">Grade 11</div></Dropdown.Item>}
                      {gradeleveldropdown !== 'Grade 12'  && <Dropdown.Item onClick={() => handleGradelevelquery('Grade 12')}><div className="zooming-text">Grade 12</div></Dropdown.Item>}
                    </Dropdown.Menu>
              </Dropdown>

              {/* <Dropdown style={{width: '50%', minWidth: '1px'}}>
                    <Dropdown.Toggle id="dropdown-basic" style={{border: 'none', backgroundColor: 'rgba(51, 51, 51, 0.00)', color: 'black', width: '100%', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'space-between'}}>
                      <div style={{overflow: 'hidden'}}>{departmentStatus}</div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ width: '100%' }}>
                      {departmentStatus !== 'All Departments'  && <Dropdown.Item onClick={() => handleDepartment('All Departments')}><div className="zooming-text">All Departments</div></Dropdown.Item>}
                      {props.departmentsList.filter(dept => dept.code !== departmentStatus).map((department) => (
                        <Dropdown.Item key={department.code} onClick={() => handleDepartment(department.code)}><div className="zooming-text">{department.code}</div></Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                </Dropdown> */}
            
          </div>
        </div>
      

        <div style={{height: '40px', backgroundColor:'rgba(51, 51, 51, 0.00)', margin: '0px'}}>
        </div>

      <div style={{backgroundColor:'#ffffff', borderRadius:'8px'}}>
        <div style={{height: '81px', display: 'flex'}}>
          <h1 className='table-title'>Section List</h1>
        </div>
        {props.loadingState == 'isLoading' ?  
          <div style={{marginLeft: '20px', marginRight: '40px', marginTop: '7px'}}>
            <div style={{display:'flex', marginBottom: '27px'}}>
            <Placeholder animation="glow" style={{width: '20%', color: 'rgba(51, 51, 51, 0.20)'}}>
              <Placeholder xs={2} />
            </Placeholder>
            <Placeholder animation="glow" style={{width: '40%', color: 'rgba(51, 51, 51, 0.20)'}}>
              <Placeholder xs={7} />
            </Placeholder>
            <Placeholder animation="glow" style={{width: '30%', color: 'rgba(51, 51, 51, 0.20)'}}>
              <Placeholder xs={7} />
            </Placeholder>
            <Placeholder animation="glow" style={{width: '30%', color: 'rgba(51, 51, 51, 0.20)'}}>
              <Placeholder xs={7} />
            </Placeholder>
            <Placeholder animation="glow" style={{width: '30%', color: 'rgba(51, 51, 51, 0.20)'}}>
              <Placeholder xs={7} />
            </Placeholder>
            <Placeholder animation="glow" style={{width: '5%', color: 'rgba(51, 51, 51, 0.20)'}}>
              <Placeholder xs={7} />
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
            <th className='table-head' style={{width: '20%', paddingLeft:'20px'}}>CODE</th>
            <th className='table-head' style={{width: '20%'}}>SCHOOLYEAR</th>
            <th className='table-head' style={{width: '20%'}}>ADVISER</th>
            <th className='table-head' style={{width: '15%'}}>GRADE LEVEL</th>
            <th className='table-head' style={{width: '15%'}}>TRACK</th>
            <th className='table-head' style={{width: '15%'}}>STUDENTS</th>
            <th className='table-head' style={{border: 'none'}}>ACTION</th>
          </tr>
        </thead>
        <tbody style={{cursor: 'pointer', }}>
        {[...props.sectionList].sort((a, b) => a.code.localeCompare(b.code)).map((section) =>(
              <tr key={section.code} style={{border: 'none'}}>
                <td className='table-body' style={{paddingLeft:'20px'}}>
                    {section.code}
                  </td>
                  <td className='table-body' style={{paddingLeft:'20px'}}>
                    {section.schoolyear}
                  </td>
                <td className='table-body'>
                    {section.adviser.userprofile.last_name}, {section.adviser.userprofile.first_name} {section.adviser.userprofile.middle_name}
                  </td>
                 <td className='table-body'>
                {section.gradelevel}
                 </td>
                 <td className='table-body'>
                {section.track}
                 </td>
                 <td className='table-body'>
                {section.students.length}
                 </td>
                <td className='table-body'>
                
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" style={{border: 'none', backgroundColor: '#e9ecef', color: 'rgba(51, 51, 51, 0.00)', width: '38px', height: '38px', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'center', marginLeft: '10px'}}>
                      <h2 style={{color: '#8A92A6', marginLeft: '12px', marginBottom: '15px'}}>...</h2>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                          <Dropdown.Item onClick={() => handleSectionSelection(section.code)}><h1 className='dropdown-item'>Manage Students</h1></Dropdown.Item>
                          {/* <Dropdown.Item><h1 className='dropdown-item'>Update Info</h1></Dropdown.Item> */}
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

Sections.propTypes = {
  sidebarState: PropTypes.string,
  setsidebarState: PropTypes.func.isRequired,
  subsidebarState: PropTypes.string,
  setsubsidebarState: PropTypes.func.isRequired,
  pageHeader: PropTypes.object,
  setpageHeader: PropTypes.func.isRequired,
  roomsListForTable: PropTypes.array,
  getRoomsList: PropTypes.func,
  setLoading: PropTypes.func,
  loadingState: PropTypes.string,
  setsectionState: PropTypes.func,
  getSectionList: PropTypes.func,
  sectionList: PropTypes.array,
  setSelectedsection: PropTypes.func,
  getSchoolYearList: PropTypes.func,
}

const mapStateToProps = (state) => ({
  sidebarState: state.main.sidebarState,
  subsidebarState: state.main.subsidebarState,
  pageHeader: state.main.pageHeader,
  roomsListForTable: state.main.roomsListForTable,
  loadingState: state.main.loadingState,
  sectionList: state.main.sectionList,
  });

export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setpageHeader, getRoomsList, setLoading, setsectionState, getSectionList, setSelectedsection, getSchoolYearList})(Sections))