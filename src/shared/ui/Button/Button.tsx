import type { ReactNode } from "react";
import styles from "./Button.module.css";
import tokens from "@shared/styles/design-system.module.css";
import {
  joinClassNames,
  type ColorSchemeType,
  type RoundedType,
  type SizeType,
  type VariantType,
} from "@shared";

interface ButtonProps {
  className?: string;
  disabled?: boolean;
  children: ReactNode;
  size?: SizeType;
  rounded?: RoundedType;
  color?: ColorSchemeType;
  variant?: VariantType;
}

const Button = ({
  className,
  disabled = false,
  size = "md",
  rounded = "md",
  color = "gray",
  variant = "solid",
  children,
}: ButtonProps) => {
  const classNames = joinClassNames([
    styles["button"],
    tokens[`button-size-${size}`],
    tokens[`rounded-${rounded}`],
    tokens[`${color}-${variant}`],
    className,
  ]);

  return (
    <button className={classNames} disabled={disabled} aria-disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
