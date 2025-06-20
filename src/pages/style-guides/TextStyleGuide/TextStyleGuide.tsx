import { colors, sizes, Text, weights } from "@shared";
import styles from "./TextStyleGuide.module.css";

interface TextStyleGuideProps {}

const TextStyleGuide = ({}: TextStyleGuideProps) => {
  return (
    <div className={styles["text__style__TextStyleGuideguide"]}>
      <table>
        <caption className={styles["caption"]}>Color</caption>
        <thead>
          <tr>
            {colors.map((color) => {
              return (
                <th key={color} style={{ color }}>
                  {color}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {colors.map((color) => {
              return (
                <td className={styles["td"]} key={`${color}`}>
                  <div className={styles["wrapper"]}>
                    <Text color={color}>텍스트</Text>
                  </div>
                </td>
              );
            })}
          </tr>
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
                    <Text fontSize={size}>테스트</Text>
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
            {weights.map((weight) => {
              return (
                <th className={styles["td"]} key={weight}>
                  {weight}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {weights.map((weight) => {
              return (
                <td className={styles["td"]} key={weight}>
                  <div className={styles["wrapper"]}>
                    <Text fontWeight={weight} fontSize="xl" color="green">
                      테스트
                    </Text>
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

export default TextStyleGuide;
