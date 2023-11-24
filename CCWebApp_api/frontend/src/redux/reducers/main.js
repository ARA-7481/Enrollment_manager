import {SET_SIDEBAR, SET_SUBSIDEBAR, SET_PAGEHEADER, GET_STUDENTS, GET_DEPARTMENTS, 
        GET_FACULTY, GET_STAFF, SET_CLASS, GET_COURSES, GET_SUBJECT, GET_ROOMS, GET_CLASSES, 
        ADD_CLASS, ADD_SUBJECT, GET_CLASSES_LIST, SET_LOADING, GET_SUBJECTS_LIST, SET_SUBJECT, GET_ROOMS_LIST, SET_ROOM, ADD_ROOM,
        GET_COURSES_LIST, SET_COURSE, ERROR_MAIN, NULL_ERROR_MAIN, SET_SUBJECT_FORMDATA, ADD_COURSE,
        } from "../types/types";

const initialState = {
    loadingState: 'isNotLoading',
    errorMessage: null,
    sidebarState: null,
    subsidebarState: null,
    classState: null,
    subjectState: null,
    roomState: null,
    courseState: null,
    subject: {},
    pageHeader: {},
    subjectFormdata: {},
    studentsList: [],
    facultyList: [],
    staffList: [],
    departmentsList: [],
    coursesList: [],
    roomsList: [],
    classesList: [],
    classesListForTable: [],
    subjectsListForTable: [],
    roomsListForTable: [],
    coursesListForTable: [],
}

export default function(state = initialState, action) {
    switch(action.type){
        case SET_LOADING:
            return{
                ...state,
                loadingState: action.payload,
            }
        case ERROR_MAIN:
            return{
                ...state,
                errorMessage: action.payload,
            }
        case NULL_ERROR_MAIN:
            return{
                ...state,
                errorMessage: null,
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
        case SET_SUBJECT:
            return{
                ...state,
                subjectState: action.payload,
            }
        case SET_SUBJECT_FORMDATA:
            return{
                ...state,
                subjectFormdata: action.payload,
            }
        case SET_ROOM:
            return{
                ...state,
                roomState: action.payload,
            }
        case SET_COURSE:
            return{
                ...state,
                courseState: action.payload,
            }
        case GET_STUDENTS:
            return{
                ...state,
                studentsList: action.payload,
                loadingState: 'isNotLoading'
            }
        case GET_FACULTY:
            return{
                ...state,
                facultyList: action.payload,
                loadingState: 'isNotLoading'
            }
        case GET_STAFF:
            return{
                ...state,
                staffList: action.payload,
                loadingState: 'isNotLoading'
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
                classesList: action.payload,
                }
        case GET_CLASSES_LIST:
            return{
                ...state,
                classesListForTable: action.payload,
                loadingState: 'isNotLoading'
                }
        case GET_SUBJECTS_LIST:
            return{
                ...state,
                subjectsListForTable: action.payload,
                loadingState: 'isNotLoading'
                }
        case GET_ROOMS_LIST:
            return{
                ...state,
                roomsListForTable: action.payload,
                loadingState: 'isNotLoading'
                }
        case GET_COURSES_LIST:
            return{
                ...state,
                coursesListForTable: action.payload,
                loadingState: 'isNotLoading'
                }
        case ADD_CLASS:
            return{
                ...state,
                loadingState: 'isNotLoading'
                }
        case ADD_SUBJECT:
            return{
                ...state,
                loadingState: 'isNotLoading'
                }
        case ADD_ROOM:
            return{
                ...state,
                loadingState: 'isNotLoading'
                }
        case ADD_COURSE:
            return{
                ...state,
                loadingState: 'isNotLoading'
                }
        default:
            return state;
    }
}