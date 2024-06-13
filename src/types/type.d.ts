
interface ICountry {
  id: Key | null | undefined;
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
  filter?:{num:number,text:string} ;
  searchText?:string
};

type TCountryReducer = {
  searchCondition: {
    filter: {num:number,text:string} | undefined;
    searchText: string |undefined;
  }; 
  countries: TCountries | undefined ;
};

type TStore = {
  countryReducer:TCountryReducer
}

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
