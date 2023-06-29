import React from "react";
import styles from "./radioButton.module.css";

interface RadioButtonProps {
  id: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (value: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  value,
  label,
  checked,
  onChange,
}) => {
  const handleChange = () => {
    onChange(value);
  };

  return (
    <label htmlFor={id} className={styles.radioButton}>
      <input
        type="radio"
        id={id}
        value={value}
        checked={checked}
        onChange={handleChange}
      />
      <span className={styles.radioButton__custom}></span>
      <span className={styles.labelText}>{label}</span>
    </label>
  );
};

export default RadioButton;
