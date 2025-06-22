import Input from "../components";
import styles from "./InputTestPage.module.css";
import { joinClassNames } from "@shared/utils";

interface InputTestPageProps {}

const InputTestPage = ({}: InputTestPageProps) => {
  const classNames = joinClassNames([styles["input__test__page"]]);

  return (
    <div className={classNames}>
      <Input field="test">
        <Input.Main>
          <Input.Header />
          <Input.Field>
            <Input.Text />
          </Input.Field>
        </Input.Main>
        <Input.Extra>추가</Input.Extra>
      </Input>
    </div>
  );
};

export default InputTestPage;
