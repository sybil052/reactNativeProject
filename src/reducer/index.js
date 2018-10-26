import {combineReducers} from 'redux';
import nav from './nav';
import app from './app';

const rootReducer = combineReducers({
    nav,
    app,
    // mine,
    // order,
})

export default rootReducer;