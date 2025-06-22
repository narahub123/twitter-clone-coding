import type { ReactNode } from "react";
import InputContext from "./InputContext";
import type { IInputContext } from "@shared/ui/Input";

interface InputContextProviderProps {
  children: ReactNode;
  value: IInputContext;
}

const InputContextProvider = ({
  children,
  value,
}: InputContextProviderProps) => {
  return (
    <InputContext.Provider value={value}>{children}</InputContext.Provider>
  );
};

export default InputContextProvider;
