import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import styles from "./Heading.module.css";
import tokens from "@shared/styles/design-system.module.css";
import {
  joinClassNames,
  type ColorSchemeType,
  type HeadingLevel,
  type WeightType,
} from "@shared";

interface BaseProps {
  className?: string;
  children: ReactNode;
  as?: HeadingLevel;
  weight?: WeightType;
  color?: ColorSchemeType;
  truncate?: boolean;
}

type HeadingProps = BaseProps & HTMLAttributes<HTMLHeadingElement>;

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      className,
      children,
      as = "h1",
      weight = "bold",
      color = "gray",
      truncate = false,
      ...rest
    },
    ref
  ) => {
    const classNames = joinClassNames([
      styles["heading"],
      tokens[`heading-${as}`],
      tokens[`font-weight-${weight}`],
      tokens[`text-${color}`],
      truncate ? styles["truncate"] : "",
      className,
    ]);

    const Component = as;

    const { style, ...headingRest } = rest;

    return (
      <Component
        ref={ref}
        className={classNames}
        style={style}
        {...headingRest}
      >
        {children}
      </Component>
    );
  }
);

export default Heading;
