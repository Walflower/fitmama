import styles from "./SignUp.module.css";
import ShortTextField from "../../components/ShortTextField/ShortTextField";
import CreateAccountImage from "../../assets/Images/signup-image.svg";
import SignUpWithGoogle from "../../components/SignUpWithGoogle/SignUpWithGoogle";
// import SignUpBlueButton from "../../components/SignUpBlueButton/SigupBlueButton";
import EyePasswordImage from "../../assets/Images/eye password logo.png";
import SignUpWithGoogleImage from "../../assets/Images/Google Logo.jpg";
import { Link } from "react-router-dom";

import { useState, useRef } from "react";
import { Validation } from "./SignUpValidation";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export default function SignUp() {
  // const [values, setValues] = useState({
  //   first_name: null,
  //   last_name: null,
  //   email: null,
  //   password_hash: null,
  //   location: null,
  // });

  const [errors, setErrors] = useState([]);
  const formRef = useRef(null);

  //Generating an unique user_id
  const generateUserId = () => {
    return uuidv4();
  };

  // const handleInput = (event) => {
  //   setValues((prev) => ({
  //     ...prev,
  //     [event.target.name]: event.target.value,
  //   }));
  // };

  //.....
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setErrors(Validation(values));
  // };
  //......

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Access form values using formRef
    const form = formRef.current;
    const values = {
      first_name: form.elements.first_name.value,
      last_name: form.elements.last_name.value,
      email: form.elements.email.value,
      password_hash: form.elements.password_hash.value,
      location: form.elements.location.value,
    };

    //Validate the form values
    const validationErrors = Validation(values);
    setErrors(validationErrors);

    //if no errors
    if (Object.keys(validationErrors).length === 0) {
      await postNewUser(values);
      form.reset(); // Reset the form after successful submission
    } else {
      alert("Failed to add user, you have some errors in your form.");
    }
  };

  //ADDING (POST) a new users
  const postNewUser = async (values) => {
    try {
      const newUser = {
        user_id: generateUserId(),
        ...values,
      };

      console.log(newUser);
      const postResponse = await axios.post(
        "http://localhost:8080/users",
        newUser
      );
      console.log(postResponse);
    } catch (error) {
      console.error("Error adding new user:", error);
    }
  };

  return (
    <div className={styles.CreateAccountContainer}>
      <div className={styles.CreateAccountImageContainer}>
        <img
          className={styles.CreateAccountImage}
          src={CreateAccountImage}
          alt="create an account"
        />
      </div>

      <div className={styles.SignUpContainer}>
        <form onSubmit={handleSubmit} ref={formRef}>
          <div className={styles.SignUpTitleContainer}>
            <p className={styles.SignUpTitle}>Create An Account</p>
          </div>

          <div className={styles.TextFieldContainer}>
            <ShortTextField
              placeholder="First Name"
              name="first_name"
              type="text"
            />
            {errors.first_name && (
              <span className={styles.danger}>{errors.first_name}</span>
            )}
          </div>

          <div className={styles.TextFieldContainer}>
            <ShortTextField
              placeholder="Last Name"
              name="last_name"
              type="text"
            />
            {errors.last_name && (
              <span className={styles.danger}>{errors.last_name}</span>
            )}
          </div>

          <div className={styles.TextFieldContainer}>
            <ShortTextField placeholder="Email" type="email" name="email" />
            {errors.email && (
              <span className={styles.danger}>{errors.email}</span>
            )}
          </div>

          <div className={styles.TextFieldContainer}>
            <ShortTextField
              placeholder="Password"
              image={EyePasswordImage}
              type="password"
              name="password_hash"
            />
            {errors.password_hash && (
              <span className={styles.danger}>{errors.password_hash}</span>
            )}
          </div>

          <div className={styles.TextFieldContainer}>
            <ShortTextField
              placeholder="Location"
              name="location"
              type="text"
            />
            {errors.location && (
              <span className={styles.danger}>{errors.location}</span>
            )}
          </div>

          <button type="submit" className={styles.Button}>
            Sign Up
          </button>
          {/* <SignUpBlueButton text="Sign Up" type="submit" /> */}

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
