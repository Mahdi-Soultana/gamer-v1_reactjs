import { createSlice } from "@reduxjs/toolkit";

const ui = createSlice({
  name: "ui",
  initialState: {
    detailsIsOpen: false,
    submitState: false,
  },
  reducers: {
    toggleInfoOpen(state) {
      state.detailsIsOpen = true;
    },
    toggleInfoClose(state) {
      state.detailsIsOpen = false;
    },
    submitStateOpen(state) {
      state.submitState = true;
    },
    submitStateClose(state) {
      state.submitState = false;
    },
  },
});
export const uiAction = ui.actions;
export default ui;
