import * as actionTypes from "./actionTypes";

type Tstate = {
  searchCondition: {
    filter: string;
    searchText: string;
  };
  countries: TCountries | string;
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
        countries: action.payload,
      };
    case actionTypes.CHANGE_FILTER:
      return {
        ...state,
        searchCondition: { ...state.searchCondition, filter: action.payload },
      };
    case actionTypes.CHANGE_SEARCH_TEXT:
      return {
        ...state,
        searchCondition: {
          ...state.searchCondition,
          searchText: action.payload,
        },
      };
  }
  return state;
};

export default countryReducer;
