import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import styles from "./Description.module.css";
import tokens from "@shared/styles/design-system.module.css";
import { joinClassNames, type SizeType } from "@shared";

interface BaseProps {
  className?: string;
  children: ReactNode;
  fontSize?: SizeType;
  truncate?: boolean;
}

type DescriptionProps = BaseProps & HTMLAttributes<HTMLParagraphElement>;

const Description = forwardRef<HTMLParagraphElement, DescriptionProps>(
  (
    { className, children, fontSize = "sm", truncate = false, ...rest },
    ref
  ) => {
    const classNames = joinClassNames([
      styles["description"],
      tokens[`text-font-size-${fontSize}`],
      truncate ? styles["truncate"] : "",
      className,
    ]);

    const { style, ...descriptionRest } = rest;
    return (
      <p className={classNames} ref={ref} {...descriptionRest} style={style}>
        {children}
      </p>
    );
  }
);

export default Description;
