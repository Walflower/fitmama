import styles from "./NoFillButton.module.css";

export default function NoFillButton({ text, image, onClick, input }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
      {image ? { backgroundImage: `url(${image})` } : null}
    </button>
  );
}
