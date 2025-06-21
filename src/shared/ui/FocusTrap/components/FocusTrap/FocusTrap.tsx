import { useEffect, useRef, type ReactNode } from "react";
import { focusableSelectors } from "@shared/ui/FocusTrap";

interface FocusTrapProps {
  children: ReactNode;
  firstFocusIndex?: number; // 첫 포커스 요소 지정
  onEscapeFocusTrap?: () => void;
}

const FocusTrap = ({
  children,
  firstFocusIndex = 0,
  onEscapeFocusTrap,
}: FocusTrapProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const focusableElems = container.querySelectorAll<HTMLElement>(
      focusableSelectors.join(",")
    );

    // focusableElems가 없는 경우 종료
    if (focusableElems.length === 0) return;

    // 처음 포커스할 요소 지정
    const firstFocusElem = focusableElems[firstFocusIndex] ?? focusableElems[0];

    // 포커스 적용
    firstFocusElem.focus();

    //
    const firstFocusableElem = focusableElems[0];
    const lastFocusableElem = focusableElems[focusableElems.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab" && e.key !== "Escape") return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusableElem) {
          e.preventDefault();
          lastFocusableElem.focus();
        }
      } else {
        if (document.activeElement === lastFocusableElem) {
          e.preventDefault();
          firstFocusableElem.focus();
        }
      }

      if (e.key === "Escape" && onEscapeFocusTrap) {
        e.preventDefault();
        onEscapeFocusTrap();
      }
    };

    container.addEventListener("keydown", handleKeyDown);

    return () => {
      container.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return <div ref={containerRef}>{children}</div>;
};

export default FocusTrap;
