import {  List } from "@mui/material";
import React from "react";

import { CountryItem } from "../../types.ts";
import CartListItem from "./CartListItem";

type CartListProps = {
  countries: CountryItem[];
};

const CartList = ({ countries }: CartListProps) => {
  let filteredCountries:CountryItem[] = countries.reduce(
    (accumulator, currentValue) => {
      if (
        accumulator.every(
          (item: CountryItem) =>
            !(item.name.official === currentValue?.name.official)
        )
      )
        accumulator.push(currentValue);
      return accumulator;
    },
    [] as CountryItem[]
  );

  return <List >{filteredCountries.map((it: CountryItem) => <CartListItem country={it} />)}</List>;
};

export default CartList;
