import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

type TNewsState = {
  isNeedUpdate: boolean
  incrementCount: number
}

const initial: TNewsState = {
  isNeedUpdate: false,
  incrementCount: 1
}

export const newsSlice = createSlice({
  name: "news",
  initialState: initial,
  reducers: {
    setInc: (state) => {
      state.incrementCount += 1
    },
    setIsNeedUpdate: (state, actions: PayloadAction<boolean>) => {
      state.isNeedUpdate = actions.payload
    }
  }
})

export const { setInc, setIsNeedUpdate } = newsSlice.actions

export default newsSlice.reducer
