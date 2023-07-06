import React from "react";
import styles from "./radioButton.module.css";

interface RadioButtonProps {
  id: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: Function;
}

export default function RadioButton(props: RadioButtonProps) {
  const handleChange = () => {
    props.onChange(props.value);
  };
  return (
    <div className={styles.radioContainer}>
      <input
        className={styles.input}
        type="radio"
        id={props.id}
        value={props.value}
        checked={props.checked}
        onChange={handleChange}
      />
      <span className={styles.labelText}>{props.label}</span>
    </div>
  );
}
