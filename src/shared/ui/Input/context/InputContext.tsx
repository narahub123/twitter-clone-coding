import { createContext } from "react";
import type { IInputContext } from "../types.ts";

const InputContext = createContext<IInputContext | null>(null);

export default InputContext;
