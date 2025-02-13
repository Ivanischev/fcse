import styles from "./Input.module.css";

type InputProps = {
  type?: "text" | "password" | "email";
  placeholder?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
};

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  className = "",
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`${styles.input} ${className}`}
    />
  );
};

export default Input;
