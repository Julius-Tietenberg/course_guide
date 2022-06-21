import { configureStore } from "@reduxjs/toolkit"
import movieSlice from "./features/loginSlice"

export const store = configureStore({
  reducer: {
    movie: movieSlice
  }
})