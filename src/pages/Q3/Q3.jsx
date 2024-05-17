import styles from "./Q3.module.css";
import ShortTextField from "../../components/ShortTextField/ShortTextField";
import CheckBox from "../../components/CheckBox/CheckBox";
import { LeftNavigation } from "../../components/LeftNavigation/LeftNavigation";
import BlueButton from "../../components/BlueButton/BlueButton";
// import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { Link } from "react-router-dom";

export function Q3() {
  return (
    <div className={styles.Content}>
      <LeftNavigation />
      <section className={styles.Body}>
        <div className={styles.QuestionnaireTitle}>Questionnaire</div>
        <div className={styles.StatusBar}>{/* <ProgressBar /> */}</div>
        <section className={styles.TextFields}>
          <div className={styles.CheckBoxContainer}>
            <div className={styles.CheckBoxTitle}>
              Have you used fitness or wellness apps before?
            </div>
            <div className={styles.CheckBox}>
              <CheckBox text={"Yes"} />
              <CheckBox text={"No"} />
            </div>
          </div>

          <div className={styles.TextFieldContainer}>
            <ShortTextField
              placeholder="I love the color"
              text={"IF If yes, what features did you find most helpful?"}
            />
          </div>
          <div className={styles.TextFieldContainer}>
            <ShortTextField
              placeholder="Their inclusion of all body types"
              text={"If yes, what features did you find most helpful?"}
            />
          </div>

          <div className={styles.CheckBoxContainer}>
            <div className={styles.CheckBoxTitle}>
              Would you like to join challenges with other members?
            </div>
            <div className={styles.CheckBox}>
              <CheckBox text={"Yes"} />
              <CheckBox text={"No"} />
            </div>
          </div>
          <div className={styles.BlueButton}>
            <Link className={styles.Link} to="./">
              <BlueButton text={"Next"} />
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
}
