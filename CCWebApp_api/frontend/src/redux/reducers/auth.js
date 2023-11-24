import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, SET_LOADING_USER, NULL_ERROR, BAD_REQUEST } from "../types/types";

const initialState = {
    access: null,
    isAuthenticated: false,
    isloadingUser: false,
    user: {},
    users: [],
    message: null,
    error: null,
}

export default function(state = initialState, action) {
    switch(action.type){
        case LOGIN_SUCCESS:
            localStorage.setItem('access',action.payload.token)
            localStorage.setItem('user',JSON.stringify(action.payload.user))
            return{
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                isloadingUser: false
            }
        case LOGIN_FAIL:
            localStorage.removeItem('access');
            return {
                ...state,
                access: null,
                user: null,
                isAuthenticated: false,
                isloadingUser: false,
                error: action.payload
            }
        case BAD_REQUEST:
            localStorage.removeItem('access');
            return {
                ...state,
                access: null,
                user: null,
                isAuthenticated: false,
                isloadingUser: false,
                error: action.payload
                }
        case LOGOUT_SUCCESS:
        case SET_LOADING_USER:
            return{
                ...state,
                isloadingUser: action.payload,
            }
        case NULL_ERROR:
            return{
                ...state,
                error: null,
            }
        default:
            return state;
    }
}