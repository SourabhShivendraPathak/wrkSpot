import { useSelector } from "react-redux";
import Table from "../../commonComponents/Table/table";
import { tableColumn } from "../../constants/commomn";

const CountryTable = () => {
  const filterCountries = (countries:TCountries| undefined,filter:number,searchText:string|undefined) => {
    return countries?.filter((country)=>{
      const isNameMatching= searchText?country.name.toLocaleLowerCase().startsWith(searchText.toLocaleLowerCase()):true;
      const isPopulationFilter = country.population<filter;
      return isNameMatching && isPopulationFilter
    })

  }; 
  const filter = useSelector((state:TStore) => state.countryReducer.searchCondition.filter?.num) || Infinity;
  const searchText = useSelector((state:TStore) => state.countryReducer.searchCondition.searchText);
  const countriesList = useSelector((state:TStore) => filterCountries(state.countryReducer.countries,filter,searchText));
  return (
    <div>
      <Table columns={tableColumn} data={countriesList} />
    </div>
  );
};

export default CountryTable;
