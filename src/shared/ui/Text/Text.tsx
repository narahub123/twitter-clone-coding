import type { ReactNode } from "react";
import styles from "./Text.module.css";
import { joinClassNames } from "@shared";

interface TextProps {
  className?: string;
  children: ReactNode;
}

const Text = ({ className, children }: TextProps) => {
  const classNames = joinClassNames([styles["text"], className]);

  return <p className={classNames}>{children}</p>;
};

export default Text;
