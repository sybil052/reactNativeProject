import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducer/index';
import {navMiddleware} from '../routes/routes';
// import http from '../middleware/http';

const middelwares = [];
// middelwares.push(http);
middelwares.push(thunkMiddleware);
middelwares.push(navMiddleware);
const createStoreWidthMiddleware = applyMiddleware(...middelwares)(createStore)

export default function ConfigureStore(initialState) {
    const store = createStoreWidthMiddleware(rootReducer,initialState);
    return store;
}