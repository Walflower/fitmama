import styles from "./Settings.module.css";
import { LeftNavigation } from "../../components/LeftNavigation/LeftNavigation";
import { Link } from "react-router-dom";
import BlueButton from "../../components/BlueButton/BlueButton";
import Lara from "../../assets/Images/ProfileImages/Lara.png";
import ClearButton from "../../components/ClearButton/ClearButton";

export default function Settings() {
  return (
    <main className={styles.main}>
      <LeftNavigation />

      <body className={styles.Body}>
        <div className={styles.UserProfile}>
          <img src={Lara} alt="Lara" className={styles.UserImage} />
          <ClearButton text="Comment" />
        </div>
      </body>
    </main>
  );
}
