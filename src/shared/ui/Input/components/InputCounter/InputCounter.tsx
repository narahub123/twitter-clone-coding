import styles from "./InputCounter.module.css";
import { joinClassNames } from "@shared";

interface InputCounterProps {
  className?: string;
}

const InputCounter = ({ className }: InputCounterProps) => {
  const classNames = joinClassNames([styles["input__counter"], className]);

  return <div className={classNames}>InputCounter</div>;
};

export default InputCounter;
