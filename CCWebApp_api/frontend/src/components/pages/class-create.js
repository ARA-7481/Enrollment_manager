import React, { useState, Fragment, useEffect } from 'react'
import PropTypes, { func } from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState, setclassState, setpageHeader, getCourses, getSubject, getFaculty, getRooms, getClasses, addClass, setLoading, getClassesList } from '../../redux/actions/main';

import DatePicker from "react-datepicker";
import { Col, Form, InputGroup, Dropdown, DropdownButton, Table, Card, Button, Spinner } from 'react-bootstrap';
import { BlueExclamation, RedExclamation, SimpleCalendar } from '../../assets/svg/clnsmpl-icon';

import "react-datepicker/dist/react-datepicker.css";

function ClassCreate(props) {
  const navigate = useNavigate();

  const [submissionComplete, setSubmission] = useState(false)
  const [schedule, setSchedule] = useState([])
  const [course, setCourse] = React.useState('');
  const [yearlevel, setYearlevel] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [classname, setClassname] = React.useState('');
  const [instructor, setInstructor] = React.useState('');
  const [type, setType] = React.useState('Face to Face');
  const [description, setDescription] = React.useState('None');
  const [days, setDays] = React.useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [classHours, setClasshours] = useState(0);
  const [conflictMessage, setConflictmessage] = useState([]);
  const [conflictedDays, setConflicteddays] = useState([]);

  const [formData, setFormData] = useState({});

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const orderedDays = daysOfWeek.filter(day => days.includes(day));

  const handleSubmit = () => {
    const conflicts = []
    const conflictedList = []
    props.setLoading('isLoading')
    
    schedule.forEach(myItem => {
      props.classesListForTable.forEach(classItem => {
        classItem.schedule.forEach(scheduleItem => {
          if (scheduleItem.day === myItem.day) {
            if ((myItem.time_in > scheduleItem.time_in && myItem.time_in < scheduleItem.time_out) || 
                (myItem.time_out > scheduleItem.time_in && myItem.time_out < scheduleItem.time_out)) {
                if (scheduleItem.room === myItem.room){
                  if (!conflictedList.includes(myItem.day)) {
                    conflictedList.push(myItem.day)
                }
                  setSubmission(false)
                  conflicts.push({'day': myItem.day, 'message':`Room schedule conflict with Class ${classItem.code}, TIME-IN: ${scheduleItem.time_in}  TIME-OUT: ${scheduleItem.time_out}  ROOM: ${scheduleItem.room}`})
                }
                if (classItem.teacher.id === instructor){
                  if (!conflictedList.includes(myItem.day)) {
                    conflictedList.push(myItem.day)
                }
                  setSubmission(false)
                  conflicts.push({'day': myItem.day, 'message':`Instructor schedule conflict with Class ${classItem.code}, TIME-IN: ${scheduleItem.time_in}  TIME-OUT:${scheduleItem.time_out} ROOM: ${scheduleItem.room}`})
                }
            }
          }
        });
      });
    });
    setConflictmessage(conflicts)
    setConflicteddays(conflictedList)
    if (conflicts.length === 0){
    props.addClass(formData);
    setSubmission(true)
    }
  }

  const handleClassname = (event) => {
    const { checked } = event.target;
    if (checked) {

      const yearLevelMapping = {
        "First Year": "1",
        "Second Year": "2",
        "Third Year": "3",
        "Fourth Year": "4",
        "Fifth Year": "5"
      };
      const yearLevelNumber = yearLevelMapping[yearlevel];
      const newClassname = `${subject} ${yearLevelNumber}`;
  
      const countMapping = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
        "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", 
        "U", "V", "W", "X", "Y", "Z"
      ];
      const count = props.classesList.length
      const countLetter = countMapping[count];
      const finalClassname = `${newClassname}${countLetter} (${course})`;

      setClassname(finalClassname);
    } else {
      setClassname('');
    }
  };

  const handleDay = (event) => {
    const { name, checked } = event.target;

    setDays(prevDays => {
      if (checked) {
        return [...prevDays, name];
      } else {
        return prevDays.filter(day => day !== name);
      }
    });
    if (!checked) {
      setSchedule(schedule.filter(obj => obj.day !== name))
    }
  };

  const calculateTotalHours = () => {
    let totalHours = 0;
  
    schedule.forEach(item => {
      const timeIn = new Date(`1970-01-01T${item['time_in']}Z`);
      const timeOut = new Date(`1970-01-01T${item['time_out']}Z`);
  
      const diffInMilliseconds = timeOut - timeIn;
      const diffInHours = diffInMilliseconds / (1000 * 60 * 60);
      if (diffInHours < 0) {
        return null;
      }
      totalHours += diffInHours;
    });
    if(totalHours){
    return totalHours.toFixed(2);
    }
  };

  const handleTimein = (time, day) => {
      const dayObject = schedule.find(obj => obj.day === day);
      if (dayObject) {
        const updatedSchedule = schedule.map(obj => 
          obj.day === day ? {...obj, 'time_in': time} : obj
        );
        setSchedule(updatedSchedule);
      } else {
        setSchedule([...schedule, {day: day, 'time_in': time}]);
      }
  };

  const handleTimeout = (time, day) => {
    const dayObject = schedule.find(obj => obj.day === day);
    if (dayObject) {
      const updatedSchedule = schedule.map(obj => 
        obj.day === day ? {...obj, 'time_out': time} : obj
      );
      setSchedule(updatedSchedule);
    } else {
      setSchedule([...schedule, {day: day, 'time_out': time}]);
    }
};
  const handleRoom = (room, day) => {
    const dayObject = schedule.find(obj => obj.day === day);
    if (dayObject) {
      const updatedSchedule = schedule.map(obj => 
        obj.day === day ? {...obj, 'room': room} : obj
      );
      setSchedule(updatedSchedule);
    } else {
      setSchedule([...schedule, {day: day, 'room': room}]);
    }
};
  
  const handleYearlevel = (yearlevel) => {
    setYearlevel(yearlevel);
    if (subject !== ''){
      props.getClasses(subject, yearlevel)
    }
  }

  const handleCourse = (course) => {
    props.getFaculty('','',course,'');
    setCourse(course);
    setSubject('');
    setInstructor('');
  }

  const handleSubject = (subject) => {
    props.getSubject(subject);
    setSubject(subject);
    if(yearlevel !== '')
      props.getClasses(subject, yearlevel)
  }

  const handleType = (classtype) => {
    setType(classtype);
  }
  useEffect(() => {
    props.setsidebarState('class')
    props.setsubsidebarState(null)
    props.setclassState('create-page-one')
    props.setpageHeader('Create Class', '', 'Fill Information to Create Class')
    props.getCourses()
    props.getRooms()
    props.getFaculty('','','','')
    props.getClassesList('','','','')
  },[])

  useEffect(() => {
    if (props.loadingState === 'isNotLoading' && submissionComplete) {
      if(props.error){
        setSubmission(false)
      }else if(props.success){
        navigate('/admins/class');
      }
    }
    setClasshours(calculateTotalHours())
    setFormData({
      code : classname,
      course: course,
      description : description,
      yearlevel : yearlevel,
      type : type,
      subject : subject,
      teacher : instructor,
      schedule: schedule,
      startdate: startDate,
      enddate: endDate,
    })

  }, [schedule, classname, description, yearlevel, type, subject, instructor, startDate, endDate, props.loadingState, submissionComplete, conflictMessage, props.error, props.success]);

  return (
      <>
      <div style={{backgroundColor:'#ffffff', borderRadius:'8px', paddingBottom: '48px'}}>
        <div style={{padding: '24px'}}>
          <h1 className='card-title'>Class Information</h1>
          <InputGroup>
            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                <div className="form-group text-left"style={{width: '50%', marginRight: '8px'}}>
                <Form.Group>
                <Form.Label htmlFor="course" className='form-label'>Course</Form.Label>
                <div style={{display: 'flex'}}>
                <Form.Select id="course" defaultValue='' onChange={e => handleCourse(e.target.value)} className='formselect-border'>
                <option value="" disabled >Select Course</option>
                {props.coursesList.sort().map((course) => (
                  <option key={course.code} value={course.code}>{course.code}</option>
                ))}
                </Form.Select>
                {!course &&
                <div style={{transform: 'translate( -55px, 5px)', width: '0px', pointerEvents: 'none'}}>
                <RedExclamation/>
                </div>
                }
                </div>
              </Form.Group>
              </div>

              <div className="form-group text-left"style={{width: '50%', marginLeft: '8px'}}>
              <Form.Group>
              <Form.Label htmlFor="yearlevel" className='form-label'>Year Level</Form.Label>
              <div style={{display: 'flex'}}>
              <Form.Select id="yearlevel" value={yearlevel} onChange={e => handleYearlevel(e.target.value)} className='formselect-border'>
              <option value="" disabled >Select Year Level</option>
              <option value="First Year" >First Year</option>
              <option value="Second Year" >Second Year</option>
              <option value="Third Year" >Third Year</option>
              <option value="Fourth Year" >Fourth Year</option>
              <option value="Fifth Year" >Fifth Year</option>
              </Form.Select>
              {!yearlevel &&
                <div style={{transform: 'translate( -55px, 5px)', width: '0px', pointerEvents: 'none'}}>
                <RedExclamation/>
                </div>
                }
              </div>
              </Form.Group>
              </div>

            </div>
             
            <div style={{width: '100%', paddingBottom: '24px'}}>
            <Form.Group>
              <Form.Label htmlFor="subject" className='form-label'>Subject</Form.Label>
              <div style={{display: 'flex'}}>
              <Form.Select id="subject" disabled={course === '' || yearlevel === ''} value={subject} onChange={e => handleSubject(e.target.value)} className='formselect-border'>
              <option value="" disabled>Select Subject</option>
              { 
                (() => {
                  switch(yearlevel) {
                    case 'First Year':
                      return [
                        ...(props.coursesList.filter(c => c.code === course)[0]?.subjects_11 || []),
                        ...(props.coursesList.filter(c => c.code === course)[0]?.subjects_12 || [])
                      ].map((subject, index) => (
                        <option key={index} value={subject}>{subject}</option>
                      ));
                    case 'Second Year':
                      return [
                        ...(props.coursesList.filter(c => c.code === course)[0]?.subjects_21 || []),
                        ...(props.coursesList.filter(c => c.code === course)[0]?.subjects_22 || [])
                      ].map((subject, index) => (
                        <option key={index} value={subject}>{subject}</option>
                      ));
                    case 'Third Year':
                      return [
                        ...(props.coursesList.filter(c => c.code === course)[0]?.subjects_31 || []),
                        ...(props.coursesList.filter(c => c.code === course)[0]?.subjects_32 || [])
                      ].map((subject, index) => (
                        <option key={index} value={subject}>{subject}</option>
                      ));
                    case 'Fourth Year':
                      return [
                        ...(props.coursesList.filter(c => c.code === course)[0]?.subjects_41 || []),
                        ...(props.coursesList.filter(c => c.code === course)[0]?.subjects_42 || [])
                      ].map((subject, index) => (
                        <option key={index} value={subject}>{subject}</option>
                      ));
                    case 'Fifth Year':
                      return [
                        ...(props.coursesList.filter(c => c.code === course)[0]?.subjects_51 || []),
                        ...(props.coursesList.filter(c => c.code === course)[0]?.subjects_52 || [])
                      ].map((subject, index) => (
                        <option key={index} value={subject}>{subject}</option>
                      ));
                    default:
                      return null;
                  }
                })()
              }
              </Form.Select>
              {!subject &&
                <div style={{transform: 'translate( -55px, 5px)', width: '0px', pointerEvents: 'none'}}>
                <RedExclamation/>
                </div>
                }
              </div>
              </Form.Group>
            </div>
            <h1 className='inter-500-19px'>Subject Details Preview</h1>

            <Table style={{border: 'none'}}>
            <thead >
            <tr>
              <th className='table-head' style={{width: '10%', paddingLeft:'20px'}}>CODE</th>
              <th className='table-head' style={{width: '23%'}}>SUBJECT</th>
              <th className='table-head' style={{width: '10%'}}>UNITS</th>
              <th className='table-head' style={{width: '10%'}}>LEC</th>
              <th className='table-head' style={{width: '10%'}}>LAB</th>
              <th className='table-head' style={{width: '10%'}}>COREQUISITE</th>
              <th className='table-head' style={{width: '10%'}}>PREREQUISITE</th>
            </tr>
            </thead>
            <tbody style={{cursor: 'pointer', }}>
              <tr>
                <td className='table-body' style={{paddingLeft:'20px'}}>
                  {props.subject.code ? props.subject.code : '-'}
                </td>
                <td className='table-body'>
                  {props.subject.description ? props.subject.description : '-'}
                </td>
                <td className='table-body'>
                  {props.subject.units ? props.subject.units : '-'}
                </td>
                <td className='table-body'>
                  {props.subject.lecture ? `${props.subject.lecture} hr/s` : '-'}
                </td>
                <td className='table-body'>
                  {props.subject.lab ? `${props.subject.lab} hr/s` : '-'} 
                </td>
                <td className='table-body'>
                  {props.subject.corequisite ? `${props.subject.corequisite}` : '-'}
                </td>
                <td className='table-body'>
                  {props.subject.prerequisite ? `${props.subject.prerequisite}` : '-'} 
                </td>
              </tr>
            </tbody>
            </Table>
            <div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
            <div style={{width: '50%', marginRight: '8px'}}>
            <Form.Group>
              <Form.Label htmlFor="classname" className='form-label'>Class Name</Form.Label>
              <div style={{display: 'flex'}}>
              <Form.Control type="text" value={classname} placeholder="Class Unique Name" id="classname" onChange={e => setClassname(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
              {!classname &&
                <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                <RedExclamation/>
                </div>
                }
              </div>
              </Form.Group>
            </div>

            <div style={{width: '50%', paddingLeft: '24px', paddingTop:'38px'}}>
            <Form.Group>
              <Form.Check
              disabled={subject === '' || yearlevel === ''}
              type="checkbox"
              onChange={handleClassname}
              />
              <h1 className='inter-400-16px' style={{paddingTop: '3px'}}> 
              Use standard class naming scheme?
              </h1>  
            </Form.Group>
            </div>

            </div>


            <div style={{display: 'flex', width: '100%', paddingTop: '24px', justifyContent: 'space-between'}}>

            <div style={{width: '50%', marginRight: '8px'}}>
            <Form.Group>
              <Form.Label htmlFor="instructor" className='form-label'>Instructor</Form.Label>
              <div style={{display: 'flex'}}>
              <Form.Select id="instructor" disabled={course === ''} value={instructor} onChange={e => setInstructor(e.target.value)} className='formselect-border'>
              <option value="" disabled>Select Instructor</option>
              {props.facultyList.sort().map((faculty) => (
                  <option key={faculty.id} value={faculty.id}>{faculty.userprofile.first_name} {faculty.userprofile.last_name}</option>
                ))}
              </Form.Select>
              {!instructor &&
                <div style={{transform: 'translate( -55px, 5px)', width: '0px', pointerEvents: 'none'}}>
                <RedExclamation/>
                </div>
                }
              </div>
              </Form.Group>
            </div>
            
            <div style={{width: '50%', marginLeft: '8px'}}>
            <Form.Group style={{width: '50%'}}>
            <Form.Label htmlFor="classtype" className='form-label' style={{paddingBottom: '7px'}}>Class Type</Form.Label>
            <div style={{display: 'flex', color:'#8A92A6', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '16px',}}>
              <Form.Check 
                style={{paddingRight: '32px'}}
                type='radio'
                id='option1'
                label='Face to Face'
                name='groupOptions'
                onChange={() =>handleType('Face to Face')}
                defaultChecked={true}
              />
              <Form.Check style={{paddingRight: '32px'}}
                type='radio'
                id='option2'
                label='Virtual'
                name='groupOptions'
                onChange={() =>handleType('Virtual')}
              />
              <Form.Check
                type='radio'
                id='option3'
                label='Hybrid'
                name='groupOptions'
                onChange={() =>handleType('Hybrid')}
              />
              </div>
              </Form.Group>
              </div>
            </div>


            <div style={{width: '100%', paddingTop: '24px'}}>
            <Form.Group>
              <Form.Label htmlFor="description" className='form-label'>Description</Form.Label>
              <Form.Control as="textarea" rows={3} type="text" placeholder="Enter class description (Optional). You can also add notes here." id="description" onChange={e => setDescription(e.target.value)} style={{width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
            </Form.Group>
            </div>

            <h1 className='card-title' style={{ paddingTop: '48px'}}>Class Schedule</h1>
            <Card style={{border: '2px solid #3A57E8', width: '100%', height: '60px', backgroundColor: '#D8DDFA', borderRadius: '4px', justifyContent: 'center', marginBottom: '24px'}}>
              <div style={{display:'flex', paddingLeft: '12px'}}>
              <BlueExclamation/><h1 style={{color:'#293DA2', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '16px', paddingTop: '4px', paddingLeft: '8px'}}>This subject requires {props.subject.lecture ? `${props.subject.lecture} hours of lecture` : ''}  {props.subject.lecture && props.subject.lab ? 'and' : ''} {props.subject.lecture || props.subject.lab ? '' : '____'} {props.subject.lab ? `${props.subject.lab} hours of laboratory` : ''}  per week.</h1>
              </div>
            </Card>

            <div style={{width: '100%', paddingBottom: '24px'}}>
              <Form.Group>
                <Form.Label htmlFor="description" className='form-label'>Class Schedule Every</Form.Label>
                <div style={{display: 'flex', paddingLeft: '24px', }}>
                {daysOfWeek.map(day => (
                  <div key={day} style={{width: '130px'}}>
                    <label className='inter-400-16px'> 
                      <Form.Check
                        type="checkbox"
                        name={day}
                        onChange={handleDay}
                      />
                      {day}
                    </label>
                  </div>
                ))}
              </div>
              </Form.Group>
            </div>

            <div style={{display: 'flex', width: '100%'}}>
              <div style={{width: '33%', marginRight: '8px'}}>
              <Form.Group>
                <Form.Label htmlFor="startdate" className='form-label'>Class Start Date</Form.Label>
                <div className='date-picker-wrapper' style={{display: 'flex'}}>
                <DatePicker className='date-picker' placeholderText='Select Date' popperPlacement="bottom-end" selected={startDate} onChange={(date) => setStartDate(date)} />
                <div style={{transform: 'translate( -33px, 7px)', width: '0px', pointerEvents: 'none'}}>
                <SimpleCalendar/>
                </div>
                {!startDate &&
                <div style={{transform: 'translate( -58px, 7px)', width: '0px', pointerEvents: 'none'}}>
                <RedExclamation/>
                </div>
                }
                </div>
              </Form.Group>
              </div>

              <div style={{width: '33%', marginLeft: '8px'}}>
              <Form.Group>
                <Form.Label htmlFor="enddate" className='form-label'>Class End Date</Form.Label>
                <div className='date-picker-wrapper' style={{display: 'flex'}}>
                <DatePicker className='date-picker' placeholderText='Select Date' popperPlacement="bottom-end" selected={endDate} onChange={(date) => setEndDate(date)}/>
                <div style={{transform: 'translate( -33px, 7px)', width: '0px', pointerEvents: 'none'}}>
                <SimpleCalendar/>
                </div>
                {!endDate &&
                <div style={{transform: 'translate( -58px, 7px)', width: '0px', pointerEvents: 'none'}}>
                <RedExclamation/>
                </div>
                }
                </div>
              </Form.Group>
              </div>
            </div>

            <div style={{width: '100%', marginBottom: '24px'}}>
            {orderedDays.map(day =>(
              <div key={day} style={{marginTop: '24px', width: '100%'}}>
                <h1 className='inter-500-18px'>{day}</h1>
                <div style={{display: 'flex', width: '100%', marginTop: '24px'}}>
                <Form.Group style={{marginRight: '16px', width: '20%'}}>
                  <Form.Label>Class Start Times</Form.Label>
                  <div style={{display: 'flex'}}>
                  <Form.Control
                    type="time"
                    onChange={e => handleTimein(e.target.value, day)}
                    style={{borderColor: conflictedDays.includes(day) ? 'red' : '#EEEEEE'}}
                  />
                    {!classHours &&
                <div style={{transform: 'translate( -60px, 5px)', width: '0px', pointerEvents: 'none'}}>
                <RedExclamation/>
                </div>
                }
                {conflictedDays.includes(day) &&
                <div style={{transform: 'translate( -60px, 5px)', width: '0px', pointerEvents: 'none'}}>
                <RedExclamation/>
                </div>
                }
                </div>
                </Form.Group>
                
                <Form.Group style={{marginRight: '16px', width: '20%'}}>
                  <Form.Label>Class End Time</Form.Label>
                  <div style={{display: 'flex'}}>
                  <Form.Control
                    type="time" 
                    onChange={e => handleTimeout(e.target.value, day)}
                    style={{borderColor: conflictedDays.includes(day) ? 'red' : '#EEEEEE'}}
                  />
                  {!classHours &&
                <div style={{transform: 'translate( -60px, 5px)', width: '0px', pointerEvents: 'none'}}>
                <RedExclamation/>
                </div>
                }
                {conflictedDays.includes(day) &&
                <div style={{transform: 'translate( -60px, 5px)', width: '0px', pointerEvents: 'none'}}>
                <RedExclamation/>
                </div>
                }
                </div>
                </Form.Group>
                <Form.Group style={{marginRight: '16px', width: '40%'}}>
                  <Form.Label>Room</Form.Label>
                  <div style={{display: 'flex'}}>
                  <Form.Select id="room" defaultValue='' onChange={e => handleRoom(e.target.value, day)} disabled={type === 'Virtual'} style={{borderColor: conflictedDays.includes(day) ? 'red' : '#EEEEEE'}}>
                    <option value="" disabled>Select Room</option>
                    {props.roomsList.sort().map((room) => (
                  <option key={room.code} value={room.code}>{room.code}</option>
                ))}
                  </Form.Select>
                  {conflictedDays.includes(day) &&
                  <div style={{transform: 'translate( -63px, 5px)', width: '0px', pointerEvents: 'none'}}>
                  <RedExclamation/>
                  </div>
                  }
                  </div>
                </Form.Group>
                {/* <Button type="button" style={{borderColor:'#3A57E8', borderRadius: '4px', backgroundColor: '#3A57E8', width: '18%', height: '48px', marginTop: '25px', alignContent: 'center'}}>
                  <h1 style={{color:'white', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '18px', paddingTop: '8px'}}>Check Conflicts</h1>
                </Button> */}
                </div>
                {conflictMessage && conflictMessage.length > 0 && conflictMessage.map((message, index) => (
                    <div key={index}>
                      {message.day === day && <h1 className='error-font'>{message.message}</h1>}
                    </div>
                  ))}
              </div>
            ))}
            </div>
            <h1 className='inter-500-18px'>Total Class Hours: {classHours? `${classHours} Hours` : `(Invalid Input)` } </h1>
          </InputGroup>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '32px' }}>
        <Button disabled={!course || !yearlevel || !subject || !classname || !instructor || !startDate || !endDate || schedule.length === 0} type="button" onClick={handleSubmit} style={{borderColor:'#3A57E8', borderRadius: '4px', backgroundColor: '#3A57E8', width: '15%', height: '48px', alignContent: 'center', marginRight: '24px'}}>
            <h1 style={{color:'white', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '18px', paddingTop: '8px'}}>
              {props.loadingState == 'isNotLoading'? <>Create Class</> : <div style={{transform: 'translate( 0px, -6px)'}}><Spinner animation="border" variant="light"/></div>}</h1>
        </Button>
        </div>
      </div>
      </>
    );
}

ClassCreate.propTypes = {
  sidebarState: PropTypes.string,
  setsidebarState: PropTypes.func.isRequired,
  subsidebarState: PropTypes.string,
  setsubsidebarState: PropTypes.func.isRequired,
  classState: PropTypes.string,
  pageHeader: PropTypes.object,
  coursesList: PropTypes.array.isRequired,
  getCourses: PropTypes.func.isRequired,
  subject: PropTypes.object,
  getSubject: PropTypes.func,
  facultyList: PropTypes.array,
  getFaculty: PropTypes.func,
  getRooms: PropTypes.func,
  roomsList: PropTypes.array,
  getClasses: PropTypes.func,
  classesList: PropTypes.array,
  addClass: PropTypes.func,
  setLoading: PropTypes.func,
  loadingState: PropTypes.string,
  classesListForTable: PropTypes.array,
  getClassesList: PropTypes.func,
  error: PropTypes.string,
  success: PropTypes.string,
}

const mapStateToProps = (state) => ({
  sidebarState: state.main.sidebarState,
  subsidebarState: state.main.subsidebarState,
  classState: state.main.classState,
  pageHeader: state.main.pageHeader,
  coursesList: state.main.coursesList,
  subject: state.main.subject,
  facultyList: state.main.facultyList,
  roomsList: state.main.roomsList,
  classesList: state.main.classesList,
  loadingState: state.main.loadingState,
  classesListForTable: state.main.classesListForTable,
  error: state.main.error,
  success: state.main.success,
  });

export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setclassState, setpageHeader, getCourses, getSubject, getFaculty, getRooms, getClasses, addClass, setLoading, getClassesList})(ClassCreate))