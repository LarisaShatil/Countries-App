import { Box, Paper, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "@mui/material/Link";
import React from "react";

const Footer = () => {
  return (
    <footer style={{ position: "fixed", bottom: 0, width: "100%" }}>
      <Paper
        sx={{
          backgroundColor: "primary.main",
          paddingLeft: 2,
          paddingRight: 2,
          fontFamily: "inherit",
          textAlign: "right",
        }}
      >
        <Box sx={{ padding: 1, textAlign: "center" }}>
          <Link
            href="https://github.com/LarisaShatil"
            target="_blank"
            sx={{ marginRight: 2, padding: 1 }}
          >
            <GitHubIcon sx={{ color: "white", fontSize: "2rem" }} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/larisashatillo/"
            target="_blank"
            sx={{ padding: 1 }}
          >
            <LinkedInIcon sx={{ color: "white", fontSize: "2.1rem" }} />
          </Link>
        </Box>
        <Box
          sx={{
            borderTop: "1px solid white",
            padding: 2,
            textAlign: "center",
          }}
        >
          <Typography sx={{ color: "inherit", fontFamily: "Poppins" }}>
            Integrify 2022 &copy; Larisa Shatillo
          </Typography>
        </Box>
      </Paper>
    </footer>
  );
};

export default Footer;
