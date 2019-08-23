import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE
} from './actions';

const initialState = {
    ideas:[],
    userObject:'',
    error:'',
    fetching:false
}


export const ideaReducer = (state=initialState, action) => {
    
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                fetching: true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                fetching: false,
                ideas: action.payload,
                error: null,
            }
        case FETCH_FAILURE:
            return {
                ...state,
                fetching: false,
                error: action.payload,
            }
        default:
            return state;
    }
}



