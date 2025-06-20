import {
  MODAL_OVERLAY_OPACITY,
  MODAL_CONTENT_HEIGHT,
  MODAL_CONTENT_WIDTH,
} from "./constants";
import {
  useAppDispatch,
  useAppSelector,
  useLanguageContent,
  useClickOutside,
} from "./lib";
import {
  headings,
  languages,
  colors,
  roundeds,
  sizes,
  variants,
  weights,
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
} from "./ui";

import type {
  ColorSchemeType,
  RoundedType,
  SizeType,
  VariantType,
  WeightType,
  HeadingLevel,
  PlacementType,
} from "./types";

export {
  // constants
  MODAL_OVERLAY_OPACITY,
  MODAL_CONTENT_HEIGHT,
  MODAL_CONTENT_WIDTH,

  // libs
  useAppDispatch,
  useAppSelector,
  useLanguageContent,
  useClickOutside,

  // data
  languages,
  colors,
  roundeds,
  sizes,
  variants,
  weights,
  headings,

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
};
