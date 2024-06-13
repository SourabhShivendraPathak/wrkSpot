import * as actionTypes from "./actionTypes";



const initialState: TCountryReducer = {
  countries: [],
  searchCondition: { filter: {num:Infinity,text:'Population'}, searchText: "" },
};

const countryReducer = (
  state: TCountryReducer = initialState,
  action: TCountriesAction
): TCountryReducer => {
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
