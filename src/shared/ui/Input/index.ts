import InputTestPage from "./_test";
import Input, { InputLabel, InputCounter } from "./components";
import { InputContext, InputContextProvider } from "./context";
import { useInputContext } from "./hooks";
import type { IInputContext } from "./types.ts";

export default Input;

export {
  // components
  InputTestPage,
  InputLabel,
  InputCounter,

  // context
  InputContext,
  InputContextProvider,

  // hooks
  useInputContext,
};

export type { IInputContext };
