import axios from "axios";
import instanceAxios from "../interceptor/interceptor";
import { LOGIN_SUCCESS, LOGIN_FAIL, SET_LOADING } from "../types/types";



export const SignIn = (email, password) => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const body = JSON.stringify({ email, password });
    try {
      const res = await axios.post('/api/login/', body, config);
      if(res.status === 200){
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data
        });
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        dispatch({
          type: LOGIN_FAIL,
          payload: error.response.data
        });
      } else {
        console.error(error);
      }
    }
  };

export const setIsLoading = (boolLoading) => dispatch => {
    dispatch({
      type: SET_LOADING,
      payload: boolLoading
    })
  };


  