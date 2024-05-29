import styles from "./ShortTextField.module.css";

export default function ShortTextField({
  text,
  placeholder,
  image,
  setText,
  name,
}) {
  // const [text, setText] = useState("");

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
        ></input>
      </div>
    </label>
  );
}
