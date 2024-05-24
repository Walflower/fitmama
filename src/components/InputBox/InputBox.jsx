import styles from "./InputBox.module.css";
import SendIcon from "../../assets/Images/SendIcon.png";
export default function InputBox() {
  return (
    <section className={styles.InputContainer}>
      <form className={styles.FormContainer}>
        <input
          className={styles.InputBox}
          placeholder="Message"
          name="user"
          type="text"
        />
      </form>
      <div className={styles.IconContainer}>
        <img src={SendIcon} alt="SendIcon" className={styles.Icon} />
      </div>
    </section>
  );
}
