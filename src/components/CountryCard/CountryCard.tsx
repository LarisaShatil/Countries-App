import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import { CountryItem } from "../../types.ts";
import CountryList from "../CountryList/CountryList";
import Image from "../../images/location.svg"; 
import "./countryCard.scss";

interface CountryProps {
  item: CountryItem[];
}

const CountryCard = ({item}: CountryProps) => {
  const location = useLocation();
  const { name, flags, region, area, subregion, languages, currencies } =
    item[0];

  return (
    <Box
      className="country-card"
      sx={{
        backgroundColor: "background.default",
        backgroundImage: `url(${Image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        fontFamily: "Poppins",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: "text.primary",
          fontWeight: "bold",
          margin: "4%",
          fontFamily: "inherit",
        }}
      >
        {name.official}
      </Typography>
      <div className="country-card__wrapper">
        <img
          className="country-card__img"
          src={flags.svg || flags.png}
          alt={`${name} flag`}
        />
        <div className="country-card__info">
          <p>Region: </p>
          <h3>{region}</h3>
        </div>
        <div className="country-card__info">
          <p>Subregion: </p>
          <h3>{subregion}</h3>
        </div>
        <div className="country-card__info">
          <p> Area: </p>
          <h3>
            {Number(area).toLocaleString()} km<sup>2</sup>
          </h3>
        </div>
        <CountryList
          list={languages}
          text="Languages"
        />
        <CountryList list={currencies} text="Currencies" />

        <Link className="country-card__back-link" to={location.state.from}>
          <Button
            sx={{ fontSize: "large", fontFamily: "inherit" }}
            startIcon={<KeyboardBackspaceIcon />}
            type="submit"
            variant="contained"
          >
            Back
          </Button>
        </Link>
      </div>
    </Box>
  );
};

export default CountryCard;
