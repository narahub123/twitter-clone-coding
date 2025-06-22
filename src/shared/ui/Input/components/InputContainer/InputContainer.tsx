import { useState, type ReactNode } from "react";
import styles from "./InputContainer.module.css";
import { joinClassNames } from "@shared";
import { InputContextProvider, type IInputContext } from "@shared/ui/Input";

interface InputContainerProps {
  className?: string;
  disabled?: boolean;
  children: ReactNode;
  field: string;
}

const InputContainer = ({
  className,
  disabled = false,
  children,
  field,
}: InputContainerProps) => {
  const classNames = joinClassNames([styles["input__container"], className]);

  const [isFocused, setIsFocused] = useState(false);

  const value: IInputContext = {
    disabled,
    isFocused,
    setIsFocused,
    field,
  };

  console.log(isFocused);

  return (
    <InputContextProvider value={value}>
      <div className={classNames}>{children}</div>
    </InputContextProvider>
  );
};

export default InputContainer;
