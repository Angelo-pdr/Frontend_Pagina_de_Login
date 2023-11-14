import { configureStore } from '@reduxjs/toolkit'
import StatusReducer from './reduce/status'

export const store = configureStore({
  reducer: {
    status: StatusReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export default store
