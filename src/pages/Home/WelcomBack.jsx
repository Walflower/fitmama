import styles from "./SignUp.module.css";
import ShortTextField from "../../components/ShortTextField/ShortTextField";
import WelcomeBackImage from "../../assets/Images/Sign in-amico-2 1.svg";
import SignUpWithGoogle from "../../components/SignUpWithGoogle/SignUpWithGoogle";
import SignUpBlueButton from "../../components/SignUpBlueButton/SigupBlueButton";

export default function WelcomeBack() {
  return (
    <div className={styles.CreateAccountContainer}>
      <div className={styles.CreateAccountImageContainer}>
        <img className={styles.WelcomeBackImage} src={WelcomeBackImage} />
      </div>
      <div className={styles.SignUpContainer}>
        <div className={styles.SignUpTitleContainer}>
          <p className={styles.SignUpTitle}>Hi, Welcome Back!</p>
        </div>

        <div className={styles.TextFieldContainer}>
          <ShortTextField text={"Email"} />
        </div>
        <SignUpBlueButton text="Sign Up" />

        <div className={styles.OrWitheContainer}>
          <div></div>
          <p className={styles.OrWith}>Or With</p>
        </div>

        <div>
          <SignUpWithGoogle text="Signup With Google" />
        </div>
        <p>Already have an account? </p>
        <link rel="stylesheet" href="" />
      </div>
    </div>
  );
}
