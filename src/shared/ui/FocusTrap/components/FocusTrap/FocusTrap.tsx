import type { ReactNode } from "react";

interface FocusTrapProps {
  children: ReactNode;
}

const FocusTrap = ({ children }: FocusTrapProps) => {
  return <div>{children}</div>;
};

export default FocusTrap;
