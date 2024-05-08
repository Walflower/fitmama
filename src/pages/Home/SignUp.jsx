import styles from "./SignUp.module.css";
import BlueButton from "../../components/BlueButton/BlueButton";
import ShortTextField from "../../components/ShortTextField/ShortTextField";
import CreateAccountImage from "../../assets/Images/signup-image.svg";
import SignUpWithGoogle from "../../components/SignUpWithGoogle/SignUpWithGoogle";
import SignUpBlueButton from "../../components/SignUpBlueButton/SigupBlueButton";

export default function SignUp() {
  return (
    <div className={styles.CreateAccountContainer}>
      <div className={styles.CreateAccountImageContainer}>
        <img className={styles.CreateAccountImage} src={CreateAccountImage} />
      </div>
      <div className={styles.SignUpContainer}>
        <div className={styles.SignUpTitleContainer}>
          <p className={styles.SignUpTitle}>Create An Account</p>
          <p className={styles.SignUpSubTitle}>
            Connect with your friends today!
          </p>
        </div>

        <div className={styles.TextFieldContainer}>
          <ShortTextField />
        </div>
        <SignUpBlueButton text="Sign Up" />
        <div>
          <p>Or With</p>
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
