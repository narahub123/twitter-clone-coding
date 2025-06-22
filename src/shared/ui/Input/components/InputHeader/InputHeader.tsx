import styles from "./InputHeader.module.css";
import { joinClassNames } from "@shared";
import { InputCounter, InputLabel, useInputContext } from "@shared/ui/Input";

interface InputHeaderProps {
  className?: string;
}

const InputHeader = ({ className }: InputHeaderProps) => {
  const { isFocused, value } = useInputContext();

  const focusCond =
    isFocused || value ? styles["focused"] : styles["unfocused"];

  const classNames = joinClassNames([
    styles["input__header"],
    focusCond,
    className,
  ]);

  return (
    <div className={classNames}>
      <InputLabel />
      <InputCounter />
    </div>
  );
};

export default InputHeader;
