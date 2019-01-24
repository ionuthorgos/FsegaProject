import {combineReducers} from 'redux';

import courses from './courseReducer';
import authors from './authorReducer';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  courses,
  authors
});

export default rootReducer;
