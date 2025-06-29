import { useDispatch } from "react-redux";
import type { AppDispatch } from "@app";

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
