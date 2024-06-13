import { FC } from "react";
import "./style.css";
import { useSelector } from "react-redux";

interface ISearchBox {
  onChange:(value:string)=>void

}

const Searchbox:FC<ISearchBox> = ({ onChange }) => {
  const handleChange = (e: { target: { value: string; }; }) => {
    onChange(e.target.value);
  };
  const searchText = useSelector((state:TStore) => state.countryReducer.searchCondition.searchText);
  return (
    <div>
      <input
        type="text"
        name="searchBox"
        id="searchBox"
        placeholder="Country Name"
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
};

export default Searchbox;
