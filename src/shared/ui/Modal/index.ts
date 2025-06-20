import Modal from "./components";

import { ModalContext, ModalContextProvider } from "./context";

import { useModalContext } from "./hooks";

import {
  clampOpacity,
  normalizePercentSize,
  normalizePxSize,
  getPlacementOffset,
} from "./utils";

import type {
  IModalContext,
  IModalState,
  ParallelModalType,
  StandAloneType,
  IParallelState,
  IStoneAloneState,
} from "./types";

import modalSlice, {
  // reducers
  onParallelClose,
  onParallelOpen,
  onStandAloneClose,
  onStandAloneOpen,

  // selectors
  selectParallelModalState,
  selectStandAlonModalState,
} from "./model";

export default Modal;

export {
  // model
  modalSlice,

  // reducers
  onParallelClose,
  onParallelOpen,
  onStandAloneClose,
  onStandAloneOpen,

  // selectors
  selectParallelModalState,
  selectStandAlonModalState,

  // components

  // context
  ModalContext,
  ModalContextProvider,

  // hooks
  useModalContext,

  // utils
  clampOpacity,
  normalizePercentSize,
  normalizePxSize,
  getPlacementOffset,
};

export type {
  IModalContext,
  IModalState,
  ParallelModalType,
  StandAloneType,
  IParallelState,
  IStoneAloneState,
};
