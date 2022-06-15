import { createSlice } from '@reduxjs/toolkit'
import dota2Pack from '../static/packs/dota2-pack/dota2Pack'

const initialState = {
  pack: dota2Pack,
}

export const mainSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setPackAction: (state, action) => {
      state.pack = action.payload
    }
  },
})

export const { setPackAction } = mainSlice.actions

export default mainSlice.reducer
