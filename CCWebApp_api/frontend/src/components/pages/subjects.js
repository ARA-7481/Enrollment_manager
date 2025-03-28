import React, { useState, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState, setpageHeader, getDepartments, setLoading, getSubjectsList, setsubjectState } from '../../redux/actions/main';

import { Col, Table, Dropdown, Form, Placeholder } from 'react-bootstrap';
import { Magnifier } from '../../assets/svg/clnsmpl-icon';

function Subjects(props) {
  const [sortStatus, setsortStatus] = useState ('Newest-Oldest')
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSearch = (query) => {
    props.getSubjectsList(query)
    props.setLoading('isLoading')
  };

  const handleSort = (sort) => {
    setsortStatus(sort)
  };


  useEffect(() => {
    if (props.subjectsListForTable.length == 0){
      props.setLoading('isLoading');
    }
    props.setsidebarState('subjects');
    props.setsubsidebarState(null);
    props.setsubjectState('list');
    props.setpageHeader('Manage Subjects', '', 'View, add and update subjects.');
    props.getSubjectsList('');
    props.getDepartments();
  }, []);

  return (
    <>
    <div style={{backgroundColor:'#e9ecef', borderTopLeftRadius:'8px', borderTopRightRadius:'8px'}}>                           
    <div style={{backgroundColor:'#ffffff', height: '72px', borderRadius:'8px', display: 'flex', alignItems: 'center', padding: '24px'}}>
    <div onClick={() => handleSearch(value)} style={{cursor: 'pointer'}}>
      <Magnifier/>
      </div>
      <Form style={{width: '62.5%'}}>
        <Form.Group controlId="searchbar">
          <Form.Control type='search' placeholder="Search Subject or Subject Code" value={value} onChange={handleChange} style={{border: 'none', width:'100%', minWidth: '145px'}}/>
        </Form.Group>
      </Form>
    
      <h1 className='inter-500-16px' style={{paddingTop: '10px'}}>
        Sort: 
      </h1>
      <Dropdown style={{width: '37.5%', minWidth: '1px'}}>
          <Dropdown.Toggle id="dropdown-basic" 
                           style={{border: 'none', backgroundColor: 'rgba(51, 51, 51, 0.00)', color: 'black', width: '100%', 
                                   display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'space-between'}}>
            <div style={{overflow: 'hidden'}}>{sortStatus}</div>
          </Dropdown.Toggle>

          <Dropdown.Menu style={{minWidth: '1px', width: '100%'}}>
            {sortStatus !== 'Newest-Oldest'  && <Dropdown.Item onClick={() => handleSort('Newest-Oldest')}><div className="zooming-text">Newest-Oldest</div></Dropdown.Item>}
            {sortStatus !== 'Oldest-Newest'  && <Dropdown.Item onClick={() => handleSort('Oldest-Newest')}><div className="zooming-text">Oldest-Newest</div></Dropdown.Item>}
            {sortStatus !== 'A-Z'  && <Dropdown.Item onClick={() => handleSort('A-Z')}><div className="zooming-text">A-Z</div></Dropdown.Item>}
            {sortStatus !== 'Z-A'  && <Dropdown.Item onClick={() => handleSort('Z-A')}><div className="zooming-text">Z-A</div></Dropdown.Item>}
            {sortStatus !== 'Units(ASC)'  && <Dropdown.Item onClick={() => handleSort('Units(ASC)')}><div className="zooming-text">Units(ASC)</div></Dropdown.Item>}
            {sortStatus !== 'Units(DESC)'  && <Dropdown.Item onClick={() => handleSort('Units(DESC)')}><div className="zooming-text">Units(DESC)</div></Dropdown.Item>}
          </Dropdown.Menu>
      </Dropdown>

    </div>
    <div style={{height: '40px', backgroundColor:'rgba(51, 51, 51, 0.00)', margin: '0px'}}>
    </div>
    <div style={{backgroundColor:'#ffffff', borderRadius:'8px', minWidth: '1px', overflowX: 'auto'}}>
    <div style={{height: '81px', display: 'flex'}}>
      <h1 className='table-title'>List of Subjects</h1>
    </div>

    {props.loadingState == 'isLoading' ?  
        <div style={{marginLeft: '20px', marginRight: '40px', marginTop: '7px'}}>
          <div style={{display:'flex', marginBottom: '27px'}}>
          <Placeholder animation="glow" style={{width: '15%', color: 'rgba(51, 51, 51, 0.20)'}}>
            <Placeholder xs={5} />
          </Placeholder>
          <Placeholder animation="glow" style={{width: '50%', color: 'rgba(51, 51, 51, 0.20)'}}>
            <Placeholder xs={5} />
          </Placeholder>
          <Placeholder animation="glow" style={{width: '10%', color: 'rgba(51, 51, 51, 0.20)'}}>
            <Placeholder xs={5} />
          </Placeholder>
          <Placeholder animation="glow" style={{width: '10%', color: 'rgba(51, 51, 51, 0.20)'}}>
            <Placeholder xs={5} />
          </Placeholder>
          <Placeholder animation="glow" style={{width: '10%', color: 'rgba(51, 51, 51, 0.20)'}}>
            <Placeholder xs={5} />
          </Placeholder>
          <Placeholder animation="glow" style={{width: '15%', color: 'rgba(51, 51, 51, 0.20)'}}>
            <Placeholder xs={5} />
          </Placeholder>
          <Placeholder animation="glow" style={{width: '15%', color: 'rgba(51, 51, 51, 0.20)'}}>
            <Placeholder xs={5} />
          </Placeholder>
          <Placeholder animation="glow" style={{color: 'rgba(51, 51, 51, 0.20)'}}>
            <Placeholder xs={5} />
          </Placeholder>
          </div> 
        <div style={{marginBottom: '35px'}}>
        <Placeholder animation="glow" style={{color: 'rgba(51, 51, 51, 0.20)'}}>
          <Placeholder xs={12} />
        </Placeholder>
        </div>
        <div style={{marginBottom: '35px'}}>
        <Placeholder animation="glow" style={{color: 'rgba(51, 51, 51, 0.20)'}}>
          <Placeholder xs={12} />
        </Placeholder>
        </div>
        <div style={{marginBottom: '35px'}}>
        <Placeholder animation="glow" style={{color: 'rgba(51, 51, 51, 0.20)'}}>
          <Placeholder xs={12} />
        </Placeholder>
        </div>
        <div style={{marginBottom: '35px'}}>
        <Placeholder animation="glow" style={{color: 'rgba(51, 51, 51, 0.20)'}}>
          <Placeholder xs={12} />
        </Placeholder>
        </div>
        <div style={{marginBottom: '35px'}}>
        <Placeholder animation="glow" style={{color: 'rgba(51, 51, 51, 0.20)'}}>
          <Placeholder xs={12} />
        </Placeholder>
        </div>
        <div style={{marginBottom: '35px'}}>
        <Placeholder animation="glow" style={{color: 'rgba(51, 51, 51, 0.20)'}}>
          <Placeholder xs={12} />
        </Placeholder>
        </div>
        </div>
      :

    <Table hover style={{border: 'none'}}>
      <thead >
          <tr>
            <th className='table-head' style={{width: '15%', paddingLeft:'20px'}}>CODE</th>
            <th className='table-head' style={{width: '40%'}}>DESCRIPTION</th>
            <th className='table-head' style={{width: '8%'}}>UNITS</th>
            <th className='table-head' style={{width: '8%'}}>LEC</th>
            <th className='table-head' style={{width: '8%'}}>LAB</th>
            <th className='table-head' style={{width: '10%'}}>PREREQUISITE</th>
            <th className='table-head' style={{width: '10%'}}>COREQUISITE</th>
            <th className='table-head'>ACTION</th>
          </tr>
        </thead>
        <tbody style={{cursor: 'pointer', }}>
        {[...props.subjectsListForTable]
              .sort((a, b) => {
                switch (sortStatus) {
                  case 'Newest-Oldest':
                    return new Date(b.date_created) - new Date(a.date_created);
                  case 'Oldest-Newest':
                    return new Date(a.date_created) - new Date(b.date_created);
                  case 'A-Z':
                    return a.code.localeCompare(b.code);
                  case 'Z-A':
                    return b.code.localeCompare(a.code);
                  case 'Units(ASC)':
                    return a.units.toString().localeCompare(b.units.toString());
                  case 'Units(DESC)':
                    return b.units.toString().localeCompare(a.units.toString());
                  default:
                    return 0;
                }
              })
              ?.map((subject) =>(
                <tr key={subject.code} style={{border: 'none'}}>
                  <td className='table-body' style={{paddingLeft:'20px'}}>
                    {subject.code}</td>
                  <td className='table-body'>
                    {subject.description}</td>
                  <td className='table-body'>
                    {subject.units}</td>
                  <td className='table-body'>
                    {subject.lecture}</td>
                  <td className='table-body'>
                    {subject.lab}</td>
                  <td className='table-body'>
                    {subject.prerequisite? subject.prerequisite: "-"}</td>
                  <td className='table-body'>
                    {subject.corequisite? `${subject.corequisite}`: subject.related_corequisite.length > 0? `${subject.related_corequisite}`: "-"}</td>
                  <td className='table-body'>
                  <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic" style={{border: 'none', backgroundColor: '#e9ecef', color: 'rgba(51, 51, 51, 0.00)', width: '38px', height: '38px', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'center', marginLeft: '10px'}}>
                        <h2 style={{color: '#8A92A6', marginLeft: '12px', marginBottom: '15px'}}>...</h2>
                      </Dropdown.Toggle>
    
                      <Dropdown.Menu>
                            <Dropdown.Item><h1 className='dropdown-item'>View Subject</h1></Dropdown.Item>
                      </Dropdown.Menu>
                  </Dropdown>
    
                  </td>
                </tr>
            ))}
        </tbody>
    </Table>
    }
  <div style={{height: '10px'}}>  
  </div>
    </div>
    </div>      
    </>
  );
}

Subjects.propTypes = {
  sidebarState: PropTypes.string,
  setsidebarState: PropTypes.func.isRequired,
  subsidebarState: PropTypes.string,
  setsubsidebarState: PropTypes.func.isRequired,
  pageHeader: PropTypes.object,
  setpageHeader: PropTypes.func.isRequired,
  getDepartments: PropTypes.func,
  departmentsList: PropTypes.array.isRequired,
  subjectsListForTable: PropTypes.array,
  getSubjectsList: PropTypes.func,
  setLoading: PropTypes.func,
  loadingState: PropTypes.string,
  subjectState: PropTypes.string,
  setsubjectState: PropTypes.func,
}

const mapStateToProps = (state) => ({
  sidebarState: state.main.sidebarState,
  subsidebarState: state.main.subsidebarState,
  pageHeader: state.main.pageHeader,
  departmentsList: state.main.departmentsList,
  subjectsListForTable: state.main.subjectsListForTable,
  loadingState: state.main.loadingState,
  subjectState: state.main.subjectState,
  });

export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setpageHeader, getDepartments, getSubjectsList, setLoading, setsubjectState})(Subjects))