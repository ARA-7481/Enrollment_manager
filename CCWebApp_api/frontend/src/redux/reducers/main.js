import { SET_SIDEBAR, SET_SUBSIDEBAR, SET_PAGEHEADER, GET_STUDENTS, GET_DEPARTMENTS } from "../types/types";

const initialState = {
    sidebarState: null,
    subsidebarState: null,
    pageHeader: {},
    studentsList: [],
    departmentsList: [],
}

export default function(state = initialState, action) {
    switch(action.type){
        case SET_SIDEBAR:
            return{
                ...state,
                sidebarState: action.payload,
            }
        case SET_SUBSIDEBAR:
            return{
                ...state,
                subsidebarState: action.payload,
            }
        case SET_PAGEHEADER:
            return{
                ...state,
                pageHeader: action.payload,
            }
        case GET_STUDENTS:
            return{
                ...state,
                studentsList: action.payload
            }
        case GET_DEPARTMENTS:
            return{
                ...state,
                departmentsList: action.payload
            }
        default:
            return state;
    }
}