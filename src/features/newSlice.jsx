import { createSlice } from "@reduxjs/toolkit";
import objectsList from "../objectsList" 

const initialState = {
  objectsItems: objectsList,
  amount: 0,
  total: 0,
  isLoading: true,
}

const newSlice = createSlice({
  name: 'object',
  initialState,

})

console.log(newSlice)

export default newSlice.reducer;