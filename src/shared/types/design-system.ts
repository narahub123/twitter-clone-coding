type SizeType = "xs" | "sm" | "md" | "lg" | "xl";

type VariantType =
  | "solid"
  | "subtle"
  | "surface"
  | "outline"
  | "ghost"
  | "plain";

type ColorSchemeType =
  | "gray"
  | "red"
  | "green"
  | "blue"
  | "teal"
  | "pink"
  | "purple"
  | "cyan"
  | "orange"
  | "yellow";

type RoundedType = SizeType | "none" | "full";

type WeightType = "light" | "normal" | "medium" | "semibold" | "bold";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type {
  SizeType,
  VariantType,
  ColorSchemeType,
  RoundedType,
  WeightType,
  HeadingLevel,
};
