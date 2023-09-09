import axios from "axios";
import instanceAxios from "../interceptor/interceptor";
import { SET_SIDEBAR } from "../types/types";



export const setsidebarState = (sidebarState) => dispatch => {
    dispatch({
      type: SET_SIDEBAR,
      payload: sidebarState
    })
  };