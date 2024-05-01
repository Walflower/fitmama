import styles from "./UnderLineButton.module.css";

export default function UnderLineButton({ text }) {
  return <button className={styles.button}>{text}</button>;
}
