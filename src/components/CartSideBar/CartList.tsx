import { List } from "@mui/material";
import React, { useMemo } from "react";

import { CountryItem } from "../../types.ts";
import CartListItem from "./CartListItem";

interface Props {
  countries: CountryItem[];
}

const CartList: React.FC<Props> = ({ countries }) => {
  const filteredCountries = useMemo(
    () =>
      countries.reduce((accumulator, currentValue) => {
        if (
          accumulator.every(
            (item: CountryItem) =>
              item.name.official !== currentValue?.name.official
          )
        )
          accumulator.push(currentValue);
        return accumulator;
      }, [] as CountryItem[]),
    [countries]
  );

  return (
    <List>
      {filteredCountries.map((country: CountryItem) => (
        <CartListItem key={country.name.official} country={country} />
      ))}
    </List>
  );
};

export default CartList;
