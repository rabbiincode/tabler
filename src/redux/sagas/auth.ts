import { takeEvery, put, call, Effect } from 'redux-saga/effects';
import { loginSuccess, loginFailure } from '../actions/authActions';
import { LoginRequestAction, LOGIN_REQUEST } from '../authActionTypes';

// Simulate a dummy API call
const fakeApiCall = (email: string, password: string) => {
  return new Promise<{ email: string; password: string }>((resolve, reject) => {
    setTimeout(() => {
      if (email === 'test@example.com' && password === '123 Main St') {
        resolve({ email, password });
      } else {
        reject('Invalid email or password');
      }
    }, 1000); // Simulating a 1 second delay
  });
};

// Worker saga: handles the login process
function* loginSaga(action: LoginRequestAction): Generator<Effect, void, any> {
  const { email, password } = action.payload;
  try {
    // Simulating the API call
    const user = yield call(fakeApiCall, email, password);
    yield put(loginSuccess(user));
  } catch (error) {
    yield put(loginFailure(error as string));
  }
}

// Watcher saga: watches for login request
function* watchLoginRequest() {
  yield takeEvery(LOGIN_REQUEST, loginSaga);
}

export default watchLoginRequest;
