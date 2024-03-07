import {SET_SIDEBAR, SET_SUBSIDEBAR, SET_PAGEHEADER, GET_STUDENTS, GET_DEPARTMENTS, 
        GET_FACULTY, GET_STAFF, SET_CLASS, GET_COURSES, GET_SUBJECT, GET_ROOMS, GET_CLASSES, 
        ADD_CLASS, ADD_SUBJECT, GET_CLASSES_LIST, SET_LOADING, GET_SUBJECTS_LIST, SET_SUBJECT, GET_ROOMS_LIST, SET_ROOM, ADD_ROOM,
        GET_COURSES_LIST, SET_COURSE, ERROR_MAIN, NULL_ERROR_MAIN, SET_SUBJECT_FORMDATA, ADD_COURSE, RESO_UPDATE, AUTO_COLLAPSE,
        GET_TEACHER_DATA, SET_SELECTED_CLASS, GET_POINTERS, ADD_ACTIVITY, GET_ACTIVITIES, SET_BG, SET_SELECTED_BG, CLEAR_STATE,
        GET_STUDENT_DATA, GET_ACTIVITY, ADD_ACTIVITY_ENTRY, GET_CLASS_DATA, ANALYZE_IMAGES_SUCCESS, GET_ENTRY, SET_SUBMITTING_STUDENT,
        CLEAR_RESPONSE, REGISTER_STUDENT, REGISTER_TEACHER, FILL_ERROR, EMPTY_ERROR, EMPTY_SUCCESS, SET_USER_AVATAR, SET_USER_DATA, SET_USER_PW,
        GET_SCHOOLYEAR, SET_SECTION, GET_SECTION, ADD_SECTION, SET_GRADESHEET,
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
    sectionState: null,
    selectedClass: null,
    selectedBG: null,
    GPTresponse: null,
    submittingStudent: null,
    error: null,
    success: null,
    newAvatar: null,
    subject: {},
    pageHeader: {},
    subjectFormdata: {},
    windowDimensions: {},
    activityData: {},
    classData: {},
    entryData: {},
    newUserdata: {},
    studentData: {},
    teacherData: {},
    emptygradeSheet: {},
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
    pointers: [],
    activitiesOnclass: [],
    sectionList: [],
    isLess800: false,

    //new

    schoolyearList: [],
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
        case SET_SECTION:
            return{
                ...state,
                sectionState: action.payload,
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
        case GET_SECTION:
            return{
                ...state,
                sectionList: action.payload,
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
                loadingState: 'isNotLoading',
                success: 'Successfully Added A Class'
                }
        case ADD_SECTION:
            return{
                ...state,
                loadingState: 'isNotLoading',
                success: 'Successfully Added A Section'
                }
        case ADD_SUBJECT:
            return{
                ...state,
                loadingState: 'isNotLoading',
                success: 'Successfully Added A Subject'
                }
        case ADD_ROOM:
            return{
                ...state,
                loadingState: 'isNotLoading',
                success: 'Successfully Added A Room'
                }
        case ADD_COURSE:
            return{
                ...state,
                loadingState: 'isNotLoading',
                success: 'Successfully Added A Course'
                }
        case RESO_UPDATE:
            return{
                ...state,
                windowDimensions: action.payload
            }
        case AUTO_COLLAPSE:
            return{
                ...state,
                isLess800: action.payload
            }
        case REGISTER_STUDENT:
            return{
                ...state,
                success: 'Successfully Added a Student',
                loadingState: 'isNotLoading'
            }
        case REGISTER_TEACHER:
            return{
                ...state,
                success: 'Successfully Added a Faculty Member',
                loadingState: 'isNotLoading'
            }
        case FILL_ERROR:
            return{
                ...state,
                error: action.payload,
                loadingState: 'isNotLoading'
            }
        case EMPTY_ERROR:
            return{
                ...state,
                error: null
            }
        case EMPTY_SUCCESS:
            return{
                ...state,
                success: null
            }
        case SET_GRADESHEET:
            return{
                ...state,
                emptygradeSheet: action.payload,
            }
//portal
        case SET_USER_PW:
            return{
                ...state,
                success: 'Successfully Updated User Password'
            }
        case SET_USER_DATA:
        localStorage.setItem('user',JSON.stringify(action.payload))
            return{
                ...state,
                newUserdata: action.payload,
                success: 'Successfully Updated User Information'
            }
        case SET_USER_AVATAR:
            return{
                ...state,
                newAvatar: action.payload
            }
        case GET_TEACHER_DATA:
            return{
                ...state,
                teacherData: action.payload
            }
        case GET_STUDENT_DATA:
            return{
                ...state,
                studentData: action.payload
            }
        case SET_SELECTED_CLASS:
            return{
                ...state,
                selectedClass: action.payload
            }
        case GET_POINTERS:
            return{
                ...state,
                pointers: action.payload
            }
        case ADD_ACTIVITY:
            return{
                ...state,
                loadingState: 'isNotLoading'
                }
        case ADD_ACTIVITY_ENTRY:
            return{
                ...state,
                loadingState: 'isNotLoading'
                }
        case GET_ACTIVITIES:
            return{
                ...state,
                activitiesOnclass: action.payload
            }
        case GET_ACTIVITY:
            return{
                ...state,
                activityData: action.payload
            }
        case GET_ENTRY:
            return{
                ...state,
                entryData: action.payload
            }
        case SET_SUBMITTING_STUDENT:
            return{
                ...state,
                submittingStudent: action.payload
            }
        case SET_BG:
            return{
                ...state,
            }
        case SET_SELECTED_BG:
            return{
                ...state,
                selectedBG: action.payload
            }
        case GET_CLASS_DATA:
            return{
                ...state,
                classData: action.payload
            }
        case ANALYZE_IMAGES_SUCCESS:
            return{
                ...state,
                GPTresponse: action.payload,
                loadingState: 'isNotLoading'
            }
        case CLEAR_RESPONSE:
            return{
                ...state,
                GPTresponse: null,
            }
            
        //new

        case GET_SCHOOLYEAR:
            return{
                ...state,
                schoolyearList: action.payload,
                loadingState: 'isNotLoading'
            }
        case CLEAR_STATE:
            return{
                loadingState: 'isNotLoading',
                errorMessage: null,
                sidebarState: null,
                subsidebarState: null,
                classState: null,
                subjectState: null,
                roomState: null,
                courseState: null,
                sectionState: null,
                selectedClass: null,
                selectedBG: null,
                GPTresponse: null,
                submittingStudent: null,
                error: null,
                success: null,
                newAvatar: null,
                subject: {},
                pageHeader: {},
                subjectFormdata: {},
                windowDimensions: {},
                activityData: {},
                classData: {},
                entryData: {},
                emptygradeSheet: {},
                newUserdata: {},
                studentData: {},
                teacherData: {},
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
                pointers: [],
                activitiesOnclass: [],
                sectionList: [],
                isLess800: false,
     
                //new

                schoolyearList: [],
            }
        default:
            return state;
    }
}