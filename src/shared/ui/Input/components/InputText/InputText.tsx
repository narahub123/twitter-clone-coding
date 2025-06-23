import styles from "./InputText.module.css";
import { joinClassNames } from "@shared";
import { useInputContext } from "@shared/ui/Input";

interface InputTextProps {
  className?: string;
}

const InputText = ({ className }: InputTextProps) => {
  const classNames = joinClassNames([styles["input__text"], className]);

  const { field, setIsFocused, value, onChange, disabled, placeholder } =
    useInputContext();

  return (
    <input
      className={classNames}
      placeholder={placeholder}
      id={`input-field-${field}`}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default InputText;
