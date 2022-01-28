import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pack: [1,1,1,1,1,2,2,2,2,3,3,3,4,4,5],
}

export const mainSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setPack: (state, action) => {
        state.pack = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setPack } = mainSlice.actions

export default mainSlice.reducer
