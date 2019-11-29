import * as actions from './types';
import axios from 'axios'

export const signup = (formProps) => dispatch => {
    axios.post('http://localhost:3090/api/signup', formProps)
}