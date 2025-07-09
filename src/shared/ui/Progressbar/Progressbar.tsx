import { useState } from "react";
import styles from "./Progressbar.module.css";
import { joinClassNames } from "@shared";

interface ProgressbarProps {
  className?: string;
}

const Progressbar = ({ className }: ProgressbarProps) => {
  const classNames = joinClassNames([styles["progressbar"], className]);

  const [progress, setProgress] = useState(50);

  return (
    <div className={classNames}>
      <div className={styles["progress"]} style={{ width: `${progress}%` }} />
    </div>
  );
};

export default Progressbar;
