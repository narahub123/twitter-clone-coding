import type {
  ColorSchemeType,
  RoundedType,
  SizeType,
  VariantType,
} from "@shared/types";

const colors: ColorSchemeType[] = [
  "gray",
  "red",
  "green",
  "blue",
  "teal",
  "pink",
  "purple",
  "cyan",
  "orange",
  "yellow",
];

const variants: VariantType[] = [
  "solid",
  "subtle",
  "surface",
  "outline",
  "ghost",
  "plain",
];

const sizes: SizeType[] = ["xs", "sm", "md", "lg", "xl"];

const roundeds: RoundedType[] = ["none", "xs", "sm", "md", "lg", "xl", "full"];

export { colors, variants, sizes, roundeds };
