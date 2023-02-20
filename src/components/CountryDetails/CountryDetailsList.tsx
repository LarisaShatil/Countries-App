import { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InfoIcon from "@mui/icons-material/Info";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CheckIcon from "@mui/icons-material/Check";

import { Currencies, Language } from "../../types.ts";
import "./countryDetailsList.scss";

const ListItem = (item: string) => {
  return (
    <ListItemButton key={item} sx={{ pl: 8 }}>
      <CheckIcon sx={{ pr: 1 }} />
      <ListItemText primary={item} />
    </ListItemButton>
  );
};

interface Props {
  list: Language | Currencies | undefined;
  text: string;
}

const CountryDetailsList: React.FC<Props> = ({ list, text }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  let listValues = list ? Object.values(list) : [];

  if (text === "Currencies") {
    listValues = listValues.map((currency) => currency.name);
  }

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        backgroundColor: "inherit",
        fontFamily: "Poppins",
      }}
      component="nav"
      className="list-box"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick} sx={{ fontFamily: "Poppins" }}>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText
          className="list-box__item"
          sx={{ fontFamily: "Poppins" }}
          primary={text}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ fontFamily: "Poppins" }}>
          {list
            ? listValues.map((item: string) => ListItem(item))
            : ListItem("undefined")}
        </List>
      </Collapse>
    </List>
  );
};

export default CountryDetailsList;
