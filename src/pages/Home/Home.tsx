import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import AppBar from "../../components/AppBar/AppBar";
import SideBar from "../../components/CartSideBar/CartSideBar";
import CountriesTable from "../../components/CountriesTable/CountriesTable";
import { useAppDispatch } from "../../app/hooks";
import { getAllCountries } from "../../redux/selectors";
import { CountryItem } from "../../types.ts";
import { fetchAllCountries } from "../../redux/countriesSlice";
import Loading from "../../components/Loading/Loading";
import NotFound from "../../components/NotFound/NotFound";
import Footer from "../../components/Footer/Footer";
import { Box } from "@mui/material";

const Home = () => {
  const dispatch = useAppDispatch();
  const { countries, isLoading, filter } = useSelector(getAllCountries);
  const [drawerState, setDrawerState] = useState(false);
  let filteredCountries: CountryItem[] = countries;

  const handleDrawerState = (state: boolean) => {
    setDrawerState(state);
  };

  useEffect(() => {
    dispatch(fetchAllCountries());
  }, [dispatch]);

  if (filter) {
    filteredCountries = countries.filter((country: CountryItem) =>
      country.name.official.toLowerCase().includes(filter.toLowerCase())
    );
  }

  return (
    <>
      <AppBar onClick={handleDrawerState} drawerState={drawerState} />
      <SideBar onClick={handleDrawerState} drawerState={drawerState} />
      {isLoading && <Loading />}
      {!isLoading &&
        (filteredCountries.length > 0 ? (
          <Box sx={{ height: "100%", paddingBottom: "7rem" }}>
            <CountriesTable countriesList={filteredCountries} />
          </Box>
        ) : (
          <NotFound />
        ))}
      <Footer />
    </>
  );
};

export default Home;
