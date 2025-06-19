import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Heading.module.css";
import { joinClassNames } from "@shared";

interface BaseProps {
  className?: string;
  children: ReactNode;
}

type HeadingProps = BaseProps & HTMLAttributes<HTMLHeadingElement>;

const Heading = ({ className, children }: HeadingProps) => {
  const classNames = joinClassNames([styles["heading"], className]);

  return <h1 className={classNames}>{children}</h1>;
};

export default Heading;
