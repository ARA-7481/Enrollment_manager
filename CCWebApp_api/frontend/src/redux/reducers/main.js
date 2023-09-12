import { SET_SIDEBAR, SET_SUBSIDEBAR, SET_PAGEHEADER } from "../types/types";

const initialState = {
    sidebarState: null,
    subsidebarState: null,
    pageHeader: {}
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
        default:
            return state;
    }
}