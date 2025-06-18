import { useAppDispatch, useAppSelector, useLanguageContent } from "./lib";
import { languages, colors, roundeds, sizes, variants } from "./data";
import { joinClassNames, convertToPx } from "./utils";
import { Icon, icons, Button, SVG, Spinner } from "./ui";

import type {
  ColorSchemeType,
  RoundedType,
  SizeType,
  VariantType,
} from "./types";

export {
  // libs
  useAppDispatch,
  useAppSelector,
  useLanguageContent,

  // data
  languages,
  colors,
  roundeds,
  sizes,
  variants,

  // utils
  joinClassNames,
  convertToPx,

  // ui
  Icon,
  icons,
  Button,
  SVG,
  Spinner,
};

export type { ColorSchemeType, RoundedType, SizeType, VariantType };
