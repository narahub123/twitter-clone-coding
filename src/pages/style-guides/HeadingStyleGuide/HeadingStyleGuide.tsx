import styles from "./HeadingStyleGuide.module.css";
import { colors, sizes, Heading, weights, headings } from "@shared";

interface HeadingStyleGuideProps {}

const HeadingStyleGuide = ({}: HeadingStyleGuideProps) => {
  return (
    <div className={styles["heading__style__guide"]}>
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
                    <Heading color={color}>텍스트</Heading>
                  </div>
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
      <table>
        <caption className={styles["caption"]}>Type</caption>
        <thead>
          <tr>
            {headings.map((heading) => {
              return (
                <th className={styles["td"]} key={heading}>
                  {heading}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {headings.map((heading) => {
              return (
                <td className={styles["td"]} key={heading}>
                  <div className={styles["wrapper"]}>
                    <Heading as={heading}>테스트</Heading>
                  </div>
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
      <table>
        <caption className={styles["caption"]}>Weight</caption>
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
                    <Heading weight={weight} color="green">
                      테스트
                    </Heading>
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

export default HeadingStyleGuide;
