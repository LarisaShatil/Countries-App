import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { useAppDispatch } from "../../app/hooks";
import CountryCard from "../../components/CountryCard/CountryCard";
import Loading from "../../components/Loading/Loading";
import { fetchOneCountry } from "../../redux/countriesSlice";
import { getOneCountry } from "../../redux/selectors";

const Country = () => {
  const { name } = useParams();
  const country = useSelector(getOneCountry);
  const dispatch = useAppDispatch(); 

  useEffect(() => {
    if (name) {
      dispatch(fetchOneCountry(name));
    }
  }, [dispatch, name]);

  return (
    <Box   >
      {country.length ? <CountryCard item={country} /> : <Loading />}
    </Box>
  );
};

export default Country;
