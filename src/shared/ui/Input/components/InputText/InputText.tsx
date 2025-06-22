import styles from "./InputText.module.css";
import { joinClassNames } from "@shared";

interface InputTextProps {
  className?: string;
}

const InputText = ({ className }: InputTextProps) => {
  const classNames = joinClassNames([styles["input__text"], className]);

  return <input className={classNames} placeholder="입력해주세요" />;
};

export default InputText;
