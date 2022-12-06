import React from "react";
import { Box, Drawer, makeStyles, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import { getCartCountries } from "../../redux/selectors";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import "./cartSideBar.scss";
import CartList from "./CartList";

interface Props {
  onClick: Function;
  drawerState: boolean;
}

const CartSideBar = (props: Props) => {
  const { onClick, drawerState } = props;
  const cartCountries = useSelector(getCartCountries);

  const onBarClose = () => {
    onClick(!drawerState);
  };

  return (
    <Box className="sidebar">
      <Drawer
        anchor="right"
        open={drawerState}
        onClose={onBarClose}
        className="sidebar__drawer"
        sx={{ color: "text.primary", width: "40rem" }}
      >
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
            <Typography sx={{ color: "text.primary", padding: "2rem", fontFamily:"inherit", fontSize: "1.5rem" }}>
              No items in the cart
            </Typography>
          )}
        </Box>
      </Drawer>
    </Box>
  );
};

export default CartSideBar;
