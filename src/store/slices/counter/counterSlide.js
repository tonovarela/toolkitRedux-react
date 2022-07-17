import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  counter: 10,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {            
      state.counter++;
    },
    decrement: (state) => {
      state.counter -= 1
    },
    incrementByAmount: (state, {payload}) => {
      state.counter += payload
    },
  },
})
export const { increment, decrement, incrementByAmount } = counterSlice.actions


