import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CountryItem, CountrySliceState } from "../types.ts/CountryTypes";

const BASE_URL = "https://restcountries.com/v3.1";

const initialState: CountrySliceState = {
  countries: [],
  filter: "",
  isLoading: false,
  error: false,
  country: [],
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllCountries.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllCountries.fulfilled, (state, action) => {
      state.countries = action.payload;
      state.isLoading = false;
      state.error = false;
    });
    builder.addCase(fetchAllCountries.rejected, (state) => {
      state.countries = [];
      state.isLoading = false;
      state.error = true;
    });

    builder.addCase(fetchOneCountry.pending, (state) => {
      state.country = [];
      state.isLoading = true;
    });
    builder.addCase(fetchOneCountry.fulfilled, (state, action) => {
      state.country = action.payload;
      state.isLoading = false;
      state.error = false;
    });
    builder.addCase(fetchOneCountry.rejected, (state) => {
      state.country = [];
      state.isLoading = false;
      state.error = true;
    });
  },
});

export const fetchAllCountries = createAsyncThunk(
  "countries/fetchAllCountries",
  async () => {
    const response = await fetch(`${BASE_URL}/all`);
    const data: CountryItem[] = await response.json();

    return data;
  }
);

export const fetchOneCountry = createAsyncThunk(
  "country/fetchOneCountry",
  async (name: string) => {
    const response = await fetch(`${BASE_URL}/name/${name}?fullText=true`);
    const data: CountryItem[] = await response.json();

    return data;
  }
);

export const countriesReducer = countriesSlice.reducer;
export const { setFilter } =
  countriesSlice.actions;
