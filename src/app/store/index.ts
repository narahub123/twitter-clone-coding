import { configureStore } from "@reduxjs/toolkit";

import { displaySlice as display } from "@entities";

import { modalSlice as modal } from "@shared/ui/Modal";

export const store = configureStore({
  reducer: {
    display,
    modal,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
