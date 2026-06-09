import styles from "./FormInput.module.css";

interface FormInputProps {
  label: string;
  type: string;
  placeholder?: string;
}

export default function FormInput({
  label,
  type,
  placeholder,
}: FormInputProps) {
  return (
    <div className={styles.inputGroup}>
      <label>{label}</label>

      <input
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}