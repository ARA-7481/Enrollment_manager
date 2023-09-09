import { SET_SIDEBAR, SET_SUBSIDEBAR } from "../types/types";

const initialState = {
    sidebarState: null,
    subsidebarState: null,
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
        default:
            return state;
    }
}