import { combineReducers } from 'redux';

import usersReducer from './usersReducer';
import userReducer from './userReducer';
import authReducer from './authReducer';

export default combineReducers({
  users: usersReducer,
  user: userReducer,
  auth: authReducer,
});
