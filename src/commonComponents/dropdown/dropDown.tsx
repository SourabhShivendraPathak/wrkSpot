import  { useState, FC } from "react";
import "./styles.css";
import upDown from '../../assets/upDown.svg';


interface IDropDownProps {
    dropDownItems:string[];
    callback: (value:string) => void;
}

const DropDown:FC<IDropDownProps> = ({dropDownItems,callback}) => {
  const [dropdownState, setDropdownState] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("");

  const handleDropdownClick = () => {
    setDropdownState(!dropdownState);
  };
  const handleSetDropdownValue = (value:string) => {
    callback(value)
    setDropdownValue(value);
    setDropdownState(!dropdownState);
  };

  return (
      <div className={`dropdown`}>
        <button onClick={handleDropdownClick} className="dropdown-btn">
          
          {dropdownValue === "" ? "Population" : dropdownValue}
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
                    <div className="dropdown-item" key={item}>
                        <div
                        className="dropdown__link"
                        onClick={() => handleSetDropdownValue(item)}
                        >
                        {item}
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
