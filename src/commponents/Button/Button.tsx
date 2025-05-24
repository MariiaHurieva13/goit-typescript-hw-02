import { FC } from "react";
import css from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}
const Button: FC<ButtonProps> = ({ children, type = "button", onClick }) => {
  return (
    <button type={type} className={css.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
