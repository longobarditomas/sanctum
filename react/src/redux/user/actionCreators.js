import * as ActionTypes from './actions';

export const userLoading = () => ({
    type: ActionTypes.USER_LOADING
});

export const userFailed = (errmess) => ({
    type: ActionTypes.USER_FAILED,
    payload: errmess
});

export const validationErrors = (errors) => ({
    type: ActionTypes.VALIDATION_ERRORS,
    payload: errors
});