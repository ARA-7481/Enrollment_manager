import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { Row, Col, Image, Form, Button, Card, Spinner } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { SignIn, setloadingUser } from '../../redux/actions/auth'
import ErrorPopup from '../reusable/error';

import bg1 from '../../assets/images/auth/bg2.webp'
import logo from '../../assets/images/backgrounds/logo.png'
import { MainIcon } from '../../assets/svg/clnsmpl-icon';

function Signin (props) {

   const [email, setEmail] = React.useState('');
   const [password, setPassword] = React.useState('');

   const navigate = useNavigate();

   const handleSignIn = async (e) => {
    props.setloadingUser(true);
    e.preventDefault();
    await props.SignIn(email, password);
  }

  useEffect(() => {
   if (props.isAuthenticated) {
      if (props.user.usertype === 'Admin'){
         navigate('/admins/users-students');
      }
      else if (props.user.usertype === 'Student'){
         navigate('/students/dashboard');}
      // }else if (props.user.usertype === 'Faculty'){
      //    navigate('/teachers/dashboard');
      // }
   }
 }, [props.isAuthenticated]);
 

   return (
      <>
       { props.error  &&
         <div style={{position: 'fixed', transform: 'translateX(-50%)', left: '50%', zIndex: 9999}}>
            <ErrorPopup errorMessage={props.error}/>
          </div>          
            }
      
         <section className="login-content">
            <Row className="m-0 bg-white vh-100">
               <Col md="6">
                  <Row className='align-items-start' style={{height: '28%'}}> 
                     <div style={{display: 'flex', paddingTop: '24px'}}>
                        <div style={{transform: 'translate( 24px, 24px)'}}>
                              <img className="circular-avatar" src={logo} alt="description" />
                        </div>
                        <div style={{justifyContent: 'center', padding: '24px', width: '100%'}}>
                           <h1 className='inter-700-28px-light' style={{wordWrap: 'normal', textAlign: 'center'}}>Cambagui-Calinginan Norte National High School</h1>
                           <h1 className='inter-600-20px' style={{wordWrap: 'normal', textAlign: 'center'}}>Calinginan Norte, Sevilla, Bohol</h1>
                           <h1 className='inter-500-16px' style={{wordWrap: 'normal', textAlign: 'center'}}>302904@deped.gov.ph</h1>
                        </div>
                        
                     </div>
                        
                  </Row>
                  <Row className="justify-content-center">
                     <Col md="7">
                        <Card className="shadow-none d-flex justify-content-center mb-0">
                           <Card.Body>
                              <h2 className="mb-4 text-center" style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 700}}>Sign In</h2>
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
                                    <Col lg="12" className="d-flex justify-content-between">
                                       <Form.Check className="form-check mb-4">
                                          <Form.Check.Input type="checkbox" id="customCheck1" />
                                          <Form.Check.Label htmlFor="customCheck1" style={{color:'#8A92A6'}}>Remember Me</Form.Check.Label>
                                       </Form.Check>
                                       <Link to="/auth/recoverpw">Forgot Password?</Link>
                                    </Col>
                                 </Row>
                                 <div className="d-flex justify-content-center">
                                    <Button onClick={handleSignIn} type="button" variant="btn btn-primary" style={{borderRadius: '4px', backgroundColor: '#3A57E8', paddingLeft: '24px', paddingRight: '24px', paddingBottom: '8px', paddingTop: '8px', width: '188px', height: '44px'}}>{props.isloadingUser? <Spinner animation="border" variant="light" /> : <>Sign In</> }</Button>
                                 </div >
                                 <p className="mt-3 text-center">
                                    Do you have problems with your account? <Link to="/auth/sign-up" className="text-underline">Please contact the school administrator.</Link>
                                 </p>
                              </Form>
                           </Card.Body>
                        </Card>
                     </Col>
                  </Row>
               </Col>
               <Col md="6" className="d-md-block d-none bg-primary p-0 vh-100 overflow-hidden">
                  <Image src={bg1} className="Image-fluid gradient-main animated-scaleX" alt="images" loading='lazy'/>
               </Col>
            </Row>
         </section>
      </>
   )
}

Signin.propTypes = {
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

export default connect(mapStateToProps, { SignIn, setloadingUser })(Signin);