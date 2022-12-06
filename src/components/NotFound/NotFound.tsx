import { Typography } from "@mui/material";
import React from "react";

import { ReactComponent as ReactSVG } from "../../images/page-not-found.svg";
import "./notFound.scss"

const NotFound = () => {
  return (
    <div className="notFoundBox">
      <Typography variant="h2" sx={{ color: "primary.main" }}>
        Ooops! Try again!
      </Typography>
      <ReactSVG width="40%" />
    </div>
  );
};

export default NotFound;
