import React, { useState, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState, getStaff, setpageHeader, setLoading } from '../../redux/actions/main';

import { Card, Col, Table, Form, Dropdown, Button, Placeholder } from 'react-bootstrap';
import { Magnifier, New } from '../../assets/svg/clnsmpl-icon';

function UsersAdmin(props) {

  const [queryRole, setQueryRole] = useState('');

  const [sortStatus, setsortStatus] = useState ('Newest-Oldest')
  const [roleStatus, setroleStatus] = useState ('All Roles')

  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSearch = (query) => {
    props.getStaff(queryRole,query)
    props.setLoading('isLoading')
  };

  const handleSort = (sort) => {
    setsortStatus(sort)
  };

  const handleRole = (role) => {
    setroleStatus(role)
    if (role === 'All Roles'){
      setQueryRole('')
      props.getStaff('','')
    }
    else{
      setQueryRole(role)
      props.getStaff(role,'')
    }
  };
  
  useEffect(() => {
    props.setsidebarState('users');
    props.setsubsidebarState('admin');
    props.setpageHeader('Manage Admin & Staff', '', 'Manage Admin & Staff here. Add, Update, etc.');
    props.getStaff('','');
    props.setLoading('isLoading')
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
          <Form.Control type='search' placeholder="Search staff name or faculty id..." value={value} onChange={handleChange} style={{border: 'none', width:'100%'}}/>
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
            <div>{roleStatus}</div>
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ width: '100%'}}>
            {roleStatus !== 'All Roles'  && <Dropdown.Item onClick={() => handleRole('All Roles')}>All Roles</Dropdown.Item>}
            {roleStatus !== 'Admin'  && <Dropdown.Item onClick={() => handleRole('Admin')}>Admin</Dropdown.Item>}
            {roleStatus !== 'Staff'  && <Dropdown.Item onClick={() => handleRole('Staff')}>Staff</Dropdown.Item>}
            {roleStatus !== 'Registrar'  && <Dropdown.Item onClick={() => handleRole('Registrar')}>Registrar</Dropdown.Item>}
            {roleStatus !== 'Guidance'  && <Dropdown.Item onClick={() => handleRole('Guidance')}>Guidance</Dropdown.Item>}
            {roleStatus !== 'Not Specified'  && <Dropdown.Item onClick={() => handleRole('Not Specified')}>Not Specified</Dropdown.Item>}
          </Dropdown.Menu>
      </Dropdown>
    </div>
    

    <div style={{height: '40px', backgroundColor:'rgba(51, 51, 51, 0.00)', margin: '0px'}}>
    </div>

    <div style={{backgroundColor:'#ffffff', borderRadius:'8px'}}>
      <div style={{height: '81px', display: 'flex'}}>
        <h1 className='table-title'>List of Admin & Staff</h1>
      </div>
      {props.loadingState == 'isLoading' ?  
        <div style={{marginLeft: '20px', marginRight: '40px', marginTop: '7px'}}>
          <div style={{display:'flex', marginBottom: '27px'}}>
          <Placeholder animation="glow" style={{width: '15%', color: 'rgba(51, 51, 51, 0.20)'}}>
            <Placeholder xs={2} />
          </Placeholder>
          <Placeholder animation="glow" style={{width: '50%', color: 'rgba(51, 51, 51, 0.20)'}}>
            <Placeholder xs={2} />
          </Placeholder>
          <Placeholder animation="glow" style={{width: '35%', color: 'rgba(51, 51, 51, 0.20)'}}>
            <Placeholder xs={4} />
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
          <th className='table-head' style={{width: '15%', paddingLeft:'20px'}}>IDs</th>
          <th className='table-head' style={{width: '50%'}}>FULL NAME</th>
         <th className='table-head' style={{width: '29%'}}>ROLE</th>
          <th className='table-head'>ACTION</th>
        </tr>
      </thead>
      <tbody style={{cursor: 'pointer', }}>
        {[...props.staffList]
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
            ?.map((staff) =>(
            <tr key={staff.id} style={{border: 'none'}}>
              <td className='table-body' style={{paddingLeft:'20px'}}>
                {staff.id}</td>
              <td className='table-body'>
                {staff.userprofile.first_name} {staff.userprofile.last_name} {new Date() - new Date(staff.userprofile.date_joined) <= 3 * 24 * 60 * 60 * 1000 && <New/>}</td>
              <td className='table-body'>
                {staff.role}</td>
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
    }
    <div style={{height: '10px'}}>
      
    </div>
    </div>
    </div>
    
    </>
    );
}

UsersAdmin.propTypes = {
  sidebarState: PropTypes.string,
  subsidebarState: PropTypes.string,
  pageHeader: PropTypes.object,
  staffList: PropTypes.array.isRequired,
  setsidebarState: PropTypes.func.isRequired,
  setsubsidebarState: PropTypes.func.isRequired,
  getStaff: PropTypes.func.isRequired,
  setLoading: PropTypes.func,
  loadingState: PropTypes.string,
}

const mapStateToProps = (state) => ({
  sidebarState: state.main.sidebarState,
  subsidebarState: state.main.subsidebarState,
  pageHeader: state.main.pageHeader,
  staffList: state.main.staffList,
  loadingState: state.main.loadingState,
  });

export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, getStaff, setpageHeader, setLoading})(UsersAdmin))