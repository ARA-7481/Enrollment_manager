import axios from "axios";
import instanceAxios from "../interceptor/interceptor";
import { SET_SIDEBAR, SET_SUBSIDEBAR, SET_PAGEHEADER, GET_STUDENTS, GET_DEPARTMENTS } from "../types/types";



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