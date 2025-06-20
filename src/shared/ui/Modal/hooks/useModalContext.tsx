import { useContext } from "react";
import { ModalContext } from "@shared/ui/Modal";

const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    return;
  }

  return context;
};

export default useModalContext;
