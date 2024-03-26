import React, { useState, Fragment, useEffect, useRef } from 'react'
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState, setpageHeader, getSectiondata, getStudentdata, setStudentPromotion} from '../../redux/actions/main';

import { Form, InputGroup, Dropdown, Table, Button, Spinner, Placeholder, Card } from 'react-bootstrap';
import { Magnifier, Draft, ForEvaluation, EvaluationInProgress, EvaluationComplete, PendingPayment, PaymentReceived, Enrolled, VerificationFailed, New} from '../../assets/svg/clnsmpl-icon';
import { PDFViewer } from '@react-pdf/renderer';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';


function AdvisoryPage(props) {

    const navigate = useNavigate();
    const [sectioncode, setSectioncode] = useState('');
    const [schoolyear, setSchoolyear] = useState('');
    const [gradelevel, setGradelevel] = useState('');
    const [track, setTrack] = useState('');
    const [students, setStudents] = useState([]);

    const [totalgrade, setTotalgrade] = useState(0);
    const [complete, setComplete] = useState(true);
    const [showpdf, setShowpdf] = useState(false);
    const [failcount, setFailcount] = useState(0);
    const [trigger, setTrigger] = useState(false);


    const MyDocument = () => (
        <Document>
          <Page size="A4" style={{padding: '20px'}}>
          <View style={{ padding: '15px', borderTop: '2px solid black', borderBottom: '2px solid black', marginBottom: '12px'}}>
            <Text style={{alignSelf: 'center', fontSize: '25px', fontWeight: 700}}>SECTION REPORT SHEET</Text>
            <Text style={{alignSelf: 'center', paddingTop: '5px', fontSize: '12px', color: 'gray'}}>SY: {props.sectionData.schoolyear}</Text>
          </View>
          <View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{padding: '5px', fontSize: '12px', color: 'gray'}}>Section:</Text>
                    <Text style={{padding: '5px', fontSize: '12px'}}>{props.sectionData.code}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{padding: '5px', fontSize: '12px', color: 'gray'}}>Teacher:</Text>
                    <Text style={{padding: '5px', fontSize: '12px'}}>{props.teacherData.userprofile.last_name}, {props.teacherData.userprofile.first_name} {props.teacherData.userprofile.middle_name}</Text>
                </View>
            </View>
          </View>
          <View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{padding: '5px', fontSize: '12px', color: 'gray'}}>Grade Level:</Text>
                    <Text style={{padding: '5px', fontSize: '12px'}}>{props.sectionData.gradelevel}</Text>
                </View>
            </View>
          </View>
          <View style={{border: '1px solid black', marginTop: '12px'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{width: '40%', borderRight: '1px solid black', padding: '5px'}}>ID</Text>
                <Text style={{width: '55%', borderRight: '1px solid black', padding: '5px'}}>NAME</Text>
                <Text style={{width: '15%', borderRight: '1px solid black', padding: '5px'}}>AVE.</Text>
                <Text style={{width: '30%', padding: '5px'}}>STATUS</Text>
            </View>
            {students?.sort((a, b) => a.userprofile.last_name.localeCompare(b.userprofile.last_name))?.map((student) => {
                return (
                    <View key={student.id} style={{flexDirection: 'row', borderTop: '1px solid black'}}>
                        <Text style={{width: '40%', borderRight: '1px solid black', padding: '5px', fontSize: '12px'}}>
                            {student.id}
                        </Text>
                        <Text style={{width: '55%', borderRight: '1px solid black', padding: '5px', fontSize: '12px'}}>
                            {student.userprofile.last_name}, {student.userprofile.first_name} {student.userprofile.middle_name} 
                        </Text>

                        {(() => {
                                if (student.related_grade_entities) {
                                const grades = student.related_grade_entities.filter(item => item.in_class.section.gradelevel === props.sectionData.gradelevel);

                                if (grades.length > 0) {
                                    const hasZeroValue = grades.some(item => item.quarter1 === 0 || item.quarter2 === 0 || item.quarter3 === 0 || item.quarter4 === 0);

                                    if (hasZeroValue) {
                                    
                                    return (
                                        <Text style={{width: '15%', borderRight: '1px solid black', padding: '5px', fontSize: '12px', color: 'red'}}>
                                        INC
                                        </Text>
                                    );
                                    }

                                    const quarterAverages = grades.map(item => {
                                    // Calculate average of quarter parameters for each item
                                    const quarterParams = [item.quarter1, item.quarter2, item.quarter3, item.quarter4];
                                    const quarterAverage = quarterParams.reduce((total, currentValue) => total + currentValue, 0) / quarterParams.length;
                                    return quarterAverage;
                                    });

                                    if (quarterAverages.length > 0) {
                                    // Calculate average of all quarter averages
                                    const finalAverage = quarterAverages.reduce((total, currentValue) => total + currentValue, 0) / quarterAverages.length;
                                
                                    return (
                                        <Text style={{width: '15%', borderRight: '1px solid black', padding: '5px', fontSize: '12px'}}>
                                        {finalAverage.toFixed(2)}
                                        </Text>
                                    );
                                    }
                                }
                                }

                                return null; // Or handle the case when there are no matching grades
                            })()}

                        {(() => {
                            switch(student.status) {
                                case 'Failed': return   <Text style={{width: '30%', padding: '5px', fontSize: '10px', color: 'red'}}>
                                                            {student.status}
                                                        </Text>;
                                case 'For Evaluation': return <Text style={{width: '30%', padding: '5px', fontSize: '8px', color: 'gray'}}>
                                                                    Promoted ({student.status})
                                                              </Text>;
                                case 'Enrolled': return <Text style={{width: '30%', padding: '5px', fontSize: '8px', color: 'green'}}>
                                                            Promoted ({student.status})
                                                        </Text>;
                            }
                            })()}
                    </View>
                );
            })}
          </View>
          <View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: '12px'}}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{padding: '5px', fontSize: '12px', color: 'gray'}}>Section Average Grade:</Text>
                    <Text style={{padding: '5px', fontSize: '12px'}}>{!complete || totalgrade < 1?'Incomplete Data': `${totalgrade.toFixed(2)}%` }</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{padding: '5px', fontSize: '12px', color: 'gray'}}>Section Passing Rate:</Text>
                    <Text style={{padding: '5px', fontSize: '12px'}}>{!complete || totalgrade < 1?'Incomplete Data': `${((1 - (failcount/students.length))*100).toFixed(2)}%` }</Text>
                </View>
            </View>
          </View>
          </Page>
        </Document>
      );


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
        setTrigger(true)
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
        setTrigger(true)
    }

    const handleViewgrade = (studentid) => {
        props.getStudentdata(studentid)
        navigate('/faculty/studentgrade');
    }

    const handleGetsectionaverage = () => {
        if (students) {
            const finalAverages = []; // Array to store finalAverage values of each student
            let failedstudentcount = 0;
    
            for (const student of students) {
                if (student.status === "Failed"){
                        failedstudentcount++;
                }
                if (student.related_grade_entities) {
                    const grades = student.related_grade_entities.filter(item => item.in_class.section.gradelevel === props.sectionData.gradelevel);
    
                    if (grades.length > 0) {
                        const hasZeroValue = grades.some(item => item.quarter1 === 0 || item.quarter2 === 0 || item.quarter3 === 0 || item.quarter4 === 0);
                        if (hasZeroValue) {
                            setComplete(false)
                        }
    
                        const quarterAverages = grades.map(item => {
                            const quarterParams = [item.quarter1, item.quarter2, item.quarter3, item.quarter4];
                            const quarterAverage = quarterParams.reduce((total, currentValue) => total + currentValue, 0) / quarterParams.length;
                            return quarterAverage;
                        });
    
                        if (quarterAverages.length > 0) {
                            const finalAverage = quarterAverages.reduce((total, currentValue) => total + currentValue, 0) / quarterAverages.length;
                            finalAverages.push(finalAverage); // Add finalAverage to the array
                        }
                    }
                }
            }
    
            // Calculate the average of all finalAverage values
            if (finalAverages.length > 0) {
                const totalFinalAverage = finalAverages.reduce((total, currentValue) => total + currentValue, 0) / finalAverages.length;
                setTotalgrade(totalFinalAverage)
                setFailcount(failedstudentcount)
            }
        }
    }

    useEffect(() => {
        props.setsidebarState('sections');
        props.setsubsidebarState(null);
        props.setpageHeader(``, ``, ``);
        props.getSectiondata(props.selectedSection);
        setTrigger(false)
      }, [trigger]);

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
              <th className='table-head' style={{width: '10%'}}>AVERAGE</th>
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
                                if (student.related_grade_entities) {
                                // Filter grades based on matching grade levels
                                const grades = student.related_grade_entities.filter(item => item.in_class.section.gradelevel === props.sectionData.gradelevel);

                                if (grades.length > 0) {
                                    // Check for zero values in quarter parameters
                                    const hasZeroValue = grades.some(item => item.quarter1 === 0 || item.quarter2 === 0 || item.quarter3 === 0 || item.quarter4 === 0);
                                    const hasFail = grades.some(item => item.remarks === "Failed" );
                                    if (hasZeroValue) {
                                    return (
                                        <h1 style={{fontSize: '12px', color: 'red'}}>
                                        INCOMPLETE
                                        </h1>
                                    );
                                    }
                                    // if (hasFail){
                                    //     handleFail(student.id)
                                    // }

                                    const quarterAverages = grades.map(item => {
                                    // Calculate average of quarter parameters for each item
                                    const quarterParams = [item.quarter1, item.quarter2, item.quarter3, item.quarter4];
                                    const quarterAverage = quarterParams.reduce((total, currentValue) => total + currentValue, 0) / quarterParams.length;
                                    return quarterAverage;
                                    });

                                    if (quarterAverages.length > 0) {
                                    // Calculate average of all quarter averages
                                    const finalAverage = quarterAverages.reduce((total, currentValue) => total + currentValue, 0) / quarterAverages.length;
                                    // if (finalAverage < 75){
                                    //     handleFail(student.id)
                                    // }
                                    return (
                                        <>
                                        {finalAverage.toFixed(2)}
                                        </>
                                    );
                                    }
                                }
                                }

                                return null; // Or handle the case when there are no matching grades
                            })()}
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
          {!showpdf?
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '32px' }}>
            <Button type="button" onClick={() => {handleGetsectionaverage();setShowpdf(true)}} 
                                    style={{borderColor:'#3A57E8', borderRadius: '4px', backgroundColor: '#3A57E8', width: '15%', alignContent: 'center', marginRight: '24px'}}>
                    <h1 style={{color:'white', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '18px', paddingTop: '8px'}}>
                        Generate Report
                    </h1>
            </Button>
          </div>
            :
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '32px' }}>
             <Button type="button" onClick={() => {handleGetsectionaverage();setShowpdf(true)}} 
                                    style={{borderColor:'green', borderRadius: '4px', backgroundColor: 'green', width: '15%', alignContent: 'center', marginRight: '24px'}}>
                    <h1 style={{color:'white', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '18px', paddingTop: '8px'}}>
                        Refresh Report
                    </h1>
            </Button>
            <Button type="button" onClick={() => {setShowpdf(false)}} 
                                    style={{borderColor:'red', borderRadius: '4px', backgroundColor: 'red', width: '15%', alignContent: 'center', marginRight: '24px'}}>
                    <h1 style={{color:'white', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '18px', paddingTop: '8px'}}>
                        Remove Report
                    </h1>
            </Button>
          </div>}
        </div>
        
        {showpdf &&
            <PDFViewer style={{width: '100%', height: '1300px'}}>
            <MyDocument />
        </PDFViewer>}
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