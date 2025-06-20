import modalSlice from "./modalSlice";

import {
  onParallelClose,
  onParallelOpen,
  onStandAloneClose,
  onStandAloneOpen,
} from "./modalSlice";

import {
  selectParallelModalState,
  selectStandAlonModalState,
} from "./modalSelectors";

export default modalSlice;

export {
  // reducers
  onParallelClose,
  onParallelOpen,
  onStandAloneClose,
  onStandAloneOpen,

  // selectors
  selectParallelModalState,
  selectStandAlonModalState,
};
