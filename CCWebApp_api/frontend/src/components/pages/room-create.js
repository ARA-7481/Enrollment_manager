import React, { useState, Fragment, useEffect } from 'react'
import PropTypes, { func } from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState, setsubjectState, setpageHeader, setLoading, addRoom, setroomState } from '../../redux/actions/main';

import { Form, InputGroup, Button, Spinner } from 'react-bootstrap';
import { RedExclamation } from '../../assets/svg/clnsmpl-icon';

function RoomCreate(props) {

    const navigate = useNavigate();
    const [submissionComplete, setSubmission] = useState(false)
    const [roomcode, setRoomcode] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [type, setType] = React.useState('Unspecified');
    const [capacity, setCapacity] = React.useState('');

    const [formData, setFormData] = useState({});

    const handleSubmit = () => {
        props.setLoading('isLoading')
        props.addRoom(formData)
        setSubmission(true)
    }

    const handleType = (roomtype) => {
        setType(roomtype);
      }
    useEffect(() => {
        props.setsidebarState('rooms')
        props.setsubsidebarState(null)
        props.setroomState('create-page-one')
        props.setpageHeader('Create a Room', '', 'Fill Information to Create a Room')
    },[])
    useEffect(() => {
        if (props.loadingState === 'isNotLoading' && submissionComplete) {
          if(props.error){
            setSubmission(false)
          }else if(props.success){
            navigate('/admins/rooms');
          }
          }
        setFormData({
          code : roomcode,
          description : description,
          type: type,
          capacity: capacity,
        })
    
      }, [roomcode, description, type, capacity, props.loadingState, props.success, props.error]);

    return (
        <>
        <div style={{backgroundColor:'#ffffff', borderRadius:'8px', paddingBottom: '48px'}}>
          <div style={{padding: '24px'}}>
            <h1 className='card-title'>Room Information</h1>
            <InputGroup>
              <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>

              <div style={{width: '50%', marginLeft: '8px'}}>
                <Form.Group style={{width: '50%'}}>
                <Form.Label htmlFor="type" className='form-label' style={{paddingBottom: '7px'}}>Room Type</Form.Label>
                <div style={{display: 'flex', color:'#8A92A6', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '16px',}}>
                <Form.Check 
                    style={{paddingRight: '32px'}}
                    type='radio'
                    id='option1'
                    label='Lecture'
                    name='groupOptions'
                    onChange={() =>handleType('Lecture')}
                />
                <Form.Check style={{paddingRight: '32px'}}
                    type='radio'
                    id='option2'
                    label='Laboratory'
                    name='groupOptions'
                    onChange={() =>handleType('Laboratory')}
                />
                <Form.Check
                    type='radio'
                    id='option3'
                    label='Unspecified'
                    name='groupOptions'
                    onChange={() =>handleType('Unspecified')}
                    defaultChecked={true}
                />
                </div>
                </Form.Group>
            </div>


                <div className="form-group text-left"style={{width: '50%', marginRight: '8px'}}>
                <Form.Group>
                <Form.Label htmlFor="capacity" className='form-label'>Room Capacity</Form.Label>
                <div style={{display: 'flex'}}>
                <Form.Control type="text" value={capacity} placeholder="Enter Room Capacity" id="capacity" onChange={e => setCapacity(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                {!capacity &&
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
                <Form.Label htmlFor="roomcode" className='form-label'>Room Code</Form.Label>
                <div style={{display: 'flex'}}>
                <Form.Control type="text" value={roomcode} placeholder="Enter Room Code" id="roomcode" onChange={e => setRoomcode(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                {!roomcode &&
                  <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                  <RedExclamation/>
                  </div>
                  }
                </div>
                </Form.Group>
            </div>

            <div className="form-group text-left"style={{width: '50%', marginRight: '8px'}}>
                <Form.Group>
                <Form.Label htmlFor="description" className='form-label'>Description</Form.Label>
                <div style={{display: 'flex'}}>
                <Form.Control type="text" value={description} placeholder="Enter Description" id="description" onChange={e => setDescription(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                {!description &&
                  <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                  <RedExclamation/>
                  </div>
                  }
                </div>
                </Form.Group>
            </div>

              </div>
            </InputGroup>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '32px' }}>
        <Button disabled={!roomcode || !description || !capacity || !type } type="button" onClick={handleSubmit} style={{borderColor:'#3A57E8', borderRadius: '4px', backgroundColor: '#3A57E8', width: '15%', height: '48px', alignContent: 'center', marginRight: '24px'}}>
            <h1 style={{color:'white', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '18px', paddingTop: '8px'}}>
            {props.loadingState == 'isNotLoading'? <>Create Room</> : <div style={{transform: 'translate( 0px, -6px)'}}><Spinner animation="border" variant="light"/></div>}</h1>
        </Button>
        </div>
        </div>
        </>
    )
}

RoomCreate.propTypes = {
    sidebarState: PropTypes.string,
    setsidebarState: PropTypes.func.isRequired,
    subsidebarState: PropTypes.string,
    setsubsidebarState: PropTypes.func.isRequired,
    setsubjectState: PropTypes.func,
    subjectState: PropTypes.string,
    pageHeader: PropTypes.object,
    setLoading: PropTypes.func,
    loadingState: PropTypes.string,
    addRoom: PropTypes.func,
    setroomState: PropTypes.func,
    error: PropTypes.string,
    success: PropTypes.string,
  }
  
  const mapStateToProps = (state) => ({
    sidebarState: state.main.sidebarState,
    subsidebarState: state.main.subsidebarState,
    subjectState: state.main.classState,
    pageHeader: state.main.pageHeader,
    loadingState: state.main.loadingState,
    error: state.main.error,
    success: state.main.success,
    });


export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setsubjectState, setpageHeader, setLoading, addRoom, setroomState})(RoomCreate))