import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    text: "",
  },
  reducers: {
    setFilter(state, action) {
      state.text = action.payload;
    },
  },
});

export const selectFilter = state => state.filter.text;
  
export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;