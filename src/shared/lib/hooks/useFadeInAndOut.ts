import fade from "@shared/styles/animation/fade.module.css";
import { useEffect, useState } from "react";

const useFadeInAndOut = (
  ref: React.RefObject<HTMLElement | null>,
  isOpen: boolean,
  withFade: boolean = true
) => {
  // 렌더링 여부 상태 (fade 아웃 후에 true -> false 변경)
  const [shouldRender, setShouldRender] = useState(false);

  // isOpen이 true면 렌더링 시작
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    }
  }, [isOpen]);

  // transitionend 이벤트 리스너 등록하여
  // fade 아웃 애니메이션 끝나면 렌더링 중지
  useEffect(() => {
    if (!ref.current) return;

    const handleTransitionEnd = () => {
      setShouldRender(false);
    };

    const base = ref.current;

    base.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      base.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [isOpen]);

  // 렌더링 여부와 적용할 fade 클래스명 반환
  return {
    shouldRender: withFade ? shouldRender : isOpen,
    fade: withFade
      ? isOpen
        ? `${fade["fade--base"]} ${fade["fade--in"]}`
        : `${fade["fade--base"]} ${fade["fade--out"]}`
      : isOpen
      ? `${fade["fade--base"]} ${fade["fade--instant"]}`
      : "",
  };
};

export default useFadeInAndOut;
