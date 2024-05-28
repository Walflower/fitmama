import styles from "./Q2.module.css";
import ShortTextField from "../../components/ShortTextField/ShortTextField";
import CheckBox from "../../components/CheckBox/CheckBox";
import { LeftNavigation } from "../../components/LeftNavigation/LeftNavigation";
import BlueButton from "../../components/BlueButton/BlueButton";
// import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { Link } from "react-router-dom";
import BackButton from "../../assets/Images/BackButton.jpg";

export function Q2() {
  return (
    <div className={styles.Content}>
      <LeftNavigation />
      <Link to="/Questionnaire">
        <img src={BackButton} alt="BackButton" className={styles.BackButton} />
      </Link>

      <section className={styles.Body}>
        <div className={styles.QuestionnaireTitle}>Questionnaire</div>
        <div className={styles.StatusBar}>{/* <ProgressBar /> */}</div>
        <section className={styles.TextFields}>
          <div className={styles.TextFieldContainer}>
            <ShortTextField
              placeholder="To walk 3 blocks"
              text={"What are your primary fitness goals?"}
            />
          </div>
          <div className={styles.TextFieldContainer}>
            <ShortTextField
              placeholder="Walking my dog"
              text={"What types of physical activities do you enjoy?"}
            />
          </div>
          <div className={styles.TextFieldContainer}>
            <ShortTextField
              placeholder="none"
              text={"Do you have any fitness limitations or concerns?"}
            />
          </div>
          <div className={styles.TextFieldContainer}>
            <ShortTextField
              placeholder="2"
              text={"What Number of Children (0-5 years old)"}
            />
          </div>
          <div className={styles.CheckBoxContainer}>
            <div className={styles.CheckBoxTitle}>
              Are you interested in participating in local meetups and walks
              with other moms?
            </div>
            <div className={styles.CheckBox}>
              <CheckBox text={"Yes"} />
              <CheckBox text={"No"} />
            </div>
          </div>
          <div className={styles.BlueButton}>
            <Link className={styles.Link} to="/Settings">
              <BlueButton text={"Submit"} />
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
}
