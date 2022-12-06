import React from "react";
import { Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";

import "./search.scss";
import { getFilter } from "../../redux/selectors";
import { useAppDispatch } from "../../app/hooks";
import { setFilter } from "../../redux/countriesSlice";


const Search = () => {
  const filterTxt = useSelector(getFilter);
  const dispatch = useAppDispatch();

  return (
    <div className="search-box">
      <Input
        name="filter"
        value={filterTxt}
        onChange={(e) => dispatch(setFilter(e.currentTarget.value.trim()))}
        placeholder="Search"
        disableUnderline={true}
      />
      <SearchIcon />
    </div>
  );
};

export default Search;
