import React, { useState, Fragment, useEffect, useRef } from 'react'
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState, setpageHeader, setSelectedBG, getClassdata, setGradesheet, patchGrades } from '../../redux/actions/main';

import { Form, InputGroup, Dropdown, Table, Button, Spinner, Placeholder } from 'react-bootstrap';
import { RedExclamation, ConnectedAccordionIconOpen } from '../../assets/svg/clnsmpl-icon';

function ClassPage(props) {

    const [classcode, setClasscode] = useState('');
    const [description, setDescription] = useState('');
    const [section, setSection] = useState('');
    const [subject, setSubject] = useState('');
    const [strand, setStrand] = useState('NONE');
    const [students, setStudents] = useState([]);
    const [activeinput, setActiveinput] = useState('');

    const [q1, setQ1] = useState()
    const [q2, setQ2] = useState()
    const [q3, setQ3] = useState()
    const [q4, setQ4] = useState()
    const [remarks, setRemarks] = useState('')
    const [gradeid, setGradeid] = useState('')

    const handleCreategradesheet = (studentid) => {
        props.setGradesheet(studentid, classcode)
        props.getClassdata(props.selectedClass);
    }

    const handleSetactiveid = (studentid) => {
        setActiveinput(studentid)
        const scores = [...props.classData.class_related_score].find(score => score.student === studentid);
        setGradeid(scores.id)
        setQ1(scores.quarter1)
        setQ2(scores.quarter2)
        setQ3(scores.quarter3)
        setQ4(scores.quarter4)
        setRemarks(scores.remarks)
    }

    const handlePatchgrade = (studentid) => {
        props.patchGrades(gradeid, studentid, q1, q2, q3, q4, remarks, classcode)
        setActiveinput()
    }

    useEffect(() => {
        props.setsidebarState('dashboard');
        props.setsubsidebarState(null);
        props.getClassdata(props.selectedClass);
      }, [props.emptygradeSheet]);

    useEffect(() => {
        props.setpageHeader(`Class Page -`, `${props.classData.code}`, 'Manage Class Room');
        setClasscode(props.classData.code)
        setDescription(props.classData.description)
        setSubject(props.classData.subject)
        setStrand(props.classData.strand)
        try{
        setSection(props.classData.section.code)
        setStudents(props.classData.section.students)
        }catch(error){
        }
      }, [props.classData]);

    return(
        <>
        <div style={{backgroundColor:'#ffffff', borderRadius:'8px', paddingBottom: '24px'}}>
          <div style={{borderBottom: '1px solid gray', marginLeft: '24px', marginRight: '24px', paddingBottom: '24px', paddingTop: '24px'}}>
            <h1 className='card-title'>Class Information</h1>
            <InputGroup>
              <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', gap: '8px'}}>
                <div className="form-group text-left"style={{width: '50%'}}>
                    <Form.Group>
                        <Form.Label className='form-label'>Class Code</Form.Label>
                        <div style={{display: 'flex'}}>
                            <Form.Control type="text" disabled={true} defaultValue={classcode} id="classcode" style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                    </Form.Group>
                </div>
  
                <div className="form-group text-left"style={{width: '50%'}}>
                    <Form.Group>
                        <Form.Label htmlFor="description" className='form-label'>Description</Form.Label>
                        <div style={{display: 'flex'}}>
                            <Form.Control type="text" disabled={true} defaultValue={description} id="description" style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                    </Form.Group>
                </div>
  
              </div>

              <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', gap: '8px'}}>
                <div className="form-group text-left"style={{width: '50%'}}>
                    <Form.Group>
                    <Form.Label className='form-label'>Section</Form.Label>
                    <div style={{display: 'flex'}}>
                        <Form.Control type="text" disabled={true} defaultValue={section} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                    </div>
                    </Form.Group>
                    </div>

                <div className="form-group text-left"style={{width: '50%'}}>
                    <Form.Group>
                    <Form.Label className='form-label'>Subject</Form.Label>
                    <div style={{display: 'flex'}}>
                        <Form.Control type="text" disabled={true} defaultValue={subject} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                    </div>
                    </Form.Group>
                </div>
              </div>
              {props.classData.strand !== "NONE" || !strand &&
                <div className="form-group text-left"style={{width: '50%'}}>
                    <Form.Group>
                        <Form.Label className='form-label'>Strand</Form.Label>
                        <div style={{display: 'flex'}}>
                            <Form.Control type="text" disabled={true} defaultValue={strand} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                    </Form.Group>
                </div>
                }
            </InputGroup>
          </div>
          <h1 className='card-title' style={{marginTop: '24px', marginLeft: '24px'}}>Grade Sheet</h1>
          <Table hover style={{border: 'none'}}>
            <thead>
            <tr>
              <th className='table-head' style={{width: '20%', paddingLeft:'20px'}}>IDs</th>
              <th className='table-head' style={{width: '30%'}}>FULL NAME</th>
              <th className='table-head' style={{width: '8%'}}>Q1</th>
              <th className='table-head' style={{width: '8%'}}>Q2</th>
              <th className='table-head' style={{width: '8%'}}>Q3</th>
              <th className='table-head' style={{width: '8%'}}>Q4</th>
              <th className='table-head' style={{width: '8%'}}>AVERAGE</th>
              <th className='table-head' style={{width: '20%'}}>REMARKS</th>
              <th className='table-head' style={{width: '20%'}}>ACTION</th>
            </tr>
            </thead>
            <tbody>
            {students.sort((a, b) => a.userprofile.last_name.localeCompare(b.userprofile.last_name))?.map((student) => {
                const studentScores = [...props.classData.class_related_score].find(score => score.student === student.id);
                return (
                    <tr key={student.id} style={{ border: 'none' }}>
                        <td className='table-body' style={{ paddingLeft: '20px' }}>
                            {student.id}
                        </td>
                        <td className='table-body'>
                            {student.userprofile.first_name} {student.userprofile.last_name} {new Date() - new Date(student.userprofile.date_joined) <= 3 * 24 * 60 * 60 * 1000 && <New />}
                        </td>
                        <td className='table-body'>{studentScores ? <input disabled={activeinput !== student.id} style={{border: 'none', width: '100%'}} defaultValue={studentScores.quarter1} onChange={e => setQ1(parseFloat(e.target.value))}></input> : ''}</td>
                        <td className='table-body'>{studentScores ? <input disabled={activeinput !== student.id} style={{border: 'none', width: '100%'}} defaultValue={studentScores.quarter2} onChange={e => setQ2(parseFloat(e.target.value))}></input> : ''}</td>
                        <td className='table-body'>{studentScores ? <input disabled={activeinput !== student.id} style={{border: 'none', width: '100%'}} defaultValue={studentScores.quarter3} onChange={e => setQ3(parseFloat(e.target.value))}></input> : ''}</td>
                        <td className='table-body'>{studentScores ? <input disabled={activeinput !== student.id} style={{border: 'none', width: '100%'}} defaultValue={studentScores.quarter4} onChange={e => setQ4(parseFloat(e.target.value))}></input> : ''}</td>
                        <td className='table-body'>{studentScores ? ((studentScores.quarter1 + studentScores.quarter2 + studentScores.quarter3 + studentScores.quarter4) / 4).toFixed(2) : ''}</td>
                        <td className='table-body'>{studentScores ? <input disabled={activeinput !== student.id} style={{border: 'none', width: '100%'}} defaultValue={studentScores.remarks} onChange={e => setRemarks(e.target.value)}></input> : 'none'}</td>
                        <td className='table-body'>
                            {studentScores ? (activeinput == student.id ?
                                <Button type="button" onClick={() => handlePatchgrade(student.id)} style={{ borderColor: '#D0F0C0', borderRadius: '4px', backgroundColor: '#D0F0C0', width: '100%', height: '50px', alignContent: 'center' }}>
                                <h1 style={{ color: 'black', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '15px', }}>
                                    Submit
                                </h1>
                                </Button>
                            :
                                <Button type="button" onClick={() => handleSetactiveid(student.id)} style={{ borderColor: '#F7F5BC', borderRadius: '4px', backgroundColor: '#F7F5BC', width: '100%', height: '50px', alignContent: 'center' }}>
                                    <h1 style={{ color: 'black', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '15px', }}>
                                        Edit
                                    </h1>
                                </Button>)
                             :
                                <Button type="button" onClick={() => handleCreategradesheet(student.id)} style={{ borderColor: '#3A57E8', borderRadius: '4px', backgroundColor: '#3A57E8', width: '100%', height: '50px', alignContent: 'center' }}>
                                    <h1 style={{ color: 'white', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '15px', }}>
                                        Generate GradeSheet
                                    </h1>
                                </Button>
                            }
                        </td>
                    </tr>
                );
            })}
            </tbody>
          </Table>
        </div>
        </>
    )
}

ClassPage.protoTypes = {
    setsidebarState: PropTypes.func,
    setsubsidebarState: PropTypes.func,
    setpageHeader: PropTypes.func,
    teacherData: PropTypes.object,
    setSelectedBG: PropTypes.func,
    selectedClass: PropTypes.string,
    getClassdata: PropTypes.func,
    classData: PropTypes.object,
    setGradesheet: PropTypes.func,
    emptygradeSheet: PropTypes.object,
    patchGrades: PropTypes.func,
}

const mapStateToProps = (state) => ({
    teacherData: state.main.teacherData,
    selectedClass: state.main.selectedClass,
    classData: state.main.classData,
    emptygradeSheet: state.main.emptygradeSheet,
})

export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setpageHeader, setSelectedBG, getClassdata, setGradesheet, patchGrades})(ClassPage))