import * as actions from '../actions/types';

const initialState = {
    authenticated: '',
    errorMessage: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case actions.AUTH_USER:
            return { ...state, authenticated: action.payload, errorMessage: null };
        case actions.AUTH_ERROR:
            return { ...state, errorMessage: action.payload }
        default:
            return state;
    }
    
}
