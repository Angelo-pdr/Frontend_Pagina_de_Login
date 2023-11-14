import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  status: 0
}

const StatusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      state.status = action.payload
    }
  }
})

export const { add } = StatusSlice.actions
export default StatusSlice.reducer
