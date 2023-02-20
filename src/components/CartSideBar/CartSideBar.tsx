import React from "react";
import { Box, Drawer, Typography } from "@mui/material";

import { useSelector } from "react-redux";

import { getCartCountries } from "../../redux/selectors";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import "./cartSideBar.scss";
import CartList from "./CartList";

interface Props {
  onClick: Function;
  drawerState: boolean;
}

const CartSideBar: React.FC<Props> = ({ onClick, drawerState }) => {
  const cartCountries = useSelector(getCartCountries);

  const onBarClose = () => {
    onClick(!drawerState);
  };

  return (
    <Box className="sidebar">
      <Drawer anchor="right" open={drawerState} onClose={onBarClose}>
        <Box className="sidebar__drawer-content">
          <HighlightOffIcon
            onClick={onBarClose}
            className="sidebar__close-icon"
          />
        </Box>
        <Box>
          {cartCountries.length > 0 ? (
            <CartList countries={cartCountries} />
          ) : (
            <Typography>No items in the cart</Typography>
          )}
        </Box>
      </Drawer>
    </Box>
  );
};

export default CartSideBar;
