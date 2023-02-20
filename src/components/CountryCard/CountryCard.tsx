import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import { CountryItem } from "../../types.ts";
import CountryDetailsList from "../CountryDetails/CountryDetailsList";
import Image from "../../images/location.svg";
import "./countryCard.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

interface Props {
  item: CountryItem[];
}

const CountryCard: React.FC<Props> = ({ item }) => {
  const location = useLocation();
  const { name, flags, region, area, subregion, languages, currencies } =
    item[0];

  return (
    <Card
      className="country-card"
      sx={{
        backgroundColor: "background.default",
        backgroundImage: `url(${Image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        fontFamily: "Poppins",
      }}
    >
      <CardContent>
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
            <Typography variant="h6">{region}</Typography>
          </div>
          <div className="country-card__info">
            <p>Subregion: </p>
            <Typography variant="h6">{subregion}</Typography>
          </div>
          <div className="country-card__info">
            <p> Area: </p>
            <Typography variant="h6">
              {Number(area).toLocaleString()} km<sup>2</sup>
            </Typography>
          </div>
          <CountryDetailsList list={languages} text="Languages" />
          <CountryDetailsList list={currencies} text="Currencies" />

          <Link className="country-card__back-link" to={location.state.from}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                fontFamily: "inherit",
                padding:"1rem 0"
              }}
              startIcon={<KeyboardBackspaceIcon />}
            >
              Back
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default CountryCard;
