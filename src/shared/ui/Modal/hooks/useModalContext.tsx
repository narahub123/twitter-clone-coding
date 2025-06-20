import { useContext } from "react";
import { ModalContext } from "@shared/ui/Modal";

const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("에러");
  }

  return context;
};

export default useModalContext;
