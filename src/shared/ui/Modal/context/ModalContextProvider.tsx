import type { ReactNode } from "react";
import { ModalContext, type IModalContext } from "@shared/ui/Modal";

interface ModalContextProviderProps {
  children: ReactNode;
  value: IModalContext;
}

const ModalContextProvider = ({
  children,
  value,
}: ModalContextProviderProps) => {
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export default ModalContextProvider;
