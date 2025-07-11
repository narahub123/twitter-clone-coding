import { useState, type ReactNode } from "react";
import styles from "./InputContainer.module.css";
import { joinClassNames, type ColorSchemeType } from "@shared";
import { InputContextProvider, type IInputContext } from "@shared/ui/Input";

interface InputContainerProps {
  className?: string;
  disabled?: boolean;
  children: ReactNode;
  field: string;
  label: string;
  value: string;
  maxLength?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid?: boolean;
  color?: ColorSchemeType | "colorTheme";
  placeholder?: string;
  min?: number;
  max?: number;
}

const InputContainer = ({
  className,
  disabled = false,
  children,
  field,
  label,
  value,
  maxLength,
  onChange,
  isValid = false,
  color = "blue",
  placeholder,
  min,
  max,
}: InputContainerProps) => {
  const classNames = joinClassNames([styles["input__container"], className]);

  const [isFocused, setIsFocused] = useState(false);

  const context: IInputContext = {
    disabled,
    isFocused,
    setIsFocused,
    field,
    label,
    value,
    maxLength,
    onChange,
    isValid,
    color,
    placeholder,
    min,
    max,
  };

  console.log(isFocused);

  return (
    <InputContextProvider value={context}>
      <div className={classNames}>{children}</div>
    </InputContextProvider>
  );
};

export default InputContainer;
