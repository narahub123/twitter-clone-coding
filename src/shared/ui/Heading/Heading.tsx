import type { ReactNode } from "react";
import styles from "./Heading.module.css";
import { joinClassNames } from "@shared";

interface HeadingProps {
  className?: string;
  children: ReactNode;
}

const Heading = ({ className, children }: HeadingProps) => {
  const classNames = joinClassNames([styles["heading"], className]);

  return <div className={classNames}>{children}</div>;
};

export default Heading;
