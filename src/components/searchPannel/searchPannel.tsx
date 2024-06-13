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
  const dropDownItems = [{num:1000000,text:"< 1M"}, {num:5000000,text:"< 5M"}, {num:10000000,text:"< 10M"}];

  const dispatch = useDispatch();

  const handleShowAllCountries = () => {
    countriesApis.fetchCountries();
  };
  const handlePoulationFilter = (filter: {num:number,text:string}) => {
    dispatch({ type: CHANGE_FILTER, filter  });
  };

  const handleSearchBox = (searchText: string) => {
    dispatch({ type: CHANGE_SEARCH_TEXT, searchText });
  };

  const handleClear = () => {
    dispatch({ type: CHANGE_FILTER, filter:{num:Infinity,text:'Population'}  });
    dispatch({ type: CHANGE_SEARCH_TEXT, searchText:"" });
    
  };
  return (
    <section className="sarchSection">
      <div className="searchBlock">
        <Searchbox onChange={handleSearchBox} />
        <DropDown dropDownItems={dropDownItems} callback={handlePoulationFilter} />
        <BottonNoBorder text="Clear" onClick={handleClear}/>
      </div>
      <ButtonPrimary
        text="Show All Countries"
        onClick={handleShowAllCountries}
      />
    </section>
  );
};

export default SearchPannel;
