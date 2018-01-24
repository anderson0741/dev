import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import quote from './quote';

const rootReducer = combineReducers({ quote })

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;