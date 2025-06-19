import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import styles from "./Button.module.css";
import tokens from "@shared/styles/design-system.module.css";
import {
  joinClassNames,
  Spinner,
  type ColorSchemeType,
  type RoundedType,
  type SizeType,
  type VariantType,
} from "@shared";

interface BaseProps {
  className?: string;
  disabled?: boolean;
  children: ReactNode;
  size?: SizeType;
  rounded?: RoundedType;
  color?: ColorSchemeType;
  variant?: VariantType;
  loading?: boolean;
  loadingText?: string;
  title: string;
}

type ButtonProps = BaseProps & HTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      disabled = false,
      size = "md",
      rounded = "md",
      color = "gray",
      variant = "solid",
      children,
      loading = false,
      loadingText,
      title,
      ...rest
    },
    ref
  ) => {
    const classNames = joinClassNames([
      styles["button"],
      tokens[`button-size-${size}`],
      tokens[`rounded-${rounded}`],
      tokens[`${color}-${variant}`],
      loading || disabled ? tokens[`${color}-disabled`] : "",
      className,
    ]);

    return (
      <button
        className={classNames}
        disabled={disabled}
        aria-disabled={disabled}
        ref={ref}
        // loading 중이거나 disabled 인 경우에는 사용 안됨
        data-title={loading || disabled ? undefined : title}
        aria-label={loading || disabled ? undefined : title}
        {...rest}
      >
        {loading ? (
          <div className={styles["loading__wrapper"]}>
            <Spinner loadingText={loadingText} />
            <span>{loadingText}</span>
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
);

export default Button;
