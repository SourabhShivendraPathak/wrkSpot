interface ICountry {
  name: string;
  code: string;
  capital: string;
  phCode: number;
  population: number;
  flag: string;
}
type TCountries = ICountry[];

type TCountriesAction = {
  type: string;
  countriesList?: TCountries  ;
  filter?:string;
  searchText?:string
};

type TDispatchType = (args: TCountriesAction) => TCountriesAction;

type Tcolumn = {
  header: string;
  accessor: string;
  type?: string;
};

type Trow = {
  abbreviation: string;
  capital: string;
  currency: string;
  name: string;
  phone: string;
  population: number;
  media: {
    flag: string;
    emblem: string;
    orthographic: string;
  };
  id: number;
};
