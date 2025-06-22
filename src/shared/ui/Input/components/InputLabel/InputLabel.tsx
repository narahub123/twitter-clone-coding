import styles from "./InputLabel.module.css";
import { joinClassNames } from "@shared";
import { useInputContext } from "@shared/ui/Input";

interface InputLabelProps {
  className?: string;
}

const InputLabel = ({ className }: InputLabelProps) => {
  const { label, disabled } = useInputContext();

  const classNames = joinClassNames([
    styles["input__label"],
    disabled ? styles["disabled"] : "",
    className,
  ]);

  return <div className={classNames}>{label}</div>;
};

export default InputLabel;
