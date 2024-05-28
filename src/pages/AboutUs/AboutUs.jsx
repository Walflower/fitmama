import styles from "./AboutUs.module.css";
import { LeftNavigation } from "../../components/LeftNavigation/LeftNavigation";
import { Link } from "react-router-dom";
import BlueButton from "../../components/BlueButton/BlueButton";
import Frances from "../../assets/Images/Network/Frances.png";
import Martha from "../../assets/Images/Network/Martha.png";
import Matilda from "../../assets/Images/Network/Matilda.png";
import Luna from "../../assets/Images/Network/Luna.jpg";
import Samantha from "../../assets/Images/Network/Samantha.jpg";
import Crystal from "../../assets/Images/Network/Crystal.jpg";

export default function AboutUs() {
  return (
    <main className={styles.main}>
      <LeftNavigation />

      <section className={styles.Body}>
        <section className={styles.TextFields}>
          <div className={styles.QuestionnaireTitle}>About Us</div>
          <div className={styles.CheckBoxContainer}>
            <div className={styles.CheckBoxTitle}>
              <b>Welcome to The Fit Mama Hub!</b>
            </div>
            <div className={styles.heckBoxTitle}>
              At The Fit Mama Hub, we understand the unique challenges that come
              with balancing motherhood, work, and personal wellness. Our
              mission is to create a supportive and engaging community where
              mothers of young children (ages 0-5) can connect, share
              experiences, and achieve their health and fitness goals together.
            </div>
          </div>
          <div className={styles.QuestionnaireTitle}>Our Vision</div>
        </section>
      </section>
    </main>
  );
}
