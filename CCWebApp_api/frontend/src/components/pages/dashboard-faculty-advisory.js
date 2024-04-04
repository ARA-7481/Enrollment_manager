import React, { useState, Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../common/withAuth';
import { setsidebarState, setsubsidebarState, setpageHeader, getTeacherdata, setSelectedBG, setSelectedsection, clearSectiondata } from '../../redux/actions/main';

import { Placeholder } from 'react-bootstrap';


function FacultyDashboardAdvisory(props) {

  const [avatar, setAvatar] = useState(JSON.parse(localStorage.getItem('user')).avatar);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const navigate = useNavigate();

  if (!user){
    navigate('/auth/admin-signin');
  }

  const handleSectionSelection = (sectioncode, bg_url) => {
      props.setSelectedsection(sectioncode);
      props.setSelectedBG(bg_url);
      navigate('/faculty/advisorypage');
  }

  useEffect(() => {
    props.setsidebarState('sections');
    props.setsubsidebarState(null);
    props.setpageHeader(`Hello ${user.first_name}`, '', 'Manage Sections Under Your Advisory');
    props.getTeacherdata(user.facultyprofile);
    props.setSelectedBG('https://ccwebappbucket.s3.ap-southeast-1.amazonaws.com/uploads/bg0.png');
    props.clearSectiondata();
  }, []);

  useEffect(() => {
    if(props.newAvatar){
        setAvatar(props.newAvatar)
    }
}, [props.newAvatar]);

  return (
      <>
            <div style={{backgroundColor:'#e9ecef', borderTopLeftRadius:'8px', borderTopRightRadius:'8px', width: '100%'}}> 
                <div style={{backgroundColor:'#ffffff', height: '124px', borderRadius:'8px', display: 'flex', alignItems: 'center', padding: '24px'}}>
                    <div style={{transform: 'translate( 0px, -60px)'}}>
                        <img className="circular-avatar" src={avatar} alt="description" />
                    </div>

                    <div style={{marginLeft: '24px'}}>
                        <div style={{display: 'flex'}}>
                        <h1 className='inter-700-28px'>{user.first_name} {user.last_name}</h1>
                        <div style={{marginLeft: '8px', marginTop: '3px'}}>
                            <h1 className='inter-400-16px' style={{paddingTop: '5px'}}>- {props.teacherData.position }</h1>
                        </div>
                        </div>
                        {props.teacherData.id}
                    </div>
                </div>

                <div className='class-container'>
                    {props.teacherData.id? [...props.teacherData.teacher_related_section].sort((a, b) => a.code.localeCompare(b.code)).map(item => (
                        <div key={item.code} className="class-item" onClick={() => handleSectionSelection(item.code, item.bg_gradient)}>
                            <div className="class-itemheader" style={{backgroundImage: `url(${item.bg_gradient})`}}>
                            </div>
                            <div className="class-itemdata">
                                <h1 className='inter-500-19px-nopadding' style={{color: '#3A57E8'}}>{item.code}</h1>
                                <div style={{display: 'flex', gap: '16px', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                                  <h1 className='inter-400-16px-dark'>{item.gradelevel}</h1>
                                </div>
                                <div style={{display: 'flex', gap: '16px', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                                  <h1 className='inter-400-16px'>STUDENTS:</h1>
                                  <h1 className='inter-400-16px-dark'>{item.students.length}</h1>
                                </div >
                                <div style={{display: 'flex', gap: '16px', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                                  <h1 className='inter-400-16px'>TRACK:</h1>
                                  <h1 className='inter-400-16px-dark'>{item.track}</h1>
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

FacultyDashboardAdvisory.propTypes = {
  sidebarState: PropTypes.string,
  setsidebarState: PropTypes.func.isRequired,
  subsidebarState: PropTypes.string,
  setsubsidebarState: PropTypes.func.isRequired,
  setpageHeader: PropTypes.func,
  getTeacherdata: PropTypes.func,
  teacherData: PropTypes.object,
  setSelectedBG: PropTypes.func,
  newAvatar: PropTypes.string,
  setSelectedsection: PropTypes.func,
  clearSectiondata: PropTypes.func,
}

const mapStateToProps = (state) => ({
  sidebarState: state.main.sidebarState,
  subsidebarState: state.main.subsidebarState,
  teacherData: state.main.teacherData,
  newAvatar: state.main.newAvatar
  });

export default withAuth(connect(mapStateToProps, {setsidebarState, setsubsidebarState, setpageHeader, getTeacherdata, setSelectedBG, setSelectedsection, clearSectiondata})(FacultyDashboardAdvisory))