import styles from "./InputCounter.module.css";
import { joinClassNames } from "@shared";
import { useInputContext } from "@shared/ui/Input";

interface InputCounterProps {
  className?: string;
}

const InputCounter = ({ className }: InputCounterProps) => {
  const classNames = joinClassNames([styles["input__counter"], className]);

  const { value, maxLength, isFocused } = useInputContext();

  if (!maxLength || !isFocused) return null;

  return <div className={classNames}>{`${value.length} / ${maxLength}`}</div>;
};

export default InputCounter;
