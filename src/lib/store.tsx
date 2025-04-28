import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineReducers, combineSlices, configureStore } from "@reduxjs/toolkit";
import { countrySlice } from "./features/CountrySlice";


const rootReducer = combineSlices(
    countrySlice
);
export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};


export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
