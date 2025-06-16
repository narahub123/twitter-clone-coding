type SizeType = "xs" | "sm" | "md" | "lg" | "lx";

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

export type { SizeType, VariantType, ColorSchemeType, RoundedType };
