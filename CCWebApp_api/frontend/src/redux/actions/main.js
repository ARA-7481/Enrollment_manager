import axios from "axios";
import instanceAxios from "../interceptor/interceptor";
import { SET_SIDEBAR, SET_SUBSIDEBAR } from "../types/types";



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