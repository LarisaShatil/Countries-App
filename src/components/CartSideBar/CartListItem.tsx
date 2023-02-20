import { ListItem, Box, Typography } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

import { CountryItem } from "../../types.ts";

type Props = {
  country: CountryItem;
};

const CartListItem: React.FC<Props> = ({ country }) => {
  const location = useLocation();
  return (
    <ListItem sx={{ cursor: "pointer" }}>
      <Box
        sx={{
          width: "3rem",
          height: "3rem",
          overflow: "hidden",
          borderRadius: "50%",
          marginRight: "1.5rem",
        }}
      >
        <img
          style={{ maxWidth: "auto", height: "100%" }}
          src={country.flags.svg || country.flags.png}
          alt={`${country.name.official} flag`}
        />
      </Box>
      <Link
        to={`country/${country.name.official}`}
        state={{ from: location }}
        style={{ textDecoration: "none" }}
      >
        <Typography
          sx={{ fontFamily: "inherit", color: "text.logo", fontSize: "1.2rem" }}
        >
          {country.name.official}
        </Typography>
      </Link>
    </ListItem>
  );
};

export default CartListItem;
