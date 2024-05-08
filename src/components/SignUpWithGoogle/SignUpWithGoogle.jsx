import styles from "./SignUpWithGoogle.module.css";

export default function SignUpWithGoogle({ text }) {
  return <button className={styles.GoogleButton}>{text}</button>;
}
