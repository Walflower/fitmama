import styles from "./LeftNavigation.module.css";
import Lara from "../../assets/Images/ProfileImages/Lara.png";
import Services from "../../assets/Images/Sidebar/Services.svg";
import { Link } from "react-router-dom";
import LOGO from "../../assets/Images/Sidebar/LOGO.png";

import Community from "../../assets/Images/Sidebar/Community.png";
import Network from "../../assets/Images/Sidebar/Network.png";
import Chat from "../../assets/Images/Sidebar/Chat.png";
import Challenges from "../../assets/Images/Sidebar/Challenges.png";
import AboutUs from "../../assets/Images/Sidebar/AboutUs.png";
import Testimonial from "../../assets/Images/Sidebar/Testimonial.png";
import Settings from "../../assets/Images/Sidebar/Setting.png";
import FAQ from "../../assets/Images/Sidebar/FAQ.png";
import ContactUs from "../../assets/Images/Sidebar/ContactUs.png";
import SignOut from "../../assets/Images/Sidebar/SignOut.png";

export function LeftNavigation() {
  return (
    <div className={styles.LeftNavigation}>
      <div className={styles.Container}>
        <section className={styles.Navigation}>
          <div className={styles.UserProfile}>
            <img src={Lara} alt="Lara" className={styles.UserImage} />
            <h2 className={styles.UserName}>Hi Helen</h2>
          </div>
          <Link to="/Profile" className={styles.navLink}>
            <section className={styles.ServicesContainer}>
              <img
                src={Settings}
                alt="Settings"
                className={styles.ServicesImage}
              />
              <p className={styles.ServicesTitles}>Profile</p>
            </section>
          </Link>
          <Link to="/Community" className={styles.navLink}>
            <section className={styles.ServicesContainer}>
              <img
                src={Community}
                alt="Services"
                className={styles.ServicesImage}
              />
              <p className={styles.ServicesTitles}>Community</p>
            </section>
          </Link>
          <Link to="/Network" className={styles.navLink}>
            <section className={styles.ServicesContainerNetwork}>
              <img
                src={Network}
                alt="Network"
                className={styles.ServicesImageNetwork}
              />
              <p className={styles.ServicesTitles}>Network</p>
            </section>
          </Link>
          <Link to="/Chat" className={styles.navLink}>
            <section className={styles.ServicesContainer}>
              <img src={Chat} alt="Chat" className={styles.ServicesImage} />
              <p className={styles.ServicesTitles}>Chat</p>
            </section>
          </Link>
          <Link to="/Challenges" className={styles.navLink}>
            <section className={styles.ServicesContainer}>
              <img
                src={Challenges}
                alt="Challenges"
                className={styles.ServicesImage}
              />
              <p className={styles.ServicesTitles}>Challenges</p>
            </section>
          </Link>
        </section>

        <section className={styles.Navigation2}>
          <Link to="/AboutUs" className={styles.navLink}>
            <section className={styles.ServicesContainer}>
              <img
                src={AboutUs}
                alt="AboutUs"
                className={styles.ServicesImage}
              />
              <p className={styles.ServicesTitles}>About Us</p>
            </section>
          </Link>

          <Link to="/FAQ" className={styles.navLink}>
            <section className={styles.ServicesContainer}>
              <img src={FAQ} alt="FAQ" className={styles.ServicesImage} />
              <p className={styles.ServicesTitles}>FAQ</p>
            </section>
          </Link>
          <Link to="/ContactUs" className={styles.navLink}>
            <section className={styles.ServicesContainer}>
              <img
                src={ContactUs}
                alt="ContactUs"
                className={styles.ServicesImage}
              />
              <p className={styles.ServicesTitles}>Contact Us</p>
            </section>
          </Link>
          <Link to="/SignOUt" className={styles.navLink}>
            <section className={styles.ServicesContainer}>
              <img
                src={SignOut}
                alt="SignOUt"
                className={styles.ServicesImage}
              />
              <p className={styles.ServicesTitles}>Sign Out</p>
            </section>
          </Link>
        </section>

        <Link to="/" className={styles.navLink}>
          <section className={styles.LogoContainer}>
            <img src={LOGO} alt="BackButton" className={styles.Logo} />
          </section>
        </Link>
      </div>
    </div>
  );
}
