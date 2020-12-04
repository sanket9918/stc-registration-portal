import axios from 'axios';
import {  GET_ERRORS } from './types'
import { backURL } from '../utils/integration'
// Register the user

export const registerUser = (userData, history) => dispatch => {
    axios
        .post(`${backURL}/api/users/register`,userData)
        .then(res => history.push('/'))
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
};


