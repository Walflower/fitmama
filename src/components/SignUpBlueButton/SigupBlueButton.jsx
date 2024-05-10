import styles from "./SigUpBlueButton.module.css";

export default function SignUpBlueButton({ text }) {
  return (
    <div className={styles.SignUpBlueButtonContainer}>
      <button className={styles.SignUpBlueButton}>{text}</button>
    </div>
  );
}
