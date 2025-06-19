import type { ReactNode } from "react";
import styles from "./Text.module.css";
import tokens from "@shared/styles/design-system.module.css";
import {
  joinClassNames,
  type ColorSchemeType,
  type SizeType,
  type WeightType,
} from "@shared";

interface TextProps {
  className?: string;
  children: ReactNode;
  fontSize?: SizeType;
  fontWeight?: WeightType;
  color?: ColorSchemeType;
}

const Text = ({
  className,
  children,
  fontSize = "md",
  fontWeight = "normal",
  color = "gray",
}: TextProps) => {
  const classNames = joinClassNames([
    styles["text"],
    tokens[`text-font-size-${fontSize}`],
    tokens[`font-weight-${fontWeight}`],
    tokens[`text-${color}`],
    className,
  ]);

  return <p className={classNames}>{children}</p>;
};

export default Text;
