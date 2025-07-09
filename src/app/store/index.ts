import { configureStore } from "@reduxjs/toolkit";

import { displaySlice as display } from "@entities";

import { modalSlice as modal } from "@shared/ui/Modal";

import {
  textEditorSlice as textEditor,
  loadingSlice as loading,
} from "@shared";

export const store = configureStore({
  reducer: {
    display,
    modal,
    textEditor,
    loading,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
