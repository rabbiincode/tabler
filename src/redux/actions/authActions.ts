import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../authActionTypes"

// Action to trigger the login request
export const loginRequest = (email: string, address: string) => ({
  type: LOGIN_REQUEST,
  payload: { email, address },
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