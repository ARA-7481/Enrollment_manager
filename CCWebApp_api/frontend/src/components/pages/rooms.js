import React, { useState, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState, setpageHeader, setLoading, getRoomsList, setroomState } from '../../redux/actions/main';

import { Col, Table, Dropdown, Form, Placeholder } from 'react-bootstrap';
import { Magnifier } from '../../assets/svg/clnsmpl-icon';

function Rooms(props) {
  const [sortStatus, setsortStatus] = useState ('Newest-Oldest')
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSearch = (query) => {
    props.getRoomsList(query)
    props.setLoading('isLoading')
  };

  const handleSort = (sort) => {
    setsortStatus(sort)
  };


  useEffect(() => {
    if (props.roomsListForTable.length == 0){
      props.setLoading('isLoading');
    }
    props.setsidebarState('rooms');
    props.setsubsidebarState(null);
    props.setroomState('list');
    props.setpageHeader('Manage Rooms', '', 'Add and Update Rooms');
    props.getRoomsList('');
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
          <Form.Control type='search' placeholder="Search Room" value={value} onChange={handleChange} style={{border: 'none', width:'100%'}}/>
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

    </div>
    <div style={{height: '40px', backgroundColor:'rgba(51, 51, 51, 0.00)', margin: '0px'}}>
    </div>
    <div style={{backgroundColor:'#ffffff', borderRadius:'8px'}}>
    <div style={{height: '81px', display: 'flex'}}>
      <h1 className='table-title'>List of Rooms</h1>
    </div>

    {props.loadingState == 'isLoading' ?  
        <div style={{marginLeft: '20px', marginRight: '40px', marginTop: '7px'}}>
          <div style={{display:'flex', marginBottom: '27px'}}>
          <Placeholder animation="glow" style={{width: '20%', color: 'rgba(51, 51, 51, 0.20)'}}>
            <Placeholder xs={5} />
          </Placeholder>
          <Placeholder animation="glow" style={{width: '60%', color: 'rgba(51, 51, 51, 0.20)'}}>
            <Placeholder xs={5} />
          </Placeholder>
          <Placeholder animation="glow" style={{width: '50%', color: 'rgba(51, 51, 51, 0.20)'}}>
            <Placeholder xs={5} />
          </Placeholder>
          <Placeholder animation="glow" style={{width: '40%', color: 'rgba(51, 51, 51, 0.20)'}}>
            <Placeholder xs={5} />
          </Placeholder>
          <Placeholder animation="glow" style={{width: '10%', color: 'rgba(51, 51, 51, 0.20)'}}>
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
            <th className='table-head' style={{width: '30%'}}>CAPACITY</th>
            <th className='table-head' style={{width: '30%'}}>TYPE</th>
            <th className='table-head'>ACTION</th>
          </tr>
        </thead>
        <tbody style={{cursor: 'pointer', }}>
        {[...props.roomsListForTable]
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
              ?.map((room) =>(
                <tr key={room.code} style={{border: 'none'}}>
                  <td className='table-body' style={{paddingLeft:'20px'}}>
                    {room.code}</td>
                  <td className='table-body'>
                    {room.description}</td>
                  <td className='table-body'>
                    {room.capacity ? room.capacity : '-'}</td>
                  <td className='table-body'>
                    {room.type? room.type : '-'}</td>
                  <td className='table-body'>
                  <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic" style={{border: 'none', backgroundColor: '#e9ecef', color: 'rgba(51, 51, 51, 0.00)', width: '38px', height: '38px', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'center', marginLeft: '10px'}}>
                        <h2 style={{color: '#8A92A6', marginLeft: '12px', marginBottom: '15px'}}>...</h2>
                      </Dropdown.Toggle>
    
                      <Dropdown.Menu>
                            <Dropdown.Item><h1 className='dropdown-item'>View Details</h1></Dropdown.Item>
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

Rooms.propTypes = {
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
  roomState: PropTypes.string,
  setroomState: PropTypes.func,
  
}

const mapStateToProps = (state) => ({
  sidebarState: state.main.sidebarState,
  subsidebarState: state.main.subsidebarState,
  pageHeader: state.main.pageHeader,
  roomsListForTable: state.main.roomsListForTable,
  loadingState: state.main.loadingState,
  roomState: state.main.roomState,
  });

export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setpageHeader, getRoomsList, setLoading, setroomState})(Rooms))