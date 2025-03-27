import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { Row, Col, Image, Form, Button, Card, Spinner } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { SignIn, setloadingUser } from '../../redux/actions/auth'
import ErrorPopup from '../reusable/error';

import bg1 from '../../assets/images/auth/bg2.webp'
// import logo from '../../assets/images/backgrounds/logo.png'
import www from '../../assets/images/backgrounds/www.png'
import { MainIcon } from '../../assets/svg/clnsmpl-icon';

import bg from '../../assets/images/backgrounds/bg_bisu.jpg'
import logo from '../../assets/images/backgrounds/R.png'

function GenSignin (props) {

   const [email, setEmail] = React.useState('');
   const [password, setPassword] = React.useState('');

   const navigate = useNavigate();

   const handleSignIn = async (e) => {
    props.setloadingUser(true);
    e.preventDefault();
    await props.SignIn(email, password);
  }

  const handleSignInFree = async (e) => {
   props.setloadingUser(true);
   e.preventDefault();
   await props.SignIn('free@user.com', '1234');
 }

  useEffect(() => {
   if (props.isAuthenticated) {
      if (props.user.usertype === 'Admin'){
         navigate('/scheduler/regularview');
      }
      else if (props.user.usertype === 'Student'){
         navigate('/noaccount/regularview');
      }else if (props.user.usertype === 'Faculty'){
         navigate('/scheduler/regularview');
      }else if (props.user.usertype === 'Sub-admin'){
        navigate('/weather/dashboard');
     }
   }
 }, [props.isAuthenticated]);
 

   return (
      <>
       { props.error  &&
         <div style={{position: 'fixed', transform: 'translateX(-50%)', left: '50%', zIndex: 9999}}>
            <ErrorPopup errorMessage={props.error}/>
          </div>          
            }
      
            
            <Row className="m-0 bg-white vh-100">
                <div style={{position:'fixed', transform: 'translate( 70px, 30px)', zIndex:'9991'}}>
                                   <img className="circular-avatar" src={logo} alt="description" />
                             </div>
               <div style={{position:'fixed', zIndex:'9990', transform:'translate(0px, -250px)'}}>
                                  <Image src={bg} className="Image-fluid gradient-main animated-scaleX" alt="images" />
                               </div>
               <Col md="12" style={{backgroundColor: 'white'}}>
                  <Row className='align-items-start' style={{height: '28%'}}> 
                        
                  </Row>
                  <Row className="justify-content-center">
                     <Col md="4">
                        <Card className="shadow-none d-flex justify-content-center mb-0" style={{zIndex:'9991', backgroundColor:'rgba(0, 0, 0, 0.75)'}}>
                           <Card.Body>
                              <h2 className="mb-4 text-center" style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, color:'white'}}>Sign In</h2>
                              <Form style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: 13}}>
                                 <Row>
                                    <Col lg="12">
                                       <Form.Group className="mb-4 form-group">
                                          <Form.Label htmlFor="email" className="" style={{color:'#8A92A6'}}>Email</Form.Label>
                                          <Form.Control type="email" className="" id="email" aria-describedby="email"  onChange={e => setEmail(e.target.value)} style={{borderColor: props.error && 'red'}}/>
                                       </Form.Group >
                                    </Col>
                                    <Col lg="12" className="">
                                       <Form.Group className="mb-4 form-group">
                                          <Form.Label htmlFor="password" className="" style={{color:'#8A92A6'}}>Password</Form.Label>
                                          <Form.Control type="password" className="" id="password" aria-describedby="password"  onChange={e => setPassword(e.target.value)} style={{borderColor: props.error && 'red'}}/>
                                       </Form.Group>
                                    </Col>
                                 </Row>
                                 <div className="d-flex justify-content-center">
                                    <Button onClick={handleSignIn} type="button" variant="btn btn-primary" style={{borderRadius: '4px', backgroundColor: '#3A57E8', paddingLeft: '24px', paddingRight: '24px', paddingBottom: '8px', paddingTop: '8px', width: '188px', height: '44px'}}>{props.isloadingUser? <Spinner animation="border" variant="light" /> : <>Sign In</> }</Button>
                                 </div >
                                 <div className='gensignin-accountless-button' onClick={handleSignInFree}>
                                    <h4 className="mb-4 text-center" style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize:'16px', color:'#3A57E8'}}>Continue Without Account</h4>   
                                 </div>
                              </Form>
                           </Card.Body>
                        </Card>
                     </Col>
                  </Row>
               </Col>
            </Row>
      </>
   )
}

GenSignin.propTypes = {
    isAuthenticated: PropTypes.bool,
    SignIn : PropTypes.func.isRequired,
    setloadingUser: PropTypes.func,
    isloadingUser: PropTypes.bool,
    error: PropTypes.string,
    user: PropTypes.object,
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    isloadingUser: state.auth.isloadingUser,
    error: state.auth.error,
    user: state.auth.user
  });

export default connect(mapStateToProps, { SignIn, setloadingUser })(GenSignin);