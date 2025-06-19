import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import styles from "./Text.module.css";
import tokens from "@shared/styles/design-system.module.css";
import {
  joinClassNames,
  type ColorSchemeType,
  type SizeType,
  type WeightType,
} from "@shared";

interface BaseProps {
  className?: string;
  children: ReactNode;
  fontSize?: SizeType;
  fontWeight?: WeightType;
  color?: ColorSchemeType;
  truncate?: boolean;
}

type TextProps = BaseProps & HTMLAttributes<HTMLParagraphElement>;

const Text = forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      className,
      children,
      fontSize = "md",
      fontWeight = "normal",
      color = "gray",
      truncate = false,
      ...rest
    },
    ref
  ) => {
    const classNames = joinClassNames([
      styles["text"],
      tokens[`text-font-size-${fontSize}`],
      tokens[`font-weight-${fontWeight}`],
      tokens[`text-${color}`],
      truncate ? styles["truncate"] : "",
      className,
    ]);

    const { style, ...textRest } = rest;

    return (
      <p className={classNames} ref={ref} style={style} {...textRest}>
        {children}
      </p>
    );
  }
);

export default Text;
