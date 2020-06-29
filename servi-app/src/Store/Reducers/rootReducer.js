import authReducer from './authReducer'
import ServiceReducer from './ServiceReducer';
import PostReducer from './PostReducer';
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'

const rootReducer = combineReducers ({
    auth: authReducer,
    Services: ServiceReducer,
    Post: PostReducer,
    firestore: firestoreReducer
});

export default rootReducer