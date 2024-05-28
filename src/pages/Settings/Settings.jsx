import styles from "./SettingsIntial.module.css";
import { LeftNavigation } from "../../components/LeftNavigation/LeftNavigation";
import { Link } from "react-router-dom";
import BlueButton from "../../components/BlueButton/BlueButton";
import Lara from "../../assets/Images/ProfileImages/Lara.png";
import NoFillButton from "../../components/NoFillButton/NoFillButton";
import ShortTextField from "../../components/ShortTextField/ShortTextField";

export default function Settings() {
  return (
    <main className={styles.main}>
      <LeftNavigation />

      <body className={styles.Body}>
        <section className={styles.UserProfile}>
          <div className={styles.ImageBorder}>
            <img src={Lara} alt="Lara" className={styles.UserImage} />
          </div>
          <NoFillButton text={"Upload Photo"} />
        </section>

        <div className={styles.ContentContainer}>
          <section className={styles.content}>
            <ShortTextField placeholder="First Name" text={"First Name"} />
          </section>
          <section className={styles.content}>
            <ShortTextField placeholder="Last Name" text={"Last Name"} />
          </section>
        </div>

        <div className={styles.ContentContainer}>
          <section className={styles.content}>
            <ShortTextField placeholder="Email" text={"Email"} />
          </section>
          <section className={styles.content}>
            <ShortTextField placeholder="Password" text={"Password"} />
          </section>
        </div>
        <Link to="/Questionnaire/" className={styles.BlueButtonLink}>
          <div className={styles.BlueButton}>
            <BlueButton text={"SAVE"} />
          </div>
        </Link>
      </body>
    </main>
  );
}
