import styles from "./ClearButton.module.css";

export default function ClearButton({ text, icon }) {
  return (
    <button className={styles.button}>
      {text}
      <img src={icon} alt="button icon" className={styles.buttonIcon} />
    </button>
  );
}
