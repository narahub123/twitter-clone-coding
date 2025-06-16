import type { ButtonHTMLAttributes, HTMLAttributes } from "react";
import styles from "./Icon.module.css";
import { joinClassNames } from "@shared";

interface BaseProps {
  className?: string;
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

const Icon = ({ className, onClick, ...rest }: IconProps) => {
  const classNames = joinClassNames([styles["icon"], className]);

  if (typeof onClick === "function") {
    const { disabled = false, ...buttonProps } =
      rest as ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button className={classNames} disabled={disabled} {...buttonProps}>
        Icon
      </button>
    );
  } else {
    const { ...buttonProps } = rest as HTMLAttributes<HTMLSpanElement>;
    return (
      <span className={classNames} {...buttonProps}>
        Icon
      </span>
    );
  }
};

export default Icon;
