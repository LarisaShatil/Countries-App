import { store } from "../redux/store";
import { CartSliceState } from "./CartTypes";
import { CountrySliceState } from "./CountryTypes";
export * from './CountryTypes';


// global App state

export type AppState = {
  countryReducer: CountrySliceState;
  cartReducer: CartSliceState;
};

export type AppDispatch = typeof store.dispatch;

// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;