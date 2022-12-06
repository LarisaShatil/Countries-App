import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  TableContainer,
  Table,
  TableCell,
  TableRow,
  TableBody,
  TablePagination,
  Button,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Link, useLocation } from "react-router-dom";

import { CountryItem } from "../../types.ts";
import { getCartCountries } from "../../redux/selectors";
import "./countriesTable.scss";
import { useAppDispatch } from "../../app/hooks";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import CountriesTableHead from "./CountriesTableHead";
import FavouriteItem from "../FavouriteItem/FavouriteItem";

type CountryTableProp = {
  countriesList: CountryItem[];
};

const CountryTable = (countriesList: CountryTableProp) => {
  const dispatch = useAppDispatch();
  const countries = countriesList.countriesList;
  const cartCountries = useSelector(getCartCountries);
  const location = useLocation();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const deleteCountryFromCart = (item: CountryItem) => {
    const index = cartCountries.findIndex((country: CountryItem) =>
      country.name.official === item.name.official ? country : false
    );

    if (index >= 0) {
      dispatch(deleteFromCart(index));
    }
  };

  return (
    <TableContainer className="country-table">
      <Table>
        <CountriesTableHead />
        <TableBody>
          {countries
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((item: CountryItem) => (
              <TableRow key={item.name.official}>
                <TableCell>
                  <FavouriteItem id={item.name.official} />
                </TableCell>

                <TableCell>
                  <img
                    className="country-table__img"
                    src={item.flags.svg || item.flags.png}
                    alt={`${item.name.official} flag`}
                  />
                </TableCell>

                <TableCell >
                  <Link
                    className="country-table__link"
                    to={`country/${item.name.official}`}
                    state={{ from: location }}
                  >
                    <h2 className="country-table__title">
                      {item.name.official}
                    </h2>
                  </Link>
                </TableCell>

                <TableCell>{item.capital}</TableCell>
                <TableCell>{item.region}</TableCell>
                <TableCell>
                  {Number(item.population).toLocaleString()}
                </TableCell>
                <TableCell>
                  {item.languages
                    ? Object.values(item.languages).join(", ")
                    : ""}{" "}
                </TableCell>

                <TableCell>
                  <Button
                    variant="text"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    <AddCircleOutlineIcon id="addBtn" />
                  </Button>
                  <Button
                    variant="text"
                    onClick={() => deleteCountryFromCart(item)}
                    color="error"
                  >
                    <RemoveCircleOutlineIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={countries.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default CountryTable;
