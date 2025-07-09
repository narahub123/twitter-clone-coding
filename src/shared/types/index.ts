import type {
  ColorSchemeType,
  SizeType,
  VariantType,
  RoundedType,
  WeightType,
  HeadingLevel,
} from "./design-system";

import type { ITextEditor, ILoadingState } from "./slices";

type PlacementType = "top-left" | "top-right" | "bottom-left" | "bottom-right";

interface IRect {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

type DropdownRoleType = "listbox" | "menu" | "dialog";

export type {
  ColorSchemeType,
  SizeType,
  VariantType,
  RoundedType,
  WeightType,
  HeadingLevel,
  PlacementType,
  ITextEditor,
  IRect,
  DropdownRoleType,
  ILoadingState,
};
