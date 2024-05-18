import styles from "./Membership.module.css";
import { LeftNavigation } from "../../components/LeftNavigation/LeftNavigation";
import BackButton from "../../assets/Images/BackButton.jpg";
import { Link } from "react-router-dom";
import BlueButton from "../../components/BlueButton/BlueButton";

export default function Membership() {
  return (
    <section className={styles.Content}>
      <LeftNavigation />

      <img src={BackButton} alt="BackButton" className={styles.BackButton} />

      <Link className={styles.Link} to="/Membership">
        <BlueButton />
      </Link>
    </section>
  );
}
