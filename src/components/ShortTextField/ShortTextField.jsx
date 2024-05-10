import styles from "./ShortTextField.module.css";

export default function ShortTextField({ text, placeholder, image }) {
  return (
    <label className={styles.label}>
      <div className={styles.container}>
        <div className={styles.text}>{text}</div>
        <input
          style={image ? { backgroundImage: `url(${image})` } : null}
          placeholder={placeholder}
          type="text"
          name="title__name"
          className={styles.input}
        ></input>
      </div>
    </label>
  );
}
