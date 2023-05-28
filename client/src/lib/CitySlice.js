import { createSlice } from "@reduxjs/toolkit";

export const citySlice = createSlice({
  name: "city",
  initialState: {
    value: null,
  },
  reducers: {
    select: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {select} = citySlice.actions
export default citySlice.reducer