import { api } from "../../services/api"
import { newsSlice } from "./newsSlice"

const reducers = {
  news: newsSlice,
  newsReducer: newsSlice.reducer,
  [api.reducerPath]: api.reducer
}

export default reducers
