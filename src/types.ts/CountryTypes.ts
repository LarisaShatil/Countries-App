//types
export type CountrySliceState = {
  countries: CountryItem[];
  filter: string;
  isLoading: boolean;
  error: boolean;
  country: CountryItem[];
};

export interface CountryItem {
  name: Name;
  capital?: string[];
  region: Region;
  subregion?: string;
  population: number;
  area?: number;
  flags: Flags;
  languages?: { [key: string]: string };
  currencies?: Currencies;
}

export interface Name {
  common: string;
  official: string;
}

export interface Flags {
  svg: string;
  png: string;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  AntarcticOcean = "Antarctic Ocean",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
  Polar = "Polar",
}

export interface Language {
  name?: string;
  nativeName?: string;
}
export interface Currencies {
  name?: string;
}
export interface CountryListProps {
  item: CountryItem[];
}
