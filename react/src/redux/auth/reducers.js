import * as ActionTypes from './actions';

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
export const AuthReducer = (state = {
    isLoading: false,
    isAuthenticated: localStorage.getItem('token') ? true : false,
    token: localStorage.getItem('token'),
    spotify_token: '',
    user: localStorage.getItem('creds') ? JSON.parse(localStorage.getItem('creds')) : null,
    errMess: null,
    errors: null,
    userData: [],
}, action) => {
switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
        return {...state,
            isLoading: true,
            isAuthenticated: false,
            user: action.creds
        };
    case ActionTypes.LOGIN_SUCCESS:
        return {...state,
            isLoading: false,
            isAuthenticated: true,
            errMess: '',
            errors: null,
            token: action.token
        };
    case ActionTypes.LOGIN_FAILURE:
        return {...state,
            isLoading: false,
            isAuthenticated: false,
            errMess: action.message,
            errors: action.errors
        };
    case ActionTypes.SIGNIN_REQUEST:
        return {...state,
            isLoading: true,
            isAuthenticated: false,
            user: action.creds
        };
    case ActionTypes.SIGNIN_SUCCESS:
        return {...state,
            isLoading: false,
            isAuthenticated: false,
            token: '',
            user: null
        };
    case ActionTypes.SIGNIN_FAILURE:
        return {...state,
            isLoading: false,
            isAuthenticated: false,
            errMess: action.message,
            errors: action.errors
        };
    case ActionTypes.LOGOUT_REQUEST:
        return {...state,
            isLoading: true,
            isAuthenticated: true
        };
    case ActionTypes.LOGOUT_SUCCESS:
        return {...state,
            isLoading: false,
            isAuthenticated: false,
            token: '',
            user: null
        };


    case ActionTypes.ADD_USER:
        return {...state, isLoading: false, errMess: null, userData: action.payload};

    case ActionTypes.USER_LOADING:
        return {...state, isLoading: true, errMess: null, userData: []}

    case ActionTypes.USER_FAILED:
        return {...state, isLoading: false, errMess: action.payload, isAuthenticated: false};

    default:
        return state
}
}