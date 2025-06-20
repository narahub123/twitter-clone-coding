import type { RootState } from "@app";
import type { ParallelModalType, StandAloneType } from "../types";

const selectParallelModalState =
  (type: ParallelModalType) => (state: RootState) =>
    state.modal.parallel[type];

const selectStandAlonModalState =
  (type: StandAloneType) => (state: RootState) =>
    state.modal.standalone[type];

export { selectParallelModalState, selectStandAlonModalState };
