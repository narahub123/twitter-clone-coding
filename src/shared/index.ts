import Constants from "./constants";
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
  // Constants
  Constants,

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
