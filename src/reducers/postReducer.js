import { FETCH_POST, NEW_POSTS } from '../actions/types';
import { fetchPost } from '../actions/postAction';

const initialState = {
    items: [],
    item: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POST:
            return {
                ...state,
                items: action.payload
            };
        default: return state;
    }
}