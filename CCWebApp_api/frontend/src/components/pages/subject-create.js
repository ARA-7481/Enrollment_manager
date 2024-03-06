import React, { useState, Fragment, useEffect } from 'react'
import PropTypes, { func } from 'prop-types';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState, setsubjectState, setpageHeader, setLoading, getSubjectsList, addSubject } from '../../redux/actions/main';

import { Form, InputGroup, Dropdown, Table, Button, Spinner } from 'react-bootstrap';
import { RedExclamation, ConnectedAccordionIconOpen } from '../../assets/svg/clnsmpl-icon';

function SubjectCreate(props) {

    const navigate = useNavigate();
    const [submissionComplete, setSubmission] = useState(false)
    const [subjectcode, setSubjectcode] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [prerequisite, setPrerequisite] = React.useState('');
    const [corequisite, setCorequisite] = React.useState('');

    const [formData, setFormData] = useState({});

    const handleSubmit = () => {
        props.setLoading('isLoading')
        props.addSubject(formData)
        setSubmission(true)
    }

    useEffect(() => {
        props.setsidebarState('subjects')
        props.setsubsidebarState(null)
        props.setsubjectState('create-page-one')
        props.setpageHeader('Create a Subject', '', 'Fill Information to Create a Subject')
        props.getSubjectsList('');
      },[])

    useEffect(() => {
        if (props.loadingState === 'isNotLoading' && submissionComplete) {
          if(props.error){
            setSubmission(false)
          }else if(props.success){
            navigate('/admins/subjects');
          }
          }
        setFormData({
          code : subjectcode,
          description : description,
          prerequisite: prerequisite,
          corequisite: corequisite,
        })
      }, [subjectcode, description, prerequisite, corequisite, props.loadingState, props.error, props.success]);

    return (
        <>
        <div style={{backgroundColor:'#ffffff', borderRadius:'8px', paddingBottom: '48px'}}>
          <div style={{padding: '24px'}}>
            <h1 className='card-title'>Subject Information</h1>
            <InputGroup>
              <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                  <div className="form-group text-left"style={{width: '50%', marginRight: '8px'}}>
                <Form.Group>
                <Form.Label htmlFor="subjectcode" className='form-label'>Subject Code</Form.Label>
                <div style={{display: 'flex'}}>
                <Form.Control type="text" value={subjectcode} placeholder="Enter Subject Code" id="subjectcode" onChange={e => setSubjectcode(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                {!subjectcode &&
                  <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                  <RedExclamation/>
                  </div>
                  }
                </div>
                </Form.Group>
                </div>
  
                <div className="form-group text-left"style={{width: '50%', marginLeft: '8px'}}>
                <Form.Group>
                <Form.Label htmlFor="description" className='form-label'>Description</Form.Label>
                <div style={{display: 'flex'}}>
                <Form.Control type="text" value={description} placeholder="Enter Subject Description" id="description" onChange={e => setDescription(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                {!description &&
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
                <Form.Label htmlFor="prerequisite" className='form-label'>Prerequisite</Form.Label>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" className='formselect-border drop-noarrow' style={{border: 'none', backgroundColor: 'rgba(51, 51, 51, 0.00)', color: prerequisite? 'black': 'rgba(51, 51, 51, 0.80)', width: '100%', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'space-between'}}>
                        <div>{prerequisite? prerequisite: "Select Prerequisite"}</div>
                        <ConnectedAccordionIconOpen/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ width: '49.5%', maxHeight: '200px', overflow: 'auto'}}>
                        <Dropdown.Item onClick={() => setPrerequisite('')}>NONE</Dropdown.Item>
                        {[...props.subjectsListForTable].sort((a, b) => a.code.localeCompare(b.code)).map((subject) => (
                            <Dropdown.Item key={subject.code} onClick={() => setPrerequisite(subject.code)}>{subject.code}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                </Form.Group>
                </div>

                <div className="form-group text-left"style={{width: '50%', marginLeft: '8px'}}>
                <Form.Group>
                <Form.Label htmlFor="corequisite" className='form-label'>Corequisite</Form.Label>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" className='formselect-border drop-noarrow' style={{border: 'none', backgroundColor: 'rgba(51, 51, 51, 0.00)' , color: corequisite? 'black': 'rgba(51, 51, 51, 0.80)', width: '100%', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'space-between'}}>
                        <div>{corequisite? corequisite: "Select Corequisite"}</div>
                        <ConnectedAccordionIconOpen/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ width: '49.5%', maxHeight: '200px', overflow: 'auto'}}>
                        <Dropdown.Item onClick={() => setCorequisite('')}>NONE</Dropdown.Item>
                        {[...props.subjectsListForTable].sort((a, b) => a.code.localeCompare(b.code)).map((subject) => (
                          <Dropdown.Item key={subject.code} onClick={() => setCorequisite(subject.code)}>{subject.code}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                </Form.Group>
                </div>

              </div>

              <h1 className='inter-500-19px'>Subject Details Preview</h1>
  
              <Table style={{border: 'none'}}>
              <thead >
              <tr>
                <th className='table-head' style={{width: '10%', paddingLeft:'20px'}}>CODE</th>
                <th className='table-head' style={{width: '23%'}}>SUBJECT</th>
                <th className='table-head' style={{width: '10%'}}>COREQUISITE</th>
                <th className='table-head' style={{width: '10%'}}>PREREQUISITE</th>
              </tr>
              </thead>
              <tbody style={{cursor: 'pointer', }}>
                <tr>
                  <td className='table-body' style={{paddingLeft:'20px'}}>
                    {subjectcode? subjectcode:'-'}
                  </td>
                  <td className='table-body' style={{maxWidth: '400px', overflow: 'auto'}}>
                    {description? description:'-'}
                  </td>
                  <td className='table-body'>
                    {prerequisite? prerequisite:'-'}
                  </td>
                  <td className='table-body'>
                    {corequisite? corequisite:'-'} 
                  </td>
                </tr>
              </tbody>
              </Table>
            </InputGroup>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '32px' }}>
        <Button disabled={!subjectcode || !description} type="button" onClick={handleSubmit} style={{borderColor:'#3A57E8', borderRadius: '4px', backgroundColor: '#3A57E8', width: '15%', height: '48px', alignContent: 'center', marginRight: '24px'}}>
            <h1 style={{color:'white', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '18px', paddingTop: '8px'}}>
            {props.loadingState == 'isNotLoading'? <>Create Subject</> : <div style={{transform: 'translate( 0px, -6px)'}}><Spinner animation="border" variant="light"/></div>}</h1>
        </Button>
        </div>
        </div>
        </>
    )
}

SubjectCreate.propTypes = {
    sidebarState: PropTypes.string,
    setsidebarState: PropTypes.func.isRequired,
    subsidebarState: PropTypes.string,
    setsubsidebarState: PropTypes.func.isRequired,
    setsubjectState: PropTypes.func,
    subjectState: PropTypes.string,
    pageHeader: PropTypes.object,
    setLoading: PropTypes.func,
    loadingState: PropTypes.string,
    subjectsListForTable: PropTypes.array,
    getSubjectsList: PropTypes.func,
    addSubject: PropTypes.func,
    error: PropTypes.string,
    success: PropTypes.string,
  }
  
  const mapStateToProps = (state) => ({
    sidebarState: state.main.sidebarState,
    subsidebarState: state.main.subsidebarState,
    subjectState: state.main.subjectState,
    pageHeader: state.main.pageHeader,
    loadingState: state.main.loadingState,
    subjectsListForTable: state.main.subjectsListForTable,
    error: state.main.error,
    success: state.main.success,
    });


export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setsubjectState, setpageHeader, setLoading, getSubjectsList, addSubject})(SubjectCreate))