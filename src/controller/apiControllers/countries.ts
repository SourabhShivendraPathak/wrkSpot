import axios from "axios";
import apis from "../../constants/apiEndPoint";
import store from "../../store";
import * as actionTypes from "../../store/countryReducer/actionTypes";

const fetchCountries = async () => {
  const response = await axios.get(apis.countriesApi);
  const countriesList = response.data;
  store.dispatch({
    type: actionTypes.FETCH_COUNTRIES,
     countriesList,
  });
};

const countriesApis = {
  fetchCountries,
};
export default countriesApis;
