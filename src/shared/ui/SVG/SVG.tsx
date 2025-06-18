import type { JSX, ReactNode } from "react";

// SVG 컴포넌트에 전달할 props 타입 정의
interface SVGProps {
  children?: ReactNode | ReactNode[]; // svg 내부에 들어갈 요소들
  svgProps?: Omit<React.SVGProps<SVGSVGElement>, "children">; // svg에 적용할 속성들 (children 제외)
}

// 재사용 가능한 SVG 컴포넌트
const SVG = ({ children, svgProps }: SVGProps): JSX.Element => {
  return <svg {...svgProps}>{children}</svg>; // 전달받은 props와 children을 사용해 svg 요소 렌더링
};

export default SVG;
