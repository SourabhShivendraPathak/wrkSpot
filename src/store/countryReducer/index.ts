import * as actionTypes from "./actionTypes";

type Tstate = {
  searchCondition: {
    filter: string | undefined;
    searchText: string |undefined;
  }; 
  countries: TCountries | undefined ;
};

const initialState: Tstate = {
  countries: [],
  searchCondition: { filter: "", searchText: "" },
};

const countryReducer = (
  state: Tstate = initialState,
  action: TCountriesAction
): Tstate => {
  switch (action.type) {
    case actionTypes.FETCH_COUNTRIES:
      return {
        ...state,
        countries: action.countriesList,
      };
    case actionTypes.CHANGE_FILTER:
      return {
        ...state,
        searchCondition: { ...state.searchCondition, filter: action.filter },
      };
    case actionTypes.CHANGE_SEARCH_TEXT:
      return {
        ...state,
        searchCondition: {
          ...state.searchCondition,
          searchText: action.searchText,
        },
      };
  }
  return state;
};

export default countryReducer;
