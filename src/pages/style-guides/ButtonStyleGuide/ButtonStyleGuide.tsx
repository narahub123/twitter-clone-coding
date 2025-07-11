import { Button, colors, roundeds, sizes, variants } from "@shared";
import styles from "./ButtonStyleGuide.module.css";

interface ButtonStyleGuideProps {}

const ButtonStyleGuide = ({}: ButtonStyleGuideProps) => {
  return (
    <div className={styles["button__style__guide"]}>
      <table>
        <caption className={styles["caption"]}>Color & Variant</caption>
        <thead>
          <tr>
            <th className={styles["td"]}>color</th>
            {variants.map((variant) => {
              return (
                <th className={styles["td"]} key={variant}>
                  {variant}
                </th>
              );
            })}
            <th className={styles["td"]}>disabled</th>
            <th className={styles["td"]}>loading</th>
          </tr>
        </thead>
        <tbody>
          {colors.map((color) => {
            return (
              <tr key={color}>
                <td className={styles["td"]} style={{ color }}>
                  {color}
                </td>
                {variants.map((variant) => {
                  return (
                    <td className={styles["td"]} key={`${color}-${variant}`}>
                      <div className={styles["wrapper"]}>
                        <Button color={color} variant={variant} title="저장">
                          버튼
                        </Button>
                      </div>
                    </td>
                  );
                })}
                <td className={styles["td"]} style={{ color }}>
                  <div className={styles["wrapper"]}>
                    <Button color={color} variant="solid" disabled title="제출">
                      버튼
                    </Button>
                  </div>
                </td>
                <td className={styles["td"]} style={{ color }}>
                  <div className={styles["wrapper"]}>
                    <Button
                      color={color}
                      variant="solid"
                      loading
                      loadingText="로딩"
                      title="그냥"
                    >
                      버튼
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <table>
        <caption className={styles["caption"]}>size</caption>
        <thead>
          <tr>
            {sizes.map((size) => {
              return (
                <th className={styles["td"]} key={size}>
                  {size}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {sizes.map((size) => {
              return (
                <td className={styles["td"]} key={size}>
                  <div className={styles["wrapper"]}>
                    <Button size={size} color="green" title="저장">
                      {`버튼 (${size})`}
                    </Button>
                  </div>
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
      <table>
        <caption className={styles["caption"]}>Rounded</caption>
        <thead>
          <tr>
            {roundeds.map((rounded) => {
              return (
                <th className={styles["td"]} key={rounded}>
                  {rounded}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {roundeds.map((rounded) => {
              return (
                <td className={styles["td"]} key={rounded}>
                  <div className={styles["wrapper"]}>
                    <Button rounded={rounded} color="blue" size="md" title="">
                      {`버튼 (${rounded})`}
                    </Button>
                  </div>
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ButtonStyleGuide;
