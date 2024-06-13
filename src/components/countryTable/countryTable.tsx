import { useSelector } from "react-redux";
import Table from "../../commonComponents/Table/table";
import { tableColumn } from "../../constants/commomn";

const CountryTable = () => {
  const countriesList = useSelector((state:TStore) => state.countryReducer.countries);
  return (
    <div>
      <Table columns={tableColumn} data={countriesList} />
    </div>
  );
};

export default CountryTable;
