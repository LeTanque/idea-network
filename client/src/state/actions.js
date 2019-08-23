import axios from 'axios';


// export const LOGIN_START = 'LOGIN_START';
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';



export const getIdeas = () => dispatch => {
    dispatch({
        type: FETCH_START
    })
    axios
        .get(
            // 'http://localhost:3333/ideas', {
            //     // headers: { 
            //     //     Authorization: localStorage.getItem('token') 
            //     // }
            // }
        )
        .then(response => {
            dispatch({
                type: FETCH_SUCCESS,
                payload: response.data,
            })
        })
        .catch(error => {
            dispatch({
                type: FETCH_FAILURE,
                payload: error.message,
            })
        })
}

