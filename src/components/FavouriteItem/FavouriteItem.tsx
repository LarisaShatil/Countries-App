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

interface Props {
  id: string;
}

const FavouriteItem: React.FC<Props> = ({ id }) => {
  const dispatch = useAppDispatch();
  const favourites: string[] = useSelector(getFavourites);

  const isFavourite = (id: string) => favourites.includes(id);
  const checkValue = isFavourite(id) ? (
    <FavoriteIcon sx={{ color: "primary.favourite" }} />
  ) : (
    <FavoriteBorderIcon sx={{ color: "primary.favourite" }} />
  );

  const onClick = (id: string) =>
    isFavourite(id)
      ? dispatch(deleteFromFavourites(id))
      : dispatch(addToFavourites(id));

  return (
    <div onClick={() => onClick(id)}>
      <Button>{checkValue}</Button>
    </div>
  );
};

export default FavouriteItem;
