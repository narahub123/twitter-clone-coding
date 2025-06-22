import Input from "../components";
import styles from "./InputTestPage.module.css";
import { joinClassNames } from "@shared/utils";

interface InputTestPageProps {}

const InputTestPage = ({}: InputTestPageProps) => {
  const classNames = joinClassNames([styles["input__test__page"]]);

  return (
    <div className={classNames}>
      <Input>
        <Input.Main>메인</Input.Main>
        <Input.Extra>추가</Input.Extra>
      </Input>
    </div>
  );
};

export default InputTestPage;
