import { FC } from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ text, onClick }) => (
  <button className=" pb-2 text-sm md:Roboto-medium md:text-xl cursor-pointer addBody" onClick={onClick}>
    {text}
  </button>
);

export default Button;
