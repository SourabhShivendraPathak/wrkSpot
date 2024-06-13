import { FC } from "react";
import "./style.css";

interface IBottonNoBorder {
  text: string;
  image?: string;
  onClick?: () => unknown;
}

const BottonNoBorder: FC<IBottonNoBorder> = ({ text, image, onClick }) => {
  return (
    <button className="buttonNoBorder" onClick={onClick}>
      {text}
      {image ? <img src={""} /> : null}
    </button>
  );
};

export default BottonNoBorder;
