import { colors, Icon, roundeds, sizes, variants } from "@shared";
import styles from "./IconStyleGuide.module.css";

interface IconStyleGuideProps {}

const IconStyleGuide = ({}: IconStyleGuideProps) => {
  return (
    <div className={styles["icon__style__guide"]}>
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
                        <Icon
                          iconName="close"
                          color={color}
                          variant={variant}
                          onClick={() => {}}
                        />
                      </div>
                    </td>
                  );
                })}
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
                    <Icon iconName="close" size={size} color="green" />
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
                    <Icon
                      iconName="close"
                      rounded={rounded}
                      color="blue"
                      size="xl"
                    />
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

export default IconStyleGuide;
