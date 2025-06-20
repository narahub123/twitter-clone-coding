import { useEffect, useRef, type ReactNode } from "react";
import { focusableSelectors } from "../../data";

interface FocusTrapProps {
  children: ReactNode;
}

const FocusTrap = ({ children }: FocusTrapProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const focusableElems = container.querySelectorAll<HTMLElement>(
      focusableSelectors.join(",")
    );

    console.log(focusableElems);
  }, []);
  return <div ref={containerRef}>{children}</div>;
};

export default FocusTrap;
