import styles from "./Questionnaire.module.css";
import ShortTextField from "../../components/ShortTextField/ShortTextField";
import CheckBox from "../../components/CheckBox/CheckBox";
import { LeftNavigation } from "../../components/LeftNavigation/LeftNavigation";
import BlueButton from "../../components/BlueButton/BlueButton";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { Link } from "react-router-dom";

export function Questionnaire() {
  return (
    <div className={styles.Content}>
      <LeftNavigation />
      <section className={styles.Body}>
        <div className={styles.QuestionnaireTitle}>Questionnaire</div>
        <div className={styles.StatusBar}>{/* <ProgressBar /> */}</div>
        <section className={styles.TextFields}>
          <div className={styles.TextFieldContainer}>
            <ShortTextField placeholder="36" text={"Age"} />
          </div>
          <div className={styles.TextFieldContainer}>
            <ShortTextField placeholder="K1N-4P9" text={"Postal Code"} />
          </div>
          <div className={styles.TextFieldContainer}>
            <ShortTextField
              placeholder="Ottawa"
              text={"Location (City, State/Province, Country)"}
            />
          </div>
          <div className={styles.TextFieldContainer}>
            <ShortTextField
              placeholder="Cycling"
              text={"What activities  are you interest in?"}
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
        </section>
        <div className={styles.BlueButton}>
          <Link className={styles.Link} to="/Questionnaire/Q2">
            <BlueButton text={"Next"} />
          </Link>
        </div>
        {/* <div className={styles.BlueButtonContainer}>
          <Link className={styles.Link} to="/Questionnaire/Q2">
            <BlueButton text={"Next"} className={styles.BlueButton} />
          </Link>
        </div> */}
      </section>
    </div>
  );
}
