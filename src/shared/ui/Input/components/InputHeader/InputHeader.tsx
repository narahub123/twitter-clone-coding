import styles from "./InputHeader.module.css";
import { joinClassNames } from "@shared";

interface InputHeaderProps {
  className?: string;
}

const InputHeader = ({ className }: InputHeaderProps) => {
  const classNames = joinClassNames([styles["input__header"], className]);

  return <div className={classNames}>InputHeader</div>;
};

export default InputHeader;
