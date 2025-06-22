import styles from "./InputLabel.module.css";
import { joinClassNames } from "@shared";
import { useInputContext } from "@shared/ui/Input";

interface InputLabelProps {
  className?: string;
}

const InputLabel = ({ className }: InputLabelProps) => {
  const classNames = joinClassNames([styles["input__label"], className]);

  const { label } = useInputContext();

  return <div className={classNames}>{label}</div>;
};

export default InputLabel;
