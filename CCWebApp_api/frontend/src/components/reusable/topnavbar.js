import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Card, Navbar, Button } from 'react-bootstrap';
import Media from 'react-media';

import { AddUser, ColoredClassIcon } from '../../assets/svg/clnsmpl-icon';


function TopNavbar(props){
const user = JSON.parse(localStorage.getItem('user'))
if (!user){
  return <Navigate to="/auth/admin-signin" />;
}

return(
  <Card style={{ width: '100%' , height: '100%', borderTopLeftRadius: '0px', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px', borderColorbackgroundColor:'rgba(51, 51, 51, 0.00)'}}>
      <Navbar bg="light" variant="light" style={{height:'76px', paddingRight: '20px'}}>
        <div style={{marginLeft: 'auto', marginRight: '24px'}}>
          <h1 style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '16px'}}>{user.first_name} {user.last_name}</h1>
          <h1 style={{color:'#8A92A6', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '13px'}}>admin</h1>
        </div>
      </Navbar>
      <Card.Body style={{backgroundColor:'#556BD9', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px', height:'200px'}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div breakpoint={400} style={{marginLeft: '30px'}}>
          <Media query="(max-width: 800px)">
            {matches =>
              matches ? (
                <div style={{display: 'flex'}}>
                  <h1 style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 700, fontSize: '40px', color:'white', borderTop: '48px'}}>
                    ...
                  </h1>
                  <h1 style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '40px', color:'white', marginLeft: '20px'}}>
                    ...
                  </h1>
                </div>
              ) : (
                <div style={{display: 'flex'}}>
                  <h1 style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 700, fontSize: '40px', color:'white', borderTop: '48px'}}>
                    {props.pageHeader.pageHeaderMain}
                  </h1>
                  <h1 style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '40px', color:'white', marginLeft: '20px'}}>
                    {props.pageHeader.pageHeaderMain2}
                  </h1>
                </div>
              )
            }
          </Media>
          <Media query="(max-width: 1100px)">
            {matches =>
              matches ? (
                <h1 style={{color:'#8A92A6', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '23px', color:'white', marginTop:'10px'}}>
                  ...
                </h1>
              ) : (
                <h1 style={{color:'#8A92A6', fontFamily:'Inter', fontStyle:'normal', fontWeight:'500', fontSize:'23px', color:'white', marginTop:'10px'}}>
                  {props.pageHeader.pageHeaderSub}
                </h1>
              )
            }
          </Media>
        </div>

        {props.sidebarState === 'users' && props.subsidebarState === 'students' &&
          <div style={{marginRight: '24px', marginTop: '12px'}}>
        <Button type="button" style={{borderColor:'white', display:'flex', borderRadius: '4px', backgroundColor: 'white', paddingLeft: '24px', paddingRight: '24px', paddingBottom: '8px', paddingTop: '8px', width: '210px', height: '40px'}}>
          <AddUser/><h1 style={{color:'#3A57E8', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '18px', paddingLeft: '12px'}}>Enroll Student</h1>
        </Button>
        </div>}

        {props.sidebarState === 'users' && props.subsidebarState === 'teachers' &&
          <div style={{marginRight: '24px', marginTop: '12px'}}>
        <Button type="button" style={{borderColor:'white', display:'flex', borderRadius: '4px', backgroundColor: 'white', paddingLeft: '24px', paddingRight: '24px', paddingBottom: '8px', paddingTop: '8px', width: '210px', height: '40px'}}>
          <AddUser/><h1 style={{color:'#3A57E8', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '18px', paddingLeft: '12px'}}>Add Faculty</h1>
        </Button>
        </div>}

        {props.sidebarState === 'users' && props.subsidebarState === 'admin' &&
          <div style={{marginRight: '24px', marginTop: '12px'}}>
        <Button type="button" style={{borderColor:'white', display:'flex', borderRadius: '4px', backgroundColor: 'white', paddingLeft: '24px', paddingRight: '24px', paddingBottom: '8px', paddingTop: '8px', width: '210px', height: '40px'}}>
          <AddUser/><h1 style={{color:'#3A57E8', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '18px', paddingLeft: '22px'}}>Add Staff</h1>
        </Button>
        </div>}

        {props.sidebarState === 'class' && props.classState === 'list' &&
          <div style={{marginRight: '24px', marginTop: '12px'}}>
        <Button type="button" href="/#/admins/class-create" style={{borderColor:'white', display:'flex', borderRadius: '4px', backgroundColor: 'white', paddingLeft: '24px', paddingRight: '24px', paddingBottom: '8px', paddingTop: '8px', width: '210px', height: '40px'}}>
          <ColoredClassIcon/><h1 style={{color:'#3A57E8', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '18px', paddingLeft: '22px'}}>Create Class</h1>
        </Button>
        </div>}

        </div>
      </Card.Body>
    </Card>
)
}

TopNavbar.propTypes = {
  sidebarState: PropTypes.string,
  subsidebarState: PropTypes.string,
  pageHeader: PropTypes.object.isRequired,
  classState: PropTypes.string,
}

const mapStateToProps = (state) => ({
  pageHeader: state.main.pageHeader,
  sidebarState: state.main.sidebarState,
  subsidebarState: state.main.subsidebarState,
  classState: state.main.classState,
  });

export default connect(mapStateToProps, {})(TopNavbar);