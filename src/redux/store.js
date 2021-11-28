import { configureStore } from "@reduxjs/toolkit";
import ui from "./slices/ui";
import games from "./slices/games";
import details from "./slices/details";

const store = configureStore({
  reducer: {
    ui: ui.reducer,
    games: games.reducer,
    details: details.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;
