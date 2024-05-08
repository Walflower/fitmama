import styles from "./SigUpBlueButton.module.css";

export default function SignUpBlueButton({ text }) {
  return <button className={styles.button}>{text}</button>;
}
