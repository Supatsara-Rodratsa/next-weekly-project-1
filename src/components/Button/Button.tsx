import styles from "./Button.module.css";

type ButtonProps = {
  label: string;
  onClick(): void;
};

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button className={styles.container} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
