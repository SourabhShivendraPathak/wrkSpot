import DropDown from "../../commonComponents/dropdown/dropDown";
import Searchbox from "../../commonComponents/searchBox/searchbox";
import ButtonPrimary from "../../commonComponents/buttons/buttonPrimary";
import BottonNoBorder from "../../commonComponents/buttons/bottonNoBorder";
import "./styles.css";
import countriesApis from "../../controller/apiControllers/countries";
import { useDispatch } from "react-redux";
import {
  CHANGE_FILTER,
  CHANGE_SEARCH_TEXT,
} from "../../store/countryReducer/actionTypes";

const SearchPannel = () => {
  const dropDownItems = ["< 1M", "< 5M", "< 10M"];

  const dispatch = useDispatch();

  const handleShowAllCountries = () => {
    countriesApis.fetchCountries();
  };
  const handlePoulationFilter = (filter: number) => {
    dispatch({ type: CHANGE_FILTER, payload: { populationFilter: filter } });
  };

  const handleSearchBox = (search: string) => {
    console.log(search);
    dispatch({ type: CHANGE_SEARCH_TEXT, payload: { search } });
  };
  return (
    <section className="sarchSection">
      <div className="searchBlock">
        <Searchbox onChange={handleSearchBox} />
        <DropDown dropDownItems={dropDownItems} callback={handlePoulationFilter} />
        <BottonNoBorder text="Clear" />
      </div>
      <ButtonPrimary
        text="Show All Countries"
        onClick={handleShowAllCountries}
      />
    </section>
  );
};

export default SearchPannel;
