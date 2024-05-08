import styles from "./ShortTextField.module.css";

export default function ShortTextField({ text }) {
  return (
    <label className={styles.label}>
      <div className={styles.container}>
        <input
          placeholder={"Enter Your Username"}
          type="text"
          name="title__name"
          className={styles.input}
        ></input>
      </div>

      <div className={styles.container}>
        <input
          placeholder={"Enter Your Email"}
          type="text"
          name="title__name"
          className={styles.input}
        ></input>
      </div>
      <div className={styles.container}>
        <input
          placeholder={"Enter Your Phone Number"}
          type="text"
          name="title__name"
          className={styles.input}
        ></input>
      </div>
      <div className={styles.container}>
        <input
          placeholder={"Enter Your Password"}
          type="text"
          name="title__name"
          className={styles.input}
        ></input>
      </div>
    </label>
  );
}
