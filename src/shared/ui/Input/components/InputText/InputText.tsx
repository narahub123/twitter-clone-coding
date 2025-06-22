import styles from "./InputText.module.css";
import { joinClassNames } from "@shared";
import { useInputContext } from "@shared/ui/Input";

interface InputTextProps {
  className?: string;
}

const InputText = ({ className }: InputTextProps) => {
  const classNames = joinClassNames([styles["input__text"], className]);

  const { field, setIsFocused } = useInputContext();

  return (
    <input
      className={classNames}
      placeholder="입력해주세요"
      id={`input-field-${field}`}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};

export default InputText;
