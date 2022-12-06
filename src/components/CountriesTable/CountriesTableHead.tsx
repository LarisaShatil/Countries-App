import React from 'react'
import { TableCell, TableHead, TableRow } from "@mui/material";

const CountriesTableHead = () => {
  return (
    <TableHead>
      <TableRow sx={{color:"primary.main", backgroundColor:"background.default"}}>
        <TableCell>Favourite</TableCell>
        <TableCell>Flag</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Capital</TableCell>
        <TableCell>Region</TableCell>
        <TableCell>Population</TableCell>
        <TableCell>Languages</TableCell>
        <TableCell>Buy</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default CountriesTableHead;