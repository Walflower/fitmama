import styles from "./GreenButton.module.css";

export default function GreenButton({ text }) {
  return <button className={styles.button}>{text}</button>;
}
