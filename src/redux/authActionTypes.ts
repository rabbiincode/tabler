// src/actions/types.ts

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

// Define the type for the LOGIN_REQUEST action's payload
export interface LoginRequestAction {
  type: typeof LOGIN_REQUEST
  payload: {
    email: string
    password: string
  }
}

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS
  payload: {
    email: string
    password: string
  }
}

export interface LoginFailureAction {
  type: typeof LOGIN_FAILURE
  payload: string // the error message
}

export type AuthActionTypes =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
