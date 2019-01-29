import { FETCH_POST, NEW_POST } from './types';

export const fetchPost = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(response =>
            dispatch({
                type: FETCH_POST,
                payload: response
            })
        );
};

export const createPost = (data) => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(response =>
            dispatch({
                type: NEW_POST,
                payload: response
            })
        );
};