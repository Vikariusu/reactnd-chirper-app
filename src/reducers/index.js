import { combineReducers } from 'redux';
import authedUser from './authedUser';
import users from './users';
import tweets from './tweets';

// root reducer
export default combineReducers({
    authedUser,
    users,
    tweets
})