import styles from "./WelcomeBack.module.css";
// import { NavLink } from "react-router-dom";
import ShortTextField from "../../components/ShortTextField/ShortTextField";
import WelcomeBackImage from "../../assets/Images/Sidebar/Sign in-amico-2 1.svg";
import SignUpWithGoogle from "../../components/SignUpWithGoogle/SignUpWithGoogle";
import SignUpBlueButton from "../../components/SignUpBlueButton/SigupBlueButton";
import EyePassewordImageOpen from "../../assets/Images/eye password open2.png";
import WavingHandImage from "../../assets/Images/waving hand.png";
import SignUpWithGoogleImage from "../../assets/Images/Google Logo.jpg";
import LOGO from "../../assets/Images/Sidebar/LogoBlue - LeftMarginGone.png";

import { Link } from "react-router-dom";
// import CheckBox from "../../components/CheckBox/CheckBox";

export function WelcomeBack() {
  return (
    <div className={styles.WelcomeBackContainer}>
      <div className={styles.WelcomeBackImageContainer}>
        {/* <p className={styles.SignUpTitle}>FIT MAMA HUB</p> */}
        <img className={styles.WelcomeBackImage} src={WelcomeBackImage} />
      </div>

      <div className={styles.SignUpContainer}>
        <div className={styles.SignUpTitleContainer}>
          <img className={styles.LOGO} src={LOGO} />
          <p className={styles.SignUpTitle}>
            Hi, Welcome Back!
            <img className={styles.WavingHandImage} src={WavingHandImage} />
          </p>
          <div className={styles.spacing}>
            <ShortTextField placeholder="Enter Your Email" text={"Email"} />
          </div>
          <div className={styles.spacing}>
            <ShortTextField
              className={styles.spacing}
              text={"Passeword"}
              placeholder="Enter Your Password"
              image={EyePassewordImageOpen}
            />
          </div>
        </div>
        {/* <div>
          <CheckBox />
        </div> */}
        <div className={styles.LogIn}>
          <Link className={styles.Link} to="/Profile">
            <SignUpBlueButton text="Login" />
          </Link>
        </div>
        {/* <div>
          <SignUpWithGoogle
            text="Login With Google"
            image={SignUpWithGoogleImage}
            linkTo="/Google"
          />
        </div> */}
        <div className={styles.LoginContainer}>
          <p className={styles.NoAccount}>Don’t have an account ? </p>
          <Link className={styles.LogInLink} to="/#Home">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
