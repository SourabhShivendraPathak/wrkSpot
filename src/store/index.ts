import { Store } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "./countryReducer";

const store: Store<
  { countryReducer:TCountryReducer },
  TCountriesAction
> & { dispatch: TDispatchType } = configureStore({
  reducer: {
    countryReducer,
  },
});

export default store;
