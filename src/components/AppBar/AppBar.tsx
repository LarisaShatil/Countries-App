import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import Search from "../Search/Search";
import { getCartCountries } from "../../redux/selectors";
import "./appBar.scss";
import ThemeBtn from "../ThemeBtn/ThemeBtn";

interface AppBarProps {
  onClick: Function;
  drawerState: boolean;
}

const AppBar = (props: AppBarProps) => {
  const { onClick, drawerState } = props;
  const cartCountries = useSelector(getCartCountries);
  const cartItemCount = cartCountries.length || 0;

  const onDrawerClose = () => {
    onClick(!drawerState);
  };

  return (
    <Box className="appbar" sx={{ backgroundColor: "primary.main" }}>
      <div className="appbar__box container">
        <Typography
          className="appbar__logo-name"
          sx={{
            fontWeight: "bold",
            fontFamily: "inherit",
            textTransform: "uppercase",
            color: "text.logo",
          }}
        >
          Country App
        </Typography>
        <Box className="appbar__item-left" sx={{ color: "text.secondary" }}>
          Theme
          <ThemeBtn />
        </Box>
        <div className="appbar__item-search">
          <Search />
        </div>
        <div className="appbar__item-right">
          <div className="appbar__cart-wrapper">
            <AddShoppingCartIcon
              onClick={onDrawerClose}
              sx={{ color: "text.logo" }}
            />
            <Box
              className="appbar__cart-counter"
              sx={{ backgroundColor: "text.logo" }}
            >
              {cartItemCount}
            </Box>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default AppBar;
