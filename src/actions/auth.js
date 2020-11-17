import api from '@api'

export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';

export function login_pending() {
  return {
    type: LOGIN_PENDING,
    payload: {}
  }
}

export function login_success(data) {
  return {
    type: LOGIN_SUCCESS,
    payload: data
  }
}

export function login_error(message) {
  return {
    type: LOGIN_ERROR,
    payload: {
      response: message
    }
  }
}

export function logout() {
    api.post('/user/logout')
    return {
      type: LOGOUT,
    }
}
