import React from "react";
import styles from "./index.module.scss";

interface RadioInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
  id: string;
  checked: boolean;
  imgSrc: string;
  label: string;
}

export default function RadioInput({
  onChange,
  name,
  value,
  id,
  checked,
  imgSrc,
  label,
}: RadioInputProps) {
  return (
    <div className={styles.radioInput}>
      <input
        onChange={onChange}
        className={styles.radioInput__input}
        type="radio"
        name={name}
        value={value}
        id={id}
        checked={checked}
        required
      />
      <label className={styles.radioInput__label} htmlFor={label}>
        <div className={styles.radioInput__imgBox}>
          <img className={styles.radioInput__image} src={imgSrc} alt={label} />
        </div>
        <span className={styles.radioInput__labelText}>{label}</span>
      </label>
    </div>
  );
}
