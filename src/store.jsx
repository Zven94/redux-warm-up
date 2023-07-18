import { configureStore } from "@reduxjs/toolkit";
import './features/newSlice'
import newSlice from "./features/newSlice";

export const store = configureStore({
  reducer: {
    object: newSlice,
  },
})