import styles from "./Icon.module.css";
import { joinClassNames } from "@shared";

interface IconProps {
  className?: string;
  disabled?: boolean;
}

const Icon = ({ className, disabled = false }: IconProps) => {
  const classNames = joinClassNames([styles["icon"], className]);

  return <div className={classNames}>Icon</div>;
};

export default Icon;
