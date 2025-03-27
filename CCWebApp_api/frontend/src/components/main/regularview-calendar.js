import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withAuth from '../common/withAuth';
import Calendar from 'react-calendar';
import Modal from 'react-modal'
import { setsidebarState,
         setsubsidebarState,
         setpageHeader,
         getEventsList,
         getFaculty,
         getStaff, setLoading,
         addEvent,
         ConflictError,
         TimeError,
         getEventsListMonth,
         addEventsImages,
         getEventImageList,
         deleteImage,
         FacultyError,
         updateEvent,
         deleteEvent,
         getEventsListSingleMonth,
         getEventsListReport, 
         updateEventApproval,} from '../../redux/actions/main';

import { NoEvents,
         SmallCalendar,
         SmallClock,
         SmallMapPin,
         SmallUser,
         AddUsers,
         BlueExclamationSmall,
         LinkIcon, 
         OnlineIconRed,
         OnlineIconGreen,
         OnlineIconYellow,
         PurpleCircle,
         RedCircle,
         GreenCircle,
         SearchIcon,
         PersonIcon,
         BlueCircle,
         CloseButton} from '../../assets/svg/clnsmpl-icon';

import { Dropdown, } from 'react-bootstrap';

Modal.setAppElement('#app');

function SchedulerRegularView(props) {
  const [value, setValue] = useState(new Date());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [eventdetail, setEventdetail] = useState({});
  const [modalMode, setModalMode] = useState('');
  const [photogrid, setPhotogrid] = useState('Photos');
  const [calendarview, setCalendarView] = useState('month');
  const currentdate = new Date();
  const [photoarray, setPhotoArray] = useState([])
  const [filteredeventslist, setFilteredEventsList] = useState([])
  const [filteredeventslistmonth, setFilteredEventsListMonth] = useState([])
  const [filteredeventslistsinglemonth, setFilteredEventsListSingleMonth] = useState([])
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem('user'))

  const formatDate = (date) => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate()
  
   
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;
  
    return `${year}-${month}-${day}`
  }

  const parseDate = (dateString) => {
    const [year, month, day] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day);
  };
    
  const handleActiveStartDateChange = ({ activeStartDate, view }) => {
        setCalendarView(view)
        if (view === 'month') {
            setCurrentMonth(activeStartDate);
            props.getEventsListMonth(activeStartDate);
        }else if(view === 'year'){
          props.getEventsListSingleMonth(value)
        }
    }

  const getTileClassName = ({ date, view }) => {
        if (view === 'month') {
          const formattedDate = formatDate(date);
          const event =  filteredeventslistmonth.filter(d => d.date === formattedDate);
          const holiday = event.find(e => e.category === 'Holiday')
          if (holiday) {
            switch (holiday.category) {
              case 'Holiday':
                return 'holiday-tile';
              case 'Academic-Event':
                return '';
              case 'Special-Event':
                return '';
              case 'Private-Event':
                return '';
              default:
                return '';
            }
          }
        }
        return ''
    }
      
  const getTileContent = ({ date, view }) => {
    if (view === 'month') {
        const formattedDate = formatDate(date)
        const tileContent = filteredeventslistmonth.filter(d => d.date === formattedDate);
        return (
          <div style={{position: 'absolute',transform:props.isLess800?'translate(-4px, 0px)':'none' ,display: 'flex', bottom:0, paddingBottom:props.isLess800?'0px':'2px', overflow:'hidden', gap:'2px', scale: props.isLess800?'70%':'none'}}>
              {tileContent.map((d, index) => (
                  <div key={index} >
                    {(() => {
                      switch(d.category) {
                        case 'Holiday': return <div style={{}}><RedCircle/></div>;
                        case 'Academic-Event': return <div style={{}}><GreenCircle/></div>;
                        case 'Special-Event': return <div style={{}}><PurpleCircle/></div>;
                        case 'Private-Event': return <div style={{}}><BlueCircle/></div>;
                        default: return <></>;
                      }
                      })()}
                  </div>
              ))}
          </div>
      );
    }
  }

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
  }

  const handleToggle = (isOpen) => {
    setIsOpen(isOpen);
  }

  const handleModalopen = () => {
    setModalIsOpen(true);
    setPhotoArray([])
  }

  const handleModalclose = () => {
    setModalIsOpen(false);
  }

  const websocket = useRef(null);
    
  useEffect(() =>{
      websocket.current = new WebSocket(`wss://${window.location.host}/ws/dbupdatetrigger/`);
      websocket.current.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log(data)
        console.log(data.event.event)
        if (data.event.event === 'model_update') {
          props.getEventsList(value)
          props.getEventsListMonth(value)
          props.getEventsListSingleMonth(value)
        }
      };
      return () => {
        if (websocket.current) {
          websocket.current.close();
        }
      }
  },[])

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
    props.getEventsListSingleMonth(value)
  }, [props.success])

  useEffect(() => {
    props.getEventsList(value)
  }, [modalIsOpen])

  useEffect(() => {
    if (user.usertype == 'Student'){
        const filtered = props.eventsListMonth.filter(event => event.approval == 'Yes' && event.category != 'Private-Event')
        setFilteredEventsListMonth(filtered)
    }else{
        const filtered = props.eventsListMonth.filter(event => event.approval == 'Yes')
        setFilteredEventsListMonth(filtered)
    }
  }, [props.eventsListMonth])

  useEffect(() => {
    if (user.usertype == 'Student'){
        const filtered = props.eventsList.filter(event => event.approval == 'Yes' && event.category != 'Private-Event')
        setFilteredEventsList(filtered)
    }else{
        const filtered = props.eventsList.filter(event => event.approval == 'Yes')
        setFilteredEventsList(filtered)
    }
  }, [props.eventsList])

  useEffect(() => {
    if (user.usertype == 'Student'){
        const filtered = props.eventsListSingleMonth.filter(event => event.approval == 'Yes' && event.category != 'Private-Event')
        setFilteredEventsListSingleMonth(filtered)
    }else{
        const filtered = props.eventsListSingleMonth.filter(event => event.approval == 'Yes')
        setFilteredEventsListSingleMonth(filtered)
    }
  }, [props.eventsListSingleMonth])

  useEffect(() => {
    const photos = JSON.parse(JSON.stringify(props.eventimageList));
    setPhotoArray(photos.event_related_photo);
}, [props.eventimageList]);



  return (
    <>
    <div style={{display: props.isLess800?'':'flex', height: '100%', paddingTop: '20px'}}>
      <div style={{ backgroundColor: '#ffffff', display: 'flex', width: props.isLess800?'100%':'50%'}}>
        <div style={{marginTop: props.isLess800?'0px':'40px'}}>
          <Calendar onChange={handleCalendarClick} value={value} tileContent={getTileContent} onActiveStartDateChange={handleActiveStartDateChange} tileClassName={getTileClassName}/>
        </div>
      </div>
      <div style={{width:props.isLess800?'100%': '50%'}}>
        <div style={{maxHeight:props.isLess800?'5000px':'700px', marginRight:'10%', height:props.isLess800?'120%':'90%', width:'90%', overflowY:props.isLess800?'hidden':'auto', border:'1px solid rgba(0, 0, 0, 0.05)',
                     borderRadius:'16px', marginLeft:'5.5%', paddingInline:'20px', overflowX:'hidden', minHeight:'220px', marginBottom:props.isLess800?'20px':'0px'
                    }}>
        <h1 className='inter-500-20px' style={{justifySelf:'center', marginTop: '20px'}}>Events List</h1>
        {(filteredeventslist.length > 0 && calendarview == 'month') ? filteredeventslist?.slice().sort((a, b) => a.time_start.localeCompare(b.time_start)).map(item => (
                        <div key={item.id} className="schedule-item" style={{backgroundColor:  (parseDate(item.date) < currentdate && item.approval == 'No')?'rgba(145, 145, 145, 0.30)':
                                                                                               item.category==="Holiday"?'rgba(255, 78, 100, 0.15)':
                                                                                               item.category==="Special-Event"?'rgba(92, 51, 207, 0.15)':
                                                                                               item.category==="Academic-Event"?'rgba(99, 236, 195, 0.15)':
                                                                                               item.category==="Private-Event"?'rgba(19, 75, 230, 0.15)':
                                                                                               'rgba(89, 93, 98, 0.15)',
                                                                              border: item.conflict ==="No-Conflict"? '1px solid rgba(255, 61, 61, 0.5)':'none',
                                                                                              }}>
                          <div style={{padding:'15px'}}>
                          
                          <div style={{display:'flex', width:'100%'}}>
                          <h1 className='inter-400-16px-gray' >
                            {convertTo12HourFormat(item.time_start)}{' - '}{convertTo12HourFormat(item.time_end)}
                          </h1>
                            <Dropdown style={{marginLeft:'auto'}}  onToggle={handleToggle}>
                              <Dropdown.Toggle id="dropdown-basic" style={{border: 'none', backgroundColor: 'rgba(51, 51, 51, 0.00)', color: 'rgba(51, 51, 51, 0.00)', width: '15px', height: '15px', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'center', marginLeft: '10px'}}>
                                <h3 style={{color: '#8A92A6', transform: 'translate(6px, -5px)'}}>...</h3>
                              </Dropdown.Toggle>
                              <Dropdown.Menu style={{borderRadius:'12px'}}>
                                <Dropdown.Item onClick={() => {setEventdetail(item)
                                                               setModalMode('EventDetails')
                                                               handleModalopen()}}>
                                   <h1 className='dropdown-item' style={{marginTop:'10px'}}>View Details</h1>
                                </Dropdown.Item>
                                 {((parseDate(item.date) < currentdate) && (item.approval == 'Yes')) && 
                                    <>
                                       <Dropdown.Item onClick={() => {
                                                                      setEventdetail(item)
                                                                      props.getEventImageList(item.id)
                                                                      props.setLoading('isLoading')
                                                                      setModalMode('PostEvent')
                                                                      handleModalopen()
                                                                    }}>
                                          <h1 className='dropdown-item' style={{marginTop:'10px'}}>Post-Event Documents</h1>
                                       </Dropdown.Item>
                                    </>}
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                            <h1 className='inter-500-18px-dark'>{item.title}</h1>
                            <h1 className='inter-400-16px-gray'>{item.description}</h1>
                            </div>
                        </div>
          ))
          :(filteredeventslistsinglemonth.length > 0 && calendarview == 'year')? filteredeventslistsinglemonth?.slice()
                                                                                                          .sort((a, b) => {
                                                                                                            const dateComparison = a.date.localeCompare(b.date);
                                                                                                            if (dateComparison !== 0) {
                                                                                                              return dateComparison;
                                                                                                            }
                                                                                                            return a.time_start.localeCompare(b.time_start);
                                                                                                          })
                                                                                                          .map((item) => (
                      <div key={item.id} className="schedule-item" style={{backgroundColor:  (parseDate(item.date) < currentdate && item.approval == 'No')?'rgba(145, 145, 145, 0.30)':
                                                                                              item.category==="Holiday"?'rgba(255, 78, 100, 0.15)':
                                                                                              item.category==="Special-Event"?'rgba(92, 51, 207, 0.15)':
                                                                                              item.category==="Academic-Event"?'rgba(99, 236, 195, 0.15)':
                                                                                              item.category==="Private-Event"?'rgba(19, 75, 230, 0.15)':
                                                                                              'rgba(89, 93, 98, 0.15)',
                                                                            border: item.conflict ==="No-Conflict"? '1px solid rgba(255, 61, 61, 0.5)':'none'
                                                                                            }}>
                        <div style={{padding:'15px'}}>
                        
                        <div style={{display:'flex', width:'100%'}}>
                        <h1 className='inter-400-16px-gray' >
                        <span style={{}}>{item.date}{' | '}</span>{convertTo12HourFormat(item.time_start)}{' - '}{convertTo12HourFormat(item.time_end)}
                        </h1>
                          <Dropdown style={{marginLeft:'auto'}} onToggle={handleToggle}>
                            <Dropdown.Toggle id="dropdown-basic" style={{border: 'none', backgroundColor: 'rgba(51, 51, 51, 0.00)', color: 'rgba(51, 51, 51, 0.00)', width: '15px', height: '15px', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'center', marginLeft: '10px'}}>
                              <h3 style={{color: '#8A92A6', transform: 'translate(6px, -5px)'}}>...</h3>
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{borderRadius:'12px'}}>
                              <Dropdown.Item onClick={() => {setEventdetail(item)
                                                            setModalMode('EventDetails')
                                                            handleModalopen()}}>
                                <h1 className='dropdown-item' style={{marginTop:'10px'}}>View Details</h1>
                              </Dropdown.Item>
                              {((parseDate(item.date) < currentdate) && (item.approval == 'Yes')) && 
                                  <>
                                    <Dropdown.Item onClick={() => {
                                                                    setEventdetail(item)
                                                                    props.getEventImageList(item.id)
                                                                    props.setLoading('isLoading')
                                                                    setModalMode('PostEvent')
                                                                    handleModalopen()
                                                                  }}>
                                        <h1 className='dropdown-item' style={{marginTop:'10px'}}>Post-Event Documents</h1>
                                    </Dropdown.Item>
                                  </>}
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                            <h1 className='inter-500-18px-dark'>{item.title}</h1>
                        <h1 className='inter-400-16px-gray'>{item.description}</h1>
                        </div>
                      </div>
                      )):
                    <div style={{justifySelf:'center', justifyItems:'center', alignItems:'center', marginTop:'15%'}}>
                                        <NoEvents/>
                                        <h1 className='inter-400-24px' style={{paddingTop:'40px'}}>No Events For This Date</h1>
                                        </div>}  
                    <div style={{height:'20px'}}></div>
        </div>
      </div>
    </div>
    <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleModalclose}
                shouldCloseOnOverlayClick={false}
                style={{
                  content: {
                    width: props.isLess800?'100%' : modalMode == 'PostEvent' ? '80%' : '40%',
                    height: props.isLess800?'100%' :modalMode == 'Delete'? '25%' : '80%',
                    left: '50%',
                    transform:  props.isLess800?'translate(-50%, -5%)' : modalMode == 'Delete'? 'translate(-50%, 40%)' :'translate(-50%, 15%)',
                    borderRadius: '16px',
                    overflow: modalMode == 'PDF'? 'hidden':'auto',
                  }
                }}
              >
                <div style={{display: 'flex', width: '100%', justifyContent: 'flex-end'}}>
                  <button onClick={handleModalclose} style={{backgroundColor:'rgba(51, 51, 51, 0.00)', borderColor:'rgba(51, 51, 51, 0.00)', paddingLeft: '0px', paddingRight:'0px', paddingBottom:'5px', left:0}}><CloseButton/></button>
                </div>
                {modalMode === 'EventDetails' ? 
                <div>
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
                                                                                                           eventdetail.category==="Private-Event"?'rgba(19, 75, 230, 0.15)':
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
                        <PersonIcon/>
                        <h1 className='inter-400-14px-dark'>In Charge</h1>                      
                      </div>
                      <div style={{display:'flex'}}>
                        {eventdetail.in_charge?
                          <h1 className='inter-500-16px-dark'>{eventdetail.in_charge}</h1>
                          :
                        <h1 className='inter-500-16px-dark'>Not Specified.</h1>
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
                </div>
            :

            modalMode == 'PostEvent'?
            <div style={{paddingLeft:'40px', width:'100%'}}>
              <div style={{display:'flex'}}>
                <div className='photo-option' style={{borderBottom: photogrid == 'Photos'? 'solid 5px #556BD9' : 'white'}} onClick={() => setPhotogrid('Photos')}>
                  <h1 className='inter-400-16px-dark '>Photos</h1>
                </div>
                {/* <div className='photo-option' style={{borderBottom: photogrid == 'Attendance'? 'solid 5px #556BD9' : 'white'}} onClick={() => setPhotogrid('Attendance')}>
                  <h1 className='inter-400-16px-dark '>Attendance</h1>
                </div>
                <div className='photo-option' style={{borderBottom: photogrid == 'Report'? 'solid 5px #556BD9' : 'white'}} onClick={() => setPhotogrid('Report')}>
                  <h1 className='inter-400-16px-dark '>Report</h1>
                </div> */}
              </div>

              {photogrid == 'Photos'?
              <div className='photogrid-container'>
              {photoarray?.sort((a, b) => b.date_added.localeCompare(a.date_added)).map((src, index) => (
                  <div className='photo-container' style={{width:props.isLess800? '45%':'30%', height:props.isLess800? '120px': '200px'}} key={index}>
                    <div className='photo-icons' style={{position:'fixed', transform: 'translate( 5px, 8px)'}}>
                      <a href={src.picture} target="_blank" rel="noopener noreferrer"><SearchIcon/></a>
                    </div>
                      <img src={src.picture} alt={`photo-${index}`} className='square-image' />
                  </div>
                ))}
              </div>:<></>
            }
            </div>: 
            <>
          </>
            }
          </Modal>
    </>
  );
}

SchedulerRegularView.propTypes = {
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
  eventimageList: PropTypes.object,
  getEventImageList: PropTypes.func,
  deleteImage: PropTypes.func,
  FacultyError: PropTypes.func,
  updateEvent: PropTypes.func,
  deleteEvent: PropTypes.func,
  eventsListSingleMonth: PropTypes.array,
  getEventsListSingleMonth: PropTypes.func,
  getEventsListReport: PropTypes.func,
  eventsListReport: PropTypes.array,
  updateEventApproval: PropTypes.func,
  isLess800: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  sidebarState: state.main.sidebarState,
  subsidebarState: state.main.subsidebarState,
  eventsList: state.main.eventsList,
  eventsListMonth: state.main.eventsListMonth,
  eventimageList: state.main.eventimageList,
  facultyList: state.main.facultyList,
  staffList: state.main.staffList,
  loadingState: state.main.loadingState,
  error: state.main.error,
  success: state.main.success,
  eventsListSingleMonth: state.main.eventsListSingleMonth,
  eventsListReport: state.main.eventsListReport,
  isLess800: state.main.isLess800,
});

export default withAuth(connect(mapStateToProps, { setsidebarState, setsubsidebarState, setpageHeader, getEventsList, getFaculty, getStaff, setLoading,
                                                   addEvent, ConflictError, TimeError, getEventsListMonth, addEventsImages, getEventImageList, deleteImage, 
                                                   FacultyError, updateEvent, deleteEvent, getEventsListSingleMonth, getEventsListReport, updateEventApproval 
                                                  })(SchedulerRegularView));
