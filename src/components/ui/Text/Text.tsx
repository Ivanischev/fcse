import styles from "./Text.module.css";

interface TextProps {
  children: React.ReactNode;
  size?: "l" | "m" | "s";
  color?: "primary" | "secondary" | "accent" | "error";
  align?: "left" | "center" | "right";
  className?: string;
}

const Text: React.FC<TextProps> = ({
  children,
  size = "m",
  color = "primary",
  align = "left",
  className = "",
}) => {
  return (
    <p
      className={`${styles.text} ${styles[size]} ${styles[color]} ${styles[align]} ${className}`}
    >
      {children}
    </p>
  );
};

export default Text;
