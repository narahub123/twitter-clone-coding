import styles from "./InputLabel.module.css";
import { joinClassNames } from "@shared";
import { useInputContext } from "@shared/ui/Input";

interface InputLabelProps {
  className?: string;
}

const InputLabel = ({ className }: InputLabelProps) => {
  const { label, disabled, isValid, value, isFocused } = useInputContext();

  const focusCond =
    isFocused || value ? styles["focused"] : styles["unfocused"];

  const validCond = isValid || !value ? "" : styles["invalid"];

  const classNames = joinClassNames([
    styles["input__label"],
    focusCond,
    validCond,
    disabled ? styles["disabled"] : "",
    className,
  ]);

  return <div className={classNames}>{label}</div>;
};

export default InputLabel;
