import React, { useState, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState, setpageHeader, setLoading, getSubjectsList, setsubjectState } from '../../redux/actions/main';

import {ComingSoon} from '../../assets/svg/clnsmpl-icon';

import { Col, Table, Dropdown, Form, Placeholder } from 'react-bootstrap';
import { Magnifier } from '../../assets/svg/clnsmpl-icon';

function Subjects(props) {
  const [sortStatus, setsortStatus] = useState ('Newest-Oldest')
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSearch = (query) => {
    props.getSubjectsList(query)
    props.setLoading('isLoading')
  };

  const handleSort = (sort) => {
    setsortStatus(sort)
  };


  useEffect(() => {
    if (props.subjectsListForTable.length == 0){
      props.setLoading('isLoading');
    }
    props.setsidebarState('subjects');
    props.setsubsidebarState(null);
    props.setsubjectState('list');
    props.setpageHeader('Manage Subjects', '', 'View, add and update subjects.');
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

Subjects.propTypes = {
  sidebarState: PropTypes.string,
  setsidebarState: PropTypes.func.isRequired,
  subsidebarState: PropTypes.string,
  setsubsidebarState: PropTypes.func.isRequired,
  pageHeader: PropTypes.object,
  setpageHeader: PropTypes.func.isRequired,
  departmentsList: PropTypes.array.isRequired,
  subjectsListForTable: PropTypes.array,
  getSubjectsList: PropTypes.func,
  setLoading: PropTypes.func,
  loadingState: PropTypes.string,
  subjectState: PropTypes.string,
  setsubjectState: PropTypes.func,
}

const mapStateToProps = (state) => ({
  sidebarState: state.main.sidebarState,
  subsidebarState: state.main.subsidebarState,
  pageHeader: state.main.pageHeader,
  departmentsList: state.main.departmentsList,
  subjectsListForTable: state.main.subjectsListForTable,
  loadingState: state.main.loadingState,
  subjectState: state.main.subjectState,
  });

export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setpageHeader, getSubjectsList, setLoading, setsubjectState})(Subjects))