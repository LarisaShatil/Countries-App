import { Typography } from "@mui/material";
import React from "react";

import { ReactComponent as ReactSVG } from "../../images/searching-data.svg";
import "./loading.scss";

const Loading = () => {
  return (
    <div className="loadingBox">
      <Typography variant="h2" sx={{ color: "primary.main" }}>
        Loading...
      </Typography>
      <ReactSVG width="40%" />
    </div>
  );
};

export default Loading;
