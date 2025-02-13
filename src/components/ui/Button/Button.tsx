import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  fullWidth = false,
  ...props
}) => {
  const buttonClass = classNames(styles.button, {
    [styles.fullWidth]: fullWidth,
  });
  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
