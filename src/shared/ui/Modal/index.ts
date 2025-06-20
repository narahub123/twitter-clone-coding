import Modal from "./components";

import { ModalContext, ModalContextProvider } from "./context";

import { useModalContext } from "./hooks";

import {
  clampOpacity,
  normalizePercentSize,
  normalizePxSize,
  getPlacementOffset,
} from "./utils";

import type { IModalContext, IModalState } from "./types";

import modalSlice from "./model";

export default Modal;

export {
  // model
  modalSlice,

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

export type { IModalContext, IModalState };
