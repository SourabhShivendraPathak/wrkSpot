import  { useState, FC } from "react";
import "./styles.css";
import upDown from '../../assets/upDown.svg';
import { useSelector } from "react-redux";


interface IDropDownProps {
    dropDownItems:{num:number,text:string}[];
    callback: (value:{num:number,text:string}) => void;
}

const DropDown:FC<IDropDownProps> = ({dropDownItems,callback}) => {
  const [dropdownState, setDropdownState] = useState(false);
  const filterValue = useSelector((state:TStore) => state.countryReducer.searchCondition.filter);
  const handleDropdownClick = () => {
    setDropdownState(!dropdownState);
  };
  const handleSetDropdownValue = (value:{num:number,text:string}) => {
    callback(value);
    setDropdownState(!dropdownState);
  };

  return (
      <div className={`dropdown`}>
        <button onClick={handleDropdownClick} className="dropdown-btn">
          
          {filterValue?.num === 0 ? "Population" : filterValue?.text}
          <img src={upDown} style={{height:'10px',width:'10px'}}/>
        </button>
        <div
          className={`dropdown-items ${
            dropdownState ? "isVisible" : "isHidden"
          }`}
        >
            {
                dropDownItems.map((item)=>{
                    return (
                    <div className="dropdown-item" key={item.num}>
                        <div
                        className="dropdown__link"
                        onClick={() => handleSetDropdownValue(item)}
                        >
                        {item.text}
                        </div>
                    </div>
                    ); 
            })

            }

          </div>
        
        </div>

  );
}

export default DropDown;
