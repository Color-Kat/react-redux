// import {CREATE_POST, FETCH_POSTS} from './posts_types';

import { HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER } from "./posts_types";

const initialState = {
    loading: false,
    alert: null
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {...state, loading: true}
            
        case HIDE_LOADER:
            return {...state, loading: false}

        case SHOW_ALERT:
            return {...state, alert: action.payload}
            
        case HIDE_ALERT:
            return {...state, alert: action.payload}
    
        default:
            return state;
    }   
}