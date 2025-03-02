import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import withAuth from '../common/withAuth';
import Calendar from 'react-calendar';
import Modal from 'react-modal'
import TimePicker from 'react-time-picker';
import { setsidebarState, setsubsidebarState, setpageHeader, getEventsList, getFaculty, getStaff, setLoading, addEvent, ConflictError, TimeError, getEventsListMonth } from '../../redux/actions/main';
import { CloseButton, NoEvents, SmallBell, SmallCalendar, SmallClock, SmallMapPin, SmallUser, AddUsers, ConnectedAccordionIconOpen, RedX, RedExclamation, BlueExclamationSmall,
         LinkIcon, 
         OnlineIconRed,
         OnlineIconGreen,
         OnlineIconYellow,
         PurpleCircle,
         RedCircle,
         GreenCircle} from '../../assets/svg/clnsmpl-icon';
import { Form, Dropdown, Table, Button, Spinner } from 'react-bootstrap';
Modal.setAppElement('#app');

function SchedulerDashboard(props) {
  const [submissionComplete, setSubmission] = useState(false)
  const [formData, setFormData] = useState({});
  const [timeinvalue, setTimeInValue] = useState('');
  const [timeoutvalue, setTimeOutValue] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [link, setLink] = useState('');
  const [category, setCategory] = useState('');
  const [venue, setVenue] = useState('');
  const [meetlink, setMeetlink] = useState('');
  const [participantsother, setParticipantsothers] = useState('');
  const [conflict, setConflict] = useState('Allow-Conflict');
  const [value, setValue] = useState(new Date());
  const [oldvalue, setOldvalue] = useState(new Date());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [eventdetail, setEventdetail] = useState({});
  const [modalMode, setModalMode] = useState('');
  const [conflicttimein, setConflicttimein] = useState([])
  const [conflicttimeout, setConflicttimeout] = useState([])
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const [updatedstafflist, setUpdatedstafflist] = useState([])
  const [staffobjectarray, setStaffobjectarray] = useState([])
  const [staffID, setStaffID] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const combinedList = [...props.facultyList];
  const currentdate = new Date();

  const formatDate = (date) => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
  
   
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;
  
    return `${year}-${month}-${day}`;
  }

  const handleActiveStartDateChange = ({ activeStartDate, view }) => {
        if (view === 'month') {
            setCurrentMonth(activeStartDate);
            props.getEventsListMonth(activeStartDate);
        }
    };

  const getTileClassName = ({ date, view }) => {
        if (view === 'month') {
          const formattedDate = formatDate(date);
          const event =  props.eventsListMonth.filter(d => d.date === formattedDate);
          const holiday = event.find(e => e.category === 'Holiday')
          if (holiday) {
            switch (holiday.category) {
              case 'Holiday':
                return 'holiday-tile';
              case 'Academic-Event':
                return '';
              case 'Special-Event':
                return '';
              default:
                return '';
            }
          }
        }
        return '';
    }
      

  const getTileContent = ({ date, view }) => {
    if (view === 'month') {
        const formattedDate = formatDate(date)
        const tileContent = props.eventsListMonth.filter(d => d.date === formattedDate);
        return (
          <div style={{position: 'absolute', display: 'flex', bottom:0, paddingBottom:'2px', overflow:'hidden'}}>
              {tileContent.map((d, index) => (
                  <div key={index} >
                    {(() => {
                      switch(d.category) {
                        case 'Holiday': return <div style={{padding:'2px'}}><RedCircle/></div>;
                        case 'Academic-Event': return <div style={{padding:'2px'}}><GreenCircle/></div>;
                        case 'Special-Event': return <div style={{padding:'2px'}}><PurpleCircle/></div>;
                        default: return <></>;
                      }
                      })()}
                  </div>
              ))}
          </div>
      );
    }
  };

  const user = JSON.parse(localStorage.getItem('user'))
      if (!user){
        return <Navigate to="/auth/admin-signin" />;
      }

  const filteredStaff = combinedList.filter(staff =>{
    return staff.id.toLowerCase().includes(staffID.toLowerCase()) || 
    staff.userprofile.first_name.toLowerCase().includes(staffID.toLowerCase())||
    staff.userprofile.middle_name.toLowerCase().includes(staffID.toLowerCase()) ||
    staff.userprofile.last_name.toLowerCase().includes(staffID.toLowerCase())
})

  const handleCalendarClick = (date) => {
    if (value.getMonth() != date.getMonth()){
      props.getEventsListMonth(date)
    }
    setValue(date);
  }

  const convertTo12HourFormat = (time) => {
    let [hours, minutes, seconds] = time.split(':');
    hours = parseInt(hours, 10);
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'
    return `${hours.toString().padStart(2, '0')}:${minutes} ${ampm}`;
  };

  const handleFlags = (timestart, timeend, conflict) => {
    if (timeend < timestart){
      props.TimeError()
    }else if(conflict == "No-Conflict"){
      const selfconflicttimestart = props.eventsList.filter(event => timestart >= event.time_start && timestart <= event.time_end)
      const selfconflicttimeend = props.eventsList.filter(event => timeend >= event.time_start && timestart <= event.time_end)
      if (selfconflicttimestart.length > 0){
        props.ConflictError(selfconflicttimestart[0].title,convertTo12HourFormat(selfconflicttimestart[0].time_start),convertTo12HourFormat(selfconflicttimestart[0].time_end))
      }else if (selfconflicttimeend.length > 0){
        props.ConflictError(selfconflicttimeend[0].title,convertTo12HourFormat(selfconflicttimeend[0].time_start),convertTo12HourFormat(selfconflicttimeend[0].time_end))
      }else{
        props.setLoading('isLoading')
        props.addEvent(formData)
        setSubmission(true)
      }
    }
    else{
      const eventsWithConflicts = props.eventsList.filter(event => event.conflict == "No-Conflict")
      if (eventsWithConflicts.length > 0){
        const conflicttimestart = eventsWithConflicts.filter(event => timestart >= event.time_start && timestart <= event.time_end)
        const conflicttimeend = eventsWithConflicts.filter(event => timeend >= event.time_start && timestart <= event.time_end)
          if (conflicttimestart.length > 0){
            props.ConflictError(conflicttimestart[0].title,convertTo12HourFormat(conflicttimestart[0].time_start),convertTo12HourFormat(conflicttimestart[0].time_end))
          }else if (conflicttimeend.length > 0){
            props.ConflictError(conflicttimeend[0].title,convertTo12HourFormat(conflicttimeend[0].time_start),convertTo12HourFormat(conflicttimeend[0].time_end))
          }else{
            props.setLoading('isLoading')
            props.addEvent(formData)
            setSubmission(true)
          }
      } else{
        props.setLoading('isLoading')
        props.addEvent(formData)
        setSubmission(true)
      }
    }
  }

  
  const handleSubmit = () => {
        props.setLoading('isLoading')
        props.addEvent(formData)
        setSubmission(true)
    }

  const handleConflict = (event) => {
    const { checked } = event.target;
      if (checked) {
        setConflict('No-Conflict')
      } else {
        setConflict('Allow-Conflict')
      }
  };

  const handleStaffsearch = (e) => {
    if (isOpen){
      e.stopPropagation()
    }
  }

  const handleAddstaff = (id, staff) => {
    if(id && !updatedstafflist.includes(id)){
      setUpdatedstafflist([...updatedstafflist, id])
        setStaffobjectarray([...staffobjectarray, staff])
        setStaffID('')
    }
  }

  const handleDeleteStaff = (idToDelete) => {
    const updatedList = updatedstafflist.filter(id => id !== idToDelete);
    const updatedObjectlist = staffobjectarray.filter(staff => staff.id !== idToDelete);
    setUpdatedstafflist(updatedList)
    setStaffobjectarray(updatedObjectlist)
}

  const handleToggle = (isOpen) => {
    setIsOpen(isOpen);
  }

  const handleModalopen = () => {
    setModalIsOpen(true);
    setTitle('')
    setDescription('')
    setLink('')
    setTimeInValue()
    setTimeOutValue()
    setLocation('')
    setUpdatedstafflist([])
    setStaffobjectarray([])
    setCategory('')
    setParticipantsothers('')
    setConflict('Allow-Conflict')
  }
  const handleModalclose = () => {
    setModalIsOpen(false);
  }

  useEffect(() => {
    props.setsidebarState('dashboard');
    props.setsubsidebarState(null);
    props.setpageHeader('Dashboard', '', 'Welcome to the dashboard');
    props.getEventsList(value)
    props.getFaculty('','')
    props.getStaff('','')
  }, [value, eventdetail, props.success]);

  useEffect(() => {
    props.getEventsListMonth(value)
    // console.log(props.eventsListMonth)
  }, [])

  useEffect(() => {
    // console.log(props.eventsListMonth)
  }, [props.eventsListMonth])

  useEffect(() => {
          if (props.loadingState === 'isNotLoading' && submissionComplete) {
            if(props.error){
              setSubmission(false)
            }else if(props.success){
              handleModalclose()
            }
            }
          setFormData({
            date : value,
            title : title,
            link : link,
            description: description,
            time_start : `${timeinvalue}:00`,
            time_end : `${timeoutvalue}:00`,
            type : venue,
            meetlink: meetlink,
            location : location,
            participants : updatedstafflist,
            participants_additional : participantsother,
            category : category,
            conflict : conflict,
            created_by : `${user.first_name} ${user.last_name}`
          })
      
  }, [props.loadingState, props.success, props.error, title, link, description, timeinvalue, timeoutvalue, location, updatedstafflist, participantsother, category, conflict, venue, meetlink]);
  
  return (
    <>
    <div style={{display:'flex', height: '100%', paddingTop: '20px'}}>
      <div style={{ backgroundColor: '#ffffff', display: 'flex', width: '50%', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{marginTop: '40px'}}>
          <Calendar onChange={handleCalendarClick} value={value} tileContent={getTileContent} onActiveStartDateChange={handleActiveStartDateChange} tileClassName={getTileClassName}/>
        </div>
      </div>
      <div style={{width: '50%'}}>
        <div className='events-container'>
        <h1 className='inter-500-20px' style={{justifySelf:'center', marginTop: '20px'}}>Events List</h1>
        {props.eventsList.length > 0 ? props.eventsList?.slice().sort((a, b) => a.time_start.localeCompare(b.time_start)).map(item => (
                        <div key={item.id} className="schedule-item" style={{backgroundColor:  item.category==="Holiday"?'rgba(255, 78, 100, 0.15)':
                                                                                               item.category==="Special-Event"?'rgba(92, 51, 207, 0.15)':
                                                                                               item.category==="Academic-Event"?'rgba(99, 236, 195, 0.15)':
                                                                                               'rgba(89, 93, 98, 0.15)',
                                                                              border: item.conflict ==="No-Conflict"? '1px solid rgba(255, 61, 61, 0.5)':'none'
                                                                                              }} 
                                                                                     onClick={() => {
                                                                                      setEventdetail(item)
                                                                                      setModalMode('EventDetails')
                                                                                      handleModalopen()
                                                                                    }}>
                          <div style={{padding:'15px'}}>
                          <h1 className='inter-400-16px-gray'>
                            {convertTo12HourFormat(item.time_start)}{' - '}{convertTo12HourFormat(item.time_end)}
                          </h1>
                          <h1 className='inter-500-18px-dark'>{item.title}</h1>
                          <h1 className='inter-400-16px-gray'>{item.description}</h1>
                          </div>
                        </div>
          ))
        :
        <div style={{justifySelf: 'center', marginTop: '12%'}}>
        <NoEvents/>
        </div>}
        </div>
        { value > currentdate ?
          <div className='events-button' style={{marginTop: '10px'}} onClick={() => {
                                                        setModalMode('EventCreate')
                                                        handleModalopen()
                                                        }}>
            <h1 className='inter-500-20px-light' style={{padding: '5px'}}>ADD EVENT</h1>
          </div>
      :<></>  
      }
      </div>
    </div>
    <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleModalclose}
                shouldCloseOnOverlayClick={false}
                style={{
                  content: {
                    width: '40%',
                    height: '80%',
                    left: '50%',
                    transform: 'translate(-50%, 15%)',
                    borderRadius: '16px',
                    overflow: 'auto'
                  }
                }}
              >
                <div style={{display: 'flex', width: '100%', justifyContent: 'flex-end'}}>
                <button onClick={handleModalclose} style={{backgroundColor:'rgba(51, 51, 51, 0.00)', borderColor:'rgba(51, 51, 51, 0.00)', paddingLeft: '0px', paddingRight:'0px', paddingBottom:'5px', left:0}}><CloseButton/></button>
                </div>
                
                {modalMode === 'EventDetails' ? 

                <div style={{paddingInline: '20px'}}>
                  <h1 className='inter-500-20px' style={{justifySelf:'center', marginBottom:'35px'}}>Event Details</h1>
                  <h1 className='inter-700-22px'>{eventdetail.title}</h1>
                  
                  <div style={{display: 'flex', gap: '10px'}}>
                  {eventdetail.type === "Face-To-Face" ? 
                      <div style={{display: 'flex', gap: '5px', marginTop:'3px'}}>
                        <OnlineIconRed/>
                        <h1 className='inter-400-14px-dark' style={{color:'red'}}>F2F</h1>                      
                      </div>:
                      eventdetail.type === "Online"?
                      <div style={{display: 'flex', gap: '5px', marginTop:'3px'}}>
                        <OnlineIconGreen/>
                        <h1 className='inter-400-14px-dark' style={{color:'rgba(13, 139, 19, 0.95)'}}>ONLINE</h1>                      
                      </div>:
                      eventdetail.type === "Hybrid"?
                      <div style={{display: 'flex', gap: '5px', marginTop:'3px'}}>
                        <OnlineIconYellow/>
                        <h1 className='inter-400-14px-dark' style={{color:'rgba(97, 95, 10, 0.95)'}}>HYBRID</h1>                      
                      </div>:
                      <></>
                  }
                  <div style={{height: '23px', paddingInline: '5px', borderRadius: '6px', backgroundColor: eventdetail.category==="Holiday"?'rgba(255, 78, 100, 1)':
                                                                                                                              eventdetail.category==="Special-Event"?'rgba(92, 51, 207, 1)':
                                                                                                                              eventdetail.category==="Academic-Event"?'rgba(99, 236, 195, 1)':
                                                                                                                              'rgba(89, 93, 98, 1)' }}>
                    <h1 className='inter-600-12px-light' style={{paddingTop:'5px', }}>{eventdetail.category}</h1>
                  </div>
                  </div>

                  {eventdetail.link?
                  <div style={{overflowWrap: 'break-word', paddingTop: '5px'}}>
                    <a className='inter-500-16px-link' 
                        href={eventdetail.link}
                        target="_blank">
                          {eventdetail.link}</a>
                  </div> :
                  <></>
                  }
                  <div style={{overflowWrap: 'break-word', paddingTop: '10px', paddingBottom: '15px'}}>
                    <h1 className='inter-500-16px'>{eventdetail.description}</h1>
                  </div>
                  <div style={{display: 'flex'}}>
                    <div style={{width: '50%'}}>
                      <div style={{display: 'flex', gap: '7px'}}>
                        <SmallCalendar/>
                        <h1 className='inter-400-14px-dark'>Date</h1>                      
                      </div>
                      <h1 className='inter-500-16px-dark'>{eventdetail.date}</h1>
                    </div>
                    <div style={{width: '50%'}}>
                      <div style={{display: 'flex', gap: '7px'}}>
                        <SmallClock/>
                        <h1 className='inter-400-14px-dark'>Time</h1>                      
                      </div>
                      <h1 className='inter-500-16px-dark'>
                        {convertTo12HourFormat(eventdetail.time_start)}{' - '}{convertTo12HourFormat(eventdetail.time_end)}
                      </h1>
                    </div>
                  </div>
                  <div style={{display: 'flex', marginTop: '10px', marginBottom: '25px'}}>

                    <div style={{width: '50%'}}>
                      <div style={{display: 'flex', gap: '7px'}}>
                        <SmallUser/>
                        <h1 className='inter-400-14px-dark'>Created By</h1>                      
                      </div>
                      <h1 className='inter-500-16px-dark'>{eventdetail.created_by}</h1>
                    </div>

                    <div style={{width: '50%'}}>
                      <div style={{display: 'flex', gap: '7px'}}>
                      <BlueExclamationSmall/>
                        <h1 className='inter-400-14px-dark'>Schedule Conflict</h1>                      
                      </div>
                      {eventdetail.conflict == 'Allow-Conflict'?<h1 className='inter-500-16px-green'>Allowed</h1>:<h1 className='inter-500-16px-red'>Not Allowed</h1> }
                    </div>

                  </div>

                  {eventdetail.location?
                  <div style={{display: 'flex', marginTop: '10px'}}>
                    <div style={{width: '100%'}}>
                      <div style={{display: 'flex', gap: '7px'}}>
                        <SmallMapPin/>
                        <h1 className='inter-400-14px-dark'>Venue</h1>                      
                      </div>
                      <div style={{display:'flex'}}>
                          <h1 className='inter-500-16px-dark'>{eventdetail.location}</h1>
                      </div>
                    </div>
                  </div>
                  :
                  <></>
                  }

                  {eventdetail.meetlink?
                  <div style={{display: 'flex', marginTop: '10px'}}>
                    <div style={{width: '100%'}}>
                      <div style={{display: 'flex', gap: '7px'}}>
                      <LinkIcon/>
                        <h1 className='inter-400-14px-dark'>Meet Link</h1>                      
                      </div>
                      <div style={{display:'flex'}}>
                          <a className='inter-500-16px-link' 
                            href={eventdetail.link}
                            target="_blank">
                            {eventdetail.meetlink}
                          </a>
                      </div>
                    </div>
                  </div>
                  :
                  <></>}
               {eventdetail.category != "Holiday"?
                  <div style={{display: 'flex', marginTop: '30px'}}>
                    <div style={{width: '100%'}}>
                      <div style={{display: 'flex', gap: '7px'}}>
                        <AddUsers/>
                        <h1 className='inter-400-14px-dark'>Faculty & Staff Participants</h1>                      
                      </div>
                      <div style={{ display: 'flex', gap: '12px', overflowWrap: 'break-word' }}>
                        {eventdetail.participants?.length > 0 ? 
                          eventdetail.participants
                            ?.slice()
                            .sort((a, b) => a.userprofile.last_name.localeCompare(b.userprofile.last_name))
                            .map((item, index, array) => (
                              <div key={item.id} style={{ display: 'flex', gap: '2px' }}>
                                <h1 className='inter-500-16px-dark'>
                                  {item.userprofile.first_name.charAt(0).toUpperCase()}.
                                </h1>
                                <h1 className='inter-500-16px-dark'>
                                  {item.userprofile.middle_name.charAt(0).toUpperCase()}.
                                </h1>
                                <h1 className='inter-500-16px-dark'>
                                  {item.userprofile.last_name}
                                </h1>
                                {index < array.length - 1 && <h1 className='inter-500-16px-dark'>,</h1>}
                              </div>
                            ))
                          :
                          <h1 className='inter-500-16px-dark'>No faculty or staff added.</h1>
                        }
                      </div>
                    </div>
                  </div>
                  : <></>
                  }
                {eventdetail.category != "Holiday"?
                  <div style={{display: 'flex', marginTop: '10px'}}>
                    <div style={{width: '100%'}}>
                      <div style={{display: 'flex', gap: '7px'}}>
                        <AddUsers/>
                        <h1 className='inter-400-14px-dark'>Other Participants</h1>                      
                      </div>
                      <div style={{display:'flex'}}>
                        {eventdetail.participants_additional?
                          <h1 className='inter-500-16px-dark'>{eventdetail.participants_additional}</h1>
                          :
                        <h1 className='inter-500-16px-dark'>No participants added.</h1>
                        }
                      </div>
                    </div>
                  </div>
                : <></>
                  }


                </div>
            :
            <div>
            <h1 className='inter-500-20px' style={{justifySelf:'center', marginBottom:'35px'}}>Create Event</h1>
            <div style={{width: '100%', paddingBottom: '20px'}}>
            <Form.Group>
              <h1 className='inter-400-14px-dark'>Title</h1>
              <div style={{display: 'flex'}}>
              <Form.Control type="text" onChange={e => setTitle(e.target.value)} style={{width: '100%', border: '1px solid rgb(155, 155, 155)', borderRadius:'4px'}}/>
              {!title &&
                <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                    <RedExclamation/>
                </div>
              }
              </div>
            </Form.Group>
            </div>

            <div style={{width: '100%', paddingBottom: '20px'}}>
                    <Form.Group>
                    <h1 className='inter-400-14px-dark'>Event Category</h1>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" className='formselect-border-wide drop-noarrow' style={{border: '1px solid rgb(155, 155, 155)', backgroundColor: 'rgba(51, 51, 51, 0.00)', color: category? 'black': 'rgba(51, 51, 51, 0.80)', width: '100%', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'space-between'}}>
                            <div style={{width: '90%', textAlign: 'left'}}>{category? category: "Set Event Category"}</div>
                            {!category &&
                                <div style={{transform: 'translate( 1, -40px)', width: '0px', pointerEvents: 'none'}}>
                                <RedExclamation/>
                                </div>
                            }
                            <ConnectedAccordionIconOpen/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ width: '100%', maxHeight: '200px', overflow: 'auto'}}>
                                <Dropdown.Item onClick={() => {setCategory('Holiday'); setTimeInValue('00:00'); setTimeOutValue('23:59'); setVenue('Holiday');}}>Holiday</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setCategory('Academic-Event'); setTimeInValue(); setTimeOutValue(); setVenue('');}}>Academic-Event</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setCategory('Special-Event'); setTimeInValue(); setTimeOutValue(); setVenue('');}}>Special-Event</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </Form.Group>
                </div>

            <div style={{width: '100%', paddingBottom: '20px'}}>
            <Form.Group>
            <h1 className='inter-400-14px-dark'>Link</h1>
              <Form.Control type="text" placeholder="" onChange={e => setLink(e.target.value)} style={{width: '100%', border: '1px solid rgb(155, 155, 155)', borderRadius:'4px'}}/>
            </Form.Group>
            </div>
            <div style={{width: '100%', paddingBottom: '20px'}}>
            <Form.Group>
              <h1 className='inter-400-14px-dark'>Description</h1>
              <div style={{display: 'flex'}}>
              <Form.Control as="textarea" rows={3} type="text" placeholder="Up to 500 characters." onChange={e => setDescription(e.target.value)} style={{width: '100%', border: '1px solid rgb(155, 155, 155)', borderRadius:'4px'}}/>
              {!description &&
                <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                    <RedExclamation/>
                </div>
              }
              </div>
            </Form.Group>
            </div>

            {category != "Holiday"?
              <div style={{display:'flex', paddingBottom: '20px', gap: '20px'}}>
                <div style={{width: '50%'}}>
                  <Form.Group style={{width: '100%'}}>
                        <h1 className='inter-400-14px-dark'>Start Time</h1>
                        <div style={{display: 'flex'}}>
                        <Form.Control
                          type="time"
                          style={{borderColor: 'rgb(155, 155, 155)'}}
                          onChange={e => setTimeInValue(e.target.value)}
                          // value={timeinvalue}
                        />
                        {!timeinvalue &&
                          <div style={{transform: 'translate( -65px, 6px)', width: '0px', pointerEvents: 'none'}}>
                              <RedExclamation/>
                          </div>
                        }
                        </div>
                  </Form.Group>
                </div>
                <div style={{width: '50%'}}>
                  <Form.Group style={{width: '100%'}}>
                        <h1 className='inter-400-14px-dark'>End Time</h1>
                        <div style={{display: 'flex'}}>
                        <Form.Control
                          type="time"
                          style={{borderColor: 'rgb(155, 155, 155)'}}
                          onChange={e => setTimeOutValue(e.target.value)}
                          // value={timeoutvalue}
                        />
                        {!timeoutvalue &&
                          <div style={{transform: 'translate( -65px, 6px)', width: '0px', pointerEvents: 'none'}}>
                              <RedExclamation/>
                          </div>
                        }
                        </div>
                  </Form.Group>
                </div>
              </div>
            :
            <></>}
            {category != "Holiday"?
            <div style={{width: '100%', paddingBottom: '20px'}}>
                    <Form.Group>
                    <h1 className='inter-400-14px-dark'>Venue Details</h1>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" className='formselect-border-wide drop-noarrow' style={{border: '1px solid rgb(155, 155, 155)', backgroundColor: 'rgba(51, 51, 51, 0.00)', color: venue? 'black': 'rgba(51, 51, 51, 0.80)', width: '100%', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'space-between'}}>
                            <div style={{width: '90%', textAlign: 'left'}}>{venue? venue: "Set Venue Type"}</div>
                            {!venue &&
                                <div style={{transform: 'translate( 1, -40px)', width: '0px', pointerEvents: 'none'}}>
                                <RedExclamation/>
                                </div>
                            }
                            <ConnectedAccordionIconOpen/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ width: '100%', maxHeight: '200px', overflow: 'auto'}}>
                                <Dropdown.Item onClick={() => {setVenue('Face-To-Face'); setLocation(''); setMeetlink('')}}>Face-To-Face</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setVenue('Online'); setLocation(''); setMeetlink('')}}>Online</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setVenue('Hybrid'); setLocation(''); setMeetlink('')}}>Hybrid</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </Form.Group>
                </div>
              : <></>}

            {(venue == 'Face-To-Face' || venue == 'Hybrid') && category != 'Holiday' ?
            <div style={{width: '100%', paddingBottom: '20px'}}>
            <Form.Group>
            <h1 className='inter-400-14px-dark'>Location</h1>
            <div style={{display: 'flex'}}>
              <Form.Control type="text" value={location} onChange={e => setLocation(e.target.value)} style={{width: '100%', border: '1px solid rgb(155, 155, 155)', borderRadius:'4px'}}/>
              {!location &&
                <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                    <RedExclamation/>
                </div>
              }
            </div>
            </Form.Group>
            </div> :
            <></>
            }

            {(venue == 'Online' || venue == 'Hybrid') && category != 'Holiday' ?
            <div style={{width: '100%', paddingBottom: '20px'}}>
            <Form.Group>
            <h1 className='inter-400-14px-dark'>Meeting Link</h1>
            <div style={{display: 'flex'}}>
              <Form.Control type="text" value={meetlink} onChange={e => setMeetlink(e.target.value)} style={{width: '100%', border: '1px solid rgb(155, 155, 155)', borderRadius:'4px'}}/>
              {!meetlink &&
                <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                    <RedExclamation/>
                </div>
              }
            </div>
            </Form.Group>
            </div> :
            <></>
            }

            {category != 'Holiday'? 
            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                <div style={{width: '100%'}}>
                    <Form.Group >
                    <h1 className='inter-400-14px-dark'>Faculty & Staff Participants</h1>
                    <div style={{display: 'flex'}}>
                        <Dropdown style={{width: '100%'}} onToggle={handleToggle}>
                            <Dropdown.Toggle id="dropdown-basic" className='formselect-border-wide drop-noarrow' style={{border: '1px solid rgb(155, 155, 155)', backgroundColor: 'rgba(51, 51, 51, 0.00)',  width: '100%', display: 'flex', alignItems: 'center', outline: 'none'}}>
                                <div style={{width:'100%', padding: '0px'}}>
                                <Form.Control 
                                className='formcontrolnoborder' 
                                type='search' 
                                placeholder="Search ID/Name" 
                                style={{border: 'none', height:'24px'}}
                                value={staffID}
                                onClick={handleStaffsearch}
                                onChange={e => setStaffID(e.target.value)}
                                />
                                </div>
                                <ConnectedAccordionIconOpen/>
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{width: '100%', maxHeight: '120px', overflow: 'auto'}}>
                                {filteredStaff.sort((a, b) => a.id.localeCompare(b.id)).map((staff) => (
                                    <Dropdown.Item key={staff.id} onClick={() => handleAddstaff(staff.id, staff)}>{staff.id} - {staff.userprofile.last_name}, {staff.userprofile.first_name} {staff.userprofile.middle_name} </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    </Form.Group>
                    </div>
              </div>
              :<></>}
              
              {staffobjectarray.length > 0  && category != 'Holiday'?
              <div style={{width: '100%', paddingTop: '10px'}}>
                
              <Table hover style={{border: '1px solid #EEEEEE'}}>
                      <thead >
                          <tr>
                              <th className='table-head' style={{width: '20%', paddingLeft:'20px'}}>IDs</th>
                              <th className='table-head' style={{width: '30%'}}>FULL NAME</th>
                              <th className='table-head' style={{width: '5%'}}>REMOVE</th>
                          </tr>
                      </thead>
                      <tbody style={{cursor: 'pointer', border: 'none'}}>
                          {staffobjectarray.map((staffobject) =>(
                          <tr key={staffobject.id}>
                            <td className='table-body-modal'>
                                  {staffobject.id}
                            </td>
                            <td className='table-body-modal'>
                                  {staffobject.userprofile.last_name}, {staffobject.userprofile.first_name} {staffobject.userprofile.middle_name}
                            </td>
                            <td className='table-body-modal'>
                                  <div style={{marginLeft: '15px'}} onClick={() => handleDeleteStaff(staffobject.id)}><RedX/></div>
                            </td>
                          </tr> 
                          ))} 
                      </tbody>
                </Table>
              </div>
              :
              <div style={{paddingBottom: '20px'}}></div>
              }

            {category != 'Holiday'? 
            <div style={{width: '100%', paddingBottom: '20px'}}>
              <Form.Group>
                <h1 className='inter-400-14px-dark'>Other Participants</h1>
                <Form.Control type="text" placeholder="Student Clusters, Departments, Guests, etc..." onChange={e => setParticipantsothers(e.target.value)} style={{width: '100%', border: '1px solid rgb(155, 155, 155)', borderRadius:'4px'}}/>
              </Form.Group>
            </div>
            :<></>}


                <div style={{width: '90%', paddingBottom: '50px'}}>
                            <Form.Group>
                            {/* <h1 className='inter-400-14px-dark'>Schedule Conflict</h1> */}
                                <div className='pointer-container' style={{marginLeft: '24px', marginRight: '24px'}}>
                                <div title="Enable Event Schedule Flagging">
                                    <label className='inter-400-16px'> 
                                    <Form.Check
                                        type="checkbox"
                                        onChange={(event) => handleConflict(event)}
                                    />
                                    <h1 className='inter-400-14px-black' style={{marginTop: '4px'}}>Don't Allow Schedule Conflict</h1>
                                    </label>
                                    </div>
                                </div>
                            </Form.Group>
                  </div>
            
            {category != 'Holiday' ?
              <Button
                    disabled={!title||!description||!timeinvalue||!timeoutvalue||!venue||!category || (venue === 'Face-To-Face' && !location) || (venue === 'Online' && !meetlink) || (venue === 'Hybrid' && !location || !meetlink)}
                    style={{
                            borderRadius: '8px', width: '35%', height: '35px', right: 0, backgroundColor: '#556BD9',
                            marginTop: '25px', marginLeft: '65%', display: 'flex', justifyContent: 'center', border: 'none'
                          }}
                    onClick={() => {
                        handleFlags(timeinvalue,timeoutvalue,conflict)
                          }}>
                {props.loadingState == 'isNotLoading'? <><h1 className='inter-500-20px-light'>Create Event</h1></> : <div style={{transform: 'translate( 0px, -6px)'}}><Spinner animation="border" variant="light"/></div>}
              </Button>
            :
              <Button
                    disabled={!title||!description||!timeinvalue||!timeoutvalue}
                    style={{
                            borderRadius: '8px', width: '35%', height: '35px', right: 0, backgroundColor: '#556BD9',
                            marginTop: '25px', marginLeft: '65%', display: 'flex', justifyContent: 'center', border: 'none'
                          }}
                    onClick={() => {
                        handleFlags(timeinvalue,timeoutvalue,conflict)
                          }}>
                {props.loadingState == 'isNotLoading'? <><h1 className='inter-500-20px-light'>Create Event</h1></> : <div style={{transform: 'translate( 0px, -6px)'}}><Spinner animation="border" variant="light"/></div>}
              </Button>
            }
            </div>
            }
          </Modal>
    </>
  );
}

SchedulerDashboard.propTypes = {
  sidebarState: PropTypes.string,
  setsidebarState: PropTypes.func.isRequired,
  subsidebarState: PropTypes.string,
  setsubsidebarState: PropTypes.func.isRequired,
  setpageHeader: PropTypes.func.isRequired,
  eventsList: PropTypes.array,
  getEventsList: PropTypes.func,
  facultyList: PropTypes.array,
  getFaculty: PropTypes.func,
  staffList: PropTypes.array,
  getStaff: PropTypes.func,
  setLoading: PropTypes.func,
  loadingState: PropTypes.string,
  error: PropTypes.string,
  success: PropTypes.string,
  addEvent: PropTypes.func,
  ConflictError: PropTypes.func,
  eventsListMonth: PropTypes.array,
  getEventsListMonth: PropTypes.func,
};

const mapStateToProps = (state) => ({
  sidebarState: state.main.sidebarState,
  subsidebarState: state.main.subsidebarState,
  eventsList: state.main.eventsList,
  eventsListMonth: state.main.eventsListMonth,
  facultyList: state.main.facultyList,
  staffList: state.main.staffList,
  loadingState: state.main.loadingState,
  error: state.main.error,
  success: state.main.success,
});

export default withAuth(connect(mapStateToProps, { setsidebarState, setsubsidebarState, setpageHeader, getEventsList, getFaculty, getStaff, setLoading, addEvent, ConflictError, TimeError, getEventsListMonth })(SchedulerDashboard));
