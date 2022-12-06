import { createSlice } from "@reduxjs/toolkit";
import { FavouritesSliceState } from "../types.ts/FavouritesTypes";

const initialState: FavouritesSliceState = {
  favourites: [],
};

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addToFavourites: (state, action) => {
      state.favourites = [...state.favourites, action.payload];
    },
    deleteFromFavourites: (state, action) => {
      state.favourites = state.favourites.filter((it) => it !== action.payload);
    },
  },
});

export const favouritesReducer = favouritesSlice.reducer;
export const { addToFavourites, deleteFromFavourites } =
  favouritesSlice.actions;
