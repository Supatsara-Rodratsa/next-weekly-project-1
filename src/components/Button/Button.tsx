import clsx from "clsx";
import styles from "./Button.module.css";

type ButtonProps = {
  label: string;
  type?: "submit";
  onClick?(): void;
  customStyle?: string;
};

const Button = ({ label, onClick, type, customStyle }: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(styles.container, customStyle)}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
