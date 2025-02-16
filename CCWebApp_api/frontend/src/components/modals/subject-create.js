import React, { useState, Fragment, useEffect } from 'react'
import PropTypes, { func } from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setLoading, getSubjectsList, addSubject, setSubjectformdata } from '../../redux/actions/main';

import {Form, InputGroup, Dropdown, Table, Button, Spinner } from 'react-bootstrap';
import { RedExclamation, ConnectedAccordionIconOpen, CloseButton } from '../../assets/svg/clnsmpl-icon';
import { object } from 'prop-types';

function SubjectCreatemodal(props) {

    const navigate = useNavigate();
    const [submissionComplete, setSubmission] = useState(false)
    const [subjectcode, setSubjectcode] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [units, setUnits] = React.useState('');
    const [lecture, setLecture] = React.useState('');
    const [laboratory, setLaboratory] = React.useState('');
    const [prerequisite, setPrerequisite] = React.useState('');
    const [corequisite, setCorequisite] = React.useState('');

    const [formData, setFormData] = useState({});

    const handleSubmit = () => {
        props.setLoading('isLoading')
        props.addSubject(formData)
        setSubmission(true)
    }

    useEffect(() => {
        props.getSubjectsList('');
        props.setSubjectformdata({
          code : subjectcode,
          description : description,
          units : units,
          lecture: lecture,
          lab: laboratory,
          prerequisite: prerequisite,
          corequisite: corequisite,
        })
    
      }, [subjectcode, description, units, lecture, laboratory, prerequisite, corequisite, props.loadingState]);

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

               
              <div style={{display: 'flex', width: '100%'}}>
              <div className="form-group text-left"style={{width: '34%', marginRight: '8px'}}>
                  <Form.Group>
                <Form.Label htmlFor="units" className='form-label'>Units</Form.Label>
                <div style={{display: 'flex'}}>
                <Form.Control type="text" value={units} placeholder="Enter Units" id="units" onChange={e => setUnits(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                {!units &&
                  <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                  <RedExclamation/>
                  </div>
                  }
                </div>
                </Form.Group>
                </div>
                <div className="form-group text-left"style={{width: '33%', marginRight: '8px'}}>
                  <Form.Group>
                <Form.Label htmlFor="lecture" className='form-label'>Lecture Hours</Form.Label>
                <div style={{display: 'flex'}}>
                <Form.Control type="text" value={lecture} placeholder="Enter Lecture Hours" id="lecture" onChange={e => setLecture(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                {!lecture &&
                  <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                  <RedExclamation/>
                  </div>
                  }
                </div>
                </Form.Group>
                </div>
                <div className="form-group text-left"style={{width: '33%'}}>
                  <Form.Group>
                <Form.Label htmlFor="laboratory" className='form-label'>Lab/Internship Hours</Form.Label>
                <div style={{display: 'flex'}}>
                <Form.Control type="text" value={laboratory} placeholder="Enter Lab Hours" id="laboratory" onChange={e => setLaboratory(e.target.value)} style={{ width: '100%', border: '1px solid #EEEEEE', borderRadius:'4px'}}/>
                {!laboratory &&
                  <div style={{transform: 'translate( -33px, 5px)', width: '0px', pointerEvents: 'none'}}>
                  <RedExclamation/>
                  </div>
                  }
                </div>
                </Form.Group>
                </div>
              </div>
              <h1 className='inter-500-19px'>Subject Details Preview</h1>
  
              <Table style={{border: 'none'}}>
              <thead >
              <tr>
                <th className='table-head' style={{width: '10%', paddingLeft:'20px'}}>CODE</th>
                <th className='table-head' style={{width: '23%'}}>SUBJECT</th>
                <th className='table-head' style={{width: '10%'}}>UNITS</th>
                <th className='table-head' style={{width: '10%'}}>LEC</th>
                <th className='table-head' style={{width: '10%'}}>LAB</th>
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
                    {units? units:'-'}
                  </td>
                  <td className='table-body'>
                    {lecture? lecture:'-'}
                  </td>
                  <td className='table-body'>
                    {laboratory? laboratory:'-'} 
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
        </div>
        </>
    )
}

SubjectCreatemodal.propTypes = {
    setLoading: PropTypes.func,
    loadingState: PropTypes.string,
    subjectsListForTable: PropTypes.array,
    getSubjectsList: PropTypes.func,
    addSubject: PropTypes.func,
    setSubjectformdata: PropTypes.func,
    subjectFormdata: PropTypes.object,
  }
  
  const mapStateToProps = (state) => ({
    loadingState: state.main.loadingState,
    subjectsListForTable: state.main.subjectsListForTable,
    subjectFormdata: state.main.subjectFormdata,
    });


export default withAuth(connect(mapStateToProps, {setLoading, getSubjectsList, addSubject, setSubjectformdata})(SubjectCreatemodal))