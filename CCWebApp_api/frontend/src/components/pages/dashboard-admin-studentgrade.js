import React, { useState, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState, setpageHeader, getStudentdata, setSelectedBG } from '../../redux/actions/main';

import { Placeholder, Table, Accordion } from 'react-bootstrap';
import { Draft, ForEvaluation, EvaluationInProgress, EvaluationComplete, PendingPayment, PaymentReceived, Enrolled, VerificationFailed } from '../../assets/svg/clnsmpl-icon';
import { set } from 'lodash';


function Studentgradesadmin(props) {

  const [g7, setG7] = useState([]);
  const [g8, setG8] = useState([]);
  const [g9, setG9] = useState([]);
  const [g10, setG10] = useState([]);
  const [g11, setG11] = useState([]);
  const [g12, setG12] = useState([]);

  const [avatar, setAvatar] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [id, setId] = useState();
  const [status, setStatus] = useState();
  const [strand, setStrand] = useState();
  const [track, setTrack] = useState();
  const [gradelevel, setGradelevel] = useState();

  useEffect(() => {
    props.setpageHeader(`Grade Archive`, '', 'Assess the grades of the student for grade level promotion.');
    props.setsubsidebarState('student-grade');
  }, []);

  useEffect(() => {
    try{
    const grade7Items = props.studentData.related_grade_entities.filter(item => {
        if (item.in_class && item.in_class.section) {
           return item.in_class.section.gradelevel === "Grade 7";
        }
        return false;
        });
    const grade8Items = props.studentData.related_grade_entities.filter(item => {
        if (item.in_class && item.in_class.section) {
          return item.in_class.section.gradelevel === "Grade 8";
        }
        return false;
      });
    const grade9Items = props.studentData.related_grade_entities.filter(item => {
        if (item.in_class && item.in_class.section) {
          return item.in_class.section.gradelevel === "Grade 9";
        }
        return false;
      });
    const grade10Items = props.studentData.related_grade_entities.filter(item => {
        if (item.in_class && item.in_class.section) {
          return item.in_class.section.gradelevel === "Grade 10";
        }
        return false;
      });
    const grade11Items = props.studentData.related_grade_entities.filter(item => {
        if (item.in_class && item.in_class.section) {
          return item.in_class.section.gradelevel === "Grade 11";
        }
        return false;
      });
    const grade12Items = props.studentData.related_grade_entities.filter(item => {
        if (item.in_class && item.in_class.section) {
          return item.in_class.section.gradelevel === "Grade 12";
        }
        return false;
      });
    setG7(grade7Items);
    setG8(grade8Items);
    setG9(grade9Items);
    setG10(grade10Items);
    setG11(grade11Items);
    setG12(grade12Items);
    }catch(error){}
  }, [props.studentData.related_grade_entities]);

  useEffect(() => {
    try{
        setAvatar(props.studentData.userprofile.avatar)
        setFirstname(props.studentData.userprofile.first_name)
        setLastname(props.studentData.userprofile.last_name)
        setId(props.studentData.id)
        setStatus(props.studentData.status)
        setStrand(props.studentData.strand)
        setTrack(props.studentData.track)
        setGradelevel(props.studentData.gradelevel)
    }catch(error){}
  }, [props.studentData]);

  return (
      <>
            <div style={{backgroundColor:'#e9ecef', borderTopLeftRadius:'8px', borderTopRightRadius:'8px', width: '100%'}}> 
                
                <div style={{backgroundColor: 'white', borderRadius: '8px', padding: '12px'}}>
                <div style={{backgroundColor:'#ffffff', height: '124px', borderRadius:'8px', display: 'flex', alignItems: 'center', padding: '24px'}}>
                    <div style={{transform: 'translate( 0px, 0px)'}}>
                        <img className="circular-avatar" src={avatar} alt="description" />
                    </div>

                    <div style={{marginLeft: '24px'}}>
                        <div style={{display: 'flex'}}>
                        <h1 className='inter-700-28px'>{firstname} {lastname}</h1>
                        <div style={{marginLeft: '8px', marginTop: '3px'}}>
                            {id && (() => {
                                    switch(status){
                                        case 'Draft':
                                            return <Draft/>
                                        case 'For Evaluation':
                                            return <ForEvaluation/>
                                        case 'Evaluation In Progress':
                                            return <EvaluationInProgress/>
                                        case 'Evaluation Complete':
                                            return <EvaluationComplete/>
                                        case 'Pending Payment':
                                            return <PendingPayment/>
                                        case 'Payment Received':
                                            return <PaymentReceived/>
                                        case 'Enrolled':
                                            return <Enrolled/>
                                        case 'Verification Failed':
                                            return <VerificationFailed/>
                                        default: 
                                            return <></>
                                    }
                                })()}
                        </div>
                        </div>
                        {id}

                        <div style={{display: 'flex'}}>
                            {id && <h1 className='inter-400-16px-dark' style={{marginRight: '8px'}}>{gradelevel} </h1> }
                            {strand && <h1 className='inter-400-16px' style={{marginRight: '8px'}}> - {strand}</h1> }
                            {track && <h1 className='inter-400-16px' style={{marginRight: '8px'}}> - {track}</h1> }
                            
                        </div>
                    </div>
                </div>

                <h1 className='card-title' style={{marginTop: '12px', marginLeft: '24px'}}>Grade Archive</h1>
                <Accordion >
                <Accordion.Item eventKey="1">
                <Accordion.Header >
                    <h1 className='inter-400-16px-dark' style={{marginTop: '12px'}}>GRADE 7</h1>
                </Accordion.Header>
                    {g7.length > 0 ? 
                    <>
                    <Accordion.Body>
                        <Table>
                        <thead>
                            <tr>
                            <th className='table-head' style={{width: '30%', paddingLeft:'20px'}}>SUBJECT</th>
                            <th className='table-head' style={{width: '20%'}}>TEACHER</th>
                            <th className='table-head' style={{width: '8%'}}>Q1</th>
                            <th className='table-head' style={{width: '8%'}}>Q2</th>
                            <th className='table-head' style={{width: '8%'}}>Q3</th>
                            <th className='table-head' style={{width: '8%'}}>Q4</th>
                            <th className='table-head' style={{width: '8%'}}>AVERAGE</th>
                            <th className='table-head' style={{width: '20%'}}>REMARKS</th>
                            </tr>
                            </thead>
                            <tbody>
                            {g7.sort((a, b) => a.in_class.subject.localeCompare(b.in_class.subject))?.map((gradeentity) => (
                                <tr key={gradeentity.id}>
                                    <td className='table-body' style={{ paddingLeft: '20px' }}>
                                        {gradeentity.in_class.subject}
                                    </td>
                                    <td className='table-body'>
                                        {gradeentity.in_class.teacher.userprofile.last_name} {` `}
                                        {gradeentity.in_class.teacher.userprofile.first_name[0]}. {` `}
                                        {gradeentity.in_class.teacher.userprofile.middle_name[0]}.
                                    </td>
                                    <td className='table-body' >
                                        {gradeentity.quarter1}
                                    </td>
                                    <td className='table-body' >
                                        {gradeentity.quarter2}
                                    </td>
                                    <td className='table-body' >
                                        {gradeentity.quarter3}
                                    </td>
                                    <td className='table-body' >
                                        {gradeentity.quarter4}
                                    </td>
                                    <td className='table-body'>
                                    { 
                                        ((gradeentity.quarter1 !== 0 ? gradeentity.quarter1 : 0) +
                                        (gradeentity.quarter2 !== 0 ? gradeentity.quarter2 : 0) +
                                        (gradeentity.quarter3 !== 0 ? gradeentity.quarter3 : 0) +
                                        (gradeentity.quarter4 !== 0 ? gradeentity.quarter4 : 0)) / 
                                        ((gradeentity.quarter1 !== 0 ? 1 : 0) +
                                        (gradeentity.quarter2 !== 0 ? 1 : 0) +
                                        (gradeentity.quarter3 !== 0 ? 1 : 0) +
                                        (gradeentity.quarter4 !== 0 ? 1 : 0)).toFixed(2)
                                       
                                    }
                                    </td>
                                    <td className='table-body' >
                                        <h1 className='inter-400-16px-dark' style={{color:  gradeentity.remarks==="Ongoing"?'#0047AB':
                                                                                            gradeentity.remarks==="Passed"?'green':
                                                                                            gradeentity.remarks==="Failed"?'red':
                                                                                        'black'}}>
                                            {gradeentity.remarks}
                                        </h1>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </Accordion.Body>
                     </> : <><Accordion.Body>No Available Gradesheet Detected</Accordion.Body></>
                     }
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                <Accordion.Header >
                    <h1 className='inter-400-16px-dark' style={{marginTop: '12px'}}>GRADE 8</h1>
                </Accordion.Header>
                    {g8.length > 0 ? 
                    <>
                    <Accordion.Body>
                        <Table>
                        <thead>
                            <tr>
                            <th className='table-head' style={{width: '30%', paddingLeft:'20px'}}>SUBJECT</th>
                            <th className='table-head' style={{width: '20%'}}>TEACHER</th>
                            <th className='table-head' style={{width: '8%'}}>Q1</th>
                            <th className='table-head' style={{width: '8%'}}>Q2</th>
                            <th className='table-head' style={{width: '8%'}}>Q3</th>
                            <th className='table-head' style={{width: '8%'}}>Q4</th>
                            <th className='table-head' style={{width: '8%'}}>AVERAGE</th>
                            <th className='table-head' style={{width: '20%'}}>REMARKS</th>
                            <th className='table-head' style={{width: '20%'}}>STATUS</th>
                            </tr>
                            </thead>
                            <tbody>
                            {g8.sort((a, b) => a.in_class.subject.localeCompare(b.in_class.subject))?.map((gradeentity) => (
                                <tr key={gradeentity.id}>
                                    <td className='table-body' style={{ paddingLeft: '20px' }}>
                                        {gradeentity.in_class.subject}
                                    </td>
                                    <td className='table-body'>
                                        {gradeentity.in_class.teacher.userprofile.last_name} {` `}
                                        {gradeentity.in_class.teacher.userprofile.first_name[0]}. {` `}
                                        {gradeentity.in_class.teacher.userprofile.middle_name[0]}.
                                    </td>
                                    <td className='table-body' >
                                        {gradeentity.quarter1}
                                    </td>
                                    <td className='table-body' >
                                        {gradeentity.quarter2}
                                    </td>
                                    <td className='table-body' >
                                        {gradeentity.quarter3}
                                    </td>
                                    <td className='table-body' >
                                        {gradeentity.quarter4}
                                    </td>
                                    <td className='table-body'>
                                    { 
                                        ((gradeentity.quarter1 !== 0 ? gradeentity.quarter1 : 0) +
                                        (gradeentity.quarter2 !== 0 ? gradeentity.quarter2 : 0) +
                                        (gradeentity.quarter3 !== 0 ? gradeentity.quarter3 : 0) +
                                        (gradeentity.quarter4 !== 0 ? gradeentity.quarter4 : 0)) / 
                                        ((gradeentity.quarter1 !== 0 ? 1 : 0) +
                                        (gradeentity.quarter2 !== 0 ? 1 : 0) +
                                        (gradeentity.quarter3 !== 0 ? 1 : 0) +
                                        (gradeentity.quarter4 !== 0 ? 1 : 0)).toFixed(2)
                                       
                                    }
                                    </td>
                                    <td className='table-body' >
                                        {gradeentity.remarks}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </Accordion.Body>
                     </>: <><Accordion.Body>No Available Gradesheet Detected</Accordion.Body></>
                     }
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                <Accordion.Header >
                    <h1 className='inter-400-16px-dark' style={{marginTop: '12px'}}>GRADE 9</h1>
                </Accordion.Header>
                    {g9.length > 0 ? 
                    <>
                    <Accordion.Body>
                        <Table>
                        <thead>
                            <tr>
                            <th className='table-head' style={{width: '30%', paddingLeft:'20px'}}>SUBJECT</th>
                            <th className='table-head' style={{width: '20%'}}>TEACHER</th>
                            <th className='table-head' style={{width: '8%'}}>Q1</th>
                            <th className='table-head' style={{width: '8%'}}>Q2</th>
                            <th className='table-head' style={{width: '8%'}}>Q3</th>
                            <th className='table-head' style={{width: '8%'}}>Q4</th>
                            <th className='table-head' style={{width: '8%'}}>AVERAGE</th>
                            <th className='table-head' style={{width: '20%'}}>REMARKS</th>
                            <th className='table-head' style={{width: '20%'}}>STATUS</th>
                            </tr>
                            </thead>
                            <tbody>
                            {g9.sort((a, b) => a.in_class.subject.localeCompare(b.in_class.subject))?.map((gradeentity) => (
                                <tr key={gradeentity.id}>
                                    <td className='table-body' style={{ paddingLeft: '20px' }}>
                                        {gradeentity.in_class.subject}
                                    </td>
                                    <td className='table-body'>
                                        {gradeentity.in_class.teacher.userprofile.last_name} {` `}
                                        {gradeentity.in_class.teacher.userprofile.first_name[0]}. {` `}
                                        {gradeentity.in_class.teacher.userprofile.middle_name[0]}.
                                    </td>
                                    <td className='table-body' >
                                        {gradeentity.quarter1}
                                    </td>
                                    <td className='table-body' >
                                        {gradeentity.quarter2}
                                    </td>
                                    <td className='table-body' >
                                        {gradeentity.quarter3}
                                    </td>
                                    <td className='table-body' >
                                        {gradeentity.quarter4}
                                    </td>
                                    <td className='table-body'>
                                    { 
                                        ((gradeentity.quarter1 !== 0 ? gradeentity.quarter1 : 0) +
                                        (gradeentity.quarter2 !== 0 ? gradeentity.quarter2 : 0) +
                                        (gradeentity.quarter3 !== 0 ? gradeentity.quarter3 : 0) +
                                        (gradeentity.quarter4 !== 0 ? gradeentity.quarter4 : 0)) / 
                                        ((gradeentity.quarter1 !== 0 ? 1 : 0) +
                                        (gradeentity.quarter2 !== 0 ? 1 : 0) +
                                        (gradeentity.quarter3 !== 0 ? 1 : 0) +
                                        (gradeentity.quarter4 !== 0 ? 1 : 0)).toFixed(2)
                                       
                                    }
                                    </td>
                                    <td className='table-body' >
                                        {gradeentity.remarks}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </Accordion.Body>
                     </>: <><Accordion.Body>No Available Gradesheet Detected</Accordion.Body></>
                     }
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                <Accordion.Header >
                    <h1 className='inter-400-16px-dark' style={{marginTop: '12px'}}>GRADE 10</h1>
                </Accordion.Header>
                    {g10.length > 0 ? 
                    <>
                    <Accordion.Body>
                        <Table>
                        <thead>
                            <tr>
                            <th className='table-head' style={{width: '30%', paddingLeft:'20px'}}>SUBJECT</th>
                            <th className='table-head' style={{width: '20%'}}>TEACHER</th>
                            <th className='table-head' style={{width: '8%'}}>Q1</th>
                            <th className='table-head' style={{width: '8%'}}>Q2</th>
                            <th className='table-head' style={{width: '8%'}}>Q3</th>
                            <th className='table-head' style={{width: '8%'}}>Q4</th>
                            <th className='table-head' style={{width: '8%'}}>AVERAGE</th>
                            <th className='table-head' style={{width: '20%'}}>REMARKS</th>
                            <th className='table-head' style={{width: '20%'}}>STATUS</th>
                            </tr>
                            </thead>
                            <tbody>
                            {g10.sort((a, b) => a.in_class.subject.localeCompare(b.in_class.subject))?.map((gradeentity) => (
                                <tr key={gradeentity.id}>
                                    <td className='table-body' style={{ paddingLeft: '20px' }}>
                                        {gradeentity.in_class.subject}
                                    </td>
                                    <td className='table-body'>
                                        {gradeentity.in_class.teacher.userprofile.last_name} {` `}
                                        {gradeentity.in_class.teacher.userprofile.first_name[0]}. {` `}
                                        {gradeentity.in_class.teacher.userprofile.middle_name[0]}.
                                    </td>
                                    <td className='table-body' >
                                        {gradeentity.quarter1}
                                    </td>
                                    <td className='table-body' >
                                        {gradeentity.quarter2}
                                    </td>
                                    <td className='table-body' >
                                        {gradeentity.quarter3}
                                    </td>
                                    <td className='table-body' >
                                        {gradeentity.quarter4}
                                    </td>
                                    <td className='table-body'>
                                    { 
                                        ((gradeentity.quarter1 !== 0 ? gradeentity.quarter1 : 0) +
                                        (gradeentity.quarter2 !== 0 ? gradeentity.quarter2 : 0) +
                                        (gradeentity.quarter3 !== 0 ? gradeentity.quarter3 : 0) +
                                        (gradeentity.quarter4 !== 0 ? gradeentity.quarter4 : 0)) / 
                                        ((gradeentity.quarter1 !== 0 ? 1 : 0) +
                                        (gradeentity.quarter2 !== 0 ? 1 : 0) +
                                        (gradeentity.quarter3 !== 0 ? 1 : 0) +
                                        (gradeentity.quarter4 !== 0 ? 1 : 0)).toFixed(2)
                                       
                                    }
                                    </td>
                                    <td className='table-body' >
                                        {gradeentity.remarks}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </Accordion.Body>
                     </>: <><Accordion.Body>No Available Gradesheet Detected</Accordion.Body></>
                     }
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                <Accordion.Header >
                    <h1 className='inter-400-16px-dark' style={{marginTop: '12px'}}>GRADE 11</h1>
                </Accordion.Header>
                    {g11.length > 0 ? 
                    <>
                    <Accordion.Body>
                        <Table>
                        <thead>
                            <tr>
                            <th className='table-head' style={{width: '30%', paddingLeft:'20px'}}>SUBJECT</th>
                            <th className='table-head' style={{width: '20%'}}>TEACHER</th>
                            <th className='table-head' style={{width: '8%'}}>Q1</th>
                            <th className='table-head' style={{width: '8%'}}>Q2</th>
                            <th className='table-head' style={{width: '8%'}}>Q3</th>
                            <th className='table-head' style={{width: '8%'}}>Q4</th>
                            <th className='table-head' style={{width: '8%'}}>AVERAGE</th>
                            <th className='table-head' style={{width: '20%'}}>REMARKS</th>
                            <th className='table-head' style={{width: '20%'}}>STATUS</th>
                            </tr>
                            </thead>
                            <tbody>
                            {g11.sort((a, b) => a.in_class.subject.localeCompare(b.in_class.subject))?.map((gradeentity) => (
                                <tr key={gradeentity.id}>
                                    <td className='table-body' style={{ paddingLeft: '20px' }}>
                                        {gradeentity.in_class.subject}
                                    </td>
                                    <td className='table-body'>
                                        {gradeentity.in_class.teacher.userprofile.last_name} {` `}
                                        {gradeentity.in_class.teacher.userprofile.first_name[0]}. {` `}
                                        {gradeentity.in_class.teacher.userprofile.middle_name[0]}.
                                    </td>
                                    <td className='table-body' >
                                        {gradeentity.quarter1}
                                    </td>
                                    <td className='table-body' >
                                        {gradeentity.quarter2}
                                    </td>
                                    <td className='table-body' >
                                        {gradeentity.quarter3}
                                    </td>
                                    <td className='table-body' >
                                        {gradeentity.quarter4}
                                    </td>
                                    <td className='table-body'>
                                    { 
                                        ((gradeentity.quarter1 !== 0 ? gradeentity.quarter1 : 0) +
                                        (gradeentity.quarter2 !== 0 ? gradeentity.quarter2 : 0) +
                                        (gradeentity.quarter3 !== 0 ? gradeentity.quarter3 : 0) +
                                        (gradeentity.quarter4 !== 0 ? gradeentity.quarter4 : 0)) / 
                                        ((gradeentity.quarter1 !== 0 ? 1 : 0) +
                                        (gradeentity.quarter2 !== 0 ? 1 : 0) +
                                        (gradeentity.quarter3 !== 0 ? 1 : 0) +
                                        (gradeentity.quarter4 !== 0 ? 1 : 0)).toFixed(2)
                                       
                                    }
                                    </td>
                                    <td className='table-body' >
                                        {gradeentity.remarks}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </Accordion.Body>
                     </>: <><Accordion.Body>No Available Gradesheet Detected</Accordion.Body></>
                     }
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                <Accordion.Header >
                    <h1 className='inter-400-16px-dark' style={{marginTop: '12px'}}>GRADE 12</h1>
                </Accordion.Header>
                    {g12.length > 0 ? 
                    <>
                    <Accordion.Body>
                        <Table>
                        <thead>
                            <tr>
                            <th className='table-head' style={{width: '30%', paddingLeft:'20px'}}>SUBJECT</th>
                            <th className='table-head' style={{width: '20%'}}>TEACHER</th>
                            <th className='table-head' style={{width: '8%'}}>Q1</th>
                            <th className='table-head' style={{width: '8%'}}>Q2</th>
                            <th className='table-head' style={{width: '8%'}}>Q3</th>
                            <th className='table-head' style={{width: '8%'}}>Q4</th>
                            <th className='table-head' style={{width: '8%'}}>AVERAGE</th>
                            <th className='table-head' style={{width: '20%'}}>REMARKS</th>
                            <th className='table-head' style={{width: '20%'}}>STATUS</th>
                            </tr>
                            </thead>
                            <tbody>
                            {g12.sort((a, b) => a.in_class.subject.localeCompare(b.in_class.subject))?.map((gradeentity) => (
                                <tr key={gradeentity.id}>
                                    <td className='table-body' style={{ paddingLeft: '20px' }}>
                                        {gradeentity.in_class.subject}
                                    </td>
                                    <td className='table-body'>
                                        {gradeentity.in_class.teacher.userprofile.last_name} {` `}
                                        {gradeentity.in_class.teacher.userprofile.first_name[0]}. {` `}
                                        {gradeentity.in_class.teacher.userprofile.middle_name[0]}.
                                    </td>
                                    <td className='table-body' >
                                        {gradeentity.quarter1}
                                    </td>
                                    <td className='table-body' >
                                        {gradeentity.quarter2}
                                    </td>
                                    <td className='table-body' >
                                        {gradeentity.quarter3}
                                    </td>
                                    <td className='table-body' >
                                        {gradeentity.quarter4}
                                    </td>
                                    <td className='table-body'>
                                    { 
                                        ((gradeentity.quarter1 !== 0 ? gradeentity.quarter1 : 0) +
                                        (gradeentity.quarter2 !== 0 ? gradeentity.quarter2 : 0) +
                                        (gradeentity.quarter3 !== 0 ? gradeentity.quarter3 : 0) +
                                        (gradeentity.quarter4 !== 0 ? gradeentity.quarter4 : 0)) / 
                                        ((gradeentity.quarter1 !== 0 ? 1 : 0) +
                                        (gradeentity.quarter2 !== 0 ? 1 : 0) +
                                        (gradeentity.quarter3 !== 0 ? 1 : 0) +
                                        (gradeentity.quarter4 !== 0 ? 1 : 0)).toFixed(2)
                                       
                                    }
                                    </td>
                                    <td className='table-body' >
                                        {gradeentity.remarks}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </Accordion.Body>
                     </>: <><Accordion.Body>No Available Gradesheet Detected</Accordion.Body></>
                     }
                </Accordion.Item>
                </Accordion>
                </div>
                

            </div>
      </>
    );
}

Studentgradesadmin.propTypes = {
  sidebarState: PropTypes.string,
  setsidebarState: PropTypes.func.isRequired,
  subsidebarState: PropTypes.string,
  setsubsidebarState: PropTypes.func.isRequired,
  setpageHeader: PropTypes.func,
  getStudentdata: PropTypes.func,
  studentData: PropTypes.object,
  setSelectedBG: PropTypes.func,
  newAvatar: PropTypes.string,
}

const mapStateToProps = (state) => ({
  sidebarState: state.main.sidebarState,
  subsidebarState: state.main.subsidebarState,
  studentData: state.main.studentData,
  newAvatar: state.main.newAvatar
  });

export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setpageHeader, getStudentdata, setSelectedBG})(Studentgradesadmin))