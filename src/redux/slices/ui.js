import { createSlice } from "@reduxjs/toolkit";

const ui = createSlice({
  name: "ui",
  initialState: {
    detailsIsOpen: false,
  },
  reducers: {
    toggleInfo(state) {
      state.detailsIsOpen = !state.detailsIsOpen;
    },
  },
});
export const uiAction = ui.actions;
export default ui;
