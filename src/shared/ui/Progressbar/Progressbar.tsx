import { useEffect, useState } from "react";
import styles from "./Progressbar.module.css";
import tokens from "@shared/styles/design-system.module.css";
import { joinClassNames, type ColorSchemeType } from "@shared";

interface ProgressbarProps {
  className?: string;
  step?: number;
  duration?: number;
  isLoading: boolean;
  color?: ColorSchemeType;
  ariaLabel?: string;
}

const Progressbar = ({
  className,
  step = 20,
  duration = 300,
  isLoading,
  color = "blue",
  ariaLabel = "로딩중",
}: ProgressbarProps) => {
  const classNames = joinClassNames([styles["progressbar"], className]);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) {
      setProgress(0);
      return;
    }
    const timer = setInterval(() => {
      // progress가 100 이상이면 interval 중지
      if (progress >= 100) {
        clearInterval(timer);
        setProgress(0);
        return;
      }

      setProgress((prev) => {
        if (prev < 100) return prev + step >= 100 ? 100 : prev + step;
        else return prev;
      });
    }, duration);

    return () => {
      clearInterval(timer);
    };
  }, [isLoading]);

  return (
    <div
      className={classNames}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress}
      aria-busy={isLoading}
      aria-label={ariaLabel}
    >
      <div
        aria-hidden={true}
        className={joinClassNames([styles["progress"], tokens[`bg-${color}`]])}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default Progressbar;
