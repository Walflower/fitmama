import styles from "./WhiteButton.module.css";

export default function WhiteButton({ text }) {
  return <button className={styles.button}>{text}</button>;
}
