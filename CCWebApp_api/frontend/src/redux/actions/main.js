import axios from "axios";
import instanceAxios from "../interceptor/interceptor";
import { SET_SIDEBAR, SET_SUBSIDEBAR, SET_PAGEHEADER } from "../types/types";



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