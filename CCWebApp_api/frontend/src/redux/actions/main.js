import axios from "axios";
import instanceAxios from "../interceptor/interceptor";
import { SET_SIDEBAR, SET_SUBSIDEBAR, SET_PAGEHEADER, GET_STUDENTS, GET_DEPARTMENTS, GET_FACULTY, GET_STAFF, SET_CLASS, GET_COURSES, GET_SUBJECT, GET_ROOMS, GET_CLASSES, ADD_CLASS, GET_CLASSES_LIST, SET_LOADING } from "../types/types";

function formatTime(time) {
  return `${time}:00`;
}

function formatDate(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

 
  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;

  return `${year}-${month}-${day}`;
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

export const getStudents = (queryStatus, queryYrlvl, queryDepartment, queryCourse, querySearch) => async dispatch => {
    try {
      const res = await instanceAxios.get(`/api/students?search=${queryStatus} ${queryYrlvl} ${queryDepartment} ${queryCourse} ${querySearch}`);
      if(res.status === 200){
        dispatch({
          type: GET_STUDENTS,
          payload: res.data
        });
      }
    } catch (error) {
        console.error(error);
    }
  };

export const getFaculty = (queryPosition, queryDepartment, queryCourse, querySearch) => async dispatch => {
    try {
      const res = await instanceAxios.get(`/api/faculty?search=${queryPosition} ${queryDepartment} ${queryCourse} ${querySearch}`);
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
      const res = await instanceAxios.get(`/api/staff?search=${queryRole} ${querySearch}`);
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

  export const getClasses = (subject, yearlevel) => async dispatch => {
    try {
      console.log(subject, yearlevel)
      const res = await instanceAxios.get(`/api/classes?search=${subject} ${yearlevel}`);
      if(res.status === 200){
        console.log(res.data)
        dispatch({
          type: GET_CLASSES,
          payload: res.data
        });
      }
    } catch (error) {
        console.error(error);
    }
  };

  export const getClassesList = (queryYearlevel, queryDepartment, queryCourse, querySearch) => async dispatch => {
    try {
      const res = await instanceAxios.get(`/api/classeslist?search=${queryYearlevel} ${queryDepartment} ${queryCourse} ${querySearch}`);
      if(res.status === 200){
        console.log(res.data)
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

      const adjustedSchedule = formData.schedule.map(schedule => ({
        ...schedule,
        time_in: formatTime(schedule.time_in),
        time_out: formatTime(schedule.time_out),
      }));

      const adjustedFormData = {
        ...formData,
        startdate: formatDate(new Date(formData.startdate)),
        enddate: formatDate(new Date(formData.enddate)),
        schedule: adjustedSchedule,
      };  

      console.log(adjustedFormData)
      const res = await instanceAxios.post('/api/classes/', adjustedFormData);
      dispatch({
        type: ADD_CLASS,
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };