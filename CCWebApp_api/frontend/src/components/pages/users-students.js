import React, { useState, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState, setpageHeader, getStudents } from '../../redux/actions/main';

import { Card, Col, Table } from 'react-bootstrap';

import {Magnifier, Draft, ForEvaluation, EvaluationInProgress, EvaluationComplete, PendingPayment, PaymentReceived, Enrolled, VerificationFailed, New} from '../../assets/svg/clnsmpl-icon';

function UsersStudents(props) {

  useEffect(() => {
    props.setsidebarState('users');
    props.setsubsidebarState('students');
    props.setpageHeader('Manage Students', '{semester} {SY: 20xx-20xx}', 'Manage students here. Enroll, Update, Evaluate etc.');
    props.getStudents();
  }, []);

  return (
      <>
      <div style={{backgroundColor:'#e9ecef', borderTopLeftRadius:'8px', borderTopRightRadius:'8px'}}>
      <div style={{backgroundColor:'#ffffff', height: '72px', borderRadius:'8px', display: 'flex', alignItems: 'center', padding: '24px'}}>
        
        <Magnifier/>

      </div>
      

      <div style={{height: '40px', backgroundColor:'rgba(51, 51, 51, 0.00)', margin: '0px'}}>
      </div>

      <div style={{backgroundColor:'#ffffff', borderRadius:'8px'}}>
        <div style={{height: '81px', display: 'flex'}}>
          <h1 style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '30px', padding: '24px'}}>List of Students</h1>
        </div>
        <Table hover style={{border: 'none'}}>
        <thead >
          <tr>
            <th style={{color:'#8A92A6', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '16px', backgroundColor: '#F5F6FA', border: 'none', width: '18%'}}>ID</th>
            <th style={{color:'#8A92A6', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '16px', backgroundColor: '#F5F6FA', border: 'none', width: '25%'}}>FULL NAME</th>
            <th style={{color:'#8A92A6', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '16px', backgroundColor: '#F5F6FA', border: 'none'}}>COURSE</th>
            <th style={{color:'#8A92A6', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '16px', backgroundColor: '#F5F6FA', border: 'none', width: '10%'}}>DEPARTMENT</th>
            <th style={{color:'#8A92A6', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '16px', backgroundColor: '#F5F6FA', border: 'none'}}>YEAR</th>
            <th style={{color:'#8A92A6', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '16px', backgroundColor: '#F5F6FA', border: 'none'}}>STATUS</th>
            <th style={{color:'#8A92A6', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '16px', backgroundColor: '#F5F6FA', border: 'none'}}>ACTION</th>
          </tr>
        </thead>
        <tbody style={{cursor: 'pointer', }}>
          {[...props.studentsList]
            .sort((a,b) => new Date(b.userprofile.date_joined) - new Date(a.userprofile.date_joined))
            ?.map((student) =>(
              <tr key={student.id} style={{border: 'none'}}>
                <td style={{color:'#232D42', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '16px', border: 'none', height:'62px', verticalAlign: 'middle'}}>
                  {student.id}</td>
                <td style={{color:'#232D42', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '16px', border: 'none', height:'62px', verticalAlign: 'middle'}}>
                  {student.userprofile.first_name} {student.userprofile.last_name} {new Date() - new Date(student.userprofile.date_joined) <= 3 * 24 * 60 * 60 * 1000 && <New/>}</td>
                <td style={{color:'#232D42', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '16px', border: 'none', height:'62px', verticalAlign: 'middle'}}>
                  {student.course.code}</td>
                <td style={{color:'#232D42', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '16px', border: 'none', height:'62px', verticalAlign: 'middle'}}>
                  {student.course.department.code}</td>
                <td style={{color:'#232D42', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '16px', border: 'none', height:'62px', verticalAlign: 'middle'}}>
                  {student.yearlevel}</td>
                <td style={{color:'#232D42', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '16px', border: 'none', height:'62px', verticalAlign: 'middle'}}>
                  
                  {(() => {
                    switch(student.status) {
                      case 'Verification Failed': return <VerificationFailed/>;
                      case 'For Evaluation': return <ForEvaluation/>;
                      case 'Evaluation In Progress': return <EvaluationInProgress/>;
                      case 'Evaluation Complete': return <EvaluationComplete/>;
                      case 'Pending Payment': return <PendingPayment/>;
                      case 'Payment Received': return <PaymentReceived/>;
                      case 'Enrolled': return <Enrolled/>;
                      default: return <Draft/>;
                    }
                    })()}
                    
                  </td>
                <td style={{color:'#232D42', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '16px', border: 'none', height:'62px', verticalAlign: 'middle'}}>
                  ...</td>
              </tr>
          ))}
        </tbody>

        </Table>
      <div style={{height: '10px'}}>
        
      </div>
      </div>
      </div>
      
      </>
    );
}

UsersStudents.propTypes = {
  sidebarState: PropTypes.string,
  subsidebarState: PropTypes.string,
  pageHeader: PropTypes.object,
  studentsList: PropTypes.array.isRequired,
  setsidebarState: PropTypes.func.isRequired,
  setsubsidebarState: PropTypes.func.isRequired,
  setpageHeader: PropTypes.func.isRequired,
  getStudents: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  sidebarState: state.main.sidebarState,
  subsidebarState: state.main.subsidebarState,
  pageHeader: state.main.pageHeader,
  studentsList: state.main.studentsList,
  });

export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setpageHeader, getStudents})(UsersStudents))