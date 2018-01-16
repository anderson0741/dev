import { createStore, combineReducers } from 'redux';
import recipes from './recipes';


const rootReducer = (combineReducers({recipes}));

let store = createStore(rootReducer);
export default createStore(rootReducer);
