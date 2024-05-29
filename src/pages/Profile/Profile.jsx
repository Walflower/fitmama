import styles from "./Profile.module.css";
import { LeftNavigation } from "../../components/LeftNavigation/LeftNavigation";
import { Link } from "react-router-dom";
import BlueButton from "../../components/BlueButton/BlueButton";
import Lara from "../../assets/Images/ProfileImages/Lara.png";
import NoFillButton from "../../components/NoFillButton/NoFillButton";
import ShortTextField from "../../components/ShortTextField/ShortTextField";
import CheckBox from "../../components/CheckBox/CheckBox";

import { Children, useState } from "react";
import axios from "axios";

export default function Profile() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  // ................................................
  const [Age, setAge] = useState("");
  const [Location, setLocation] = useState("");
  const [PostalCode, setPostalCode] = useState("");
  const [Activity, setActivity] = useState("");
  const [FitnessGoals, setFitnessGoals] = useState("");
  const [Activities, setActivities] = useState("");
  const [Concerns, setConcerns] = useState("");
  const [Children, setChildren] = useState("");
  const [Yes, setYes] = useState("");
  const [No, setNo] = useState("");

  // ................................................

  function SaveProfile() {
    console.log(FirstName, LastName, Email, Password);
  }

  return (
    <main className={styles.main}>
      <LeftNavigation />
      <body className={styles.Body}>
        <section className={styles.UserProfile}>
          <div className={styles.ImageBorder}>
            <img src={Lara} alt="Lara" className={styles.UserImage} />
          </div>
          <NoFillButton text={"Upload Photo"} />
        </section>

        <div className={styles.ContentContainer}>
          <section className={styles.content}>
            <p>First Name</p>
            <ShortTextField
              placeholder="First Name"
              text={FirstName}
              setText={setFirstName}
            />
          </section>
          <section className={styles.content}>
            <p>Last Name</p>
            <ShortTextField
              placeholder="Last Name"
              text={LastName}
              setText={setLastName}
            />
          </section>
        </div>

        <div className={styles.ContentContainer}>
          <section className={styles.content}>
            <p>Email</p>
            <ShortTextField
              placeholder="Email"
              text={Email}
              setText={setEmail}
            />
          </section>
          <section className={styles.content}>
            <p>Email</p>
            <ShortTextField
              placeholder="Password"
              text={Password}
              setText={setPassword}
            />
          </section>
        </div>
        {/* ............................................................. */}
        <section className={styles.TextFields}>
          <div className={styles.TextFieldContainer}>
            <p>Please Provide Your Age</p>
            <ShortTextField placeholder="36" text={Age} setText={setAge} />
          </div>

          <div className={styles.TextFieldContainer}>
            <p>Please Provide Your Postal Code</p>
            <ShortTextField
              placeholder="K1N-4P9"
              text={PostalCode}
              setText={setPostalCode}
            />
          </div>
          <div className={styles.TextFieldContainer}>
            <p>Location (City, State/Province, Country)</p>
            <ShortTextField
              placeholder="Ottawa"
              text={Location}
              setText={setLocation}
            />
          </div>
          <div className={styles.TextFieldContainer}>
            <p>What activities are you interest in?</p>
            <ShortTextField
              placeholder="Cycling"
              text={Activity}
              setText={setActivity}
            />
          </div>
          <div className={styles.CheckBoxContainer}>
            <div className={styles.CheckBoxTitle}>
              Would you like to join challenges with other members?
            </div>
            <div className={styles.CheckBox}>
              <CheckBox text={Yes} setText={setYes} />
              <CheckBox text={No} setText={setNo} />
            </div>
          </div>
        </section>

        {/* ......................................... */}
        <section className={styles.TextFields}>
          <div className={styles.TextFieldContainer}>
            <p>What are your primary fitness goals?</p>
            <ShortTextField
              placeholder="To walk 3 blocks"
              text={FitnessGoals}
              setText={setFitnessGoals}
            />
          </div>
          <div className={styles.TextFieldContainer}>
            <p>What types of physical activities do you enjoy?</p>
            <ShortTextField
              placeholder="Walking my dog"
              text={Activities}
              setText={setActivities}
            />
          </div>
          <div className={styles.TextFieldContainer}>
            <p>Do you have any fitness limitations or concerns?</p>
            <ShortTextField
              placeholder="none"
              text={Concerns}
              setText={setConcerns}
            />
          </div>
          <div className={styles.TextFieldContainer}>
            <p>What Number of Children (0-5 years old)</p>
            <ShortTextField
              placeholder="2"
              text={Children}
              setText={setChildren}
            />
          </div>
          <div className={styles.CheckBoxContainer}>
            <div className={styles.CheckBoxTitle}>
              Are you interested in participating in local meetups and walks
              with other moms?
            </div>
            <div className={styles.CheckBox}>
              <CheckBox text={Yes} setText={setYes} />
              <CheckBox text={No} setText={setNo} />
            </div>
          </div>
        </section>

        {/* .................................................................. */}
        <div className={styles.BlueButton}>
          <BlueButton text={"SUBMIT"} onClick={SaveProfile} />
        </div>
      </body>
    </main>
  );
}
