import { useSelector } from "react-redux";
import Table from "../../commonComponents/Table/table";
import { tableColumn } from "../../constants/commomn";

const CountryTable = () => {
  const filterCountries = (countries:TCountries| undefined,filter:{num:number,text:string}|undefined,searchText:string) => {
    return countries?.filter((country)=>{
      const isNameMatching= searchText?country.name.toLocaleLowerCase().startsWith(searchText.toLocaleLowerCase()):true;
      const isPopulationFilter = country.population<filter?.num;
      console.log({isNameMatching,searchText,name:country.name,isPopulationFilter,nums:filter?.num,population:country.population});
      return isNameMatching && isPopulationFilter
    })

  }; 
  const filter = useSelector((state:TStore) => state.countryReducer.searchCondition.filter);
  const searchText = useSelector((state:TStore) => state.countryReducer.searchCondition.searchText);
  console.log(searchText);
  const countriesList = useSelector((state:TStore) => filterCountries(state.countryReducer.countries,filter,searchText));
  return (
    <div>
      <Table columns={tableColumn} data={countriesList} />
    </div>
  );
};

export default CountryTable;
