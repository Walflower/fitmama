import styles from "./NoFillButton.module.css";

export default function NoFillButton({ text }) {
  return <button className={styles.button}>{text}</button>;
}
