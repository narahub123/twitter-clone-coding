import { useState } from "react";
import Input from "../components";
import styles from "./InputTestPage.module.css";
import { joinClassNames } from "@shared/utils";
import { colors } from "@shared/data";
import FocusTrap from "@shared/ui/FocusTrap";

interface InputTestPageProps {}

const InputTestPage = ({}: InputTestPageProps) => {
  const classNames = joinClassNames([styles["input__test__page"]]);

  const [value, setValue] = useState("테슷흐");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setValue(value);
  };

  return (
    <FocusTrap>
      <div className={classNames}>
        {colors.map((color) => {
          ("");
          return (
            <Input
              field="test"
              value={value}
              onChange={handleChange}
              label="테스트"
              maxLength={250}
              // disabled
              color={color}
              isValid
            >
              <Input.Main>
                <Input.Header />
                <Input.Field>
                  <Input.Text />
                </Input.Field>
              </Input.Main>
              <Input.Extra>추가</Input.Extra>
            </Input>
          );
        })}
        <Input
          field="test"
          value={value}
          onChange={handleChange}
          label="테스트"
          maxLength={250}
          disabled
          isValid
        >
          <Input.Main>
            <Input.Header />
            <Input.Field>
              <Input.Text />
            </Input.Field>
          </Input.Main>
          <Input.Extra>추가</Input.Extra>
        </Input>
      </div>
    </FocusTrap>
  );
};

export default InputTestPage;
