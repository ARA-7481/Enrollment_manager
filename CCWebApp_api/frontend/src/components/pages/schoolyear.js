import React, { useState, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState, setpageHeader, setLoading, getSchoolYearList } from '../../redux/actions/main';

import { Card, Col, Table, Form, Dropdown, Button, Placeholder } from 'react-bootstrap';
import { Magnifier, New } from '../../assets/svg/clnsmpl-icon';

function SchoolYear(props) {

  useEffect(() => {
    if (props.schoolyearList.length == 0){
      props.setLoading('isLoading');
    }
    props.setsidebarState('schoolyear');
    props.setsubsidebarState(null);
    props.setpageHeader('Manage School Years', '', 'Initiate new school year & check school history');
    props.getSchoolYearList();
  }, []);

  return (
    <>
      <div style={{backgroundColor:'#e9ecef', borderTopLeftRadius:'8px', borderTopRightRadius:'8px'}}>

      <div style={{backgroundColor:'#ffffff', borderRadius:'8px'}}>
        <div style={{height: '81px', display: 'flex'}}>
          <h1 className='table-title'>School Year Archive</h1>
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
            <th className='table-head' style={{width: '30%', paddingLeft:'20px'}}>YEAR</th>
            <th className='table-head' style={{width: '30%'}}>PRINCIPAL</th>
            <th className='table-head' style={{width: '30%'}}>ASSISTANT PRINCIPAL</th>
            <th className='table-head' style={{width: '30%'}}>REMARKS</th>
            {/* <th className='table-head' style={{border: 'none'}}>ACTION</th> */}
          </tr>
        </thead>
        <tbody style={{cursor: 'pointer', }}>
        {[...props.schoolyearList].sort((a, b) => a.code.localeCompare(b.code)).map((schoolyear) =>(
              <tr key={schoolyear.code} style={{border: 'none'}}>
                <td className='table-body' style={{paddingLeft:'20px'}}>
                    {schoolyear.code}
                  </td>
                <td className='table-body'>
                    {schoolyear.principal.userprofile.last_name}, {schoolyear.principal.userprofile.first_name} {schoolyear.principal.userprofile.middle_name}
                  </td>
                <td className='table-body'>
                {schoolyear.assistantprincipal.userprofile.last_name}, {schoolyear.assistantprincipal.userprofile.first_name} {schoolyear.assistantprincipal.userprofile.middle_name}
                 </td>
                 <td className='table-body'>
                {schoolyear.description}
                 </td>
                {/* <td className='table-body'>
                
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" style={{border: 'none', backgroundColor: '#e9ecef', color: 'rgba(51, 51, 51, 0.00)', width: '38px', height: '38px', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'center', marginLeft: '10px'}}>
                      <h2 style={{color: '#8A92A6', marginLeft: '12px', marginBottom: '15px'}}>...</h2>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                          <Dropdown.Item><h1 className='dropdown-item'>Update Info</h1></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </td> */}
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

SchoolYear.propTypes = {
  sidebarState: PropTypes.string,
  subsidebarState: PropTypes.string,
  pageHeader: PropTypes.object,
  setsidebarState: PropTypes.func,
  setsubsidebarState: PropTypes.func,
  setLoading: PropTypes.func,
  loadingState: PropTypes.string,
  isLess800: PropTypes.bool,
  getSchoolYearList: PropTypes.func,
  schoolyearList: PropTypes.array,
}

const mapStateToProps = (state) => ({
  sidebarState: state.main.sidebarState,
  subsidebarState: state.main.subsidebarState,
  pageHeader: state.main.pageHeader,
  loadingState: state.main.loadingState,
  isLess800: state.main.isLess800,
  schoolyearList: state.main.schoolyearList,
  });

export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setpageHeader, setLoading, getSchoolYearList})(SchoolYear))