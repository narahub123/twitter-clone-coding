import type {
  ColorSchemeType,
  HeadingLevel,
  RoundedType,
  SizeType,
  VariantType,
  WeightType,
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

const weights: WeightType[] = ["light", "normal", "medium", "semibold", "bold"];

const headings: HeadingLevel[] = ["h1", "h2", "h3", "h4", "h5", "h6"];

const colorRGB: Record<ColorSchemeType, string> = {
  gray: "0, 0, 0",
  red: "255, 0, 0",
  green: "0, 128, 0",
  blue: "0, 0, 255",
  teal: "0, 128, 128",
  pink: "255, 192, 203",
  purple: "128, 0, 128",
  cyan: "0, 255, 255",
  orange: "255, 165, 0",
  yellow: "255, 255, 0",
};

export { colors, variants, sizes, roundeds, weights, headings, colorRGB };
