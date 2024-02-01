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

  


  useEffect(() => {
    if (props.classesListForTable.length == 0){
        props.setLoading('isLoading');
      }
    props.setsidebarState('class');
    props.setsubsidebarState(null);
    props.setclassState('list')
    props.setpageHeader('Manage Class', '', 'Add and update classes. Assign student, room and subjects');
  }, []);

  return (
      <>
      <div style={{backgroundColor:'#ffffff', display: 'flex', borderRadius:'8px', padding: '100px', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <div>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '24px'}}>
            <h1>Coming Soon</h1>
          </div>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '48px'}}>
            <h6 className='inter-500-16px'>This page is a work in progress. We'll let you know once this page is published. </h6>
          </div>
          <ComingSoon/>
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

export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setclassState, setpageHeader, getClassesList, setLoading})(Class))