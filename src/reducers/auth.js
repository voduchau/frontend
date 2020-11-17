import {
    LOGIN_PENDING,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT,
  } from '@actions/auth';
  import { storeToken } from '@utils/auth';
  
  const initialState = {
    loggingIn: false,
    loggingOut: false,
    loginErrors: null
  };
  
  const auth = (state = initialState, action = {}) => {
    switch (action.type) {
      case LOGIN_PENDING:
        return Object.assign({}, initialState, {loggingIn: true});
      case LOGIN_SUCCESS:
        var data = action.payload;
        storeToken(data.token, data.user);
        return Object.assign({}, state, {loggingIn: false, loginErrors: null});
      case LOGIN_ERROR:
        return {
          ...state,
          loggingIn: false,
          loginErrors: action.payload.message
        };
      case LOGOUT:
        window.localStorage.removeItem('token');
        return {
          ...state,
          loggingOut: false,
          loginErrors: null
        };
      default:
        return state;
    }
  }
  
  export default auth
