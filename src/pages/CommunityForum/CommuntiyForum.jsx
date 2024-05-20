import styles from "./CommunityForum.module.css";
import Lara from "../../assets/Images/ProfileImages/Lara.png";

import ShortTextField from "../../components/ShortTextField/ShortTextField";
import CheckBox from "../../components/CheckBox/CheckBox";
import { LeftNavigation } from "../../components/LeftNavigation/LeftNavigation";
import BlueButton from "../../components/BlueButton/BlueButton";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { Link } from "react-router-dom";

export function CommunityForum() {
  return (
    <div className={styles.content}>
      <LeftNavigation />

      <main className={styles.main}>
        <section className={styles.post}>
          <img src={Lara} alt="profile" className={styles.user} />
          <h3>Workout Monday: Share Your Sweat Session!</h3>
        </section>

        <section className={styles.post}>
          <img src={Lara} alt="profile" className={styles.user} />
          <h3>Workout Monday: Share Your Sweat Session!</h3>
        </section>

        <section className={styles.post}>
          <img src={Lara} alt="profile" className={styles.user} />
          <h3>Workout Monday: Share Your Sweat Session!</h3>
        </section>
      </main>

      <section></section>
    </div>
  );
}
