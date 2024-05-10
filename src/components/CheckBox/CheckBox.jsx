import styles from "./CheckBox.module.css";

function CheckBox({ label, text }) {
  return (
    <div className={styles.check}>
      <label className={styles.label} for={label}>
        {text}
      </label>
      <input
        className={styles.input}
        type="checkbox"
        id="checkbox"
        name="checkbox"
      />
    </div>
  );
}

export default CheckBox;
