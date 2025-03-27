import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import withAuth from '../common/withAuth';
import Calendar from 'react-calendar';
import Modal from 'react-modal'
import TimePicker from 'react-time-picker';
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
         setError,
         updateEventApproval,} from '../../redux/actions/main';

import { CloseButton,
         NoEvents,
         SmallBell,
         SmallCalendar,
         SmallClock,
         SmallMapPin,
         SmallUser,
         AddUsers,
         ConnectedAccordionIconOpen,
         RedX,
         RedExclamation, 
         BlueExclamationSmall,
         LinkIcon, 
         OnlineIconRed,
         OnlineIconGreen,
         OnlineIconYellow,
         PurpleCircle,
         RedCircle,
         GreenCircle,
         GenerateFiles,
         AddFiles,
         TrashIcon,
         SearchIcon,
         SimpleCalendar,
         RightArrows,
         PersonIcon,
         Check,
         XCircle,
         BlueCircle,} from '../../assets/svg/clnsmpl-icon';

import { Form,
         Dropdown,
         Table,
         Button,
         Spinner } from 'react-bootstrap';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { PDFViewer } from '@react-pdf/renderer';
import logo from '../../assets/images/backgrounds/R.png'
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
Modal.setAppElement('#app');

function SchedulerDashboard(props) {
  const [windowDimensions, setWindowdimensions] = useState({height: window.innerHeight,width: window.innerWidth})
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
  const [incharge, setInCharge] = useState('');
  const [conflict, setConflict] = useState('Allow-Conflict');
  const [value, setValue] = useState(new Date());
  const [oldvalue, setOldvalue] = useState(new Date());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [eventdetail, setEventdetail] = useState({});
  const [modalMode, setModalMode] = useState('');
  const [conflicttimein, setConflicttimein] = useState([])
  const [conflicttimeout, setConflicttimeout] = useState([])
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [photogrid, setPhotogrid] = useState('Photos');
  const [date, setDate] = useState();
  const [calendarview, setCalendarView] = useState('month');
  const [eventsforlist, setEventsForList] = useState([]);
  const [showpdf, setShowpdf] = useState(false);

  const fileInput = useRef(null);
  const [avatar, setAvatar] = useState(JSON.parse(localStorage.getItem('user')).avatar);
  const [inputKey, setInputKey] = useState(Date.now());

  const [updatedstafflist, setUpdatedstafflist] = useState([])
  const [staffobjectarray, setStaffobjectarray] = useState([])
  const [staffID, setStaffID] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const combinedList = [...props.facultyList];
  const currentdate = new Date();
  const [photoarray, setPhotoArray] = useState([])
  const [isVisible, setIsVisible] = useState(false);
  const [report, setReport] = useState('accomplishment');
  const [reportcategory, setReportCategory] = useState(['Holiday', 'Academic-Event', 'Special-Event', 'Private-Event'])
  const [reportstartdate, setReportStartDate] = useState()
  const [reportenddate, setReportEndDate] = useState()
  const [eventlistforreport, setEventListForReport] = useState([])

  const [calendarcategory, setCalendarCategory] = useState(['Holiday', 'Academic-Event', 'Special-Event', 'Private-Event'])
  const [calendarstartdate, setCalendarStartDate] = useState()
  const [calendarenddate, setCalendarEndDate] = useState()

  const handleReportCategory = (categoryname, event) => {
    const { checked } = event.target;

    setReportCategory(initialCategory => {
      if (checked) {
        return [...initialCategory, categoryname];
      } else {
        return initialCategory.filter(item => item !== categoryname);
      }
    })
  };

  const handleCalendarCategory = (categoryname, event) => {
    const { checked } = event.target;

    setCalendarCategory(calCategory => {
      if (checked) {
        return [...calCategory, categoryname];
      } else {
        return calCategory.filter(item => item !== categoryname);
      }
    })
  };


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

  const handlePhotoAddClick = () => {
    fileInput.current.click();
    }

  const onImageChange = (e) => {
      const files = e.target.files;
      const rawfileArray = Array.from(files)
      props.setLoading('isLoading')
      props.addEventsImages(rawfileArray, eventdetail.id)
      props.getEventImageList(eventdetail.id)
    };
    
  const handleImageDelete = (imageid) => {
     props.deleteImage(imageid, eventdetail.id)
  }

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
        const tileContent = props.eventsListMonth.filter(d => d.date === formattedDate);
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
  }

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



  const handleFlagsUpdate = (timestart, timeend, conflict) => {
    if (timeend < timestart){
      props.TimeError()
    }else if(conflict == "No-Conflict"){
      const selfconflicttimestart = props.eventsList.filter(event => timestart >= event.time_start && timestart <= event.time_end && event.title != eventdetail.title)
      const selfconflicttimeend = props.eventsList.filter(event => timeend >= event.time_start && timestart <= event.time_end && event.title != eventdetail.title)
      if (selfconflicttimestart.length > 0){
        props.ConflictError(selfconflicttimestart[0].title,convertTo12HourFormat(selfconflicttimestart[0].time_start),convertTo12HourFormat(selfconflicttimestart[0].time_end))
      }else if (selfconflicttimeend.length > 0){
        props.ConflictError(selfconflicttimeend[0].title,convertTo12HourFormat(selfconflicttimeend[0].time_start),convertTo12HourFormat(selfconflicttimeend[0].time_end))
      }else{
        props.setLoading('isLoading')
        props.updateEvent(formData, eventdetail.id)
        setSubmission(true)
      }
    }
    else{
      const eventsWithConflicts = props.eventsList.filter(event => (event.conflict == "No-Conflict" && event.title != eventdetail.title))
      if (eventsWithConflicts.length > 0){
        const conflicttimestart = eventsWithConflicts.filter(event => timestart >= event.time_start && timestart <= event.time_end)
        const conflicttimeend = eventsWithConflicts.filter(event => timeend >= event.time_start && timestart <= event.time_end)
          if (conflicttimestart.length > 0){
            props.ConflictError(conflicttimestart[0].title,convertTo12HourFormat(conflicttimestart[0].time_start),convertTo12HourFormat(conflicttimestart[0].time_end))
          }else if (conflicttimeend.length > 0){
            props.ConflictError(conflicttimeend[0].title,convertTo12HourFormat(conflicttimeend[0].time_start),convertTo12HourFormat(conflicttimeend[0].time_end))
          }else{
            props.setLoading('isLoading')
            props.updateEvent(formData, eventdetail.id)
            setSubmission(true)
          }
      } else{
        props.setLoading('isLoading')
        props.updateEvent(formData, eventdetail.id)
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
  }

  const handleStaffsearch = (e) => {
    if (isOpen){
      e.stopPropagation()
    }
  }

  const handleAddstaff = (id, staff) => {
    if(!timeinvalue || !timeoutvalue){
      props.FacultyError('Adding participant failed. Fill up Start Time and End Time first.')
    }else{
      const filteredEvents = props.eventsList.filter((event) =>
        event.participants.find((participant) => participant.id === id)
      );
      if (filteredEvents.length > 0){
        const conflictevent = filteredEvents.find((event) => 
        (event.time_start >= timeinvalue && event.time_start <= timeoutvalue) || (event.time_end >= timeinvalue && event.time_end <= timeoutvalue))
        if(conflictevent){
          if(conflictevent.title == eventdetail.title){
            if(id && !updatedstafflist.includes(id)){
              setUpdatedstafflist([...updatedstafflist, id])
              setStaffobjectarray([...staffobjectarray, staff])
              setStaffID('')
            }
          }else{
          props.FacultyError(`Adding participant failed. ${staff.userprofile.first_name} ${staff.userprofile.last_name} is already scheduled for event "${conflictevent.title}".`)
          }
        }else{
          if(id && !updatedstafflist.includes(id)){
            setUpdatedstafflist([...updatedstafflist, id])
            setStaffobjectarray([...staffobjectarray, staff])
            setStaffID('')
          }
        }
      }else{
        if(id && !updatedstafflist.includes(id)){
          setUpdatedstafflist([...updatedstafflist, id])
          setStaffobjectarray([...staffobjectarray, staff])
          setStaffID('')
        }
      }
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
    setMeetlink('')
    setVenue('')
    setInCharge('')
    setUpdatedstafflist([])
    setStaffobjectarray([])
    setCategory('')
    setParticipantsothers('')
    setPhotoArray([])
    setConflict('Allow-Conflict')
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
        props.getFaculty('','')
        props.getStaff('','')
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
    console.log(props.windowDimensions)
  }, [props.windowDimensions])

  useEffect(() => {
    const eventsreport = [...props.eventsListReport]
    setEventListForReport(eventsreport)
  }, [props.eventsListReport])

  useEffect(() => {
    if(eventlistforreport.length > 0){
      setShowpdf(true)
    }
  }, [eventlistforreport])

  useEffect(() => {
    setDate(value)
  }, [value])

  useEffect(() => {
    setEventsForList(props.eventsList)
  }, [props.eventsList])

  useEffect(() => {
    const photos = JSON.parse(JSON.stringify(props.eventimageList));
    setPhotoArray(photos.event_related_photo);
}, [props.eventimageList]);


  useEffect(() => {
          if (props.loadingState === 'isNotLoading' && submissionComplete) {
            if(props.error){
              setSubmission(false)
            }else if(props.success){
              handleModalclose()
            }
            }
          setFormData({
            date : date,
            title : title,
            link : link,
            description: description,
            time_start : `${timeinvalue}:00`,
            time_end : `${timeoutvalue}:00`,
            type : venue,
            meetlink: meetlink,
            location : location,
            in_charge : incharge,
            participants : updatedstafflist,
            participants_additional : participantsother,
            category : category,
            conflict : conflict,
            created_by : `${user.first_name} ${user.last_name}`
          })
      
  }, [props.loadingState, props.success, props.error, title, link, description, timeinvalue, timeoutvalue, location, updatedstafflist, participantsother, category, conflict, venue, meetlink, date]);
  
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={{paddingBottom: '40px', paddingTop: '40px', paddingHorizontal:'40px'}} wrap>
        <View style={{ paddingHorizontal: '15px', borderBottom: '1px solid black', marginBottom: '12px'}}>
          <View style={{alignSelf: 'center',flexDirection: 'row', gap:'20px'}}>
            <Image style={{width:'75px'}} src={window.location.origin + `/media/logopili.png`}/>
            <View style={{paddingTop:'10px'}}>
              <Text style={{alignSelf: 'center', fontSize: '20px', fontWeight:'700'}}>BOHOL ISLAND STATE UNIVERSITY</Text>
              <Text style={{alignSelf: 'center', paddingTop: '5px', fontSize: '12px'}}>Balilihan Campus</Text>
            </View>
            <Image style={{borderRadius:'50%', width:'75px'}} src={window.location.origin + `/media/R.png`}/>
          </View>
          <Text style={{alignSelf: 'center', paddingTop: '20px', fontSize: '10px', justifySelf:'center', paddingHorizontal:'40px'}}>Vision: A premier Science and Technology university for the formation of world class and</Text>
          <Text style={{alignSelf: 'center', fontSize: '10px', justifySelf:'center', paddingHorizontal:'70px'}}>virtuous human resource for sustainable development in Bohol and the country.</Text>
          <Text style={{alignSelf: 'center', paddingTop: '10px', fontSize: '10px', justifySelf:'center', paddingHorizontal:'40px'}}>Mission: BISU is committed to provide quality higher education in the arts and sciences, as</Text>
          <Text style={{alignSelf: 'center', fontSize: '10px', justifySelf:'center', paddingHorizontal:'40px'}}>well as in the professional and technological fields; undertake research and development</Text>
          <Text style={{alignSelf: 'center', fontSize: '10px', justifySelf:'center', paddingHorizontal:'40px', marginBottom:'20px'}}>and extension services for the sustainable development of Bohol and the country.</Text>
        </View>
        <Text style={{ alignSelf: 'center', fontSize: 12 }}>
          {`ACCOMPLISHMENT REPORT`}
        </Text>
        <Text style={{ alignSelf: 'center', fontSize: 10 }}>
        {`${new Date(reportstartdate).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })} - ${new Date(reportenddate).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}`}
        </Text>
        <View style={{border: '1px solid black', marginTop: '12px', margin:'20px'}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{width: '20%', borderRight: '1px solid black', padding: '5px', fontSize: '12px'}}>Date</Text>
                        <Text style={{width: '20%', borderRight: '1px solid black', padding: '5px', fontSize: '12px'}}>Activity</Text>
                        <Text style={{width: '20%', borderRight: '1px solid black', padding: '5px', fontSize: '12px'}}>Participants</Text>
                        <Text style={{width: '20%', borderRight: '1px solid black', padding: '5px', fontSize: '12px'}}>Venue</Text>
                        <Text style={{width: '20%', padding: '5px', fontSize: '12px'}}>Remarks</Text>
                    </View>
                    {eventlistforreport.sort((a, b) => a.date.localeCompare(b.date))?.map((event) => {
                        return (
                            <View key={event.id} style={{flexDirection: 'row', borderTop: '1px solid black'}} wrap>
                                <Text style={{width: '20%', borderRight: '1px solid black', padding: '5px', fontSize: '10px'}}>{event.date}</Text>
                                <Text style={{width: '20%', borderRight: '1px solid black', padding: '5px', fontSize: '10px'}}>{event.title}</Text>
                                <View style={{borderRight: '1px solid black', padding: '5px', width: '20%',}}>
                                {event.participants?.length > 0 ?
                                  event.participants
                                    ?.slice()
                                    .sort((a, b) => a.userprofile.last_name.localeCompare(b.userprofile.last_name))
                                    .map((item, index, array) => (
                                      <View key={item.id} style={{flexDirection: 'row', gap: '2px' }}>
                                        <Text style={{fontSize: '10px', color: 'gray'}}>
                                          {item.userprofile.first_name.charAt(0).toUpperCase()}.
                                        </Text>
                                        <Text style={{fontSize: '10px', color: 'gray'}}>
                                          {item.userprofile.middle_name.charAt(0).toUpperCase()}.
                                        </Text>
                                        <Text style={{fontSize: '10px', color: 'gray'}}>
                                          {item.userprofile.last_name}
                                        </Text>
                                        {index < array.length - 1 && <Text style={{fontSize: '10px'}}>,</Text>}
                                      </View>
                                    ))
                                  : event.participants_additional ?
                                  <></>
                                  :
                                  <Text style={{fontSize: '10px', color: 'gray'}}>None specified.</Text>
                                }
                                <Text style={{fontSize: '10px', color: 'gray'}}>{event.participants_additional}</Text>
                                </View>
                                <Text style={{width: '20%', borderRight: '1px solid black', padding: '5px', fontSize: '10px', color: 'gray'}}>{event.location? event.location : event.type}</Text>
                                <Text style={{width: '20%', padding: '5px', fontSize: '10px', color: 'gray'}}>{event.description}</Text>
                                
                            </View>
                        );
                    })}
                  </View>


      </Page>
    </Document>)



const MyDocumentCalendar = () => (
  <Document>
    <Page size="A4" style={{paddingBottom: '40px', paddingTop: '40px', paddingHorizontal:'40px'}} wrap>
      <View style={{ paddingHorizontal: '15px', borderBottom: '1px solid black', marginBottom: '12px'}}>
        <View style={{alignSelf: 'center',flexDirection: 'row', gap:'20px'}}>
          <Image style={{width:'75px'}} src={window.location.origin + `/media/logopili.png`}/>
          <View style={{paddingTop:'10px'}}>
            <Text style={{alignSelf: 'center', fontSize: '20px', fontWeight:'700'}}>BOHOL ISLAND STATE UNIVERSITY</Text>
            <Text style={{alignSelf: 'center', paddingTop: '5px', fontSize: '12px'}}>Balilihan Campus</Text>
          </View>
          <Image style={{borderRadius:'50%', width:'75px'}} src={window.location.origin + `/media/R.png`}/>
        </View>
        <Text style={{alignSelf: 'center', paddingTop: '20px', fontSize: '10px', justifySelf:'center', paddingHorizontal:'40px'}}>Vision: A premier Science and Technology university for the formation of world class and</Text>
        <Text style={{alignSelf: 'center', fontSize: '10px', justifySelf:'center', paddingHorizontal:'70px'}}>virtuous human resource for sustainable development in Bohol and the country.</Text>
        <Text style={{alignSelf: 'center', paddingTop: '10px', fontSize: '10px', justifySelf:'center', paddingHorizontal:'40px'}}>Mission: BISU is committed to provide quality higher education in the arts and sciences, as</Text>
        <Text style={{alignSelf: 'center', fontSize: '10px', justifySelf:'center', paddingHorizontal:'40px'}}>well as in the professional and technological fields; undertake research and development</Text>
        <Text style={{alignSelf: 'center', fontSize: '10px', justifySelf:'center', paddingHorizontal:'40px', marginBottom:'20px'}}>and extension services for the sustainable development of Bohol and the country.</Text>
      </View>
      <Text style={{ alignSelf: 'center', fontSize: 12 }}>
        {`CALENDAR OF ACTIVITIES`}
      </Text>
      <Text style={{ alignSelf: 'center', fontSize: 10 }}>
      {`${new Date(calendarstartdate).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })} - ${new Date(calendarenddate).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}`}
      </Text>
      <View style={{border: '1px solid black', marginTop: '12px', margin:'20px'}}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <Text style={{width: '40%', borderRight: '1px solid black', padding: '5px', fontSize: '12px'}}>Activity</Text>
                      <Text style={{width: '15%', borderRight: '1px solid black', padding: '5px', fontSize: '12px'}}>Date</Text>
                      <Text style={{width: '20%', borderRight: '1px solid black', padding: '5px', fontSize: '12px'}}>In Charge</Text>
                      <Text style={{width: '25%', padding: '5px', fontSize: '12px'}}>Faculty/Staff</Text>
                  </View>
                  {eventlistforreport.sort((a, b) => a.date.localeCompare(b.date))?.map((event) => {
                      return (
                          <View key={event.id} style={{flexDirection: 'row', borderTop: '1px solid black'}} wrap>
                              <Text style={{width: '40%', borderRight: '1px solid black', padding: '5px', fontSize: '10px'}}>{event.title}</Text>
                              <Text style={{width: '15%', borderRight: '1px solid black', padding: '5px', fontSize: '10px'}}>{event.date}</Text>
                              <Text style={{width: '20%', borderRight: '1px solid black', padding: '5px', fontSize: '10px'}}>{event.in_charge}</Text>
                              <View style={{ padding: '5px', width: '25%',}}>
                              {event.participants?.length > 0 ?
                                event.participants
                                  ?.slice()
                                  .sort((a, b) => a.userprofile.last_name.localeCompare(b.userprofile.last_name))
                                  .map((item, index, array) => (
                                    <View key={item.id} style={{flexDirection: 'row', gap: '2px' }}>
                                      <Text style={{fontSize: '10px', color: 'gray'}}>
                                        {item.userprofile.first_name.charAt(0).toUpperCase()}.
                                      </Text>
                                      <Text style={{fontSize: '10px', color: 'gray'}}>
                                        {item.userprofile.middle_name.charAt(0).toUpperCase()}.
                                      </Text>
                                      <Text style={{fontSize: '10px', color: 'gray'}}>
                                        {item.userprofile.last_name}
                                      </Text>
                                      {index < array.length - 1 && <Text style={{fontSize: '10px'}}>,</Text>}
                                    </View>
                                  ))
                                : 
                                <Text style={{fontSize: '10px', color: 'gray'}}>None specified.</Text>
                              }
                              </View>
                          </View>
                      );
                  })}
                </View>
    </Page>
  </Document>)


  return (
    <>
    {isVisible && <div className="overlay" />}
    <div style={{display: props.isLess800?'':'flex', height: '100%', paddingTop: '20px'}}>
      <div>
        <div title={!isVisible?'Generate PDF Files':'Close Sidebar'} className='sliding-icon' onClick={() => {setIsVisible(!isVisible)}} style={{position:'fixed', transform:isVisible? 'translate(-300px,-10px)':'translate(0px,-10px)', right:0}}>
          {!isVisible? <GenerateFiles/> : <RightArrows/>}
        </div>
        <div className={`sliding-div ${isVisible ? 'visible' : 'hidden'}`}>
          <div style={{display:'flex', width:'100%'}}>
            <div className='report-options' onClick={() =>{setReport('accomplishment')}} style={{width:'50%', height:'40px', justifyItems:'center', borderBottom:report =='accomplishment'? 'solid 2px #556BD9':'none', borderTopLeftRadius:'16px'}}>
              <h1 className='inter-400-14px-dark' style={{color:'rgba(0, 0, 0, 0.95)', paddingTop:'13px'}}>ACCOMPLISHMENT</h1> 
            </div>
            <div className='report-options' onClick={() =>{setReport('eventscalendar')}} style={{width:'50%', height:'40px', justifyItems:'center', borderBottom:report =='eventscalendar'? 'solid 2px #556BD9':'none', borderTopRightRadius:'16px'}}>
              <h1 className='inter-400-14px-dark' style={{color:'rgba(0, 0, 0, 0.95)', paddingTop:'13px'}}>EVENTSCALENDAR</h1>      
            </div> 
          </div>
          {report == 'accomplishment'?
            <div style={{padding:'10px'}}>
              <h1 className='inter-400-15px-dark' style={{justifySelf:'center', marginTop:'10px'}}>Generate List of Accomplished Events</h1>
                <div style={{width: '100%', paddingBottom: '20px', paddingTop:'20px'}}>
                  <Form.Group>
                  <h1 className='inter-400-14px-dark'>Start Date</h1>
                    <div className='date-picker-wrapper' style={{display: 'flex'}}>
                      <DatePicker className='date-picker' placeholderText='Select Date' popperPlacement="bottom-end" selected={reportstartdate} onChange={(date) => {if(date < currentdate){setReportStartDate(date)}else{props.FacultyError(`Can't Select Current and Future Dates`)}}} />
                        <div style={{transform: 'translate( -33px, 7px)', width: '0px', pointerEvents: 'none'}}>
                          <SimpleCalendar/>
                        </div>
                    </div>
                  </Form.Group>
                </div>
                <div style={{width: '100%', paddingBottom: '20px'}}>
                  <Form.Group>
                  <h1 className='inter-400-14px-dark'>End Date</h1>
                    <div className='date-picker-wrapper' style={{display: 'flex'}}>
                      <DatePicker className='date-picker' placeholderText='Select Date' popperPlacement="bottom-end" selected={reportenddate} onChange={(date) => {if(date <= currentdate){setReportEndDate(date)}else{props.FacultyError(`Can't Select Future Dates`)}}} />
                        <div style={{transform: 'translate( -33px, 7px)', width: '0px', pointerEvents: 'none'}}>
                          <SimpleCalendar/>
                        </div>
                    </div>
                  </Form.Group>
                </div>
                <div style={{width: '90%'}}>
                            <Form.Group>
                            <h1 className='inter-400-14px-dark'>Categories</h1>
                                <div className='pointer-container' style={{marginLeft: '24px', marginRight: '24px'}}>
                                  <div>
                                      <label className='inter-400-16px'> 
                                      <Form.Check
                                          name='1'
                                          type="checkbox"
                                          onChange={(e) => handleReportCategory('Holiday',e)}
                                          checked={reportcategory.find(category => category == 'Holiday')? true : false}
                                      />
                                      <h1 className='inter-400-14px-black' style={{marginTop: '4px'}}>Holiday</h1>
                                      </label>
                                  </div>
                                </div>
                                <div className='pointer-container' style={{marginLeft: '24px', marginRight: '24px'}}>
                                  <div>
                                      <label className='inter-400-16px'> 
                                      <Form.Check
                                          name='2'
                                          type="checkbox"
                                          onChange={(e) => handleReportCategory('Academic-Event',e)}
                                          checked={reportcategory.find(category => category == 'Academic-Event')? true : false}
                                      />
                                      <h1 className='inter-400-14px-black' style={{marginTop: '4px'}}>Academic-Event</h1>
                                      </label>
                                  </div>
                                </div>
                                <div className='pointer-container' style={{marginLeft: '24px', marginRight: '24px'}}>
                                  <div>
                                      <label className='inter-400-16px'> 
                                      <Form.Check
                                          name='3'
                                          type="checkbox"
                                          onChange={(e) => handleReportCategory('Special-Event',e)}
                                          checked={reportcategory.find(category => category == 'Special-Event')? true : false}
                                      />
                                      <h1 className='inter-400-14px-black' style={{marginTop: '4px'}}>Special-Event</h1>
                                      </label>
                                  </div>
                                </div>
                                <div className='pointer-container' style={{marginLeft: '24px', marginRight: '24px'}}>
                                  <div>
                                      <label className='inter-400-16px'> 
                                      <Form.Check
                                          name='7'
                                          type="checkbox"
                                          onChange={(e) => handleReportCategory('Private-Event',e)}
                                          checked={reportcategory.find(category => category == 'Private-Event')? true : false}
                                      />
                                      <h1 className='inter-400-14px-black' style={{marginTop: '4px'}}>Private-Event</h1>
                                      </label>
                                  </div>
                                </div>
                            </Form.Group>
                  </div>
                  <Button
                    disabled={!reportstartdate || !reportenddate || reportcategory.length < 1}
                    style={{
                          borderRadius: '8px', width: '150px', height: '35px', backgroundColor: '#556BD9',
                          marginTop: '25px', display: 'flex', justifyContent: 'center', border: 'none',
                          marginLeft:'auto'
                          }}
                    onClick={()=> {if(reportenddate < reportstartdate){props.FacultyError('Generating file failed. End Date should be later than Start Date.')}else{setModalMode('PDF');props.getEventsListReport(reportstartdate, reportenddate, reportcategory); setIsVisible(false); setModalIsOpen(true);}}}
                                      >
                     <h1 className='inter-500-20px-light'>Generate File</h1>
                   </Button>
            </div>:
            <div style={{padding:'10px'}}>
            <h1 className='inter-400-15px-dark' style={{justifySelf:'center', marginTop:'10px'}}>Generate Calendar of Events</h1>
              <div style={{width: '100%', paddingBottom: '20px', paddingTop:'20px'}}>
                <Form.Group>
                <h1 className='inter-400-14px-dark'>Start Date</h1>
                  <div className='date-picker-wrapper' style={{display: 'flex'}}>
                    <DatePicker className='date-picker' placeholderText='Select Date' popperPlacement="bottom-end" selected={calendarstartdate} onChange={(date) => {setCalendarStartDate(date)}} />
                      <div style={{transform: 'translate( -33px, 7px)', width: '0px', pointerEvents: 'none'}}>
                        <SimpleCalendar/>
                      </div>
                  </div>
                </Form.Group>
              </div>
              <div style={{width: '100%', paddingBottom: '20px'}}>
                <Form.Group>
                <h1 className='inter-400-14px-dark'>End Date</h1>
                  <div className='date-picker-wrapper' style={{display: 'flex'}}>
                    <DatePicker className='date-picker' placeholderText='Select Date' popperPlacement="bottom-end" selected={calendarenddate} onChange={(date) => {setCalendarEndDate(date)}} />
                      <div style={{transform: 'translate( -33px, 7px)', width: '0px', pointerEvents: 'none'}}>
                        <SimpleCalendar/>
                      </div>
                  </div>
                </Form.Group>
              </div>
              <div style={{width: '90%'}}>
                          <Form.Group>
                          <h1 className='inter-400-14px-dark'>Categories</h1>
                              <div className='pointer-container' style={{marginLeft: '24px', marginRight: '24px'}}>
                                <div>
                                    <label className='inter-400-16px'> 
                                    <Form.Check
                                        name='4'
                                        type="checkbox"
                                        onChange={(event) => handleCalendarCategory('Holiday',event)}
                                        checked={calendarcategory.find(category => category == 'Holiday')? true : false}
                                    />
                                    <h1 className='inter-400-14px-black' style={{marginTop: '4px'}}>Holiday</h1>
                                    </label>
                                </div>
                              </div>
                              <div className='pointer-container' style={{marginLeft: '24px', marginRight: '24px'}}>
                                <div>
                                    <label className='inter-400-16px'> 
                                    <Form.Check
                                        name='5'
                                        type="checkbox"
                                        onChange={(event) => handleCalendarCategory('Academic-Event',event)}
                                        checked={calendarcategory.find(category => category == 'Academic-Event')? true : false}
                                    />
                                    <h1 className='inter-400-14px-black' style={{marginTop: '4px'}}>Academic-Event</h1>
                                    </label>
                                </div>
                              </div>
                              <div className='pointer-container' style={{marginLeft: '24px', marginRight: '24px'}}>
                                <div>
                                    <label className='inter-400-16px'> 
                                    <Form.Check
                                        name='6'
                                        type="checkbox"
                                        onChange={(event) => handleCalendarCategory('Special-Event',event)}
                                        checked={calendarcategory.find(category => category == 'Special-Event')? true : false}
                                    />
                                    <h1 className='inter-400-14px-black' style={{marginTop: '4px'}}>Special-Event</h1>
                                    </label>
                                </div>
                              </div>
                              <div className='pointer-container' style={{marginLeft: '24px', marginRight: '24px'}}>
                                <div>
                                    <label className='inter-400-16px'> 
                                    <Form.Check
                                        name='8'
                                        type="checkbox"
                                        onChange={(event) => handleCalendarCategory('Private-Event',event)}
                                        checked={calendarcategory.find(category => category == 'Private-Event')? true : false}
                                    />
                                    <h1 className='inter-400-14px-black' style={{marginTop: '4px'}}>Private-Event</h1>
                                    </label>
                                </div>
                              </div>
                          </Form.Group>
                </div>
                <Button
                  disabled={!calendarstartdate || !calendarenddate || calendarcategory.length < 1}
                  style={{
                        borderRadius: '8px', width: '150px', height: '35px', backgroundColor: '#556BD9',
                        marginTop: '25px', display: 'flex', justifyContent: 'center', border: 'none',
                        marginLeft:'auto'
                        }}
                  onClick={()=> {if(calendarenddate < calendarstartdate){props.FacultyError('Generating file failed. End Date should be later than Start Date.')}else{setModalMode('PDF');props.getEventsListReport(calendarstartdate, calendarenddate, calendarcategory); setIsVisible(false); setModalIsOpen(true);}}}
                                    >
                   <h1 className='inter-500-20px-light'>Generate File</h1>
                 </Button>
          </div>
          }
        </div>
      </div>
      <div style={{ backgroundColor: '#ffffff', display: 'flex', width: props.isLess800?'100%':'50%'}}>
        <div style={{marginTop:props.isLess800?'0px': '40px'}}>
          <Calendar onChange={handleCalendarClick} value={value} tileContent={getTileContent} onActiveStartDateChange={handleActiveStartDateChange} tileClassName={getTileClassName}/>
        </div>
      </div>
      <div style={{width:props.isLess800?'100%': '50%'}}>
        <div style={{maxHeight:props.isLess800?'5000px':'700px', marginRight:'10%', height:props.isLess800?'120%':'90%', width:'90%', overflowY:props.isLess800?'hidden':'auto', border:'1px solid rgba(0, 0, 0, 0.05)',
                     borderRadius:'16px', marginLeft:'5.5%', paddingInline:'20px', overflowX:'hidden', minHeight:'220px', marginBottom:props.isLess800?'20px':'0px'
                    }}>
        <h1 className='inter-500-20px' style={{justifySelf:'center', marginTop: '20px'}}>Events List</h1>
        {(props.eventsList.length > 0 && calendarview == 'month') ? props.eventsList?.slice().sort((a, b) => a.time_start.localeCompare(b.time_start)).map(item => (
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
                          {item.approval == 'No' ? <div style={{height: '23px', paddingInline: '5px', borderRadius: '6px', backgroundColor:'#e72416', marginRight:'5px', transform:'translate(0px, -2px)'}}><h1 className='inter-600-12px-light' style={{paddingTop:'5px', }}>PENDING</h1></div> : ''}
                          <h1 className='inter-400-16px-gray' >
                            {convertTo12HourFormat(item.time_start)}{' - '}{convertTo12HourFormat(item.time_end)}
                          </h1>
                            <Dropdown style={{marginLeft:'auto'}}>
                              <Dropdown.Toggle id="dropdown-basic" style={{border: 'none', backgroundColor: 'rgba(51, 51, 51, 0.00)', color: 'rgba(51, 51, 51, 0.00)', width: '15px', height: '15px', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'center', marginLeft: '10px'}}>
                                <h3 style={{color: '#8A92A6', transform: 'translate(6px, -5px)'}}>...</h3>
                              </Dropdown.Toggle>
                              <Dropdown.Menu style={{borderRadius:'12px'}}>
                                <Dropdown.Item onClick={() => {setEventdetail(item)
                                                               setModalMode('EventDetails')
                                                               handleModalopen()}}>
                                   <h1 className='dropdown-item' style={{marginTop:'10px'}}>View Details</h1>
                                </Dropdown.Item>
                                 {((user.usertype == 'Admin' || `${user.first_name} ${user.last_name}` == item.created_by) && (parseDate(item.date) < currentdate) && (item.approval == 'Yes')) && 
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
                                    {((user.usertype == 'Admin' || `${user.first_name} ${user.last_name}` == item.created_by) && (parseDate(item.date) > currentdate)) && 
                                    <>
                                       <Dropdown.Item onClick={() => {
                                                                      setEventdetail(item)
                                                                      props.setLoading('isLoading')
                                                                      setModalMode('Update')
                                                                      handleModalopen()
                                                                      setTitle(item.title)
                                                                      setCategory(item.category)
                                                                      setLink(item.link)
                                                                      setDescription(item.description)
                                                                      setTimeInValue(item.time_start)
                                                                      setTimeOutValue(item.time_end)
                                                                      setVenue(item.type)
                                                                      setUpdatedstafflist(item.participants.map((participant) => participant.id))
                                                                      setStaffobjectarray(item.participants)
                                                                      setParticipantsothers(item.participants_additional)
                                                                      setConflict(item.conflict)
                                                                      setLocation(item.location)
                                                                      setMeetlink(item.meetlink)
                                                                      setLink(item.link)
                                                                      setInCharge(item.in_charge)
                                                                      setDate(value)
                                                                    }}>
                                          <h1 className='dropdown-item' style={{marginTop:'10px'}}>Update</h1>
                                       </Dropdown.Item>
                                       <Dropdown.Item onClick={() => {
                                                                      setEventdetail(item)
                                                                      setModalMode('Delete')
                                                                      handleModalopen()
                                                                   }}>
                                          <h1 className='dropdown-item' style={{marginTop:'10px'}}>Cancel Event</h1>
                                       </Dropdown.Item>
                                    </>}
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                          {user.usertype == 'Admin'?
                          <div style={{display:'flex', width:'100%'}}>
                            <h1 className='inter-500-18px-dark'>{item.title}</h1>
                            {(item.approval == 'No' && parseDate(item.date) > currentdate)?
                            <div style={{transform: 'translate( 0px, -5px)', display:'flex', marginLeft:'auto', gap:'15px'}}>
                              <div title='Accept' style={{}} onClick={() => {
                                                                      props.updateEventApproval(item.id)
                                                                   }}>
                                <Check/>
                              </div>
                              <div title='Delete' style={{}} onClick={() => {
                                                                      setEventdetail(item)
                                                                      setModalMode('Delete')
                                                                      handleModalopen()
                                                                   }}>
                                <XCircle/>
                              </div>
                            </div>:
                            <></>
                            }
                            {(item.approval == 'No' && parseDate(item.date) < currentdate)?
                            <div style={{transform: 'translate( 0px, -5px)', display:'flex', marginLeft:'auto'}}>
                              <div title='Delete' style={{}} onClick={() => {
                                                                      setEventdetail(item)
                                                                      setModalMode('Delete')
                                                                      handleModalopen()
                                                                   }}>
                                <XCircle/>
                              </div>
                            </div>:
                            <></>
                            }
                          </div>:
                          <h1 className='inter-500-18px-dark'>{item.title}</h1>
                          }
                          <h1 className='inter-400-16px-gray'>{item.description}</h1>
                          </div>
                        </div>
          ))
          :(props.eventsListSingleMonth.length > 0 && calendarview == 'year')? props.eventsListSingleMonth?.slice()
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
                          <Dropdown style={{marginLeft:'auto'}}>
                            <Dropdown.Toggle id="dropdown-basic" style={{border: 'none', backgroundColor: 'rgba(51, 51, 51, 0.00)', color: 'rgba(51, 51, 51, 0.00)', width: '15px', height: '15px', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'center', marginLeft: '10px'}}>
                              <h3 style={{color: '#8A92A6', transform: 'translate(6px, -5px)'}}>...</h3>
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{borderRadius:'12px'}}>
                              <Dropdown.Item onClick={() => {setEventdetail(item)
                                                            setModalMode('EventDetails')
                                                            handleModalopen()}}>
                                <h1 className='dropdown-item' style={{marginTop:'10px'}}>View Details</h1>
                              </Dropdown.Item>
                              {((user.usertype == 'Admin' || `${user.first_name} ${user.last_name}` == item.created_by) && (parseDate(item.date) < currentdate) && (item.approval == 'Yes')) && 
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
                                  {((user.usertype == 'Admin' || `${user.first_name} ${user.last_name}` == item.created_by) && (parseDate(item.date) > currentdate)) && 
                                  <>
                                    <Dropdown.Item onClick={() => {
                                                                    setEventdetail(item)
                                                                    props.setLoading('isLoading')
                                                                    setModalMode('Update')
                                                                    handleModalopen()
                                                                    setTitle(item.title)
                                                                    setCategory(item.category)
                                                                    setLink(item.link)
                                                                    setDescription(item.description)
                                                                    setTimeInValue(item.time_start)
                                                                    setTimeOutValue(item.time_end)
                                                                    setVenue(item.type)
                                                                    setUpdatedstafflist(item.participants.map((participant) => participant.id))
                                                                    setStaffobjectarray(item.participants)
                                                                    setParticipantsothers(item.participants_additional)
                                                                    setConflict(item.conflict)
                                                                    setLocation(item.location)
                                                                    setMeetlink(item.meetlink)
                                                                    setLink(item.link)
                                                                    setInCharge(item.in_charge)
                                                                    setDate(value)
                                                                  }}>
                                        <h1 className='dropdown-item' style={{marginTop:'10px'}}>Update</h1>
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={() => {
                                                                    setEventdetail(item)
                                                                    setModalMode('Delete')
                                                                    handleModalopen()
                                                                }}>
                                        <h1 className='dropdown-item' style={{marginTop:'10px'}}>Cancel Event</h1>
                                    </Dropdown.Item>
                                  </>}
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                        {user.usertype == 'Admin'?
                        <div style={{display:'flex', width:'100%'}}>
                            <h1 className='inter-500-18px-dark'>{item.title}</h1>
                            {(item.approval == 'No' && parseDate(item.date) > currentdate)?
                            <div style={{transform: 'translate( 0px, -5px)', display:'flex', marginLeft:'auto', gap:'15px'}}>
                              <div title='Accept' style={{}} onClick={() => {
                                                                      props.updateEventApproval(item.id)
                                                                   }}>
                                <Check/>
                              </div>
                              <div title='Delete' style={{}} onClick={() => {
                                                                      setEventdetail(item)
                                                                      setModalMode('Delete')
                                                                      handleModalopen()
                                                                   }}>
                                <XCircle/>
                              </div>
                            </div>:
                            <></>
                            }
                            {(item.approval == 'No' && parseDate(item.date) < currentdate)?
                            <div style={{transform: 'translate( 0px, -5px)', display:'flex', marginLeft:'auto'}}>
                              <div title='Delete' style={{}} onClick={() => {
                                                                      setEventdetail(item)
                                                                      setModalMode('Delete')
                                                                      handleModalopen()
                                                                   }}>
                                <XCircle/>
                              </div>
                            </div>:
                            <></>
                            }
                          </div>
                        :
                        <h1 className='inter-500-18px-dark'>{item.title}</h1>}
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
        { value > currentdate && calendarview == 'month' ?
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
                    width:props.isLess800?'98%' : (modalMode == 'PostEvent' || modalMode == 'PDF' )? '80%' : '40%',
                    height:props.isLess800?'87%' : modalMode == 'Delete'? '25%' : '80%',
                    left: '50%',
                    transform:  props.isLess800?'translate(-50%, 8%)' :  modalMode == 'Delete'? 'translate(-50%, 40%)' :'translate(-50%, 15%)',
                    borderRadius: '16px',
                    overflow: modalMode == 'PDF'? 'hidden':'auto',
                  }
                }}
              >
                { modalMode != "Delete" ?
                  <div style={{display: 'flex', width: '100%', justifyContent: 'flex-end'}}>
                  <button onClick={handleModalclose} style={{backgroundColor:'rgba(51, 51, 51, 0.00)', borderColor:'rgba(51, 51, 51, 0.00)', paddingLeft: '0px', paddingRight:'0px', paddingBottom:'5px', left:0}}><CloseButton/></button>
                  </div> : <></>
                }
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
            modalMode == 'EventCreate'?
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
                                <Dropdown.Item onClick={() => {setCategory('Holiday'); setTimeInValue('00:00'); setTimeOutValue('23:59'); setVenue('Holiday'); setLocation(''); setMeetlink(''); setInCharge(''); setParticipantsothers('');setUpdatedstafflist([]);setStaffobjectarray([]);}}>Holiday</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setCategory('Academic-Event'); setTimeInValue(); setTimeOutValue(); setVenue('');}}>Academic-Event</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setCategory('Special-Event'); setTimeInValue(); setTimeOutValue(); setVenue('');}}>Special-Event</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setCategory('Private-Event'); setTimeInValue(); setTimeOutValue(); setVenue('');}}>Private-Event</Dropdown.Item>
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
                          onChange={e => {setTimeInValue(e.target.value);
                                          setUpdatedstafflist([]);
                                          setStaffobjectarray([]);
                                          setStaffID('');}}
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
                          onChange={e => {setTimeOutValue(e.target.value); 
                                          setUpdatedstafflist([]);
                                          setStaffobjectarray([]);
                                          setStaffID('');}}
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
                                <Dropdown.Item onClick={() => {setVenue('Face-To-Face'); setLocation(''); setMeetlink('');}}>Face-To-Face</Dropdown.Item>
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
            <div style={{width: '100%', paddingBottom: '20px'}}>
              <Form.Group>
                <h1 className='inter-400-14px-dark'>In Charge</h1>
                <div style={{display: 'flex'}}>
                <Form.Control type="text" placeholder="Set the person/department In Charge" onChange={e => setInCharge(e.target.value)} style={{width: '100%', border: '1px solid rgb(155, 155, 155)', borderRadius:'4px'}}/>
                {!incharge &&
                <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                    <RedExclamation/>
                </div>
              }
              </div>
              </Form.Group>
            </div>
            :<></>}

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
                                    <Dropdown.Item key={staff.id} onClick={() => handleAddstaff(staff.id, staff)}>
                                      {staff.id} - {staff.userprofile.last_name}, {staff.userprofile.first_name} {staff.userprofile.middle_name} 
                                    </Dropdown.Item>
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
                    disabled={!title||!description||!timeinvalue||!timeoutvalue||!venue||!category || !incharge || (venue === 'Face-To-Face' && !location) || (venue === 'Online' && !meetlink) || (venue === 'Hybrid' && (!location || !meetlink))}
                    style={{
                            borderRadius: '8px', width: '35%', height: '35px', right: 0, backgroundColor: '#556BD9',
                            marginTop: '25px', marginLeft: '65%', display: 'flex', justifyContent: 'center', border: 'none'
                          }}
                    onClick={() => {
                        setDate(value);
                        handleFlags(timeinvalue,timeoutvalue,conflict);
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
                        setDate(value);
                        handleFlags(timeinvalue,timeoutvalue,conflict)
                          }}>
                {props.loadingState == 'isNotLoading'? <><h1 className='inter-500-20px-light'>Create Event</h1></> : <div style={{transform: 'translate( 0px, -6px)'}}><Spinner animation="border" variant="light"/></div>}
              </Button>
            }
            </div> :

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
              <div className='photo-container-noshadow' style={{width:props.isLess800? '45%':'30%', height:props.isLess800? '120px': '200px'}} onClick={handlePhotoAddClick}>
                {props.loadingState == 'isNotLoading' ?
                <div style={{marginTop:'10px', justifyItems: 'center', scale:props.isLess800? '50%':'100%', alignItems:'center', transform:props.isLess800? 'translate( 0%, -45%)':'translate( 0px, 0px)'}}>
                 <AddFiles/>
                <input  key={inputKey}  ref={fileInput}
                                        style={{
                                                display: 'none'}} 
                                                type="file" 
                                        onChange={onImageChange} 
                                        accept=".png, .jpg, .jpeg, .webp"
                                        multiple/>
                <h1 className='inter-600-20px-light'>ADD PHOTOS</h1>
                </div> :
                <div style={{display:'flex', justifyItems: 'center', height:'100%', alignItems:'center'}}>
                  <div style={{alignSelf:'center', justifyItems:'center'}}>
                  <Spinner/>
                  <h1 className='inter-600-20px-light'>UPLOADING...</h1>
                  </div>
                </div>
                }
              </div>
              {photoarray?.sort((a, b) => b.date_added.localeCompare(a.date_added)).map((src, index) => (
                  <div className='photo-container' style={{width:props.isLess800? '45%':'30%', height:props.isLess800? '120px': '200px'}} key={index}>
                    <div className='photo-icons' style={{position:'fixed', transform: 'translate( 35px, 8px)'}} 
                         onClick={() => {
                            handleImageDelete(src.id)
                     }}>
                      <TrashIcon/>
                    </div>
                    <div className='photo-icons' style={{position:'fixed', transform: 'translate( 5px, 8px)'}}>
                      <a href={src.picture} target="_blank" rel="noopener noreferrer"><SearchIcon/></a>
                    </div>
                    
                      <img src={src.picture} alt={`photo-${index}`} className='square-image' />
                    
                  </div>
                ))}
              </div>:<></>
            }
            </div>: 
            modalMode == 'Update' ?

            <div>
            <h1 className='inter-500-20px' style={{justifySelf:'center', marginBottom:'35px'}}>Update Event Details</h1>
            <div style={{width: '100%', paddingBottom: '20px'}}>
            <Form.Group>
              <h1 className='inter-400-14px-dark'>Title</h1>
              <div style={{display: 'flex'}}>
              <Form.Control type="text" defaultValue={eventdetail.title} onChange={e => setTitle(e.target.value)} style={{width: '100%', border: '1px solid rgb(155, 155, 155)', borderRadius:'4px'}}/>
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
              <h1 className='inter-400-14px-dark'>Date</h1>
                <div className='date-picker-wrapper' style={{display: 'flex'}}>
                   <DatePicker className='date-picker' placeholderText='Select Date(Type the year for quick date search)' popperPlacement="bottom-end" selected={date} onChange={(date) => {if(date > currentdate){setDate(date); props.getEventsList(date)}else{props.FacultyError(`Can't Select Past Dates`)}}} />
                    <div style={{transform: 'translate( -33px, 7px)', width: '0px', pointerEvents: 'none'}}>
                      <SimpleCalendar/>
                    </div>
                {!date &&
                   <div style={{transform: 'translate( -55px, 7px)', width: '0px', pointerEvents: 'none'}}>
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
                                <Dropdown.Item onClick={() => {setCategory('Holiday'); setTimeInValue('00:00'); setTimeOutValue('23:59'); setVenue('Holiday'); setLocation(''); setMeetlink(''); setInCharge(''); setParticipantsothers('');setUpdatedstafflist([]);setStaffobjectarray([]);}}>Holiday</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setCategory('Academic-Event'); setTimeInValue(); setTimeOutValue(); setVenue('');}}>Academic-Event</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setCategory('Special-Event'); setTimeInValue(); setTimeOutValue(); setVenue('');}}>Special-Event</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setCategory('Private-Event'); setTimeInValue(); setTimeOutValue(); setVenue('');}}>Private-Event</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </Form.Group>
                </div>

            <div style={{width: '100%', paddingBottom: '20px'}}>
            <Form.Group>
            <h1 className='inter-400-14px-dark'>Link</h1>
              <Form.Control type="text" defaultValue={eventdetail.link} onChange={e => setLink(e.target.value)} style={{width: '100%', border: '1px solid rgb(155, 155, 155)', borderRadius:'4px'}}/>
            </Form.Group>
            </div>
            <div style={{width: '100%', paddingBottom: '20px'}}>
            <Form.Group>
              <h1 className='inter-400-14px-dark'>Description</h1>
              <div style={{display: 'flex'}}>
              <Form.Control as="textarea" rows={3} type="text" defaultValue={eventdetail.description} onChange={e => setDescription(e.target.value)} style={{width: '100%', border: '1px solid rgb(155, 155, 155)', borderRadius:'4px'}}/>
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
                          defaultValue={eventdetail.time_start}
                          type="time"
                          style={{borderColor: 'rgb(155, 155, 155)'}}
                          onChange={e => {setTimeInValue(e.target.value);
                                          setUpdatedstafflist([]);
                                          setStaffobjectarray([]);
                                          setStaffID('');}}
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
                          defaultValue={eventdetail.time_end}
                          type="time"
                          style={{borderColor: 'rgb(155, 155, 155)'}}
                          onChange={e => {setTimeOutValue(e.target.value); 
                                          setUpdatedstafflist([]);
                                          setStaffobjectarray([]);
                                          setStaffID('');}}
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
                                <Dropdown.Item onClick={() => {setVenue('Face-To-Face'); setLocation(''); setMeetlink('');}}>Face-To-Face</Dropdown.Item>
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
            <div style={{width: '100%', paddingBottom: '20px'}}>
              <Form.Group>
                <h1 className='inter-400-14px-dark'>In Charge</h1>
                <div style={{display: 'flex'}}>
                <Form.Control type="text" placeholder="Set the person/department In Charge" onChange={e => setInCharge(e.target.value)} style={{width: '100%', border: '1px solid rgb(155, 155, 155)', borderRadius:'4px'}}/>
                {!incharge &&
                <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                    <RedExclamation/>
                </div>
              }
              </div>
              </Form.Group>
            </div>
            :<></>}

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
                                    <Dropdown.Item key={staff.id} onClick={() => handleAddstaff(staff.id, staff)}>
                                      {staff.id} - {staff.userprofile.last_name}, {staff.userprofile.first_name} {staff.userprofile.middle_name} 
                                    </Dropdown.Item>
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
                <Form.Control type="text" defaultValue={eventdetail.participants_additional} placeholder="Student Clusters, Departments, Guests, etc..." onChange={e => setParticipantsothers(e.target.value)} style={{width: '100%', border: '1px solid rgb(155, 155, 155)', borderRadius:'4px'}}/>
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
                    disabled={!title||!description||!timeinvalue||!timeoutvalue||!venue||!category || !incharge || (venue === 'Face-To-Face' && !location) || (venue === 'Online' && !meetlink) || (venue === 'Hybrid' && (!location || !meetlink))}
                    style={{
                            borderRadius: '8px', width: '35%', height: '35px', right: 0, backgroundColor: '#556BD9',
                            marginTop: '25px', marginLeft: '65%', display: 'flex', justifyContent: 'center', border: 'none'
                          }}
                    onClick={() => {
                        props.getEventsList(date)
                        handleFlagsUpdate(timeinvalue,timeoutvalue,conflict)
                          }}>
                {props.loadingState == 'isNotLoading'? <><h1 className='inter-500-20px-light'>Update Event</h1></> : <div style={{transform: 'translate( 0px, -6px)'}}><Spinner animation="border" variant="light"/></div>}
              </Button>
            :
              <Button
                    disabled={!title||!description||!timeinvalue||!timeoutvalue}
                    style={{
                            borderRadius: '8px', width: '35%', height: '35px', right: 0, backgroundColor: '#556BD9',
                            marginTop: '25px', marginLeft: '65%', display: 'flex', justifyContent: 'center', border: 'none'
                          }}
                    onClick={() => {
                        props.getEventsList(date)
                        handleFlagsUpdate(timeinvalue,timeoutvalue,conflict)
                          }}>
                {props.loadingState == 'isNotLoading'? <><h1 className='inter-500-20px-light'>Update Event</h1></> : <div style={{transform: 'translate( 0px, -6px)'}}><Spinner animation="border" variant="light"/></div>}
              </Button>
            }
            </div> :
            modalMode == 'PDF' && report =='accomplishment'?
            <div style={{height:'100%'}}>
              {showpdf &&
                <PDFViewer style={{width: '100%', height: '95%'}}>
                  <MyDocument />
                </PDFViewer>}
            </div>:
            modalMode == 'PDF' && report =='eventscalendar'?
            <div style={{height:'100%'}}>
              {showpdf &&
                <PDFViewer style={{width: '100%', height: '95%'}}>
                  <MyDocumentCalendar />
                </PDFViewer>}
            </div>:
            <>
            <div
            style={{
              height: '80%',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'visible',
            }}
          >
            <h1
              className="inter-500-18px-dark"
              style={{
                textAlign: 'center',
                whiteSpace: 'normal',
                maxWidth: '100%', 
              }}
            >
              {`Cancel the event "`}
              <span style={{ color: 'red' }}>{eventdetail.title}</span>
              {`"? This will delete the event from the database.`}
            </h1>
          </div>
          <div style={{paddingLeft:'30px', paddingRight:'30px', display:'flex', gap:'10%'}}>
          <Button
                    style={{
                            borderRadius: '8px', width: '45%', height: '35px', right: 0, backgroundColor: '#FF4E64',
                            display: 'flex', justifyContent: 'center', border: 'none'
                          }}
                    onClick={() => {
                        props.deleteEvent(eventdetail.id)
                        handleModalclose()
                          }}>
                {props.loadingState == 'isNotLoading'? <><h1 className='inter-500-20px-light'>Proceed</h1></> : <div style={{transform: 'translate( 0px, -6px)'}}><Spinner animation="border" variant="light"/></div>}
            </Button>
            <Button
                    style={{
                            borderRadius: '8px', width: '45%', height: '35px', right: 0, backgroundColor: '#02D09D',
                            display: 'flex', justifyContent: 'center', border: 'none'
                          }}
                    onClick={() => {
                        handleModalclose()
                          }}>
                {props.loadingState == 'isNotLoading'? <><h1 className='inter-500-20px-light'>Close</h1></> : <div style={{transform: 'translate( 0px, -6px)'}}><Spinner animation="border" variant="light"/></div>}
            </Button>
          </div>
          </>


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
  windowDimensions: PropTypes.object,
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
  windowDimensions: state.main.windowDimensions,
  isLess800: state.main.isLess800,
});

export default withAuth(connect(mapStateToProps, { setsidebarState, setsubsidebarState, setpageHeader, getEventsList, getFaculty, getStaff, setLoading,
                                                   addEvent, ConflictError, TimeError, getEventsListMonth, addEventsImages, getEventImageList, deleteImage, 
                                                   FacultyError, updateEvent, deleteEvent, getEventsListSingleMonth, getEventsListReport, updateEventApproval 
                                                  })(SchedulerDashboard));
