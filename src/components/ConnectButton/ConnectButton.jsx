import styles from "./ConnectButton.module.css";

export default function ConnectButton({ text }) {
  return <button className={styles.button}>{text}</button>;
}
