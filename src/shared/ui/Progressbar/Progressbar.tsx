import { useEffect, useState } from "react";
import styles from "./Progressbar.module.css";
import { joinClassNames } from "@shared";

interface ProgressbarProps {
  className?: string;
}

const Progressbar = ({ className }: ProgressbarProps) => {
  const classNames = joinClassNames([styles["progressbar"], className]);

  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) return;
    const timer = setInterval(() => {
      // 100 진행되면 interval 중지
      if (progress === 100) {
        clearInterval(timer);
        setProgress(0);
        setIsLoading(false);
        return;
      }

      setProgress((prev) => {
        if (prev !== 100) return prev + 10;
        else return prev;
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, [progress]);

  return (
    <div className={classNames}>
      <div className={styles["progress"]} style={{ width: `${progress}%` }} />
    </div>
  );
};

export default Progressbar;
