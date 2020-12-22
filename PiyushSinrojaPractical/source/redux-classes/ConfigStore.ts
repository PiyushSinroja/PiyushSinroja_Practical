import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import UserReducers from './deducers/UserReducers';

// create root reducer
const rootReducer = combineReducers({
    UserReducers
});

// create ConfigStore
const ConfigStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
};

export default ConfigStore;