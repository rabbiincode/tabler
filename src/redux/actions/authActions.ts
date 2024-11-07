import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../authActionTypes"

// Action to trigger the login request
export const loginRequest = (email: string, password: string) => ({
  type: LOGIN_REQUEST,
  payload: { email, password },
})

// Action when login is successful
export const loginSuccess = (user: any) => ({
  type: LOGIN_SUCCESS,
  payload: user,
})

// Action when login fails
export const loginFailure = (error: any) => ({
  type: LOGIN_FAILURE,
  payload: error,
})