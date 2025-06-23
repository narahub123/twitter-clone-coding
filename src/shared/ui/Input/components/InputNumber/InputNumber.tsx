import styles from "./InputNumber.module.css";
import { joinClassNames } from "@shared";
import { useInputContext } from "@shared/ui/Input";

interface InputNumberProps {
  className?: string;
}

const InputNumber = ({ className }: InputNumberProps) => {
  const classNames = joinClassNames([styles["input__number"], className]);

  const {
    setIsFocused,
    field,
    value,
    onChange,
    disabled,
    placeholder,
    min,
    max,
  } = useInputContext();

  return (
    <input
      className={classNames}
      type="number"
      placeholder={placeholder}
      id={`input-field-${field}`}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      value={value}
      onChange={onChange}
      disabled={disabled}
      min={min}
      max={max}
    />
  );
};

export default InputNumber;
