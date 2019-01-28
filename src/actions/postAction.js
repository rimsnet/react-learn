import { FETCH_POST, NEW_POSTS } from './types';

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