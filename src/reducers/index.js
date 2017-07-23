import { combineReducers } from 'redux';
import { showUsers } from './users.js'

const rootReducer = combineReducers({
  user: showUsers
});

export default rootReducer;
 