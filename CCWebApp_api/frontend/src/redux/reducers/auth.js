import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, SET_LOADING } from "../types/types";

const initialState = {
    access: null,
    isAuthenticated: false,
    isLoading: false,
    user: {},
    users: [],
    message: null,
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
            }
        case LOGIN_FAIL:
            localStorage.removeItem('access');
            return {
                ...state,
                access: null,
                user: null,
                isAuthenticated: false,
            }
        case LOGOUT_SUCCESS:
        case SET_LOADING:
            return{
                ...state,
                isLoading: action.payload,
            }
        default:
            return state;
    }
}