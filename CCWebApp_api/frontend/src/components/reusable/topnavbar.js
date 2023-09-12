import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Navbar } from 'react-bootstrap';
import Media from 'react-media';


function TopNavbar(props){
const user = JSON.parse(localStorage.getItem('user'))

return(
  <Card style={{ width: '100%' , height: '100%', borderTopLeftRadius: '0px', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px', borderColorbackgroundColor:'rgba(51, 51, 51, 0.00)'}}>
      <Navbar bg="light" variant="light" style={{height:'76px', paddingRight: '20px'}}>
        <div style={{marginLeft: 'auto'}}>
          <h1 style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '16px'}}>{user.first_name} {user.last_name}</h1>
          <h1 style={{color:'#8A92A6', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '13px'}}>admin</h1>
        </div>
      </Navbar>
      <Card.Body style={{backgroundColor:'#556BD9', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px', height:'200px'}}>
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
      </Card.Body>
    </Card>
)
}

TopNavbar.propTypes = {
  pageHeader: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  pageHeader: state.main.pageHeader
  });

export default connect(mapStateToProps, {})(TopNavbar);