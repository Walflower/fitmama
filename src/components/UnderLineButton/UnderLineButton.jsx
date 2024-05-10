import styles from "./UnderLineButton.module.css";
import Arrow from "../../assets/Images/arrow.svg";

export default function UnderLineButton({ text }) {
  return (
    <button className={styles.button}>
      {text}
      <img src={Arrow} alt="arrow click to sign up" />
    </button>
  );
}
