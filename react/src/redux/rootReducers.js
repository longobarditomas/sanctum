import { combineReducers } from "redux";
import { AuthReducer } from './auth/reducers';
import { UserReducer } from './user/reducers';

const rootReducers = combineReducers({
    auth: AuthReducer,
    user: UserReducer,
});

export default rootReducers;