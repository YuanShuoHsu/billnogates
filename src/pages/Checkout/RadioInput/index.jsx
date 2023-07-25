import styles from "./index.module.scss";

export default function RadioInput({  onChange, name, value,id, checked,imgSrc,label }) {
  return (
    <div className={styles.radio}>
      <input
        onChange={onChange}
        className={styles.input}
        type="radio"
        name={name}
        value={value}
        id={id}
        checked={checked}
        required
      />
      <label className={styles.label} htmlFor={label}>
        <div className={styles.imgBox}>
         
        <img className={styles.image} src={imgSrc} alt={label} />
        </div>
        <span className={styles.text}>{label}</span>
      </label>
    </div>
  );
}
