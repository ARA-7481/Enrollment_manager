import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Card, Navbar, Button } from 'react-bootstrap';

import { AddUser, ColoredClassIcon, ColoredSubjectIcon, ColoredRoomIcon, ColoredCourseIcon } from '../../assets/svg/clnsmpl-icon';


function WeatherTopBar(props){
  useEffect(() => {
}, [props.selectedBG]);

return(
  <Card style={{ width: '100%', borderTopLeftRadius: '0px', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px', borderColorbackgroundColor:'rgba(51, 51, 51, 0.00)'}}>
      <Card.Body style={{backgroundColor:'#556BD9', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px', height:'200px', backgroundImage:`url(${props.selectedBG})`, backgroundSize: '108% 155%', backgroundPosition: 'center'}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div  style={{marginLeft: '30px'}}>

            <div style={{display: 'flex'}}>
                <h1 style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 700, fontSize: '40px', color:'white', borderTop: '48px', whiteSpace: 'pre'}}>
                  {props.pageHeader.pageHeaderMain}
                </h1>
                <h1 style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '40px', color:'white', marginLeft: '20px'}}>
                  {props.pageHeader.pageHeaderMain2}
                </h1>
            </div>
              <h1 style={{color:'#8A92A6', fontFamily:'Inter', fontStyle:'normal', fontWeight:'500', fontSize: '23px', color:'white', whiteSpace: 'inherit'}}>
                {props.pageHeader.pageHeaderSub}
              </h1>
                
          </div>

          {props.sidebarState === 'users' && props.subsidebarState === 'students' &&
            <div style={{marginRight: '24px', marginTop: '12px'}}>
              <Button className='buttonsonnavbars' type="button" href="/#/admins/register-studentuser">
                <div style={{minHeight: '20px', minWidth: '20px', paddingBottom: '5px', paddingLeft: '12px'}}>
                  <AddUser/>
                </div>
                <div style={{maxHeight: '20px'}}>
                  <h1 className='buttons-font'>Enroll Student</h1>
                </div>
              </Button>
            </div>}

          {props.sidebarState === 'users' && props.subsidebarState === 'teachers' &&
            <div style={{marginRight: '24px', marginTop: '12px'}}>
            <Button className='buttonsonnavbars' type="button" href="/#/admins/register-teacheruser">
              <div style={{minHeight: '20px', minWidth: '20px', paddingBottom: '5px', paddingLeft: '12px'}}>
                <AddUser/>
              </div>
              <div style={{maxHeight: '20px'}}>
                <h1 className='buttons-font'>Add Faculty</h1>
              </div>
            </Button>
          </div>}

        </div>
      </Card.Body>
    </Card>
)
}

WeatherTopBar.propTypes = {
  sidebarState: PropTypes.string,
  subsidebarState: PropTypes.string,
  pageHeader: PropTypes.object.isRequired,
  classState: PropTypes.string,
  subjectState: PropTypes.string,
  roomState: PropTypes.string,
  courseState: PropTypes.string,
  sectionState: PropTypes.string,
  selectedBG: PropTypes.string,
}

const mapStateToProps = (state) => ({
  pageHeader: state.main.pageHeader,
  sidebarState: state.main.sidebarState,
  subsidebarState: state.main.subsidebarState,
  classState: state.main.classState,
  subjectState: state.main.subjectState,
  roomState: state.main.roomState,
  courseState: state.main.courseState,
  selectedBG: state.main.selectedBG,
  sectionState: state.main.sectionState,
  });

export default connect(mapStateToProps, {})(WeatherTopBar);