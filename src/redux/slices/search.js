import { createSlice } from "@reduxjs/toolkit";

const search = createSlice({
  name: "search",
  initialState: {
    term: "",
  },
  reducers: {
    setSearch(state, action) {
      state.term = action.payload;
    },
  },
});

export const searchAction = search.actions;

export default search;
