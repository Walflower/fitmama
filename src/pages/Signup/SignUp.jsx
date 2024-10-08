import styles from "./SignUp.module.css";
import ShortTextField from "../../components/ShortTextField/ShortTextField";
import CreateAccountImage from "../../assets/Images/signup-image.svg";
import SignUpWithGoogle from "../../components/SignUpWithGoogle/SignUpWithGoogle";
import SignUpBlueButton from "../../components/SignUpBlueButton/SigupBlueButton";
import EyePasswordImage from "../../assets/Images/eye password logo.png";
import SignUpWithGoogleImage from "../../assets/Images/Google Logo.jpg";
import { Link } from "react-router-dom";

import { useState } from "react";
import { Validation } from "./SignUpValidation";

export default function SignUp() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone_number: "",
    password: "",
  });

  const [errors, setErrors] = useState([]);

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };
  return (
    <div className={styles.CreateAccountContainer}>
      <div className={styles.CreateAccountImageContainer}>
        <img className={styles.CreateAccountImage} src={CreateAccountImage} />
      </div>

      <div className={styles.SignUpContainer}>
        <form action="" onSubmit={handleSubmit}>
          <div className={styles.SignUpTitleContainer}>
            <p className={styles.SignUpTitle}>Create An Account</p>
          </div>

          <div className={styles.TextFieldContainer}>
            <ShortTextField
              placeholder="Enter Your Name"
              name="name"
              onChange={handleInput}
            />
            {errors.name && (
              <span className={styles.danger}>{errors.name}</span>
            )}
          </div>

          <div className={styles.TextFieldContainer}>
            <ShortTextField
              placeholder="Enter Your Email"
              type="email"
              name="email"
              onChange={handleInput}
            />
            {errors.email && (
              <span className={styles.danger}>{errors.email}</span>
            )}
          </div>

          <div className={styles.TextFieldContainer}>
            <ShortTextField
              placeholder="Enter Your Phone Number"
              type="tel"
              name="phone_number"
              onChange={handleInput}
            />
            {errors.phone_number && (
              <span className={styles.danger}>{errors.phone_number}</span>
            )}
          </div>

          <div className={styles.TextFieldContainer}>
            <ShortTextField
              placeholder="Enter Your Password"
              image={EyePasswordImage}
              type="password"
              name="password"
              onChange={handleInput}
            />
            {errors.password && (
              <span className={styles.danger}>{errors.password}</span>
            )}
          </div>

          <SignUpBlueButton text="Sign Up" type="submit" />

          <div className={styles.OrWitheContainer}>
            <div className={styles.Line}></div>
            <p className={styles.OrWith}>Or With</p>
            <div className={styles.Line}></div>
          </div>

          <div>
            <SignUpWithGoogle
              text="Sign Up With Google"
              image={SignUpWithGoogleImage}
            />
          </div>

          <div className={styles.LoginContainer}>
            <p>Already have an account?</p>

            <Link className={styles.LogInLink} to="/Login">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
