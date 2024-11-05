// Action types for the data
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'

export interface Data {
  name: string
  image: string
  message: string
  date: string
}

interface FetchDataRequestAction {
  type: typeof FETCH_DATA_REQUEST
}

interface FetchDataSuccessAction {
  type: typeof FETCH_DATA_SUCCESS
  payload: Data[]
}

interface FetchDataFailureAction {
  type: typeof FETCH_DATA_FAILURE
  error: string
}

export type DataActionTypes =
  | FetchDataRequestAction
  | FetchDataSuccessAction
  | FetchDataFailureAction