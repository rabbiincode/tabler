import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/auth'
import authReducer from './reducers/authReducer'
import userReducer from './reducers/userReducers'

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// Configure the store using RTK's configureStore
const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
})

// Run the saga
sagaMiddleware.run(rootSaga)

// Export the store and RootState type for type-safety
export type RootState = ReturnType<typeof store.getState>
export default store