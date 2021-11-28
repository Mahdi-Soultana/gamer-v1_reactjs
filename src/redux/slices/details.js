import { createSlice } from "@reduxjs/toolkit";

const details = createSlice({
  name: "details",
  initialState: {
    gameDetails: {},
    id: null,
  },
  reducers: {
    setGameDetails(state, action) {
      state.gameDetails = action.payload;
    },
    setDetailsId(state, action) {
      state.id = action.payload;
    },
  },
});

export const detailsAction = details.actions;
export default details;
