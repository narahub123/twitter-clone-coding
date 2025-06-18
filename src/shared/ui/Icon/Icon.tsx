import styles from "./Icon.module.css";
import tokens from "../../styles/design-system.module.css";
import type { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { icons, joinClassNames } from "@shared";
import type {
  ColorSchemeType,
  RoundedType,
  SizeType,
  VariantType,
} from "@shared";

interface BaseProps {
  className?: string;
  iconName: keyof typeof icons;
  size?: SizeType;
  rounded?: RoundedType;
  variant?: VariantType;
  color?: ColorSchemeType;
}

type ButtonIconProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    onClick?: (...args: any[]) => any;
    disabled?: boolean;
  };

type SpanIconProps = BaseProps &
  HTMLAttributes<HTMLSpanElement> & {
    onClick?: undefined;
  };

type IconProps = SpanIconProps | ButtonIconProps;

const Icon = ({
  className,
  onClick,
  iconName,
  size = "md",
  rounded = "full",
  variant = "solid",
  color = "gray",
  ...rest
}: IconProps) => {
  const classNames = joinClassNames([
    styles["icon"],
    tokens[`size-${size}`],
    tokens[`rounded-${rounded}`],
    tokens[`${color}-${variant}`],
    className,
  ]);

  const Inner = icons[iconName];

  if (typeof onClick === "function") {
    const { disabled = false, ...buttonProps } =
      rest as ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button className={classNames} disabled={disabled} {...buttonProps}>
        <Inner />
      </button>
    );
  } else {
    const { ...buttonProps } = rest as HTMLAttributes<HTMLSpanElement>;
    return (
      <span className={classNames} {...buttonProps}>
        <Inner />
      </span>
    );
  }
};

export default Icon;
