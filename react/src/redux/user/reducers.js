import * as ActionTypes from './actions';

export const UserReducer = (state = { 
    isLoading: true,
    errMess: null,
    errors: null,
    }, action) => {
    switch (action.type) {

        case ActionTypes.USER_LOADING:
            return {...state, isLoading: true, errMess: null}

        case ActionTypes.USER_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        case ActionTypes.VALIDATION_ERRORS:
            return {...state, isLoading: false, errors: action.payload};
        default:
            return state;
    }
};