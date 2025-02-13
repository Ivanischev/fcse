import styles from "./FormRow.module.css";

interface FormRowProps {
  children: React.ReactNode;
  label?: string;
}

const FormRow: React.FC<FormRowProps> = ({ children, label }) => {
  return (
    <div className={styles.formRow}>
      {label && <label className={styles.formRow__label}>{label}</label>}
      {children}
    </div>
  );
};

export default FormRow;
