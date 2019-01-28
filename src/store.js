import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';


const initialState = {};

const middleware = [thunk];

let store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
);

export default store;