import { configureStore } from "@reduxjs/toolkit";

import { displaySlice as display } from "@entities";

export const store = configureStore({
  reducer: {
    display,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
