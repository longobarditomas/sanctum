import * as ActionTypes from './actions';
import apiClient from '../../services/api';
import { baseUrl } from '../../shared/baseUrl';

export const requestLogin = (creds) => {
    return {
        type: ActionTypes.LOGIN_REQUEST,
        creds
    }
}

export const receiveLogin = (response) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        token: response.token
    }
}

export const loginError = (message, errors) => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message,
        errors
    }
}
export const loginUser = (creds) => async (dispatch) => {
    dispatch(requestLogin(creds))
    await apiClient.get('/sanctum/csrf-cookie')
    .then(async (response) => {
        await apiClient.post('/login', creds, {headers : {"content-type": "multipart/form-data"}})
        .then(response => {
            localStorage.setItem('token', response.config.headers['X-XSRF-TOKEN']);
            localStorage.setItem('loggedIn', true);
            dispatch(receiveLogin(response));
        }).catch(error => {
            if (error.response && error.response.status && error.response.status === 422) dispatch(loginError(error.message, error.response.data.errors))
            else dispatch(loginError(error.message, null))
        })
    });    

}

export const loginSocialUser = (social) => (dispatch) => {
    apiClient.get('/login/'+social)
    .then(response => {
        window.location.href = response.data.url;
    })/* .catch(error => {
        if (error.response.status && error.response.status === 422) dispatch(loginError(error.message, error.response.data.errors))
        else dispatch(loginError(error.message, null))
    }) */
}

export const loginSocialCallback = () => (dispatch) => {
    apiClient.get(baseUrl + 'user')
    .then(response => {
        localStorage.setItem('token', response.config.headers['X-XSRF-TOKEN']);
        localStorage.setItem('loggedIn', true);
        dispatch(receiveLogin(response));
    })
    .then(user => dispatch(addUser(user)))
    .catch(error => dispatch(userFailed(error.message)));
}

export const requestSignin = (creds) => {
    return {
        type: ActionTypes.SIGNIN_REQUEST,
        creds
    }
}

export const receiveSignin = (response) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        token: response.token
    }
}

export const signinError = (message, errors) => {
    return {
        type: ActionTypes.SIGNIN_FAILURE,
        message,
        errors
    }
}

export const signinUser = (creds) => (dispatch) => {
    dispatch(requestSignin(creds))
    apiClient.get('/sanctum/csrf-cookie')
    .then(response => {
        apiClient.post('/register', creds)
        .then(response => {
            dispatch(receiveSignin(response));
        }).catch(error => {
            if (error.response.status && error.response.status === 422) dispatch(signinError(error.message, error.response.data.errors))
            else dispatch(signinError(error.message, null))
        })
    });    
}

export const requestLogout = () => {
    return {
      type: ActionTypes.LOGOUT_REQUEST
    }
}
  
export const receiveLogout = () => {
    return {
      type: ActionTypes.LOGOUT_SUCCESS
    }
}

export const logoutUser = () => (dispatch) => {
    apiClient.post('/logout').then(response => {
        dispatch(requestLogout())
        if (response.status === 204) {
            localStorage.removeItem('token');
            localStorage.removeItem('loggedIn');
            dispatch(receiveLogout(response));
        }
    })
}






export const userLoading = () => ({
    type: ActionTypes.USER_LOADING
});

export const userFailed = (errmess) => ({
    type: ActionTypes.USER_FAILED,
    payload: errmess
});

export const addUser = (user) => ({
    type: ActionTypes.ADD_USER,
    payload: user
});

export const fetchUser = () => (dispatch) => {
    apiClient.get(baseUrl + 'user')
    .then(response => {
        return response.data;
    })
    .then(user => dispatch(addUser(user)))
    .catch(error => dispatch(userFailed(error.message)));
}

