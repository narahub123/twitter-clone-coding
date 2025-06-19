import type { HTMLAttributes, ReactNode } from "react";
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
}

type HeadingProps = BaseProps & HTMLAttributes<HTMLHeadingElement>;

const Heading = ({
  className,
  children,
  as = "h1",
  weight = "bold",
  color = "gray",
  ...rest
}: HeadingProps) => {
  const classNames = joinClassNames([
    styles["heading"],
    tokens[`heading-${as}`],
    tokens[`font-weight-${weight}`],
    tokens[`text-${color}`],
    className,
  ]);

  const Component = as;

  const { style, ...headingRest } = rest;

  return (
    <Component className={classNames} style={style} {...headingRest}>
      {children}
    </Component>
  );
};

export default Heading;
