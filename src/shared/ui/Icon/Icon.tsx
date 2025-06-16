import type { ButtonHTMLAttributes, HTMLAttributes } from "react";
import styles from "./Icon.module.css";
import { icons, joinClassNames } from "@shared";

interface BaseProps {
  className?: string;
  iconName: keyof typeof icons;
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

type IconProps = ButtonIconProps | SpanIconProps;

const Icon = ({ className, onClick, iconName, ...rest }: IconProps) => {
  const classNames = joinClassNames([styles["icon"], className]);

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
