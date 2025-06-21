import { useEffect, useRef, type ReactNode } from "react";
import { focusableSelectors } from "@shared/ui/FocusTrap";

interface FocusTrapProps {
  children: ReactNode;
  firstFocusIndex?: number; // 첫 포커스 요소 지정
}

const FocusTrap = ({ children, firstFocusIndex = 0 }: FocusTrapProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const focusableElems = container.querySelectorAll<HTMLElement>(
      focusableSelectors.join(",")
    );

    // 처음 포커스할 요소 지정
    const firstFocusElem = focusableElems[firstFocusIndex];

    firstFocusElem.focus();

    
  }, []);
  return <div ref={containerRef}>{children}</div>;
};

export default FocusTrap;
