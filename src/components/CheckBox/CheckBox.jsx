import styles from "./CheckBox.module.css";

function CheckBox({ label, text, setText }) {
  function handleChange(e) {
    setText(e.target.value);
    console.log(e.target.value);
  }
  return (
    <div className={styles.check}>
      <label className={styles.label} for={label}>
        {text}
      </label>
      <input
        value={text}
        onChange={handleChange}
        className={styles.input}
        type="checkbox"
        id="checkbox"
        name="checkbox"
      />
    </div>
  );
}

export default CheckBox;
