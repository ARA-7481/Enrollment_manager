import React from 'react'
import { Row, Col, Image, Form, Button, ListGroup } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Card from '../Card'

import bg1 from '../../assets/images/auth/bg2.webp'

const SignUp = () => {
    let history = useNavigate()
    return (
       <>
          <section className="login-content">
             <Row className="m-0 align-items-center bg-white vh-100">
                <div className="col-md-6 d-md-block d-none bg-primary p-0 mt-n1 vh-100 overflow-hidden">
                   <Image src={bg1} className="Image-fluid gradient-main animated-scaleX" alt="images" />
                </div>
                <Col md="6">
                   <Row className="justify-content-center">
                      <Col md="10">
                         <Card className="card-transparent auth-card shadow-none d-flex justify-content-center mb-0">
                            <Card.Body>
                               <h2 className="mb-2 text-center">Sign Up</h2>
                               <p className="text-center">Create an admin account.</p>
                               <Form>
                                  <Row>
                                     <Col lg="6">
                                        <Form.Group className="form-group">
                                           <Form.Label htmlFor="first-name" className="">First Name</Form.Label>
                                           <Form.Control type="text" className="" id="full-name" placeholder=" " />
                                        </Form.Group>
                                     </Col>
                                     <Col lg="6">
                                        <Form.Group className="form-group">
                                           <Form.Label htmlFor="last-name" className="">Last Name</Form.Label>
                                           <Form.Control type="text" className="" id="last-name" placeholder=" " />
                                        </Form.Group>
                                     </Col>
                                     <Col lg="6">
                                        <Form.Group className="form-group">
                                           <Form.Label htmlFor="email" className="">Email</Form.Label>
                                           <Form.Control type="email" className="" id="email" placeholder=" " />
                                        </Form.Group>
                                     </Col>
                                     <Col lg="6">
                                        <Form.Group className="form-group">
                                           <Form.Label htmlFor="phone" className="">Phone No.</Form.Label>
                                           <Form.Control type="text" className="" id="phone" placeholder=" " />
                                        </Form.Group>
                                     </Col>
                                     <Col lg="6">
                                        <Form.Group className="form-group">
                                           <Form.Label htmlFor="password" className="">Password</Form.Label>
                                           <Form.Control type="password" className="" id="password" placeholder=" " />
                                        </Form.Group>
                                     </Col>
                                     <Col lg="6">
                                        <Form.Group className="form-group">
                                           <Form.Label htmlFor="confirm-password" className="">Confirm Password</Form.Label>
                                           <Form.Control type="text" className="" id="confirm-password" placeholder=" " />
                                        </Form.Group>
                                     </Col>
                                     <Col lg="12" className="d-flex justify-content-center">
                                        <Form.Check className="mb-3 form-check">
                                           <Form.Check.Input type="checkbox" id="customCheck1" />
                                           <Form.Check.Label htmlFor="customCheck1">I agree with the terms of use</Form.Check.Label>
                                        </Form.Check>
                                     </Col>
                                  </Row>
                                  <div className="d-flex justify-content-center">
                                     <Button onClick={() => history.push('/dashboard')} type="button" variant="primary">Sign Up</Button>
                                  </div>
                                  <p className="mt-3 text-center">
                                     Already have an Account <Link to="/auth/sign-in" className="text-underline">Sign In</Link>
                                  </p>
                               </Form>
                            </Card.Body>
                         </Card>
                      </Col>
                   </Row>
                </Col>
             </Row>
          </section>
       </>
    )
 }
 
 export default SignUp
 