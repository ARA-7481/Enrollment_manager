import React, { useState, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState, setpageHeader, getTeacherdata, setSelectedBG, setSelectedclass, getClassdata, clearClassdata, getSchoolYearList } from '../../redux/actions/main';

import { Placeholder, Dropdown } from 'react-bootstrap';


function FacultyDashboard(props) {

  const [avatar, setAvatar] = useState(JSON.parse(localStorage.getItem('user')).avatar);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  const [schoolyearStatus, setSchoolyearstatus] = useState('All School Years')
  const [filteredTeacherData, setFilteredTeacherData] = useState([]);

  const navigate = useNavigate();

  if (!user){
    navigate('/auth/admin-signin');
  }

  const handleSchoolyear = (schoolyear) => {
    if(schoolyear === 'All School Years'){
        setSchoolyearstatus('All School Years')
    }
    else{
        setSchoolyearstatus(schoolyear)
    }
  }

  const handleClassSelection = (classcode, bg_url) => {
      props.setSelectedclass(classcode);
      props.setSelectedBG(bg_url);
      navigate('/faculty/classpage');
  }

  useEffect(() => {
    props.setsidebarState('dashboard');
    props.setsubsidebarState(null);
    props.setpageHeader(`Hello ${user.first_name}`, '', 'Welcome to your dashboard');
    props.getTeacherdata(user.facultyprofile);
    props.setSelectedBG('https://ccwebappbucket.s3.ap-southeast-1.amazonaws.com/uploads/bg0.png');
    props.clearClassdata();
    props.getSchoolYearList();
  }, []);

  useEffect(() => {
    if(props.newAvatar){
        setAvatar(props.newAvatar)
    }
}, [props.newAvatar]);

  useEffect(() => {
    try{
    if(schoolyearStatus !== "All School Years"){
        const filteredData = props.teacherData.teacher_related_class.filter((item) => {
            return item.section && item.section.schoolyear === schoolyearStatus;
          })
        setFilteredTeacherData(filteredData)
    }else{
        setFilteredTeacherData(props.teacherData.teacher_related_class)
    }
    }catch(error){}
}, [schoolyearStatus, props.teacherData]);

  return (
      <>
            <div style={{backgroundColor:'#e9ecef', borderTopLeftRadius:'8px', borderTopRightRadius:'8px', width: '100%'}}> 
                <div style={{backgroundColor:'#ffffff', height: '124px', borderRadius:'8px', display: 'flex', alignItems: 'center', padding: '24px'}}>
                    <div style={{transform: 'translate( 0px, -60px)'}}>
                        <img className="circular-avatar" src={avatar} alt="description" />
                    </div>
                    <div style={{display: 'flex', gap: '200px'}}>
                    <div style={{marginLeft: '24px'}}>
                        <div style={{display: 'flex'}}>
                        <h1 className='inter-700-28px'>{user.first_name} {user.last_name}</h1>
                        <div style={{marginLeft: '8px', marginTop: '3px'}}>
                            <h1 className='inter-400-16px' style={{paddingTop: '5px'}}>- {props.teacherData.position }</h1>
                        </div>
                        </div>
                        {props.teacherData.id}
                    </div>

                    <div style={{display: 'flex', width: '250px'}}>
                        <h1 className='inter-500-16px' style={{paddingTop: '10px'}}>
                        Filter: 
                        </h1>

                        <Dropdown style={{width: '100%', minWidth: '1px'}}>
                            <Dropdown.Toggle id="dropdown-basic" style={{border: 'none', backgroundColor: 'rgba(51, 51, 51, 0.00)', color: 'black', width: '100%', display: 'flex', alignItems: 'center', outline: 'none', justifyContent: 'space-between'}}>
                            <div style={{overflow: 'hidden'}}>{schoolyearStatus}</div>
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{ width: '100%' }}>
                            {schoolyearStatus !== 'All School Years'  && <Dropdown.Item onClick={() => handleSchoolyear('All School Years')}><div className="zooming-text">All School Years</div></Dropdown.Item>}
                            {props.schoolyearList.filter(schoolyear => schoolyear.code !== schoolyearStatus).map((schoolyear) => (
                                <Dropdown.Item key={schoolyear.code} onClick={() => handleSchoolyear(schoolyear.code)}><div className="zooming-text">{schoolyear.code}</div></Dropdown.Item>
                            ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    </div>
                </div>

                <div className='class-container'>
                    {filteredTeacherData? filteredTeacherData?.sort((a, b) => a.code.localeCompare(b.code)).map(item => (
                        <div key={item.code} className="class-item" onClick={() => handleClassSelection(item.code, item.bg_gradient)}>
                            <div className="class-itemheader" style={{backgroundImage: `url(${item.bg_gradient})`}}>
                            </div>
                            <div className="class-itemdata">
                                <h1 className='inter-500-19px-nopadding' style={{color: '#3A57E8'}}>{item.code}</h1>
                                <div style={{display: 'flex', gap: '20px'}}>
                                  <h1 className='inter-500-19px-nopadding' style={{overflow: 'hidden', whiteSpace: 'nowrap'}}>{item.section.code}</h1>
                                  <h1 className='inter-600-16px' style={{overflow: 'hidden', whiteSpace: 'nowrap'}}>{item.subject}</h1>
                                </div>
                                <div style={{display: 'flex', gap: '16px', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                                  <h1 className='inter-400-16px'>STUDENTS:</h1>
                                  <h1 className='inter-400-16px-dark'>{item.section.students.length}</h1>
                                </div >
                                <div style={{display: 'flex', gap: '16px', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                                  <h1 className='inter-400-16px'>QUARTERS:</h1>
                                  <h1 className='inter-400-16px-dark'>{item.span}</h1>
                                </div>
                                <div style={{display: 'flex', gap: '16px', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                                  <h1 className='inter-400-16px'>STRAND:</h1>
                                  <h1 className='inter-400-16px-dark'>{item.strand}</h1>
                                </div>
                            </div>
                        </div>
                    )) : 
                        <div className='class-container'>
                            <div className="class-item" >
                                <div className="class-itemheader">
                                </div>
                                <div className="class-itemdata">
                                <div style={{marginBottom: '8px'}}>
                                    <Placeholder animation="glow" style={{ color: 'rgba(51, 51, 51, 0.20)'}}>
                                    <Placeholder xs={8} />
                                    </Placeholder>
                                    </div>
                                    <div style={{marginBottom: '8px'}}>
                                    <Placeholder animation="glow" style={{color: 'rgba(51, 51, 51, 0.20)'}}>
                                    <Placeholder xs={6} />
                                    </Placeholder>
                                    </div>
                                    <div style={{marginBottom: '8px'}}>
                                    <Placeholder animation="glow" style={{color: 'rgba(51, 51, 51, 0.20)'}}>
                                    <Placeholder xs={8} />
                                    </Placeholder>
                                    </div>
                                    <div style={{marginBottom: '8px'}}>
                                    <Placeholder animation="glow" style={{color: 'rgba(51, 51, 51, 0.20)'}}>
                                    <Placeholder xs={4} />
                                    </Placeholder>
                                    </div>
                                </div>
                            </div>
                            <div className="class-item" >
                                <div className="class-itemheader">
                                </div>
                                <div className="class-itemdata">
                                <div style={{marginBottom: '8px'}}>
                                    <Placeholder animation="glow" style={{ color: 'rgba(51, 51, 51, 0.20)'}}>
                                    <Placeholder xs={8} />
                                    </Placeholder>
                                    </div>
                                    <div style={{marginBottom: '8px'}}>
                                    <Placeholder animation="glow" style={{color: 'rgba(51, 51, 51, 0.20)'}}>
                                    <Placeholder xs={6} />
                                    </Placeholder>
                                    </div>
                                    <div style={{marginBottom: '8px'}}>
                                    <Placeholder animation="glow" style={{color: 'rgba(51, 51, 51, 0.20)'}}>
                                    <Placeholder xs={8} />
                                    </Placeholder>
                                    </div>
                                    <div style={{marginBottom: '8px'}}>
                                    <Placeholder animation="glow" style={{color: 'rgba(51, 51, 51, 0.20)'}}>
                                    <Placeholder xs={4} />
                                    </Placeholder>
                                    </div>
                                </div>
                            </div>
                            <div className="class-item" >
                                <div className="class-itemheader">
                                </div>
                                <div className="class-itemdata">
                                <div style={{marginBottom: '8px'}}>
                                    <Placeholder animation="glow" style={{ color: 'rgba(51, 51, 51, 0.20)'}}>
                                    <Placeholder xs={8} />
                                    </Placeholder>
                                    </div>
                                    <div style={{marginBottom: '8px'}}>
                                    <Placeholder animation="glow" style={{color: 'rgba(51, 51, 51, 0.20)'}}>
                                    <Placeholder xs={6} />
                                    </Placeholder>
                                    </div>
                                    <div style={{marginBottom: '8px'}}>
                                    <Placeholder animation="glow" style={{color: 'rgba(51, 51, 51, 0.20)'}}>
                                    <Placeholder xs={8} />
                                    </Placeholder>
                                    </div>
                                    <div style={{marginBottom: '8px'}}>
                                    <Placeholder animation="glow" style={{color: 'rgba(51, 51, 51, 0.20)'}}>
                                    <Placeholder xs={4} />
                                    </Placeholder>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                

            </div>
      </>
    );
}

FacultyDashboard.propTypes = {
  sidebarState: PropTypes.string,
  setsidebarState: PropTypes.func.isRequired,
  subsidebarState: PropTypes.string,
  setsubsidebarState: PropTypes.func.isRequired,
  setpageHeader: PropTypes.func,
  getTeacherdata: PropTypes.func,
  teacherData: PropTypes.object,
  setSelectedBG: PropTypes.func,
  newAvatar: PropTypes.string,
  setSelectedclass: PropTypes.func,
  getClassdata: PropTypes.func,
  clearClassdata: PropTypes.func,
  getSchoolYearList: PropTypes.func,
  schoolyearList: PropTypes.array,
}

const mapStateToProps = (state) => ({
  sidebarState: state.main.sidebarState,
  subsidebarState: state.main.subsidebarState,
  teacherData: state.main.teacherData,
  newAvatar: state.main.newAvatar,
  schoolyearList: state.main.schoolyearList,
  });

export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setpageHeader, getTeacherdata, setSelectedBG, setSelectedclass, getClassdata, clearClassdata, getSchoolYearList})(FacultyDashboard))