import styles from "./Dashboard.module.css";
import { LeftNavigation } from "../../components/LeftNavigation/LeftNavigation";
import BackButton from "../../assets/Images/BackButton.jpg";
import { Link } from "react-router-dom";
import DashBoardImage from "../../assets/Images/DashBoardImage.svg";

export default function Dashboard() {
  return (
    <div className={styles.Content}>
      <LeftNavigation />
      <img src={BackButton} alt="BackButton" className={styles.BackButton} />

      <section className={styles.Body}>
        <div className={styles.DashBoardTitle}>
          Hi Helen, Welcome to Fit Mama hub
        </div>
        <p className={styles.DashParagraph}>
          Unite with mothers like you and enjoy workouts tailored for you and
          your children. Build bonds, share experiences, and grow stronger
          together. Our community supports each phase of your fitness
          journey—from prenatal to preschool. Let's make fun and fitness a
          family adventure!"
        </p>
        <img
          className={styles.DashBoardImage}
          src={DashBoardImage}
          alt="DashBoardImage"
        />
      </section>
      <Link className={styles.Link} to="/Membership">
        <div className={styles.JoinMembership}>
          <p className={styles.JoinMembershipText}>
            Join the club just for 10 CA a month
          </p>
        </div>
      </Link>
    </div>
  );
}
