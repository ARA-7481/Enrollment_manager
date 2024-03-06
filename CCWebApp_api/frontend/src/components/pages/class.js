import React, { useState, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState, setclassState, setpageHeader, getClassesList, setLoading } from '../../redux/actions/main';

import { Col, Table, Dropdown, Form, Placeholder } from 'react-bootstrap';
import { Magnifier } from '../../assets/svg/clnsmpl-icon';
import {ComingSoon} from '../../assets/svg/clnsmpl-icon';

function Class(props) {

  

  const [sortStatus, setsortStatus] = useState ('Newest-Oldest')
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSearch = (query) => {
   
    props.setLoading('isLoading')
  };

  const handleSort = (sort) => {
    setsortStatus(sort)
  };

  


  useEffect(() => {
    if (props.classesListForTable.length == 0){
        props.setLoading('isLoading');
      }
    props.setsidebarState('class');
    props.setsubsidebarState(null);
    props.setclassState('list')
    props.setpageHeader('Manage Class', '', 'Add and update classes.');
    props.getClassesList('','');
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
            
          </div>
        </div>
      

        <div style={{height: '40px', backgroundColor:'rgba(51, 51, 51, 0.00)', margin: '0px'}}>
        </div>

      <div style={{backgroundColor:'#ffffff', borderRadius:'8px'}}>
        <div style={{height: '81px', display: 'flex'}}>
          <h1 className='table-title'>Classes List</h1>
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
            <th className='table-head' style={{width: '15%', paddingLeft:'20px'}}>CODE</th>
            <th className='table-head' style={{width: '35%'}}>DESCRIPTION</th>
            <th className='table-head' style={{width: '10%'}}>SECTION</th>
            <th className='table-head' style={{width: '10%'}}>SUBJECT</th>
            <th className='table-head' style={{width: '40%'}}>TEACHER</th>
            <th className='table-head' style={{width: '10%'}}>QUARTERS</th>
            <th className='table-head' style={{width: '15%'}}>STRAND</th>
            <th className='table-head' style={{border: 'none'}}>ACTION</th>
          </tr>
        </thead>
        <tbody style={{cursor: 'pointer', }}>
        {[...props.classesListForTable].sort((a, b) => a.code.localeCompare(b.code)).map((classes) =>(
              <tr key={classes.code} style={{border: 'none'}}>
                <td className='table-body' style={{paddingLeft:'20px'}}>
                    {classes.code}
                  </td>
                  <td className='table-body'>
                    {classes.description}
                  </td>
                 <td className='table-body'>
                    {classes.section.code}
                 </td>
                 <td className='table-body'>
                    {classes.subject}
                 </td>
                 <td className='table-body'>
                    {classes.teacher.userprofile.last_name}, {classes.teacher.userprofile.first_name} {classes.teacher.userprofile.middle_name}
                 </td>
                 <td className='table-body'>
                    {classes.span}
                 </td>
                 <td className='table-body'>
                    {classes.strand}
                 </td>
                <td className='table-body'>
                
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" style={{border: 'none', backgroundColor: '#e9ecef', color: 'rgba(51, 51, 51, 0.00)', width: '38px', height: '38px', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'center', marginLeft: '10px'}}>
                      <h2 style={{color: '#8A92A6', marginLeft: '12px', marginBottom: '15px'}}>...</h2>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                          <Dropdown.Item><h1 className='dropdown-item'>Update Info</h1></Dropdown.Item>
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
  setsidebarState: PropTypes.func,
  subsidebarState: PropTypes.string,
  setsubsidebarState: PropTypes.func,
  classState: PropTypes.string,
  pageHeader: PropTypes.object,
  setpageHeader: PropTypes.func.isRequired,
  classesListForTable: PropTypes.array,
  getClassesList: PropTypes.func,
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
  loadingState: state.main.loadingState,
  isLess800: state.main.isLess800,
  });

export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setclassState, setpageHeader, getClassesList, setLoading})(Class))