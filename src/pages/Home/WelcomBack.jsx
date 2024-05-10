import styles from "./WelcomBack.module.css";
import { NavLink } from "react-router-dom";
import ShortTextField from "../../components/ShortTextField/ShortTextField";
import WelcomeBackImage from "../../assets/Images/Sign in-amico-2 1.svg";
import SignUpWithGoogle from "../../components/SignUpWithGoogle/SignUpWithGoogle";
import SignUpBlueButton from "../../components/SignUpBlueButton/SigupBlueButton";
import EyePassewordImageOpen from "../../assets/Images/eye password open2.png";
import WavingHandImage from "../../assets/Images/waving hand.png";
import SignUpWithGoogleImage from "../../assets/Images/Google Logo.jpg";
import { NavHashLink } from "react-router-hash-link";
// import CheckBox from "../../components/CheckBox/CheckBox";

export default function SignUp() {
  return (
    <div className={styles.WelcomeBackContainer}>
      <div className={styles.WelcomeBackImageContainer}>
        <img className={styles.WelcomeBackImage} src={WelcomeBackImage} />
      </div>
      <div className={styles.SignUpContainer}>
        <div className={styles.SignUpTitleContainer}>
          <p className={styles.SignUpTitle}>
            Hi, Welcome Back!
            <img className={styles.WavingHandImage} src={WavingHandImage} />
          </p>
        </div>
        <div className={styles.TextFieldContainer}>
          <ShortTextField placeholder="Enter Your Email" text={"Email"} />
        </div>
        <div className={styles.TextFieldContainer}>
          <ShortTextField
            text={"Passeword"}
            placeholder="Enter Your Password"
            image={EyePassewordImageOpen}
          />
        </div>
        {/* <div>
          <CheckBox />
        </div> */}
        <div className={styles.LogIn}>
          <SignUpBlueButton text="Login" />
        </div>
        <div>
          <SignUpWithGoogle
            text="Login With Google"
            image={SignUpWithGoogleImage}
            linkTo="/Google"
          />
        </div>
        <div className={styles.LoginContainer}>
          <p>Don’t have an account ? </p>
          <NavHashLink className={styles.LogInLink} linkTo="/#Home">
            Sign Up
          </NavHashLink>
        </div>
      </div>
    </div>
  );
}
