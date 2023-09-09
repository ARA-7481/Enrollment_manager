import { SET_SIDEBAR } from "../types/types";

const initialState = {
    sidebarState: null
}

export default function(state = initialState, action) {
    switch(action.type){
        case SET_SIDEBAR:
            return{
                ...state,
                sidebarState: action.payload,
            }
        default:
            return state;
    }
}