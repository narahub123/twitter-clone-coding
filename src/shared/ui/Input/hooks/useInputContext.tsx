import { useContext } from "react";
import { InputContext } from "../context";

const useInputContext = () => {
  const context = useContext(InputContext);

  if (!context) throw new Error("에러");

  return context;
};

export default useInputContext;
