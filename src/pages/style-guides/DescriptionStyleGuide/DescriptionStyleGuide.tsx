import { Description, sizes } from "@shared";
import styles from "./DescriptionStyleGuide.module.css";

interface DescriptionStyleGuideProps {}

const DescriptionStyleGuide = ({}: DescriptionStyleGuideProps) => {
  return (
    <div className={styles["description__style__guide"]}>
      <table>
        <caption className={styles["caption"]}>Size</caption>
        <thead>
          <tr>
            {sizes.map((size) => {
              return <th key={size}>{size}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {sizes.map((size) => {
              return (
                <td className={styles["td"]} key={`${size}`}>
                  <div className={styles["wrapper"]}>
                    <Description fontSize={size}>텍스트</Description>
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

export default DescriptionStyleGuide;
