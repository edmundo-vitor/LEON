import { ButtonHTMLAttributes } from "react";
import style from "./style.module.scss";

const ButtonPrimary = ({
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={style.buttonPrimary} {...rest}>
      {children}
    </button>
  );
};

export default ButtonPrimary;
