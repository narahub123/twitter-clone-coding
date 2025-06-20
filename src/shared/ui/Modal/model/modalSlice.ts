import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {
  IModalState,
  ParallelModalType,
  StandAloneType,
} from "@shared/ui/Modal";

const initialState: IModalState = {
  parallel: {
    signup: false,
    login: false,
  },
  standalone: {
    test: false,
    logout: false,
  },
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    onParallelOpen: (state, action: PayloadAction<ParallelModalType>) => {
      state.parallel[action.payload] = true;
    },
    onParallelClose: (state, action: PayloadAction<ParallelModalType>) => {
      state.parallel[action.payload] = false;
    },
    onStandAloneOpen: (state, action: PayloadAction<StandAloneType>) => {
      state.standalone[action.payload] = true;
    },
    onStandAloneClose: (state, action: PayloadAction<StandAloneType>) => {
      state.standalone[action.payload] = false;
    },
  },
});

export default modalSlice.reducer;

export const {
  onParallelOpen,
  onParallelClose,
  onStandAloneOpen,
  onStandAloneClose,
} = modalSlice.actions;
