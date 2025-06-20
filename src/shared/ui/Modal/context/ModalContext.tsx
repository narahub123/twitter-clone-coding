import { createContext } from "react";
import type { IModalContext } from "../types";

const ModalContext = createContext<IModalContext | null>(null);

export default ModalContext;
