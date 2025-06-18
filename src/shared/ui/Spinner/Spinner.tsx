import styles from "./Spinner.module.css";
import { convertToPx, SVG } from "@shared";

interface SpinnerProps {
  size?: number; // 스피너 크기 (기본 1rem)
  spinnerWidth?: number; // 스피너 두께 (기본 size/6)
  unit?: "px" | "rem"; // 크기 단위 (기본 rem)
  color?: string; // 스피너 색상 (기본 currentColor)
  loadingText?: string; // aria-label용 로딩 텍스트 (기본 "로딩 중")
}

const Spinner = ({
  size = 1,
  spinnerWidth = size / 6,
  unit = "rem",
  color = "currentColor",
  loadingText = "로딩 중",
}: SpinnerProps) => {
  const convertedSize = convertToPx(size, unit);
  const convertedWidth = convertToPx(spinnerWidth, unit);

  const dashLength = ((convertedSize * Math.PI) / 6) * 4;
  const gapLength = ((convertedSize * Math.PI) / 6) * 2;

  return (
    <SVG
      svgProps={{
        width: `${size}${unit}`,
        height: `${size}${unit}`,
        viewBox: `0 0 ${convertedSize} ${convertedSize}`,
        role: "img",
        "aria-label": loadingText,
      }}
    >
      <circle
        className={styles.spinner}
        cx={convertedSize / 2}
        cy={convertedSize / 2}
        r={(convertedSize - convertedWidth) / 2}
        fill="none"
        stroke={color}
        strokeWidth={convertedWidth}
        style={{ strokeDasharray: `${dashLength}, ${gapLength}` }}
      />
    </SVG>
  );
};

export default Spinner;
