import { createSlice } from "@reduxjs/toolkit";

const games = createSlice({
  name: "games",
  initialState: {
    popular: [],
    featured: [],
    new: [],
  },
  reducers: {
    setPopularGame(state, action) {
      state.popular = action.payload;
    },
    setFeaturedGame(state, action) {
      state.featured = action.payload;
    },
    setNewGame(state, action) {
      state.new = action.payload;
    },
  },
});

export const gamesAction = games.actions;

export default games;
