import React, { useState, Fragment, useEffect, useRef } from 'react'
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState, setpageHeader, getSectiondata, getStudentdata, setStudentPromotion} from '../../redux/actions/main';

import { Form, InputGroup, Dropdown, Table, Button, Spinner, Placeholder } from 'react-bootstrap';
import { Magnifier, Draft, ForEvaluation, EvaluationInProgress, EvaluationComplete, PendingPayment, PaymentReceived, Enrolled, VerificationFailed, New} from '../../assets/svg/clnsmpl-icon';


function AdvisoryPage(props) {

    const navigate = useNavigate();
    const [sectioncode, setSectioncode] = useState('');
    const [schoolyear, setSchoolyear] = useState('');
    const [gradelevel, setGradelevel] = useState('');
    const [track, setTrack] = useState('');
    const [students, setStudents] = useState([]);

    const handlePromote = (studentid) => {
        let promotiongrade = '';
        switch (gradelevel) {
            case 'Grade 7':
            promotiongrade = 'Grade 8';
            break;
            case 'Grade 8':
            promotiongrade = 'Grade 9';
            break;
            case 'Grade 9':
            promotiongrade = 'Grade 10';
            break;
            case 'Grade 10':
            promotiongrade = 'Grade 11';
            break;
            case 'Grade 11':
            promotiongrade = 'Grade 12';
            break;
            case 'Grade 12':
            promotiongrade = 'Graduated';
            break;
            default:
            promotiongrade = '';
            break;
        }
        props.setStudentPromotion(promotiongrade,'For Evaluation',studentid)
    }

    const handleFail = (studentid) => {
        let promotiongrade = '';
        switch (gradelevel) {
            case 'Grade 7':
            promotiongrade = 'Grade 7';
            break;
            case 'Grade 8':
            promotiongrade = 'Grade 8';
            break;
            case 'Grade 9':
            promotiongrade = 'Grade 9';
            break;
            case 'Grade 10':
            promotiongrade = 'Grade 10';
            break;
            case 'Grade 11':
            promotiongrade = 'Grade 11';
            break;
            case 'Grade 12':
            promotiongrade = 'Grade 12';
            break;
            default:
            promotiongrade = '';
            break;
        }
        props.setStudentPromotion(promotiongrade, 'Failed', studentid)
    }

    const handleViewgrade = (studentid) => {
        props.getStudentdata(studentid)
        navigate('/faculty/studentgrade');
    }


    useEffect(() => {
        props.setsidebarState('sections');
        props.setsubsidebarState(null);
        props.setpageHeader(``, ``, ``);
        props.getSectiondata(props.selectedSection);
      }, []);

    useEffect(() => {
        try{
            props.setpageHeader(`${props.sectionData.code}`, ``, `Manage Students in This Section`);
            setSectioncode(props.sectionData.code)
            setSchoolyear(props.sectionData.schoolyear)
            setGradelevel(props.sectionData.gradelevel)
            setTrack(props.sectionData.track)
            const newStudents = [...props.sectionData.students];
            setStudents(newStudents);
        }catch(error){}
      }, [props.sectionData]);

    return(
        <>
        <div style={{backgroundColor:'#ffffff', borderRadius:'8px', paddingBottom: '24px'}}>
          <div style={{borderBottom: '1px solid gray', marginLeft: '24px', marginRight: '24px', paddingBottom: '24px', paddingTop: '24px'}}>
            <h1 className='card-title'>Section Information</h1>
            <InputGroup>
              <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', gap: '8px'}}>
                <div className="form-group text-left"style={{width: '50%'}}>
                    <Form.Group>
                        <Form.Label className='form-label'>Section Code</Form.Label>
                        <div style={{display: 'flex'}}>
                            <Form.Control type="text" disabled={true} defaultValue={sectioncode} id="classcode" style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                    </Form.Group>
                </div>
  
                <div className="form-group text-left"style={{width: '50%'}}>
                    <Form.Group>
                        <Form.Label htmlFor="description" className='form-label'>School Year</Form.Label>
                        <div style={{display: 'flex'}}>
                            <Form.Control type="text" disabled={true} defaultValue={schoolyear} id="description" style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                        </div>
                    </Form.Group>
                </div>
  
              </div>

              <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', gap: '8px'}}>
                <div className="form-group text-left"style={{width: '50%'}}>
                    <Form.Group>
                    <Form.Label className='form-label'>Grade Level</Form.Label>
                    <div style={{display: 'flex'}}>
                        <Form.Control type="text" disabled={true} defaultValue={gradelevel} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                    </div>
                    </Form.Group>
                    </div>

                    {track !== "NONE" || !track &&
                        <div className="form-group text-left"style={{width: '50%'}}>
                            <Form.Group>
                                <Form.Label className='form-label'>Track</Form.Label>
                                <div style={{display: 'flex'}}>
                                    <Form.Control type="text" disabled={true} defaultValue={track} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                                </div>
                            </Form.Group>
                        </div>
                    }
              </div>
            </InputGroup>
          </div>

          <h1 className='card-title' style={{marginTop: '24px', marginLeft: '24px'}}>Student List</h1>
          <Table hover style={{border: 'none'}}>
            <thead>
            <tr>
              <th className='table-head' style={{width: '20%', paddingLeft:'20px'}}>IDs</th>
              <th className='table-head' style={{width: '50%'}}>FULL NAME</th>
              <th className='table-head' style={{width: '15%'}}>GRADELEVEL</th>
              <th className='table-head' style={{width: '15%'}}>STATUS</th>
              <th className='table-head' style={{width: '5%'}}>ACTION</th>
            </tr>
            </thead>
            <tbody>
            {students?.sort((a, b) => a.userprofile.last_name.localeCompare(b.userprofile.last_name))?.map((student) => {
                return (
                    <tr key={student.id} style={{ border: 'none' }}>
                        <td className='table-body' style={{ paddingLeft: '20px' }}>
                            {student.id}
                        </td>
                        <td className='table-body'>
                        {student.userprofile.last_name}, {student.userprofile.first_name} {student.userprofile.middle_name} 
                        </td>

                        <td className='table-body'>
                        {student.gradelevel}
                        </td>

                        <td className='table-body'>
                            {(() => {
                            switch(student.status) {
                                case 'Failed': return <VerificationFailed/>;
                                case 'For Evaluation': return <ForEvaluation/>;
                                case 'Evaluation In Progress': return <EvaluationInProgress/>;
                                case 'Enrolled': return <Enrolled/>;
                            }
                            })()}
                        </td>

                        <td className='table-body'>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" style={{border: 'none', backgroundColor: '#e9ecef', color: 'rgba(51, 51, 51, 0.00)', width: '38px', height: '38px', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'center', marginLeft: '10px'}}>
                                <h2 style={{color: '#8A92A6', marginLeft: '12px', marginBottom: '15px'}}>...</h2>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => handleViewgrade(student.id)}><h1 className='dropdown-item' >View Grades</h1></Dropdown.Item>
                                    <Dropdown.Item onClick={() => handlePromote(student.id)}><h1 className='dropdown-item' >Promote</h1></Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleFail(student.id)}><h1 className='dropdown-item' >Fail</h1></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
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

AdvisoryPage.protoTypes = {
    setsidebarState: PropTypes.func,
    setsubsidebarState: PropTypes.func,
    setpageHeader: PropTypes.func,
    teacherData: PropTypes.object,
    selectedSection: PropTypes.string,
    sectionData: PropTypes.object,
    getSectiondata: PropTypes.func,
    getStudentdata: PropTypes.func,
    setStudentPromotion: PropTypes.func,
}

const mapStateToProps = (state) => ({
    teacherData: state.main.teacherData,
    selectedSection: state.main.selectedSection,
    sectionData: state.main.sectionData,
})

export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setpageHeader, getSectiondata, getStudentdata, setStudentPromotion})(AdvisoryPage))