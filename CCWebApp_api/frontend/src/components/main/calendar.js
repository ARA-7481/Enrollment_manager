import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withAuth from '../common/withAuth';
import Calendar from 'react-calendar';
import Modal from 'react-modal'
import TimePicker from 'react-time-picker';
import { setsidebarState, setsubsidebarState, setpageHeader, getEventsList, getFaculty, getStaff } from '../../redux/actions/main';
import { CloseButton, NoEvents, SmallBell, SmallCalendar, SmallClock, SmallMapPin, SmallUser, AddUsers, ConnectedAccordionIconOpen, RedX } from '../../assets/svg/clnsmpl-icon';
import { Form, Dropdown, Table } from 'react-bootstrap';
Modal.setAppElement('#app');

function SchedulerDashboard(props) {
  const [timeinvalue, setTimeInValue] = useState();
  const [timeoutvalue, setTimeOutValue] = useState();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [staff, setStaff] = useState([]);
  const [students, setStudents] = useState([]);
  const [link, setLink] = useState('');
  const [category, setCategory] = useState('');
  const [conflict, setConflict] = useState('');
  const [value, setValue] = useState(new Date());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [eventdetail, setEventdetail] = useState({});
  const [modalMode, setModalMode] = useState('');

  const [updatedstafflist, setUpdatedstafflist] = useState([])
  const [staffobjectarray, setStaffobjectarray] = useState([])
  const [staffID, setStaffID] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const combinedList = [...props.facultyList, ...props.staffList];

  const filteredStaff = combinedList.filter(staff =>{
    return staff.id.toLowerCase().includes(staffID.toLowerCase()) || 
    staff.userprofile.first_name.toLowerCase().includes(staffID.toLowerCase())||
    staff.userprofile.middle_name.toLowerCase().includes(staffID.toLowerCase()) ||
    staff.userprofile.last_name.toLowerCase().includes(staffID.toLowerCase())
})

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
  }, [value, eventdetail, updatedstafflist]);

  return (
    <>
    <div style={{display:'flex'}}>
      <div style={{ backgroundColor: '#ffffff', display: 'flex', width: '50%', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{marginTop: '40px'}}>
          <Calendar onChange={setValue} value={value} />
        </div>
      </div>
      <div style={{width: '50%'}}>
        <div className='events-container'>
        <h1 className='inter-500-20px' style={{justifySelf:'center', marginTop: '20px'}}>Events List</h1>
        {props.eventsList.length > 0 ? props.eventsList?.slice().sort((a, b) => a.time_start.localeCompare(b.time_start)).map(item => (
                        <div key={item.id} className="schedule-item" style={{backgroundColor:  item.category==="Holiday"?'rgba(255, 78, 100, 0.15)':
                                                                                               item.category==="Special-Event"?'rgba(92, 51, 207, 0.15)':
                                                                                               item.category==="Academic-Event"?'rgba(99, 236, 195, 0.15)':
                                                                                               'rgba(89, 93, 98, 0.15)'
                                                                                              }} 
                                                                                     onClick={() => {
                                                                                      setEventdetail(item)
                                                                                      setModalMode('EventDetails')
                                                                                      handleModalopen()
                                                                                    }}>
                          <div style={{padding:'15px'}}>
                          <h1 className='inter-400-16px-gray'>{item.time_start}{' - '}{item.time_end}</h1>
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
        <div className='events-button' onClick={() => {
                                                       setModalMode('EventCreate')
                                                       handleModalopen()
                                                       }}>
          <h1 className='inter-700-20px-light' style={{padding: '5px'}}> ADD EVENT</h1>
        </div>
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
                  <div style={{display: 'flex'}}>
                  <h1 className='inter-700-22px'>{eventdetail.title}</h1>
                  <div style={{marginLeft:'15px', height: '100%', paddingInline: '5px', borderRadius: '8px', backgroundColor: eventdetail.category==="Holiday"?'rgba(255, 78, 100, 1)':
                                                                                                                              eventdetail.category==="Special-Event"?'rgba(92, 51, 207, 1)':
                                                                                                                              eventdetail.category==="Academic-Event"?'rgba(99, 236, 195, 1)':
                                                                                                                              'rgba(89, 93, 98, 1)' }}>
                    <h1 className='inter-600-12px-light' style={{paddingTop:'8px', }}>{eventdetail.category}</h1>
                  </div>
                  </div>
                  <div style={{overflowWrap: 'break-word', paddingTop: '15px', paddingBottom: '15px'}}>
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
                      <h1 className='inter-500-16px-dark'>{eventdetail.time_start}{' - '}{eventdetail.time_end}</h1>
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
                        <SmallMapPin/>
                        <h1 className='inter-400-14px-dark'>Location</h1>                      
                      </div>
                      <h1 className='inter-500-16px-dark' style={{overflowWrap: 'break-word'}}>{eventdetail.location}</h1>
                    </div>
                  </div>
                  <div style={{display: 'flex', marginTop: '10px'}}>
                    <div style={{width: '100%'}}>
                      <div style={{display: 'flex', gap: '7px'}}>
                        <AddUsers/>
                        <h1 className='inter-400-14px-dark'>Faculty & Staff Participants</h1>                      
                      </div>
                      <div style={{display:'flex'}}>
                        {eventdetail.participants?.length > 0 ?eventdetail.participants?.slice().sort((a, b) => a.localeCompare(b)).map((item, index, array) => (
                          <h1 key={item} className='inter-500-16px-dark'>
                            {item}{index < array.length - 1 && ' | '}
                          </h1>
                        )):
                        <h1 className='inter-500-16px-dark'>No faculty or staff added.</h1>
                        }
                      </div>
                    </div>
                  </div>
                  <div style={{display: 'flex', marginTop: '10px'}}>
                    <div style={{width: '100%'}}>
                      <div style={{display: 'flex', gap: '7px'}}>
                        <AddUsers/>
                        <h1 className='inter-400-14px-dark'>Student Participants</h1>                      
                      </div>
                      <div style={{display:'flex'}}>
                        {eventdetail.students?.length > 0 ?eventdetail.students?.slice().sort((a, b) => a.localeCompare(b)).map((item, index, array) => (
                          <h1 key={item} className='inter-500-16px-dark'>
                            {item}{index < array.length - 1 && ' | '}
                          </h1>
                        )):
                        <h1 className='inter-500-16px-dark'>No student cluster added.</h1>
                        }
                      </div>

                    </div>
                  </div>
                </div>
            :
            <div>
            <h1 className='inter-500-20px' style={{justifySelf:'center', marginBottom:'35px'}}>Create Event</h1>
            <div style={{width: '100%', paddingBottom: '20px'}}>
            <Form.Group>
              <h1 className='inter-400-14px-dark'>Title</h1>
              <Form.Control type="text" onChange={e => setTitle(e.target.value)} style={{width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
            </Form.Group>
            </div>
            <div style={{width: '100%', paddingBottom: '20px'}}>
            <Form.Group>
            <h1 className='inter-400-14px-dark'>Link</h1>
              <Form.Control type="text" placeholder="" onChange={e => setLink(e.target.value)} style={{width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
            </Form.Group>
            </div>
            <div style={{width: '100%', paddingBottom: '20px'}}>
            <Form.Group>
              <h1 className='inter-400-14px-dark'>Description</h1>
              <Form.Control as="textarea" rows={3} type="text" placeholder="Up to 500 characters." onChange={e => setDescription(e.target.value)} style={{width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
            </Form.Group>
            </div>
            <div style={{display:'flex', paddingBottom: '20px'}}>
              <div style={{width: '50%'}}>
                <Form.Group style={{marginRight: '16px', width: '70%'}}>
                      <h1 className='inter-400-14px-dark'>Start Time</h1>
                      <div style={{display: 'flex'}}>
                      <Form.Control
                        type="time"
                        style={{borderColor: '#EEEEEE'}}
                        onChange={e => setTimeInValue(e.target.value)}
                      />
                      </div>
                </Form.Group>
              </div>
              <div style={{width: '50%'}}>
                <Form.Group style={{marginRight: '16px', width: '70%'}}>
                      <h1 className='inter-400-14px-dark'>End Time</h1>
                      <div style={{display: 'flex'}}>
                      <Form.Control
                        type="time"
                        style={{borderColor: '#EEEEEE'}}
                        onChange={e => setTimeOutValue(e.target.value)}
                      />
                      </div>
                </Form.Group>
              </div>
            </div>
            <div style={{width: '100%', paddingBottom: '20px'}}>
            <Form.Group>
            <h1 className='inter-400-14px-dark'>Location</h1>
              <Form.Control type="text" placeholder="" onChange={e => setLocation(e.target.value)} style={{width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
            </Form.Group>
            </div>


            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                <div style={{width: '100%'}}>
                    <Form.Group >
                    <h1 className='inter-400-14px-dark'>Faculty & Staff Participants</h1>
                    <div style={{display: 'flex'}}>
                        <Dropdown style={{width: '100%'}} onToggle={handleToggle}>
                            <Dropdown.Toggle id="dropdown-basic" className='formselect-border-wide drop-noarrow' style={{border: '1px solid #EEEEEE', backgroundColor: 'rgba(51, 51, 51, 0.00)',  width: '100%', display: 'flex', alignItems: 'center', outline: 'none'}}>
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
              
              {staffobjectarray.length > 0 ?
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
              <div></div>
              }

            <div className='events-create' onClick={() => {
                                                          handleModalclose()
                                                          }}>
              <h1 className='inter-700-20px-light' style={{padding: '5px'}}>CREATE EVENT</h1>
            </div>

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
  getStaff: PropTypes.func
};

const mapStateToProps = (state) => ({
  sidebarState: state.main.sidebarState,
  subsidebarState: state.main.subsidebarState,
  eventsList: state.main.eventsList,
  facultyList: state.main.facultyList,
  staffList: state.main.staffList
});

export default withAuth(connect(mapStateToProps, { setsidebarState, setsubsidebarState, setpageHeader, getEventsList, getFaculty, getStaff })(SchedulerDashboard));
