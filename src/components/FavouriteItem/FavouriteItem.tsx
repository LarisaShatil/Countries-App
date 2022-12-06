import React from "react";
import { useSelector } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";

import { useAppDispatch } from "../../app/hooks";
import { getFavourites } from "../../redux/selectors";
import {
  addToFavourites,
  deleteFromFavourites,
} from "../../redux/favouritesSlice";

type Props = {
  id: string;
};

const FavouriteItem = ({id}: Props) => {
  const dispatch = useAppDispatch();
  const str: string = id;
  const favourites:string[] = useSelector(getFavourites);
  const findIndex = (str: string) => favourites.indexOf(str);

  const checkValue = (str: string) => {
    const index = findIndex(str);

    if (index >= 0) return <FavoriteIcon sx={{ color: "primary.favourite" }} />;
    if (index === -1)
      return <FavoriteBorderIcon sx={{ color: "primary.favourite" }} />;
  };

  const onClick = (str: string) => {
    findIndex(str) === -1
      ? dispatch(addToFavourites(str))
      : dispatch(deleteFromFavourites(str));
  };

  return (
    <div onClick={() => onClick(str)}>
      <Button>{checkValue(str)}</Button>
    </div>
  );
};

export default FavouriteItem;
