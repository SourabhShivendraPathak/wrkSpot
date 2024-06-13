import { FC } from "react";
import "./style.css";

interface ButtonPrimary {
  text: string;
  image?: string;
  onClick?: () => unknown;
}
const ButtonPrimary: FC<ButtonPrimary> = ({ text, image, onClick }) => {
  return (
    <button className="buttonPrimary" onClick={onClick}>
      {text}
      {image ? <img src={""} /> : null}
    </button>
  );
};

export default ButtonPrimary;
