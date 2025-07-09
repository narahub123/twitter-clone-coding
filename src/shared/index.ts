import { Constants, REGEXP } from "./constants";
import {
  useAppDispatch,
  useAppSelector,
  useLanguageContent,
  useClickOutside,
  useBodyScrollLock,
  useFadeInAndOut,
} from "./lib";
import {
  headings,
  languages,
  colors,
  roundeds,
  sizes,
  variants,
  weights,
  colorRGB,
} from "./data";
import { joinClassNames, convertToPx } from "./utils";
import {
  Icon,
  icons,
  Button,
  SVG,
  Spinner,
  Text,
  Heading,
  Description,
  Portal,
  Modal,
  FocusTrap,
  Input,
  TextEditor,
  Dropdown,
  Progressbar,
} from "./ui";

import {
  // slices
  textEditorSlice,
  loadingSlice,

  // reducers
  setTextEditorInnerHTML,
  setTextEditorCaretPosition,
  loadingStart,
  loadingEnd,

  // selectors
  selectTextEditorInnerHTML,
  selectTextEditorCaretPosition,
  selectIsLoading,
  selectTextEditorSelectedIndex,
  selectIsTextEditorDropdownOpen,
  selectTextEditorList,
} from "./models";

import type {
  ColorSchemeType,
  RoundedType,
  SizeType,
  VariantType,
  WeightType,
  HeadingLevel,
  PlacementType,
  ITextEditor,
  IRect,
  DropdownRoleType,
  ILoadingState,
} from "./types";

export {
  // Constants
  Constants,
  REGEXP,

  // libs
  useAppDispatch,
  useAppSelector,
  useLanguageContent,
  useClickOutside,
  useBodyScrollLock,
  useFadeInAndOut,

  // data
  languages,
  colors,
  roundeds,
  sizes,
  variants,
  weights,
  headings,
  colorRGB,

  // models
  // slices
  textEditorSlice,
  loadingSlice,

  // reducers
  setTextEditorInnerHTML,
  setTextEditorCaretPosition,
  loadingStart,
  loadingEnd,

  // selectors
  selectTextEditorInnerHTML,
  selectTextEditorCaretPosition,
  selectIsLoading,
  selectTextEditorSelectedIndex,
  selectIsTextEditorDropdownOpen,
  selectTextEditorList,

  // utils
  joinClassNames,
  convertToPx,

  // ui
  Icon,
  icons,
  Button,
  SVG,
  Spinner,
  Text,
  Heading,
  Description,
  Portal,
  Modal,
  FocusTrap,
  Input,
  TextEditor,
  Dropdown,
  Progressbar,
};

export type {
  // design-system
  ColorSchemeType,
  RoundedType,
  SizeType,
  VariantType,
  WeightType,
  HeadingLevel,

  // normal
  PlacementType,
  IRect,
  DropdownRoleType,

  // slices
  ITextEditor,
  ILoadingState,
};
