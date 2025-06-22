import styles from "./InputHeader.module.css";
import { joinClassNames } from "@shared";
import { InputCounter, InputLabel } from "@shared/ui/Input";

interface InputHeaderProps {
  className?: string;
}

const InputHeader = ({ className }: InputHeaderProps) => {
  const classNames = joinClassNames([styles["input__header"], className]);

  return (
    <div className={classNames}>
      <InputLabel />
      <InputCounter />
    </div>
  );
};

export default InputHeader;
