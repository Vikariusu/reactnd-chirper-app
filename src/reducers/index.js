import { combineReducers } from 'redux';
import authedUser from './authedUser';
import users from './users';
import tweets from './tweets';
import { loadingBarReducer } from 'react-redux-loading';

// root reducer
export default combineReducers({
    authedUser,
    users,
    tweets,
    loadingBar: loadingBarReducer
})