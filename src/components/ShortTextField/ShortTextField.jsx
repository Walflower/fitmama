import styles from "./ShortTextField.module.css";
import { useState } from "react";

export default function ShortTextField({ placeholder, image, name, type }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <label className={styles.label}>
      <div className={styles.container}>
        <input
          value={text}
          onChange={handleChange}
          style={image ? { backgroundImage: `url(${image})` } : null}
          placeholder={placeholder}
          name={name}
          className={styles.input}
          type={type}
        ></input>
      </div>
    </label>
  );
}
