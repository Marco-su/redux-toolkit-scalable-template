import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "list",

  initialState: {
    elements: [],
  },

  reducers: {
    setList: (state, action) => {
      state.elements = action.payload;
    },
  },
});

export const { setList } = listSlice.actions;

export default listSlice.reducer;
