import { SET_SIDEBAR, SET_SUBSIDEBAR, SET_PAGEHEADER, GET_STUDENTS, GET_DEPARTMENTS, GET_FACULTY, GET_STAFF, SET_CLASS, GET_COURSES, GET_SUBJECT, GET_ROOMS, GET_CLASSES, ADD_CLASS, GET_CLASSES_LIST, SET_LOADING } from "../types/types";

const initialState = {
    loadingState: 'isNotLoading',
    sidebarState: null,
    subsidebarState: null,
    classState: null,
    subject: {},
    pageHeader: {},
    studentsList: [],
    facultyList: [],
    staffList: [],
    departmentsList: [],
    coursesList: [],
    roomsList: [],
    classesList: [],
    classesListForTable: [],
}

export default function(state = initialState, action) {
    switch(action.type){
        case SET_LOADING:
            return{
                ...state,
                loadingState: action.payload,
            }
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
        case SET_CLASS:
            return{
                ...state,
                classState: action.payload,
            }
        case GET_STUDENTS:
            return{
                ...state,
                studentsList: action.payload
            }
        case GET_FACULTY:
            return{
                ...state,
                facultyList: action.payload
            }
        case GET_STAFF:
            return{
                ...state,
                staffList: action.payload
            }
        case GET_DEPARTMENTS:
            return{
                ...state,
                departmentsList: action.payload
            }
        case GET_COURSES:
            return{
                ...state,
                coursesList: action.payload
                }
        case GET_SUBJECT:
            return{
                ...state,
                subject: action.payload
                }
        case GET_ROOMS:
            return{
                ...state,
                roomsList: action.payload
                }
        case GET_CLASSES:
            return{
                ...state,
                classesList: action.payload
                }
        case GET_CLASSES_LIST:
            return{
                ...state,
                classesListForTable: action.payload
                }
        case ADD_CLASS:
            return{
                ...state,
                loadingState: 'isNotLoading'
            }
            
        default:
            return state;
    }
}