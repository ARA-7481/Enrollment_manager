import React, { useState, Fragment, useEffect } from 'react'
import PropTypes, { func } from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import Modal from 'react-modal'
import { setsidebarState, setsubsidebarState, setcourseState, setpageHeader, setLoading, getSubjectsList, addSubject, getDepartments, setError, setSubjectformdata, addCourse } from '../../redux/actions/main';
Modal.setAppElement('#app');

import SubjectCreatemodal from '../modals/subject-create';

import { Col, Form, InputGroup, Dropdown, DropdownButton, Table, Card, Button, Spinner } from 'react-bootstrap';
import { BlueExclamation, RedExclamation, SimpleCalendar, ConnectedAccordionIconOpen, CloseButton } from '../../assets/svg/clnsmpl-icon';

function CourseCreate(props) {

    const navigate = useNavigate();
    
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [submissionComplete, setSubmission] = useState(false);
    const [subjectSubmissioncomplete, setSubjectsubmission] = useState(false);
    const [subjectCreatedyear, setSubjectcreatedyear] = useState();
    const [coursecode, setCoursecode] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [department, setDepartment] = React.useState('');
    const [duration, setDuration] = React.useState();
    const [semesterarray, setSemesterarray] = React.useState([]);
    const [subject1, setSubject1] = React.useState('');
    const [subject2, setSubject2] = React.useState('');
    const [subject3, setSubject3] = React.useState('');
    const [subject4, setSubject4] = React.useState('');
    const [subject5, setSubject5] = React.useState('');
    const [semester1, setSemester1] = React.useState('');
    const [semester2, setSemester2] = React.useState('');
    const [semester3, setSemester3] = React.useState('');
    const [semester4, setSemester4] = React.useState('');
    const [semester5, setSemester5] = React.useState('');
    const [clickedyear, setClickedyear] = React.useState();
    const [clickedyearondiv, setCLickedyearondiv] = React.useState();
    const [units, setUnits] = React.useState('');

    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({});

    const handleModalopen = () => {
      setModalIsOpen(true);
    }
    const handleModalclose = () => {
      setModalIsOpen(false);
      props.setSubjectformdata({})
    }
    const handleSubmitsubject = () => {
      props.setLoading('isLoading')
      props.addSubject(props.subjectFormdata)
      setSubjectsubmission(true)
    }

    const filteredSubjects = props.subjectsListForTable.filter(subject =>{
        switch (clickedyear){
          case 1:
            return subject.code.toLowerCase().includes(subject1.toLowerCase())
          case 2:
            return subject.code.toLowerCase().includes(subject2.toLowerCase())
          case 3:
            return subject.code.toLowerCase().includes(subject3.toLowerCase())
          case 4:
            return subject.code.toLowerCase().includes(subject4.toLowerCase())
          case 5:
            return subject.code.toLowerCase().includes(subject5.toLowerCase())
        }});



    const handleSubmit = () => {
        props.setLoading('isLoading')
        props.addCourse(formData)
        setSubmission(true)
    }

    const handleToggle = (isOpen) => {
        setIsOpen(isOpen);
    }

    const handleSubjectsearch = (e) => {
      if (isOpen){
        e.stopPropagation()
      }
    }

    const handleSubject = (subject, year) => {
      switch(year){
        case 1 : setSubject1(subject);break;
        case 2 : setSubject2(subject);break;
        case 3 : setSubject3(subject);break;
        case 4 : setSubject4(subject);break;
        case 5 : setSubject5(subject);break;
      }
    }

    const handleInputChange = (subject, year) => {
      switch(year){
        case 1 : setSubject1(subject);break;
        case 2 : setSubject2(subject);break;
        case 3 : setSubject3(subject);break;
        case 4 : setSubject4(subject);break;
        case 5 : setSubject5(subject);break;
      }
    };

    const handleSemester = (semester, year) => {
      switch(year){
        case 1 : setSemester1(semester);break;
        case 2 : setSemester2(semester);break;
        case 3 : setSemester3(semester);break;
        case 4 : setSemester4(semester);break;
        case 5 : setSemester5(semester);break;
      }
    }

    const handleDuration = (duration) => {
        setDuration(duration)
        let years = Array.from({length: duration}, (_, i) => {
          return {
              year: i+1,
              firstsemester: [], 
              secondsemester: []  
          };
      });
      setSemesterarray(years);
    }

    const handleAddsubject = (year) => {
      let subject, semester;
      switch (year) {
        case 1:
          subject = subject1;
          semester = semester1;
          setSubject1('');
          setSemester1('');
          break;
        case 2:
          subject = subject2;
          semester = semester2;
          setSubject2('');
          setSemester2('');
          break;
        case 3:
          subject = subject3;
          semester = semester3;
          setSubject3('');
          setSemester3('');
          break;
        case 4:
          subject = subject4;
          semester = semester4;
          setSubject4('');
          setSemester4('');
          break;
        case 5:
          subject = subject5;
          semester = semester5;
          setSubject5('');
          setSemester5('');
          break;
        default:
          console.log('invalid year')
          return;
      }
    
      const subjectExists = semesterarray.some((yearObj) => 
        yearObj.firstsemester.includes(subject) || yearObj.secondsemester.includes(subject)
      );

      const subjectdetails = props.subjectsListForTable.find(item => item.code === subject);

      if (subjectdetails.prerequisite){
        let subjectcontainer = semesterarray.find(obj =>{
          return obj.firstsemester.includes(subjectdetails.prerequisite) || 
                 obj.secondsemester.includes(subjectdetails.prerequisite)
        })
        if (subjectcontainer){
        let containingyear = subjectcontainer.year;
        let containingsemester = subjectcontainer.firstsemester.includes(subjectdetails.prerequisite) ? 'First Semester' : 'Second Semester';
        console.log(containingyear, containingsemester)
          if (containingyear > year){
            props.setError(`Failed to add Subject! ${subject} has a prerequisite ${subjectdetails.prerequisite}. Please place the subject on a semester not before its prerequisite.`)
            return;
          }else if (containingyear == year){
              if (semester == containingsemester){
                props.setError(`Failed to add Subject! ${subject} has a prerequisite ${subjectdetails.prerequisite}. A subject and its prerequisite can't be placed on the same semester`)
                return;
              }else if (containingsemester == 'Second Semester' && semester == 'First Semester'){
                props.setError(`Failed to add Subject! ${subject} has a prerequisite ${subjectdetails.prerequisite}. Please place the subject on a semester not before its prerequisite.`)
                return;
              }
          }
          }else{
            props.setError(`Failed to add Subject! ${subject} has a prerequisite ${subjectdetails.prerequisite}. Add the subject's prerequisite first.`)
            return;
          }
      }
    
      if (subjectExists) {
        props.setError(`Failed to add Subject! ${subject} already exists in the curriculum.`)
        return;
      }
    
      if (semester === 'First Semester') {
        semesterarray[year-1].firstsemester.push(subject);
        if (subjectdetails.corequisite){
          semesterarray[year-1].firstsemester.push(subjectdetails.corequisite);
        }
        if (subjectdetails.related_corequisite.length > 0){
          semesterarray[year-1].firstsemester.push(...subjectdetails.related_corequisite);
        }
      } else if (semester === 'Second Semester') {
        semesterarray[year-1].secondsemester.push(subject);
        if (subjectdetails.corequisite){
          semesterarray[year-1].secondsemester.push(subjectdetails.corequisite);
        }
        if (subjectdetails.related_corequisite.length > 0){
          semesterarray[year-1].secondsemester.push(...subjectdetails.related_corequisite);
        }
      }
    
      setSemesterarray([...semesterarray]);
    }

    useEffect(() => {
        if (props.loadingState === 'isNotLoading' && subjectSubmissioncomplete) {
          handleSubject(props.subjectFormdata.code, clickedyearondiv)
          setSubjectsubmission(false)
          setModalIsOpen(false)
          props.setSubjectformdata({})
        }

        if (props.loadingState === 'isNotLoading' && submissionComplete) {
            navigate('/admins/course');
          }
        props.setsidebarState('course')
        props.setsubsidebarState(null)
        props.setcourseState('create-page-one')
        props.setpageHeader('Create a Course', '', 'Fill Information to Create a Course')
        props.getDepartments();
        props.getSubjectsList('');
        setFormData({
          code : coursecode,
          description : description,
          department : department,
          subjects_11 : semesterarray.length>0?semesterarray.find((obj) => obj.year ===1)?semesterarray.find((obj) => obj.year ===1).firstsemester:[]:[],
          subjects_12 : semesterarray.length>0?semesterarray.find((obj) => obj.year ===1)?semesterarray.find((obj) => obj.year ===1).secondsemester:[]:[],
          subjects_21 : semesterarray.length>0?semesterarray.find((obj) => obj.year ===2)?semesterarray.find((obj) => obj.year ===2).firstsemester:[]:[],
          subjects_22 : semesterarray.length>0?semesterarray.find((obj) => obj.year ===2)?semesterarray.find((obj) => obj.year ===2).secondsemester:[]:[],
          subjects_31 : semesterarray.length>0?semesterarray.find((obj) => obj.year ===3)?semesterarray.find((obj) => obj.year ===3).firstsemester:[]:[],
          subjects_32 : semesterarray.length>0?semesterarray.find((obj) => obj.year ===3)?semesterarray.find((obj) => obj.year ===3).secondsemester:[]:[],
          subjects_41 : semesterarray.length>0?semesterarray.find((obj) => obj.year ===4)?semesterarray.find((obj) => obj.year ===4).firstsemester:[]:[],
          subjects_42 : semesterarray.length>0?semesterarray.find((obj) => obj.year ===4)?semesterarray.find((obj) => obj.year ===4).secondsemester:[]:[],
          subjects_51 : semesterarray.length>0?semesterarray.find((obj) => obj.year ===5)?semesterarray.find((obj) => obj.year ===5).firstsemester:[]:[],
          subjects_52 : semesterarray.length>0?semesterarray.find((obj) => obj.year ===5)?semesterarray.find((obj) => obj.year ===5).secondsemester:[]:[],
        })
      }, [props.loadingState, subjectSubmissioncomplete, subjectCreatedyear, coursecode, description, department, semesterarray]);

    return (
        <>
        <div style={{backgroundColor:'#ffffff', borderRadius:'8px', paddingBottom: '48px'}}>
          <div style={{padding: '24px'}}>
            <h1 className='card-title'>Course Information</h1>
            <InputGroup>
              <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                  <div className="form-group text-left"style={{width: '50%', marginRight: '8px'}}>
                  <Form.Group>
                <Form.Label htmlFor="coursecode" className='form-label'>Course Code</Form.Label>
                <div style={{display: 'flex'}}>
                <Form.Control type="text" value={coursecode} placeholder="Enter Course Code" id="coursecode" onChange={e => setCoursecode(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                {!coursecode &&
                  <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                  <RedExclamation/>
                  </div>
                  }
                </div>
                </Form.Group>
                </div>
  
                <div className="form-group text-left"style={{width: '50%', marginLeft: '8px'}}>
                <Form.Group>
                <Form.Label htmlFor="description" className='form-label'>Description</Form.Label>
                <div style={{display: 'flex'}}>
                <Form.Control type="text" value={description} placeholder="Enter Course Description" id="description" onChange={e => setDescription(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                {!description &&
                  <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                  <RedExclamation/>
                  </div>
                  }
                </div>
                </Form.Group>
                </div>
  
              </div>


              <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                <div className="form-group text-left"style={{width: '50%', marginRight: '8px'}}>
                <Form.Group>
                <Form.Label htmlFor="department" className='form-label'>Department</Form.Label>
                <div style={{display: 'flex'}}>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" className='formselect-border drop-noarrow' style={{border: 'none', backgroundColor: 'rgba(51, 51, 51, 0.00)', color: department? 'black': 'rgba(51, 51, 51, 0.80)', width: '100%', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'space-between'}}>
                        <div>{department? department: "Select Department"}</div>
                        <ConnectedAccordionIconOpen/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ width: '49.5%', maxHeight: '200px', overflow: 'auto'}}>
                        <Dropdown.Item onClick={() => setDepartment('')}>NONE</Dropdown.Item>
                        {[...props.departmentsList].sort((a, b) => a.code.localeCompare(b.code)).map((department) => (
                            <Dropdown.Item key={department.code} onClick={() => setDepartment(department.code)}>{department.code}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                {!department &&
                  <div style={{transform: 'translate( -55px, 5px)', width: '0px', pointerEvents: 'none'}}>
                  <RedExclamation/>
                  </div>
                  }
                </div>
                </Form.Group>
                </div>

                <div className="form-group text-left"style={{width: '50%', marginLeft: '8px'}}>
                <Form.Group>
                <Form.Label htmlFor="duration" className='form-label'>Standard Course Duration</Form.Label>
                <div style={{display: 'flex'}}>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" className='formselect-border drop-noarrow' style={{border: 'none', backgroundColor: 'rgba(51, 51, 51, 0.00)', color: duration? 'black': 'rgba(51, 51, 51, 0.80)', width: '100%', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'space-between'}}>
                        <div>{(() => {
                          switch (duration) {
                            case 1: return "One Year";
                            case 2: return "Two Years";
                            case 3: return "Three Years";
                            case 4: return "Four Years";
                            case 5: return "Five Years";
                            default: return "Select Duration Years";
                            }})()}
                        </div>
                        <ConnectedAccordionIconOpen/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ width: '49.5%', maxHeight: '200px', overflow: 'auto'}}>
                        <Dropdown.Item onClick={() => handleDuration(1)}>One Year</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleDuration(2)}>Two Years</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleDuration(3)}>Three Years</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleDuration(4)}>Four Years</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleDuration(5)}>Five Years</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                {!duration &&
                  <div style={{transform: 'translate( -55px, 5px)', width: '0px', pointerEvents: 'none'}}>
                  <RedExclamation/>
                  </div>
                  }
                </div>
                </Form.Group>
                </div>
              </div>
              {semesterarray.length != 0 && <h1 className='card-title' style={{ paddingTop: '48px'}}>Course Curriculum</h1>}
              {semesterarray.map((year) =>(
                <div key={year.year} style={{marginBottom: '24px', width: '100%'}}>
                  <h1 className='inter-500-20px'>Year {year.year}</h1>


                  <div style={{display: 'flex', width: '100%', marginBottom: '12px'}}>
                  <div className="form-group text-left"style={{width: '45%', marginRight: '8px'}}>
                  <Form.Group onClick={()=> setClickedyear(year.year)}>
                  <Form.Label htmlFor="subject" className='form-label'>Select Subject</Form.Label>
                  <div style={{display: 'flex'}}>
                  <Dropdown onToggle={handleToggle}>
                      <Dropdown.Toggle id="dropdown-basic" className='formselect-border drop-noarrow' style={{border: 'none', backgroundColor: 'rgba(51, 51, 51, 0.00)',  width: '100%', display: 'flex', alignItems: 'center', outline: 'none'}}>
                          <div style={{width:'100%', padding: '0px'}}>
                          <Form.Control 
                          className='formcontrolnoborder' 
                          type='search' 
                          placeholder="Enter Subject Code" 
                          style={{border: 'none', height:'24px'}}
                          value={(() => {
                            switch (year.year) {
                              case 1: return subject1;
                              case 2: return subject2;
                              case 3: return subject3;
                              case 4: return subject4;
                              case 5: return subject5;
                              default: return "Select Subject";
                              }})()}
                          onClick={handleSubjectsearch}
                          onChange={e => handleInputChange(e.target.value, year.year)}
                          />
                          </div>
                          <ConnectedAccordionIconOpen/>
                      </Dropdown.Toggle>
                      <Dropdown.Menu style={{ width: '44%', maxHeight: '150px', overflow: 'auto'}}>
                        {filteredSubjects.sort((a, b) => a.code.localeCompare(b.code)).map((subject) => (
                            <Dropdown.Item key={subject.code} onClick={() => handleSubject(subject.code,year.year)}>{subject.code}</Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                  </Dropdown>
                  </div>
                  </Form.Group>
                  </div>

                  <div className="form-group text-left"style={{width: '45%', marginLeft: '8px', marginRight: '8px'}}>
                  <Form.Group>
                  <Form.Label htmlFor="semester" className='form-label'>Select Semester</Form.Label>
                  <div style={{display: 'flex'}}>
                  <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic" className='formselect-border drop-noarrow' 
                      style={{border: 'none', backgroundColor: 'rgba(51, 51, 51, 0.00)', 
                      color: (() => {
                        switch (year.year) {
                          case 1: return semester1 ? 'black' : 'rgba(51, 51, 51, 0.80)';
                          case 2: return semester2 ? 'black' : 'rgba(51, 51, 51, 0.80)';
                          case 3: return semester3 ? 'black' : 'rgba(51, 51, 51, 0.80)';
                          case 4: return semester4 ? 'black' : 'rgba(51, 51, 51, 0.80)';
                          case 5: return semester5 ? 'black' : 'rgba(51, 51, 51, 0.80)';
                          default: return 'rgba(51, 51, 51, 0.80)';
                        }
                      })(), 
                      width: '100%', display: 'flex', alignItems: 'center', 
                      outline: 'none', justifyContent: 'space-between'}}>
                          <div>{(() => {
                            switch (year.year) {
                              case 1: return semester1? semester1: "Select Semester";
                              case 2: return semester2? semester2: "Select Semester";
                              case 3: return semester3? semester3: "Select Semester";
                              case 4: return semester4? semester4: "Select Semester";
                              case 5: return semester5? semester5: "Select Semester";
                              }})()}
                          </div>
                          <ConnectedAccordionIconOpen/>
                      </Dropdown.Toggle>
                      <Dropdown.Menu style={{ width: '44%', maxHeight: '200px', overflow: 'auto'}}>
                          <Dropdown.Item onClick={() => handleSemester('First Semester', year.year)}>First Semester</Dropdown.Item>
                          <Dropdown.Item onClick={() => handleSemester('Second Semester', year.year)}>Second Semester</Dropdown.Item>
                      </Dropdown.Menu>
                  </Dropdown>
                  </div>
                  </Form.Group>
                  </div>
                  <div className="form-group text-left"style={{width: '10%', marginLeft: '8px'}}>
                  <Button disabled={(() => {
                          switch (year.year) {
                            case 1: return !subject1 || !semester1;
                            case 2: return !subject2 || !semester2;
                            case 3: return !subject3 || !semester3;
                            case 4: return !subject4 || !semester4;
                            case 5: return !subject5 || !semester5;
                            }})()} 
                          className='buttonsonforms'
                          onClick={()=>handleAddsubject(year.year)}
                          type="button" 
                          style={{minWidth: '100%', minHeight: '40px', marginRight: '24px', marginTop: '30px'}}>
                  <h1 className='inter-500-18px' style={{color:'white'}}>
                  Add
                  </h1>
              </Button>
                  </div>
                  </div>
                
              <Button 
                    type="button"
                    className='buttonsonforms'
                    onClick={() => {
                      setCLickedyearondiv(year.year);
                      handleModalopen()
                    }}
                    style={{maxWidth: '13%', minHeight: '40px', marginRight: '24px', marginBottom: '24px'}}>
                  <h1 className='inter-500-18px' style={{color:'white'}}>
                  Create Subject</h1>
              </Button>
              
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleModalclose}
                contentLabel="Subject Creation"
                shouldCloseOnOverlayClick={false}
                style={{
                  content: {
                    width: '70%',
                    height: '80%',
                    left: '50%',
                    transform: 'translate(-40%, 5%)',
                  }
                }}
              >
                <>
                <div style={{display: 'flex', width: '100%', justifyContent: 'flex-end'}}>
                <button onClick={handleModalclose} style={{backgroundColor:'rgba(51, 51, 51, 0.00)', borderColor:'rgba(51, 51, 51, 0.00)', paddingLeft: '0px', paddingRight:'0px', paddingBottom:'5px', left:0}}><CloseButton/></button>
                </div>
                <SubjectCreatemodal/>
                <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                <Button className='buttonsonforms' type="button" onClick={()=>handleSubmitsubject()} style={{ maxWidth: '15%', marginRight: '24px'}}>
                  <h1 style={{color:'white', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '18px', paddingTop: '8px'}}>
                  {props.loadingState == 'isNotLoading'? <>Create Subject</> : <div style={{transform: 'translate( 0px, -6px)'}}><Spinner animation="border" variant="light"/></div>}</h1>
                </Button>
                </div>
                </>
              </Modal>
              

              <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
              <div className="form-group text-left shadowed-div" style={{width: '50%', marginRight: '8px'}}>
              <h1 className='inter-500-19px'>First Semester</h1>
              <Table hover style={{border: 'none'}}>
              <thead >
                  <tr>
                    <th className='table-head' style={{width: '16%', paddingLeft:'20px'}}>CODE</th>
                    <th className='table-head' style={{width: '34%'}}>DESCRIPTION</th>
                    <th className='table-head' style={{width: '8%'}}>UNITS</th>
                    <th className='table-head' style={{width: '8%'}}>LEC</th>
                    <th className='table-head' style={{width: '8%'}}>LAB</th>
                    <th className='table-head' style={{width: '13%'}}>PREREQ</th>
                    <th className='table-head' style={{width: '13%'}}>COREQ</th>
                  </tr>
                </thead>
                <tbody style={{cursor: 'pointer', }}>
                {
                      semesterarray.find(obj => obj.year === year.year).firstsemester?.map((subjectCode, index) => {
                        const subject = props.subjectsListForTable.find(item => item.code === subjectCode);
                        if (!subject){
                          console.log('subject not found')
                          return null;
                        } 
                        return (
                          <tr key={index}>
                            <td className='table-body' style={{paddingLeft:'20px'}}>{subject.code}</td>
                            <td className='table-body'>{subject.description}</td>
                            <td className='table-body'>{subject.units}</td>
                            <td className='table-body'>{subject.lecture}</td>
                            <td className='table-body'>{subject.lab}</td>
                            <td className='table-body'>{subject.prerequisite? subject.prerequisite : '-'}</td>
                            <td className='table-body'>{subject.corequisite? `${subject.corequisite}`: subject.related_corequisite? `${subject.related_corequisite}`: "-"}</td>
                          </tr>
                        );
                      })
                    }
                </tbody>
                </Table>
              </div>
             
              <div className="form-group text-left shadowed-div"style={{width: '50%', marginLeft: '8px'}}>
              <h1 className='inter-500-19px'>Second Semester</h1>
              <Table hover style={{border: 'none'}}>
              <thead >
                  <tr>
                  <th className='table-head' style={{width: '16%', paddingLeft:'20px'}}>CODE</th>
                    <th className='table-head' style={{width: '34%'}}>DESCRIPTION</th>
                    <th className='table-head' style={{width: '8%'}}>UNITS</th>
                    <th className='table-head' style={{width: '8%'}}>LEC</th>
                    <th className='table-head' style={{width: '8%'}}>LAB</th>
                    <th className='table-head' style={{width: '13%'}}>PREREQ</th>
                    <th className='table-head' style={{width: '13%'}}>COREQ</th>
                  </tr>
                </thead>
                <tbody style={{cursor: 'pointer', }}>
                {
                      semesterarray.find(obj => obj.year === year.year).secondsemester?.map((subjectCode, index) => {
                        const subject = props.subjectsListForTable.find(item => item.code === subjectCode);
                        if (!subject){
                          console.log('subject not found')
                          return null;
                        } 
                        return (
                          <tr key={index}>
                            <td className='table-body' style={{paddingLeft:'20px'}}>{subject.code}</td>
                            <td className='table-body'>{subject.description}</td>
                            <td className='table-body'>{subject.units}</td>
                            <td className='table-body'>{subject.lecture}</td>
                            <td className='table-body'>{subject.lab}</td>
                            <td className='table-body'>{subject.prerequisite? subject.prerequisite : '-'}</td>
                            <td className='table-body'>{subject.corequisite? `${subject.corequisite}`: subject.related_corequisite? `${subject.related_corequisite}`: "-"}</td>
                          </tr>
                        );
                      })
                    }
                </tbody>
                </Table>
              </div>
              </div>
                </div>
              ))}

              
  
            </InputGroup>
          </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '32px', marginTop: duration? '0px':'200px' }}>
        <Button className='buttonsonforms' disabled={!coursecode || !description || !department || !duration } type="button" onClick={handleSubmit} style={{ minWidth: '15%', minHeight: '48px', marginRight: '24px', }}>
            <h1 className='inter-500-18px' style={{color:'white'}}>
            {props.loadingState == 'isNotLoading'? <>Create Course</> : <div style={{transform: 'translate( 0px, -6px)'}}><Spinner animation="border" variant="light"/></div>}</h1>
        </Button>
        </div>
        </div>
        </>
    )
}

CourseCreate.propTypes = {
    sidebarState: PropTypes.string,
    setsidebarState: PropTypes.func.isRequired,
    subsidebarState: PropTypes.string,
    setsubsidebarState: PropTypes.func.isRequired,
    setcourseState: PropTypes.func,
    courseState: PropTypes.string,
    pageHeader: PropTypes.object,
    setLoading: PropTypes.func,
    loadingState: PropTypes.string,
    subjectsListForTable: PropTypes.array,
    getSubjectsList: PropTypes.func,
    addSubject: PropTypes.func,
    getDepartments: PropTypes.func,
    departmentsList: PropTypes.array,
    setError: PropTypes.func,
    subjectFormdata: PropTypes.object,
    setSubjectformdata: PropTypes.func,
    addCourse: PropTypes.func,
  }
  
  const mapStateToProps = (state) => ({
    sidebarState: state.main.sidebarState,
    subsidebarState: state.main.subsidebarState,
    pageHeader: state.main.pageHeader,
    loadingState: state.main.loadingState,
    courseState: state.main.courseState,
    departmentsList: state.main.departmentsList,
    subjectsListForTable: state.main.subjectsListForTable,
    errorMessage: state.main.errorMessage,
    subjectFormdata: state.main.subjectFormdata,
    });


export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setcourseState, setpageHeader,
                                                 setLoading, getSubjectsList, addSubject, getDepartments, setError, 
                                                 setSubjectformdata, addCourse})(CourseCreate))