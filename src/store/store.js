import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reduser'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})