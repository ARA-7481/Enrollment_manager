import React, { useState, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState, setpageHeader, getFaculty, setLoading, getTeacherdata } from '../../redux/actions/main';

import { Card, Col, Table, Form, Dropdown, Button, Placeholder } from 'react-bootstrap';
import { Magnifier, New } from '../../assets/svg/clnsmpl-icon';

function UsersTeachers(props) {

  const navigate = useNavigate();
  const [queryPosition, setQueryPosition] = useState('');
  const [sortStatus, setsortStatus] = useState ('Newest-Oldest')
  const [searchquery, setSearchquery] = useState('');
  const [postionquery, setPositionquery] = useState ('')
  const [positiondropdown, setPositiondropdown] = useState ('All Positions')
  const [value, setValue] = useState('');


  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSearch = (query) => {
    setSearchquery(query)
  };

  const handleSort = (sort) => {
    setsortStatus(sort)
  };

  const handlePosition = (position) => {
    setPositiondropdown(position)
    if (position === 'All Positions'){
      setPositionquery('')
    }
    else{
      setPositionquery(position)
    }
  };

  const handleViewinfo = (id) => {
    props.getTeacherdata(id)
    navigate('/admins/facultyinformationform');
  }

  useEffect(() => {
    if (props.facultyList.length == 0){
      props.setLoading('isLoading');
    }
    props.setsidebarState('users');
    props.setsubsidebarState('teachers');
    props.setpageHeader('Manage Faculty', '', 'Manage faculty here. Add, Update, etc.');
    props.getFaculty(postionquery,searchquery);
  }, [postionquery, searchquery]);

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
                <Form.Control type='search' placeholder="Search faculty name or faculty id..." value={value} onChange={handleChange} style={{border: 'none', width:'100%', minWidth: '145px'}}/>
              </Form.Group>
            </Form>
          
            <h1 className='inter-500-16px ' style={{paddingTop: '10px'}}>
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
            <h1 className='inter-500-16px ' style={{paddingTop: '10px', marginLeft: '20px'}}>
              Filter: 
            </h1>

            <Dropdown style={{width: '40%', minWidth: '1px', marginLeft: '10px'}}>
                    <Dropdown.Toggle id="dropdown-basic" 
                                    style={{border: 'none', backgroundColor: 'rgba(51, 51, 51, 0.00)', color: 'black', width: '100%',
                                            display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'space-between'}}>
                      <div style={{overflow: 'hidden'}}>{positiondropdown}</div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ width: '100%'}}>
                      {positiondropdown !== 'All Positions'  && <Dropdown.Item onClick={() => handlePosition('All Positions')}><div className="zooming-text">All Positions</div></Dropdown.Item>}
                      {positiondropdown !== 'Principal'  && <Dropdown.Item onClick={() => handlePosition('Principal')}><div className="zooming-text">Principal</div></Dropdown.Item>}
                      {positiondropdown !== 'Assistant Principal'  && <Dropdown.Item onClick={() => handlePosition('Assistant Principal')}><div className="zooming-text">Assistant Principal</div></Dropdown.Item>}
                      {positiondropdown !== 'Part-Time'  && <Dropdown.Item onClick={() => handlePosition('Part-Time')}><div className="zooming-text">Part-Time</div></Dropdown.Item>}
                      {positiondropdown !== 'Teacher-1'  && <Dropdown.Item onClick={() => handlePosition('Teacher-1')}><div className="zooming-text">Teacher-1</div></Dropdown.Item>}
                      {positiondropdown !== 'Teacher-2'  && <Dropdown.Item onClick={() => handlePosition('Teacher-2')}><div className="zooming-text">Teacher-2</div></Dropdown.Item>}
                      {positiondropdown !== 'Teacher-3'  && <Dropdown.Item onClick={() => handlePosition('Teacher-3')}><div className="zooming-text">Teacher-3</div></Dropdown.Item>}
                      {positiondropdown !== 'Laboratory Attendant'  && <Dropdown.Item onClick={() => handlePosition('Laboratory Attendant')}><div className="zooming-text">Laboratory Attendant</div></Dropdown.Item>}
                      {positiondropdown !== 'Unspecified'  && <Dropdown.Item onClick={() => handlePosition('Unspecified')}><div className="zooming-text">Unspecified</div></Dropdown.Item>}
                      </Dropdown.Menu>
              </Dropdown>
            
            </div>
        </div>
      

      <div style={{height: '40px', backgroundColor:'rgba(51, 51, 51, 0.00)', margin: '0px'}}>
      </div>

      <div style={{backgroundColor:'#ffffff', borderRadius:'8px'}}>
        <div style={{height: '81px', display: 'flex'}}>
          <h1 className='table-title'>List of Faculty</h1>
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
            <th className='table-head' style={{width: '30%', paddingLeft:'20px'}}>IDs</th>
            <th className='table-head' style={{width: '30%'}}>FULL NAME</th>
            <th className='table-head' style={{width: '30%'}}>POSITION</th>
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
                  {faculty.position}</td>
                <td className='table-body'>
                
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" style={{border: 'none', backgroundColor: '#e9ecef', color: 'rgba(51, 51, 51, 0.00)', width: '38px', height: '38px', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'center', marginLeft: '10px'}}>
                      <h2 style={{color: '#8A92A6', marginLeft: '12px', marginBottom: '15px'}}>...</h2>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => handleViewinfo(faculty.id)}><h1 className='dropdown-item'>View Information Sheet</h1></Dropdown.Item>
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

UsersTeachers.propTypes = {
  sidebarState: PropTypes.string,
  subsidebarState: PropTypes.string,
  pageHeader: PropTypes.object,
  facultyList: PropTypes.array,
  departmentsList: PropTypes.array,
  setsidebarState: PropTypes.func,
  setsubsidebarState: PropTypes.func,
  getFaculty: PropTypes.func,
  setLoading: PropTypes.func,
  loadingState: PropTypes.string,
  isLess800: PropTypes.bool,
  getTeacherdata: PropTypes.func,
}

const mapStateToProps = (state) => ({
  sidebarState: state.main.sidebarState,
  subsidebarState: state.main.subsidebarState,
  pageHeader: state.main.pageHeader,
  facultyList: state.main.facultyList,
  loadingState: state.main.loadingState,
  isLess800: state.main.isLess800,
  });

export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setpageHeader, getFaculty, setLoading, getTeacherdata})(UsersTeachers))