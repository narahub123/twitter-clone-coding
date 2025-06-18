import styles from "./Icon.module.css";
import tokens from "../../styles/design-system.module.css";
import {
  forwardRef,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type Ref,
} from "react";
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
    title: string;
  };

type SpanIconProps = BaseProps &
  HTMLAttributes<HTMLSpanElement> & {
    onClick?: undefined;
  };

type IconProps = SpanIconProps | ButtonIconProps;

const Icon = forwardRef<HTMLButtonElement | HTMLSpanElement, IconProps>(
  (
    {
      className,
      onClick,
      iconName,
      size = "md",
      rounded = "full",
      variant = "solid",
      color = "gray",
      ...rest
    },
    ref
  ) => {
    const classNames = joinClassNames([
      styles["icon"],
      tokens[`icon-size-${size}`],
      tokens[`rounded-${rounded}`],
      tokens[`${color}-${variant}`],
      className,
    ]);

    const Inner = icons[iconName];

    if (typeof onClick === "function") {
      const {
        disabled = false,
        onClick,
        title,
        ...buttonProps
      } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
      return (
        <button
          className={classNames}
          disabled={disabled}
          onClick={onClick}
          ref={ref as Ref<HTMLButtonElement>}
          data-title={variant === "plain" ? undefined : title}
          {...buttonProps}
        >
          <Inner />
        </button>
      );
    } else {
      const { ...buttonProps } = rest as HTMLAttributes<HTMLSpanElement>;
      return (
        <span
          className={classNames}
          ref={ref as Ref<HTMLSpanElement>}
          aria-hidden="true"
          {...buttonProps}
        >
          <Inner />
        </span>
      );
    }
  }
);

export default Icon;
