import styles from "./BlueButton.module.css";

export default function BlueButton({ text }) {
  return <button className={styles.button}>{text}</button>;
}
