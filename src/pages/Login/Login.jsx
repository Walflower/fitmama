import styles from "./Login.module.css";
// import { NavLink } from "react-router-dom";
import ShortTextField from "../../components/ShortTextField/ShortTextField";
import LoginImage from "../../assets/Images/Sidebar/Sign in-amico-2 1.svg";
import SignUpWithGoogle from "../../components/SignUpWithGoogle/SignUpWithGoogle";
import SignUpBlueButton from "../../components/SignUpBlueButton/SigupBlueButton";
import EyePasswordImageOpen from "../../assets/Images/eye password open2.png";
import WavingHandImage from "../../assets/Images/waving hand.png";
import SignUpWithGoogleImage from "../../assets/Images/Google Logo.jpg";
import LOGO from "../../assets/Images/Sidebar/LogoBlue - LeftMarginGone.png";

import { Form, Link } from "react-router-dom";
import { useState } from "react";
import { Validation } from "./LoginValidation";
// import CheckBox from "../../components/CheckBox/CheckBox";

export function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState([]);

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };

  return (
    <div className={styles.LoginContainer}>
      <div className={styles.LoginImageContainer}>
        {/* <p className={styles.SignUpTitle}>FIT MAMA HUB</p> */}
        <img className={styles.LoginImage} src={LoginImage} />
      </div>

      <div className={styles.SignUpContainer}>
        <Form action="" onSubmit={handleSubmit}>
          <div className={styles.SignUpTitleContainer}>
            <img className={styles.LOGO} src={LOGO} />
            <p className={styles.SignUpTitle}>
              Hi, Welcome Back!
              <img className={styles.WavingHandImage} src={WavingHandImage} />
            </p>

            <div className={styles.spacing}>
              <ShortTextField
                placeholder="Enter Your Email"
                text={"Email"}
                type="email"
                name="email"
                onChange={handleInput}
              />
              {errors.email && (
                <span className={styles.danger}>{errors.email}</span>
              )}
            </div>
            <div className={styles.spacing}>
              <ShortTextField
                className={styles.spacing}
                text={"Password"}
                placeholder="Enter Your Password"
                image={EyePasswordImageOpen}
                type="password"
                name="password"
                onChange={handleInput}
              />
              {errors.password && (
                <span className={styles.danger}>{errors.password}</span>
              )}
            </div>
          </div>

          <div className={styles.LogIn}>
            <SignUpBlueButton type="submit" text="Login" />
          </div>

          <div className={styles.LoginContainer}>
            <p className={styles.NoAccount}>Don’t have an account ? </p>
            <Link className={styles.LogInLink} to="/Signup">
              Sign Up
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}
