import styles from "./InputLabel.module.css";
import tokens from "@shared/styles/design-system.module.css";
import { joinClassNames, useAppSelector } from "@shared";
import { useInputContext } from "@shared/ui/Input";
import { selectColorTheme } from "@entities";

interface InputLabelProps {
  className?: string;
}

const InputLabel = ({ className }: InputLabelProps) => {
  const { label, disabled, isValid, value, isFocused, color } =
    useInputContext();

  const colorTheme = useAppSelector(selectColorTheme);

  const focusCond =
    isFocused || value
      ? color === "colorTheme"
        ? `${tokens[`text-${colorTheme}`]} ${styles["focused"]}`
        : `${tokens[`text-${color}`]} ${styles["focused"]}`
      : styles["unfocused"];

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
