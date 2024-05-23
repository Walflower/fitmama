import styles from "./LeftNavigation.module.css";
import Lara from "../../assets/Images/ProfileImages/Lara.png";
import Services from "../../assets/Images/Sidebar/Services.svg";
import { Link } from "react-router-dom";
import LOGO from "../../assets/Images/LOGO.png";

import Community from "../../assets/Icons/community.svg";
import Network from "../../assets/Images/Sidebar/Network.png";
import DashboardImage from "../../assets/Icons/dashboard.svg";
// import FAQ from "../../assets/Icons/faq.svg";
// import Membership from "../../assets/Icons/membership.svg";
// import Rewards from "../../assets/Icons/rewards.svg";
// import Settings from "../../assets/Icons/settings.svg";
// import Testimonial from "../../assets/Icons/testimonial.svg";
// import Trainers from "../../assets/Icons/trainers.svg";

export function LeftNavigation() {
  return (
    <div className={styles.LeftNavigation}>
      <div className={styles.Questionnaire}>
        <section className={styles.Navigation}>
          <div className={styles.UserProfile}>
            <img src={Lara} alt="Lara" className={styles.UserImage} />
            <h2 className={styles.UserName}>Hi Helen</h2>
          </div>

          <section className={styles.ServicesContainer}>
            <img
              src={Community}
              alt="Services"
              className={styles.ServicesImage}
            />
            <Link to="/Dashboard" className={styles.Links}>
              <p className={styles.ServicesTitles}>Community</p>
            </Link>
          </section>

          <section className={styles.ServicesContainer}>
            <img
              src={Network}
              alt="Services"
              className={styles.ServicesImage}
            />
            <Link to="/Dashboard" className={styles.Links}>
              <p className={styles.ServicesTitles}>Network</p>
            </Link>
          </section>

          {/* <section className={styles.Services}>
            <img
              src={DashboardImage}
              alt="Services"
              className={styles.ServicesImage}
            />
            <Link to="/Community">
              <p className={styles.ServicesTitles}>Dashboard</p>
            </Link>
          </section>

          <section className={styles.Testimonial}>
            <img
              src={Testimonial}
              alt="Services"
              className={styles.ServicesImage}
            />
            <Link to="/Dashboard">
              <p className={styles.ServicesTitles}>Testimonial</p>
            </Link>
          </section>

          <section className={styles.Trainers}>
            <img
              src={Trainers}
              alt="Services"
              className={styles.ServicesImage}
            />
            <Link to="/Dashboard">
              <p className={styles.ServicesTitles}>Trainers</p>
            </Link>
          </section>
        </section>

        <section className={styles.Subscription}>
          <h3 classImage={styles.Subscribe}>Subscribe to Fit Mama Hub</h3>

          <section className={styles.Rewards}>
            <img
              src={Rewards}
              alt="Services"
              className={styles.ServicesImage}
            />
            <Link to="/Dashboard">
              <p className={styles.ServicesTitles}>Rewards</p>
            </Link>
          </section>

          <section className={styles.Settings}>
            <img
              src={Settings}
              alt="Services"
              className={styles.ServicesImage}
            />
            <Link to="/Dashboard">
              <p className={styles.ServicesTitles}>Settings</p>
            </Link>
          </section>

          <section className={styles.SignOut}>
            <img
              src={Membership}
              alt="Services"
              className={styles.ServicesImage}
            />
            <Link to="/Dashboard">
              <p className={styles.ServicesTitles}>Membership</p>
            </Link>
          </section>

          <section className={styles.SignOut}>
            <img
              src={Services}
              alt="Services"
              className={styles.ServicesImage}
            />
            <Link to="/Dashboard">
              <p className={styles.ServicesTitles}>FAQ</p>
            </Link>
          </section> */}

          {/**where is this back button going?/............................................ */}
          {/* <Link>
            <img src={LOGO} alt="BackButton" className={styles.Logo} />
          </Link> */}
        </section>
      </div>
    </div>
  );
}
