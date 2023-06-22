"use client";
import { useState } from "react";
import styles from "./checkbox.module.css";

interface CheckboxProps {
  label: string;
  checked: boolean;
}

export default function Checkbox(props: CheckboxProps) {
  const defaultChecked = props.checked ? props.checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);

  return (
    <div className={styles.checkboxWrapper}>
      <label>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
        />
        <span className={styles.labelText}>{props.label}</span>
      </label>
    </div>
  );
}
