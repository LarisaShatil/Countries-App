import { useDispatch } from "react-redux";
import { AppDispatch } from "../types.ts";

// instead of plain `useDispatch`
export const useAppDispatch: () => AppDispatch = useDispatch;
