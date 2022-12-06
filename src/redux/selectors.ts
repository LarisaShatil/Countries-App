export const getCountries = (state: { countries: { countries: [] } }) =>
  state.countries.countries;
export const getFavourites = (state: { favourites: { favourites: [] } }) =>
  state.favourites.favourites;
export const getOneCountry = (state: { countries: { country: [] } }) =>
  state.countries.country;
export const getAllCountries = (state: { countries: any; }) => state.countries;
export const getIsLoading = (state: {
  countries: {
    isLoading: Boolean;
  };
}) => state.countries.isLoading;
export const getFilter = (state: {
  countries: {
    filter: string;
  };
}) => state.countries.filter;
export const getCartCountries = ((state: { cart: { cart: [] } }) => state.cart.cart);

