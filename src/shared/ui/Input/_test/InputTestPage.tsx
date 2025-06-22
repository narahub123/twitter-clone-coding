import styles from "./InputTestPage.module.css";
import { joinClassNames } from "@shared/utils";

interface InputTestPageProps {}

const InputTestPage = ({}: InputTestPageProps) => {
  const classNames = joinClassNames([styles["input__test__page"]]);

  return <div className={classNames}>InputTestPage</div>;
};

export default InputTestPage;
