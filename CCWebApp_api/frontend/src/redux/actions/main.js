import axios from "axios";
import instanceAxios from "../interceptor/interceptor";
import { SET_SIDEBAR, SET_SUBSIDEBAR, SET_PAGEHEADER, GET_STUDENTS, GET_DEPARTMENTS, GET_FACULTY,
         GET_STAFF, SET_CLASS, GET_COURSES, GET_SUBJECT, GET_ROOMS, GET_CLASSES, ADD_CLASS, ADD_SUBJECT, 
         GET_CLASSES_LIST, SET_LOADING, GET_SUBJECTS_LIST, SET_SUBJECT, GET_ROOMS_LIST, SET_ROOM, ADD_ROOM,
         GET_COURSES_LIST, SET_COURSE, ERROR_MAIN, NULL_ERROR_MAIN, SET_SUBJECT_FORMDATA, ADD_COURSE, RESO_UPDATE, AUTO_COLLAPSE,
         GET_TEACHER_DATA, SET_SELECTED_CLASS, GET_POINTERS, ADD_ACTIVITY, GET_ACTIVITIES, SET_SELECTED_BG, GET_STUDENT_DATA, GET_ACTIVITY, 
         ADD_ACTIVITY_ENTRY, GET_CLASS_DATA, ANALYZE_IMAGES_SUCCESS, GET_ENTRY, SET_SUBMITTING_STUDENT, CLEAR_RESPONSE, REGISTER_STUDENT,
         REGISTER_TEACHER, FILL_ERROR, EMPTY_ERROR, EMPTY_SUCCESS, SET_USER_AVATAR, SET_USER_DATA, SET_USER_PW, GET_SCHOOLYEAR, SET_SECTION,
         GET_SECTION,
         ADD_SECTION,
         SET_GRADESHEET,
         GET_DEVICE,
         SET_SELECTED_SECTION,
         GET_SECTION_DATA,
         PROMOTION_SUCCESSFUL,
         GET_FLOOD_DEVICE,
         GET_DEVICES,
         CLEAR_CLASS_DATA,
         CLEAR_SECTION_DATA,
         GET_ESP32AQUA,
         GET_PLUMBINGDEVICE,
         GET_EVENTS_LIST,
         ADD_EVENT,
         GET_EVENTS_LIST_MONTH,
         ADD_EVENT_IMAGES,
         EVENT_IMAGES_LIST,
         DELETE_IMAGE,
         UPDATE_EVENT,
         DELETE_EVENT,
         GET_EVENTS_LIST_SINGLE_MONTH,
         GET_EVENTS_REPORT,
         UPDATE_EVENT_APPROVAL,
        } from "../types/types";

function formatTime(time) {
  return `${time}:00`;
}

function getYearRange(start, end) {
  return Array.from(
    { length: end - start + 1 },
    (_, index) => start + index
  );
}

function formatDate(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

 
  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;

  return `${year}-${month}-${day}`;
}

function formatDateSingleMonth(date){
  let year = date.getFullYear();
  let month = date.getMonth() + 1;

  month = month < 10 ? `0${month}` : month;
  
  return `${year}-${month}`;
}

function formatDateMonth(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;

  let monthprev;
  let monthnext;
  let yearprev;
  let yearnext;

  if(month == 1){
    monthprev = 12;
    monthnext = 2;
    yearprev = year - 1;
    yearnext = year;
  }else if(month == 12){
    monthprev = 11;
    monthnext = 1;
    yearprev = year;
    yearnext = year + 1;
  }else{
    monthprev = month - 1;
    monthnext = month + 1;
    yearprev = year;
    yearnext = year;
  }

  month = month < 10 ? `0${month}` : month;
  monthprev = monthprev < 10 ? `0${monthprev}` : monthprev;
  monthnext = monthnext < 10 ? `0${monthnext}` : monthnext;

  return [`${yearprev}-${monthprev}`,`${year}-${month}`,`${yearnext}-${monthnext}`];
}

export const setError = (errorMessage) => dispatch => {
    dispatch({
      type: ERROR_MAIN,
      payload: errorMessage
    })
}

export const nullErrormain = () => dispatch => {
  dispatch({
    type: NULL_ERROR_MAIN,
  })
}

export const setLoading = (loadingState) => dispatch => {
  dispatch({
    type: SET_LOADING,
    payload: loadingState
  })
}

export const setsidebarState = (sidebarState) => dispatch => {
    dispatch({
      type: SET_SIDEBAR,
      payload: sidebarState
    })
  };

export const setsubsidebarState = (subsidebarState) => dispatch => {
    dispatch({
      type: SET_SUBSIDEBAR,
      payload: subsidebarState
    })
  };

export const setpageHeader = (pageHeaderMain, pageHeaderMain2, pageHeaderSub) => dispatch => {
  const pageHeader = { pageHeaderMain, pageHeaderMain2, pageHeaderSub };
    dispatch({
      type: SET_PAGEHEADER,
      payload: pageHeader
    })
  };

export const setclassState = (classState) => dispatch => {
    dispatch({
      type: SET_CLASS,
      payload: classState
    })
  };

export const setsubjectState = (subjectState) => dispatch => {
    dispatch({
      type: SET_SUBJECT,
      payload: subjectState
    })
  };

export const setroomState = (roomState) => dispatch => {
    dispatch({
      type: SET_ROOM,
      payload: roomState
    })
  };

export const setsectionState = (sectionState) => dispatch => {
    dispatch({
      type: SET_SECTION,
      payload: sectionState
    })
  };

export const setcourseState = (coursestate) => dispatch => {
    dispatch({
      type: SET_COURSE,
      payload: coursestate
    })
  };

export const getStudents = (queryGradelevel, queryStatus, querySearch) => async dispatch => {
    try {
      const res = await instanceAxios.get(`/api/getstudents/?search=${queryGradelevel} ${queryStatus} ${querySearch}`);
      if(res.status === 200){
        console.log(res)
        dispatch({
          type: GET_STUDENTS,
          payload: res.data
        });
      }
    } catch (error) {
        console.error(error);
    }
  };

export const getFaculty = (queryPosition, querySearch) => async dispatch => {
    try {
      const res = await instanceAxios.get(`/api/getfaculty/?search=${queryPosition} ${querySearch}`);
      if(res.status === 200){
        dispatch({
          type: GET_FACULTY,
          payload: res.data
        });
      }
    } catch (error) {
        console.error(error);
    }
  };

export const getStaff = (queryRole, querySearch) => async dispatch => {
    try {
      const res = await instanceAxios.get(`/api/staff/?search=${queryRole} ${querySearch}`);
      if(res.status === 200){
        dispatch({
          type: GET_STAFF,
          payload: res.data
        });
      }
    } catch (error) {
        console.error(error);
    }
  };

export const getDepartments = () => async dispatch => {
    try {
      const res = await instanceAxios.get('/api/departments/');
      if(res.status === 200){
        dispatch({
          type: GET_DEPARTMENTS,
          payload: res.data
        });
      }
    } catch (error) {
        console.error(error);
    }
  };

export const getCourses = () => async dispatch => {
    try {
      const res = await instanceAxios.get('/api/courses/');
      if(res.status === 200){
        dispatch({
          type: GET_COURSES,
          payload: res.data
        });
      }
    } catch (error) {
        console.error(error);
    }
  };

export const getCoursesList = (queryDepartment, querySearch) => async dispatch => {
    try {
      const res = await instanceAxios.get(`/api/courses/?search=${queryDepartment} ${querySearch}`);
      if(res.status === 200){
        dispatch({
          type: GET_COURSES_LIST,
          payload: res.data
        });
      }
    } catch (error) {
        console.error(error);
    }
  };

export const getSubject = (subject) => async dispatch => {
    try {
      const res = await instanceAxios.get(`/api/subject/${subject}`);
      if(res.status === 200){
        dispatch({
          type: GET_SUBJECT,
          payload: res.data
        });
      }
    } catch (error) {
        console.error(error);
    }
  };

  export const getRooms = () => async dispatch => {
    try {
      const res = await instanceAxios.get('/api/rooms/');
      if(res.status === 200){
        dispatch({
          type: GET_ROOMS,
          payload: res.data
        });
      }
    } catch (error) {
        console.error(error);
    }
  };

  export const getSectionList = (query, gradelevel, schoolyear) => async dispatch => {
    try {
      const res = await instanceAxios.get(`api/section/?search=${query} ${gradelevel} ${schoolyear}`);
      if(res.status === 200){
        dispatch({
          type: GET_SECTION,
          payload: res.data
        });
      }
    } catch (error) {
        console.error(error);
    }
  };

  export const addSection = (formData) => async dispatch => {
    try {
      const res = await instanceAxios.post('/api/addsection/', formData);
      dispatch({
        type: ADD_SECTION,
        payload: res.data,
      });
    } catch (error) {
      if(error.response.data.code){
        dispatch({
          type: FILL_ERROR,
          payload: "A Section With the Same Code Already Exists"
        })
      }else{
      dispatch({
        type: FILL_ERROR,
        payload: 'An Error Occured During Submission.Please Check Your Field Inputs.'
      })
    }
    }
  };

  // export const getClasses = (subject, yearlevel) => async dispatch => {
  //   try {
  //     const res = await instanceAxios.get(`/api/classes/?search=${subject} ${yearlevel}`);
  //     if(res.status === 200){
  //       dispatch({
  //         type: GET_CLASSES,
  //         payload: res.data
  //       });
  //     }
  //   } catch (error) {
  //       console.error(error);
  //   }
  // };

  export const getClassesList = (queryGradelevel, querySearch) => async dispatch => {
    try {
      const res = await instanceAxios.get(`/api/classes/?search=${queryGradelevel} ${querySearch}`);
      if(res.status === 200){
        dispatch({
          type: GET_CLASSES_LIST,
          payload: res.data
        });
      }
    } catch (error) {
        console.error(error);
    }
  };

  export const addClass = (formData) => async dispatch => {
    try {
      const res = await instanceAxios.post('/api/addclass/', formData);
      dispatch({
        type: ADD_CLASS,
        payload: res.data,
      });
    } catch (error) {
      if(error.response.data.code){
        dispatch({
          type: FILL_ERROR,
          payload: "A Class With the Same Code Already Exists"
        })
      }else{
      dispatch({
        type: FILL_ERROR,
        payload: 'An Error Occured During Submission.Please Check Your Field Inputs.'
      })
    }
    }
  };

  export const addSubject = (formData) => async dispatch => {
    try {
      const res = await instanceAxios.post('/api/subject/', formData);
      dispatch({
        type: ADD_SUBJECT,
        payload: res.data,
      });
    } catch (error) {
      if(error.response.data.code){
        dispatch({
          type: FILL_ERROR,
          payload: "A Subject With the Same Code Already Exists"
        })
      }else{
      dispatch({
        type: FILL_ERROR,
        payload: 'An Error Occured During Submission.Please Check Your Field Inputs.'
      })
    }
    }
  };

  export const setSubjectformdata = (formData) => async dispatch => {
      dispatch({
        type: SET_SUBJECT_FORMDATA,
        payload: formData,
      });
  };

  export const getSubjectsList = (querySearch) => async dispatch => {
    try {
      const res = await instanceAxios.get(`/api/subject/?search=${querySearch}`);
      if(res.status === 200){
        dispatch({
          type: GET_SUBJECTS_LIST,
          payload: res.data
        });
      }
    } catch (error) {
        console.error(error);
    }
  };

  export const addRoom = (formData) => async dispatch => {
    try {
      const res = await instanceAxios.post('/api/rooms/', formData);
      dispatch({
        type: ADD_ROOM,
        payload: res.data,
      });
    } catch (error) {
      if(error.response.data.code){
        dispatch({
          type: FILL_ERROR,
          payload: "A Room With the Same Code Already Exists"
        })
      }else{
      dispatch({
        type: FILL_ERROR,
        payload: 'An Error Occured During Submission.Please Check Your Field Inputs.'
      })
    }
    }
  };

  export const addCourse = (formData) => async dispatch => {
    try {
      const res = await instanceAxios.post('/api/coursespost/', formData);
      dispatch({
        type: ADD_COURSE,
        payload: res.data,
      });
    } catch (error) {
      if(error.response.data.code){
        dispatch({
          type: FILL_ERROR,
          payload: "A Course With the Same Code Already Exists"
        })
      }else{
      dispatch({
        type: FILL_ERROR,
        payload: 'An Error Occured During Submission.Please Check Your Field Inputs.'
      })
    }
    }
  };

  export const getRoomsList = (querySearch) => async dispatch => {
    try {
      const res = await instanceAxios.get(`/api/rooms/?search=${querySearch}`);
      if(res.status === 200){
        dispatch({
          type: GET_ROOMS_LIST,
          payload: res.data
        });
      }
    } catch (error) {
        console.error(error);
    }
  };

  export const getSchoolYearList = () => async dispatch => {
    try {
      const res = await instanceAxios.get(`/api/schoolyear/`);
      if(res.status === 200){
        dispatch({
          type: GET_SCHOOLYEAR,
          payload: res.data
        });
      }
    } catch (error) {
        console.error(error);
    }
  };

  export const setResolution = (dimensions) => dispatch => {
    dispatch({
      type: RESO_UPDATE,
      payload: dimensions
    })
  }
  export const setCollapseState = (state) => dispatch => {
      dispatch({
        type: AUTO_COLLAPSE,
        payload: state
    })
  };


  export const registerStudent = (formData, studentFormdata) => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }}
    const adjustedFormData = {
        ...formData,
        birthdate: formatDate(new Date(formData.birthdate)),
      };  
    try {
      const res = await instanceAxios.post('/api/register/', adjustedFormData, config);
      if(res.status === 200){
        const adjustedStudentformdata = {
          ...studentFormdata,
          elementarycompletiondate: formatDate(new Date(studentFormdata.elementarycompletiondate)),
          userprofile : res.data.ID,
        }
        try{
          const res2 = await instanceAxios.post('api/students/', adjustedStudentformdata);
          if(res2.status === 201){
            dispatch({
              type: REGISTER_STUDENT,
              payload: res.data
            })
          }
        }catch (error2) {
          console.error(error2);
        }
      }
    } catch (error) {
      if(error.response.data.email && error.response.data.mobile_number){
        dispatch({
          type: FILL_ERROR,
          payload: "Email and Mobile Number Already Exists"
        })
      }else if(error.response.data.email && !error.response.data.mobile_number){
        dispatch({
          type: FILL_ERROR,
          payload: error.response.data.email[0]
        })
      }else if(!error.response.data.email && error.response.data.mobile_number){
        dispatch({
          type: FILL_ERROR,
          payload: error.response.data.mobile_number[0]
        })
      }else{
        console.error(error)
        dispatch({
          type: FILL_ERROR,
          payload: "An Error Occured During Submission.Please Check Your Field Inputs."
        })
      }
    }
  };

  export const valveError = () => async dispatch => {
    dispatch({
      type: FILL_ERROR,
      payload: "Denied: Ball Valve isn't Available!"
    })
  }

  export const registerStudentSHS = (formData, studentFormdata) => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }}
    const adjustedFormData = {
        ...formData,
        birthdate: formatDate(new Date(formData.birthdate)),
      };  
    try {
      const res = await instanceAxios.post('/api/register/', adjustedFormData, config);
      if(res.status === 200){
        const adjustedStudentformdata = {
          ...studentFormdata,
          elementarycompletiondate: formatDate(new Date(studentFormdata.elementarycompletiondate)),
          jhscompletion: formatDate(new Date(studentFormdata.jhscompletion)),
          ...(studentFormdata.peptcompletion ? {peptcompletion: formatDate(new Date(studentFormdata.peptcompletion))}: {}),
          ...(studentFormdata.aecompletion ? {aecompletion: formatDate(new Date(studentFormdata.aecompletion))}: {}),
          ...(studentFormdata.aecompletionjhs ? {aecompletionjhs: formatDate(new Date(aecompletionjhs.aecompletionjhs))}: {}),
          ...(studentFormdata.peptcompletionjhs ? {peptcompletionjhs: formatDate(new Date(peptcompletionjhs.peptcompletionjhs))}: {}),
          userprofile : res.data.ID,
        }
        console.log(adjustedStudentformdata)
        try{
          const res2 = await instanceAxios.post('api/students/', adjustedStudentformdata);
          if(res2.status === 201){
            dispatch({
              type: REGISTER_STUDENT,
              payload: res.data
            })
          }
        }catch (error2) {
          console.error(error2);
        }
      }
    } catch (error) {
      if(error.response.data.email && error.response.data.mobile_number){
        dispatch({
          type: FILL_ERROR,
          payload: "Email and Mobile Number Already Exists"
        })
      }else if(error.response.data.email && !error.response.data.mobile_number){
        dispatch({
          type: FILL_ERROR,
          payload: error.response.data.email[0]
        })
      }else if(!error.response.data.email && error.response.data.mobile_number){
        dispatch({
          type: FILL_ERROR,
          payload: error.response.data.mobile_number[0]
        })
      }else{
        console.error(error)
        dispatch({
          type: FILL_ERROR,
          payload: "An Error Occured During Submission.Please Check Your Field Inputs."
        })
      }
    }
  };

  export const registerTeacher = (formData, teacherFormdata) => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }}
    const adjustedFormData = {
        ...formData,
        birthdate: formatDate(new Date(formData.birthdate)),
      };  
    try {
      const res = await instanceAxios.post('/api/register/', adjustedFormData, config);
      if(res.status === 200){
        const adjustedTeacherformdata = {
          ...teacherFormdata,
          userprofile : res.data.ID,
        }
        try{
          const res2 = await instanceAxios.post('api/faculty/', adjustedTeacherformdata);
          if(res2.status === 201){
            dispatch({
              type: REGISTER_TEACHER,
              payload: res.data
            })
          }
        }catch (error2) {
          console.error(error2);
        }
      }
    } catch (error) {
      if(error.response.data.email && error.response.data.mobile_number){
        dispatch({
          type: FILL_ERROR,
          payload: "Email and Mobile Number Already Exist"
        })
      }else if(error.response.data.email && !error.response.data.mobile_number){
        dispatch({
          type: FILL_ERROR,
          payload: error.response.data.email[0]
        })
      }else if(!error.response.data.email && error.response.data.mobile_number){
        dispatch({
          type: FILL_ERROR,
          payload: error.response.data.mobile_number[0]
        })
      }else{
        dispatch({
          type: FILL_ERROR,
          payload: "An Error Occured During Submission.Please Check Your Field Inputs."
        })
      }
    }
  };

  export const emptyError = () => dispatch => {
    dispatch({
      type: EMPTY_ERROR,
    })
  };

  export const emptySuccess = () => dispatch => {
    dispatch({
      type: EMPTY_SUCCESS,
    })
  };

//portal

export const setPassword = (oldpw, newpw) => async dispatch => {
  const body = {
    old_password : oldpw,
    new_password : newpw
  }
  try{
    const res = await instanceAxios.patch('/api/register/', body)
    if(res.status === 200){
      dispatch({
        type: SET_USER_PW,
      })
    }
  } catch (error){
    console.error(error);
  }
}

export const setUseremail = (contact, email, userID) => async dispatch => {
  const body = {
    email: email,
    mobile_number: contact
  };
  try{
    const res = await instanceAxios.patch(`/api/users/${userID}/`, body)
    if(res.status === 200){
      dispatch({
        type: SET_USER_DATA,
        payload: res.data
      })
    }
  } catch (error) {
    if(error.response.data.email && error.response.data.mobile_number){
      dispatch({
        type: FILL_ERROR,
        payload: "An Error Occured on Email and Contact Number Fields."
      })
    }else if(error.response.data.email && !error.response.data.mobile_number){
      dispatch({
        type: FILL_ERROR,
        payload: error.response.data.email[0]
      })
    }else if(!error.response.data.email && error.response.data.mobile_number){
      dispatch({
        type: FILL_ERROR,
        payload: error.response.data.mobile_number[0]
      })
    }else{
      dispatch({
        type: FILL_ERROR,
        payload: "An Error Occured During Submission.Please Check Your Field Inputs."
      })
    }
  }
}

export const setUseravatar = (avatar, userID) => async dispatch => {
  console.log(avatar)
  const body = {
    avatar: avatar
  };
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  };
  try{
    const res = await instanceAxios.patch(`/api/users/${userID}/`, body, config);
    if(res.status === 200){
      dispatch({
        type: SET_USER_AVATAR,
        payload: res.data.avatar
      })
    }
  } catch (error) {
      console.error(error);
  }
}

export const setStudentPromotion = (gradelevel, status, studentID) => async dispatch => {
  const body = {
    gradelevel : gradelevel,
    status : status
  }
  try{
    const res = await instanceAxios.patch(`/api/getstudents/${studentID}/`, body)
      // dispatch({
      //   type: PROMOTION_SUCCESSFUL,
      // })
  } catch (error){
    console.error(error);
  }
}

export const setStudentPromotiontoSHS = (formData, studentID) => async dispatch => {
  const adjustedStudentformdata = {
    ...formData,
    elementarycompletiondate: formatDate(new Date(formData.elementarycompletiondate)),
    jhscompletion: formatDate(new Date(formData.jhscompletion)),
    ...(formData.peptcompletion ? {peptcompletion: formatDate(new Date(formData.peptcompletion))}: {}),
    ...(formData.aecompletion ? {aecompletion: formatDate(new Date(formData.aecompletion))}: {}),
    ...(formData.aecompletionjhs ? {aecompletionjhs: formatDate(new Date(aecompletionjhs.aecompletionjhs))}: {}),
    ...(formData.peptcompletionjhs ? {peptcompletionjhs: formatDate(new Date(peptcompletionjhs.peptcompletionjhs))}: {}),
  }
  try{
    const res = await instanceAxios.patch(`/api/getstudents/${studentID}/`, adjustedStudentformdata)
      dispatch({
        type: PROMOTION_SUCCESSFUL,
      })
  } catch (error){
    console.error(error);
  }
}

export const getTeacherdata = (id) => async dispatch => {
  try {
    const res = await instanceAxios.get(`/api/getfaculty/${id}`);
    if(res.status === 200){
      console.log(res.data)
      dispatch({
        type: GET_TEACHER_DATA,
        payload: res.data
      });
    }
  } catch (error) {
      console.error(error);
  }
};

export const getStudentdata = (id) => async dispatch => {
  try {
    const res = await instanceAxios.get(`/api/studentdata/${id}`);
    console.log(res.data)
    if(res.status === 200){
      dispatch({
        type: GET_STUDENT_DATA,
        payload: res.data
      });
    }
  } catch (error) {
      console.error(error);
  }
};

export const setSelectedclass = (classcode) => dispatch => {
  console.log(classcode)
  dispatch({
    type: SET_SELECTED_CLASS,
    payload: classcode,
  });
};

export const setSelectedsection = (sectioncode) => dispatch => {
  dispatch({
    type: SET_SELECTED_SECTION,
    payload: sectioncode,
  });
};

export const setSelectedBG = (bg_url) => dispatch => {
  dispatch({
    type: SET_SELECTED_BG,
    payload: bg_url,
  });
};

export const getPointers = () => async dispatch => {
  try {
    const res = await instanceAxios.get(`/api/pointers`);
    if(res.status === 200){
      dispatch({
        type: GET_POINTERS,
        payload: res.data
      });
    }
  } catch (error) {
      console.error(error);
  }
};

export const addActivities = (formData) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };
    const adjustedFormData = {
      ...formData,
      start: formatDate(new Date(formData.start)),
      deadline: formatDate(new Date(formData.deadline)),
    };
    const res = await instanceAxios.post('/api/activities/', adjustedFormData, config);
    dispatch({
      type: ADD_ACTIVITY,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getActivities = (classroom) => async dispatch => {
  try {
    const res = await instanceAxios.get(`/api/activities/?search=${classroom}`);
    if(res.status === 200){
      dispatch({
        type: GET_ACTIVITIES,
        payload: res.data
      });
    }
  } catch (error) {
      console.error(error);
  }
};

export const getActivity = (id) => async dispatch => {
  try {
    const res = await instanceAxios.get(`/api/activities/${id}`);
    if(res.status === 200){
      console.log(res.data)
      dispatch({
        type: GET_ACTIVITY,
        payload: res.data
      });
    }
  } catch (error) {
      console.error(error);
  }
};

export const getEntry = (id) => async dispatch => {
  try {
    const res = await instanceAxios.get(`/api/activityentry/${id}`);
    if(res.status === 200){
      dispatch({
        type: GET_ENTRY,
        payload: res.data
      });
    }
  } catch (error) {
      console.error(error);
  }
};

export const setSubmittingStudent = (student) => async dispatch => {
      dispatch({
        type: SET_SUBMITTING_STUDENT,
        payload: student
      });
};

export const clearResponse = () => dispatch => {
  dispatch({
    type: CLEAR_RESPONSE,
  })
};

export const setClassbackground = (bg_url, classcode) => async dispatch => {
  const body = {
    bg_gradient: bg_url
  };
  try {
    const res = await instanceAxios.patch(`/api/classesforfaculty/${classcode}/`, body);
    if(res.status === 200){
    }
  } catch (error) {
      console.error(error);
  }
};

export const setSubGrade = (grade, ID) => async dispatch => {
  const body = {
    grade: grade
  };
  try {
    const res = await instanceAxios.patch(`/api/activityentry/${ID}/`, body);
    if(res.status === 200){
    }
  } catch (error) {
      console.error(error);
  }
};

export const addActivityentry = (formData) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };
    const res = await instanceAxios.post('/api/activityentry/', formData, config);
    dispatch({
      type: ADD_ACTIVITY_ENTRY,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getClassdata = (classcode) => async dispatch => {
  try {
    const res = await instanceAxios.get(`/api/getclass/${classcode}/`);
    console.log(res.data)
    if(res.status === 200){
      dispatch({
        type: GET_CLASS_DATA,
        payload: res.data
      });
    }
  } catch (error) {
      console.error(error);
  }
};

export const clearClassdata = () => dispatch => {
  dispatch({
    type: CLEAR_CLASS_DATA,
  })
};

export const clearSectiondata = () => dispatch => {
  dispatch({
    type: CLEAR_SECTION_DATA,
  })
};

export const getSectiondata = (sectioncode) => async dispatch => {
  try {
    const res = await instanceAxios.get(`/api/getsection/${sectioncode}/`);
    if(res.status === 200){
      dispatch({
        type: GET_SECTION_DATA,
        payload: res.data
      });
    }
  } catch (error) {
      console.error(error);
  }
};

export const setGradesheet = (studentid, classcode) => async dispatch => {
  const formData = {
    student : studentid,
    quarter1 : 0,
    quarter2 : 0,
    quarter3 : 0,
    quarter4 : 0,
    in_class : classcode,
    remarks : "Ongoing"
  }
  try{
    const res = await instanceAxios.post(`/api/grades/`, formData);
    if(res.status === 201){
      dispatch({
        type: SET_GRADESHEET,
        payload: res.data
      });
    }
  }catch(error){
    console.error(error)
  }
}

export const patchGrades = (id, studentid, q1, q2, q3, q4, remarks, classcode) => async dispatch => {
  const formData = {
    student : studentid,
    quarter1 : q1,
    quarter2 : q2,
    quarter3 : q3,
    quarter4 : q4,
    in_class : classcode,
    remarks : remarks
  }
  try{
    console.log(formData)
    const res = await instanceAxios.patch(`/api/grades/${id}/`, formData);
    if(res.status === 200){
      dispatch({
        type: SET_GRADESHEET,
        payload: res.data
      });
    }
  }catch(error){
    console.error(error)
  }
}

export const checkEntry = (referencefile, entryfile) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ referencefile, entryfile });
  try {
    const res = await axios.post('/api/checkentry/', body, config);
    if(res.status === 200){
      dispatch({
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const analyzeImages = (referencefileUrl, entryfileUrl, prompt, customprompt) => {
  return async dispatch => {
    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-4-vision-preview',
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: 'Reference image'
              },
              {
                type: 'image_url',
                image_url: {
                  url: referencefileUrl
                }
              },
              {
                type: 'text',
                text: 'Entry image'
              },
              {
                type: 'image_url',
                image_url: {
                  url: entryfileUrl
                }
              },
              {
                type: 'text',
                text: `Respond only in JSON. These images are CAD snippets. Reference image is the answer key and entry image is submitted by the student. ${prompt} ${customprompt}`
              }
            ]
          }
        ],
        max_tokens: 500
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer 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`
        }
      });
      console.log(response)
      dispatch({ 
        type: ANALYZE_IMAGES_SUCCESS, payload: response.data.choices[0].message.content
        });
    } catch (error) {
      dispatch({
        error 
        });
    }
  };
};


export const getDevicebaby = (id) => async dispatch => {
  try {
    const res = await instanceAxios.get(`/api/deviceprofile/${id}`);
    console.log(res.data)
    if(res.status === 200){
      dispatch({
        type: GET_DEVICE,
        payload: res.data
      });
    }
  } catch (error) {
      console.error(error);
  }
};

export const getDeviceRain = (id) => async dispatch => {
  try {
    const res = await instanceAxios.get(`/api/deviceprofile/${id}`);
    console.log(res.data)
    if(res.status === 200){
      dispatch({
        type: GET_DEVICE,
        payload: res.data
      });
    }
  } catch (error) {
      console.error(error);
  }
};

export const getDevice = (id) => async dispatch => {
  try {
    const res = await instanceAxios.get(`/api/esp32profile/${id}`);
    console.log(res.data)
    if(res.status === 200){
      dispatch({
        type: GET_ESP32AQUA,
        payload: res.data
      });
    }
  } catch (error) {
      console.error(error);
  }
};

export const getPlumbingDevice = (id) => async dispatch => {
  try {
    const res = await instanceAxios.get(`/api/plumbingprofile/${id}`);
    console.log(res.data)
    if(res.status === 200){
      dispatch({
        type: GET_PLUMBINGDEVICE,
        payload: res.data
      });
    }
  } catch (error) {
      console.error(error);
  }
};

export const updateplumbingTrigger = (id, ballvalve, solenoid1, solenoid2, solenoid3, dcmotor) => async dispatch => {
  const body = {
    trigger : 1,
    ballvalve : ballvalve,
    solenoid1 : solenoid1,
    solenoid2 : solenoid2,
    solenoid3 : solenoid3,
    dcmotor : dcmotor,
  }
  try {
    const res = await instanceAxios.patch(`/api/plumbingprofile/${id}/`, body);
  } catch (error) {
      console.error(error);
  }
};

export const triggerDeviceIdle = (id) => async dispatch => {
  const body = {
    triggercount : 3,
    img : "https://ccwebappbucket.s3.ap-southeast-1.amazonaws.com/uploads/baby_sleeping.png"
  }
  try {
    const res = await instanceAxios.patch(`/api/deviceprofile/${id}/`, body);
  } catch (error) {
      console.error(error);
  }
};

export const getDevices = () => async dispatch => {
  try {
    const res = await instanceAxios.get(`/api/deviceprofile/`);
    console.log(res.data)
    if(res.status === 200){
      dispatch({
        type: GET_DEVICES,
        payload: res.data
      });
    }
  } catch (error) {
      console.error(error);
  }
};

export const getFlooddevice = (id) => async dispatch => {
  try {
    const res = await instanceAxios.get(`/api/deviceprofile/${id}`);
    console.log(res.data)
    if(res.status === 200){
      dispatch({
        type: GET_FLOOD_DEVICE,
        payload: res.data
      });
    }
  } catch (error) {
      console.error(error);
  }
};


export const getEventsList = (assignedDate) => async dispatch => {
  const formattedDate = formatDate(assignedDate)
  try {
    const res = await instanceAxios.get(`/api/eventslist/?search=${formattedDate}`);
    if(res.status === 200){
      dispatch({
        type: GET_EVENTS_LIST,
        payload: res.data
      });
    }
  } catch (error) {
      console.error(error);
  }
};


export const getEventsListMonth = (assignedDate) => async dispatch => {
  const formattedDateMonth = formatDateMonth(assignedDate)
  try {
    const requests = formattedDateMonth.map(dateMonth =>
      instanceAxios.get(`/api/eventslist/?search=${dateMonth}`))
  
    const responses = await Promise.all(requests);
    
    const combinedData = responses
            .filter(res => res.status === 200)
            .map(res => res.data)
            .flat();
      dispatch({
        type: GET_EVENTS_LIST_MONTH,
        payload: combinedData
      });
  } catch (error) {
      console.error(error);
  }
};


export const getEventsListReport = (startdate, enddate, category) => async dispatch => {
  let finaleventarray
  let filteredfinaleventarray
  const formattedstartdate = formatDate(startdate)
  const formattedenddate = formatDate(enddate)
  if(startdate.getFullYear() != enddate.getFullYear()){
    const yearsarray = getYearRange(startdate.getFullYear(), enddate.getFullYear())
    try {
      const requests = yearsarray.map(dateYear =>
        instanceAxios.get(`/api/eventslist/?search=${dateYear}`))
      const responses = await Promise.all(requests)
      const combinedData = responses
              .filter(res => res.status === 200)
              .map(res => res.data)
              .flat();
      const dateddata = combinedData.filter(event => (event.date >= formattedstartdate) && (event.date <= formattedenddate))
      if(category.length == 1){
          finaleventarray = dateddata.filter(event => event.category == category[0])
      }else if(category.length == 2){
          finaleventarray = dateddata.filter(event => (event.category == category[0]) || (event.category == category[1]))
      }else{
          finaleventarray = dateddata
      }
      filteredfinaleventarray = finaleventarray.filter(event => event.approval == 'Yes')
      dispatch({
        type: GET_EVENTS_REPORT,
        payload: filteredfinaleventarray
      });
    }catch (error) {
        console.error(error);
    }
  }else{
    try{
      const year = startdate.getFullYear()
      const res = await instanceAxios.get(`/api/eventslist/?search=${year}`)
      const combinedData = res.data
      const dateddata = combinedData.filter(event => (event.date >= formattedstartdate) && (event.date <= formattedenddate))
      if(category.length == 1){
          finaleventarray = dateddata.filter(event => event.category == category[0])
      }else if(category.length == 2){
          finaleventarray = dateddata.filter(event => (event.category == category[0]) || (event.category == category[1]))
      }else{
          finaleventarray = dateddata
      }
      filteredfinaleventarray = finaleventarray.filter(event => event.approval == 'Yes')
      dispatch({
        type: GET_EVENTS_REPORT,
        payload: filteredfinaleventarray
      });
  }catch (error) {
      console.error(error);
  }
  }
};

export const getEventsListSingleMonth = (assignedDate) => async dispatch => {
  const formattedDateSingleMonth = formatDateSingleMonth(assignedDate)
  try {
     const res = await instanceAxios.get(`/api/eventslist/?search=${formattedDateSingleMonth}`)
    if(res.status === 200){
      dispatch({
        type: GET_EVENTS_LIST_SINGLE_MONTH,
        payload: res.data
      });
    }
  } catch (error) {
      console.error(error);
  }
};


export const addEvent = (formData) => async dispatch => {
  const adjustedFormData = {
    ...formData,
    date: formatDate(formData.date),
  };
  try {
    const res = await instanceAxios.post('/api/addevent/', adjustedFormData);
    dispatch({
      type: ADD_EVENT,
      payload: res.data,
    });
  } catch (error) {
    if(error.response.data.title){
      dispatch({
        type: FILL_ERROR,
        payload: "An Event With the Same Title Already Exists"
      })
    }else{
    console.log(error)
    dispatch({
      type: FILL_ERROR,
      payload: 'An Error Occured During Submission.Please Check Your Field Inputs.'
    })
  }
  }
};

export const updateEvent = (formData, id) => async dispatch => {
  const adjustedFormData = {
    ...formData,
    date: formatDate(formData.date),
  };
  try {
    const res = await instanceAxios.patch(`/api/addevent/${id}/`, adjustedFormData);
    dispatch({
      type: UPDATE_EVENT,
    });
  } catch (error) {
    
    console.log(error)
    dispatch({
      type: FILL_ERROR,
      payload: 'An Error Occured During Submission.Please Check Your Field Inputs.'
    })
  }
};

export const updateEventApproval = (id) => async dispatch => {
  const adjustedFormData = {
    approval: 'Yes',
  };
  try {
    const res = await instanceAxios.patch(`/api/addevent/${id}/`, adjustedFormData);
    dispatch({
      type: UPDATE_EVENT_APPROVAL,
    });
  } catch (error) {
    console.log(error)
    dispatch({
      type: FILL_ERROR,
      payload: 'An Error Occured During Event Update.'
    })
  }
};


export const deleteEvent = (id) => async dispatch => {
  try {
    const res = await instanceAxios.delete(`/api/addevent/${id}/`);
    dispatch({
      type: DELETE_EVENT,
    });
  } catch (error) {
    console.log(error)
    dispatch({
      type: FILL_ERROR,
      payload: 'An Error Occured During Cancellation'
    })
  }
};

export const ConflictError = (eventtitle, timestart, timeend) => async dispatch => {
  dispatch({
    type: FILL_ERROR,
    payload: `Failed to add event: Conflict with an event named ${eventtitle}, start time: ${timestart}, end time: ${timeend}.`
  })
}
export const TimeError = () => async dispatch => {
  dispatch({
    type: FILL_ERROR,
    payload: `Failed to add event: Start Time should be earlier than End Time.`
  })
}
export const FacultyError = (errorcode) => async dispatch => {
  dispatch({
    type: FILL_ERROR,
    payload: errorcode
  })
}

export const addEventsImages = (imagearray, eventid) => async dispatch => {
  try {
    const requests = imagearray.map(imagefile => {
      const body = {
        picture : imagefile,
        event : eventid
      }
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
                }
      }
      instanceAxios.post(`/api/addeventimage/`, body, config)})
    const responses = await Promise.all(requests);
    const res2 = await instanceAxios.get(`/api/eventimagelist/${eventid}`);
      if(res2.status === 200){
        dispatch({
          type: EVENT_IMAGES_LIST,
          payload: res2.data
        })}
      dispatch({
        type: ADD_EVENT_IMAGES
      })
  } catch (error) {
      console.error(error);
  }
};


export const getEventImageList = (eventid) => async dispatch => {
  try {
    const res = await instanceAxios.get(`/api/eventimagelist/${eventid}`);
    if(res.status === 200){
      dispatch({
        type: EVENT_IMAGES_LIST,
        payload: res.data
      });
    }
  } catch (error) {
      console.error(error);
  }
};

export const deleteImage = (imageid, eventid) => async dispatch => {
  try {
    const res = await instanceAxios.delete(`/api/addeventimage/${imageid}`);
    if(res.status === 204){
      const res2 = await instanceAxios.get(`/api/eventimagelist/${eventid}`);
      if(res2.status === 200){
        dispatch({
          type: EVENT_IMAGES_LIST,
          payload: res2.data
        })}
    }
  } catch (error) {
      console.error(error);
  }
};

