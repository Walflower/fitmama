import { click } from "@testing-library/user-event/dist/click";
import styles from "./BlueButton.module.css";

export default function BlueButton({ text, onClick }) {
  return (
    <button onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
}
