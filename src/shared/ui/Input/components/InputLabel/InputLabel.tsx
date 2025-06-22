import styles from "./InputLabel.module.css";
import { joinClassNames } from "@shared";

interface InputLabelProps {
  className?: string;
}

const InputLabel = ({ className }: InputLabelProps) => {
  const classNames = joinClassNames([styles["input__label"], className]);

  return <div className={classNames}>InputLabel</div>;
};

export default InputLabel;
