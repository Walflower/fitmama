import styles from "./SignUp.module.css";
import ShortTextField from "../../components/ShortTextField/ShortTextField";
import CreateAccountImage from "../../assets/Images/signup-image.svg";
import SignUpWithGoogle from "../../components/SignUpWithGoogle/SignUpWithGoogle";
import SignUpBlueButton from "../../components/SignUpBlueButton/SigupBlueButton";
import EyePassewordImage from "../../assets/Images/eye password logo.png";
import SignUpWithGoogleImage from "../../assets/Images/Google Logo.jpg";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className={styles.CreateAccountContainer}>
      <div className={styles.CreateAccountImageContainer}>
        <img className={styles.CreateAccountImage} src={CreateAccountImage} />
      </div>
      <div className={styles.SignUpContainer}>
        <div className={styles.SignUpTitleContainer}>
          <p className={styles.SignUpTitle}>Create An Account</p>
        </div>

        <div className={styles.TextFieldContainer}>
          <ShortTextField placeholder="Enter Your Username" />
        </div>
        <div className={styles.TextFieldContainer}>
          <ShortTextField placeholder="Enter Your Email" />
        </div>
        <div className={styles.TextFieldContainer}>
          <ShortTextField placeholder="Enter Your Phone Number" />
        </div>
        <div className={styles.TextFieldContainer}>
          <ShortTextField
            placeholder="Enter Your Password"
            image={EyePassewordImage}
          />
        </div>
        <SignUpBlueButton text="Sign Up" />

        <div className={styles.OrWitheContainer}>
          <div className={styles.Line}></div>
          <p className={styles.OrWith}>Or With</p>
          <div className={styles.Line}></div>
        </div>

        <div>
          <SignUpWithGoogle
            text="Signup With Google"
            image={SignUpWithGoogleImage}
            linkTo="/Google"
          />
        </div>
        <div className={styles.LoginContainer}>
          <p>Already have an account?</p>
          <Link className={styles.LogInLink} linkTo="/Home">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
