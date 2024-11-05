import { call, put, takeEvery } from 'redux-saga/effects'
import { Data, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, FETCH_DATA_REQUEST } from '../userActionTypes'

const fetchDataFromApi = (): Promise<Data[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Hardcoded dummy data
      const dummyData: Data[] = [
        {
          name: 'John Doe',
          image: 'https://via.placeholder.com/50',
          message: 'Hello, world!',
          date: '2024-10-01',
        },
        {
          name: 'Jane Smith',
          image: 'https://via.placeholder.com/50',
          message: 'React is awesome!',
          date: '2024-10-02',
        },
        {
          name: 'Alice Johnson',
          image: 'https://via.placeholder.com/50',
          message: 'Redux makes state management easy.',
          date: '2024-10-03',
        },
      ]
      resolve(dummyData)
    }, 1000) // Simulate an API delay
  })
}

function* fetchDataSaga() {
  try {
    const data: Data[] = yield call(fetchDataFromApi)
    yield put({ type: FETCH_DATA_SUCCESS, payload: data })
  } catch (error) {
    yield put({ type: FETCH_DATA_FAILURE, error: 'Failed to fetch data' })
  }
}

function* watchFetchData() {
  yield takeEvery(FETCH_DATA_REQUEST, fetchDataSaga)
}

export default watchFetchData