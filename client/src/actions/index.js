import * as actions from './types';
import axios from 'axios'

export const signup = (formProps, callback) => async dispatch => {
    try {
        const response = await axios.post('http://localhost:3090/api/signup', formProps);
        dispatch({
            type: actions.AUTH_USER,
            payload: response.data.token
        });
        localStorage.setItem('token', response.data.token);
        callback();
    } catch(e) {
        dispatch({
            type: actions.AUTH_ERROR,
            payload: 'Email is in use'
        });
    }
    


}