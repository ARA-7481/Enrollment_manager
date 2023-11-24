import axios from "axios";
import instanceAxios from "../interceptor/interceptor";
import { LOGIN_SUCCESS, LOGIN_FAIL, SET_LOADING_USER, NULL_ERROR, BAD_REQUEST } from "../types/types";



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
      if (error.response.data.detail) {
        dispatch({
          type: LOGIN_FAIL,
          payload: 'Invalid Credentials'
        });
      }
      else if (error.response.data.email || error.response.data.password) {
        dispatch({
          type: BAD_REQUEST,
          payload: 'Please Fill Missing Fields'
        });
      }
      // console.error(error);
    }
  };

export const setloadingUser = (boolLoading) => dispatch => {
    dispatch({
      type: SET_LOADING_USER,
      payload: boolLoading
    })
  };

export const nullError = () => dispatch => {
    dispatch({
      type: NULL_ERROR,
    })
  };


  