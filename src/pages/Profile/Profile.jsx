import styles from "./Profile.module.css";
import { LeftNavigation } from "../../components/LeftNavigation/LeftNavigation";
import { Link } from "react-router-dom";
import BlueButton from "../../components/BlueButton/BlueButton";
import Lara from "../../assets/Images/ProfileImages/Lara.png";
import NoFillButton from "../../components/NoFillButton/NoFillButton";
import ShortTextField from "../../components/ShortTextField/ShortTextField";
import CheckBox from "../../components/CheckBox/CheckBox";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Profile() {
  const notify = () => toast("INFORMATION SUBMITTED!");
  // ................................................
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
  // ...........................................
  const [Info, setInfo] = useState([]);
  const formRef = useRef(null);
  // ................................................
  //creating post request

  const addUser = async (e) => {
    e.preventDefault();
    //stating form input values

    const FirstName = formRef.current.FirstName.value;
    const LastName = formRef.current.LastName.value;
    const Email = formRef.current.Email.value;
    const Password = formRef.current.Password.value;
    const Age = formRef.current.Age.value;
    const Location = formRef.current.Location.value;
    const PostalCode = formRef.current.PostalCode.value;
    const Activity = formRef.current.Activity.value;
    const FitnessGoals = formRef.current.FitnessGoals.value;
    const Activities = formRef.current.Activities.value;
    const Concerns = formRef.current.Concerns.value;
    const Children = formRef.current.Children.value;
    const Yes = formRef.current.Yes.value;
    const No = formRef.current.No.value;

    postUserInformation(
      FirstName,
      LastName,
      Email,
      Password,
      Age,
      Location,
      PostalCode,
      Activity,
      FitnessGoals,
      Activities,
      Concerns,
      Children,
      Yes,
      No
    );
    //addform validation if we have time
  };

  const postUserInformation = async (
    FirstName,
    LastName,
    Email,
    Password,
    Age,
    Location,
    PostalCode,
    Activity,
    FitnessGoals,
    Activities,
    Concerns,
    Children,
    Yes,
    No
  ) => {
    try {
      const newUser = {
        FirstName: FirstName,
        LastName: LastName,
        Email: Email,
        Password: Password,
        Age: Age,
        Location: Location,
        PostalCode: PostalCode,
        Activity: Activity,
        FitnessGoals: FitnessGoals,
        Activities: Activities,
        Concerns: Concerns,
        Children: Children,
        Yes: Yes,
        No: No,
      };

      const postResponse = await axios.post(
        "http://localhost:9000/userprofiles",
        newUser
      );
      setInfo([newUser, ...Info]);
    } catch (error) {
      console.error("This is the error ", error);
    }
  };

  return (
    <main className={styles.main}>
      <LeftNavigation />

      <form ref={formRef} onSubmit={addUser} className={styles.Body}>
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
              name="FirstName"
              placeholder="First Name"
              text={FirstName}
              setText={setFirstName}
            />
          </section>
          <section className={styles.content}>
            <p>Last Name</p>
            <ShortTextField
              name="LastName"
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
              name="Email"
              placeholder="Email"
              text={Email}
              setText={setEmail}
            />
          </section>
          <section className={styles.content}>
            <p>Email</p>
            <ShortTextField
              name="Password"
              placeholder="Password"
              text={Password}
              setText={setPassword}
            />
          </section>
        </div>
        {/* ............................................................. */}
        <div className={styles.ContentContainer}>
          <section className={styles.content}>
            <p>Please Provide Your Age</p>
            <ShortTextField
              name="Age"
              placeholder="36"
              text={Age}
              setText={setAge}
            />
          </section>
        </div>

        <div className={styles.ContentContainer}>
          <section className={styles.content}>
            <p>Please Provide Your Postal Code</p>
            <ShortTextField
              name="PostalCode"
              placeholder="K1N-4P9"
              text={PostalCode}
              setText={setPostalCode}
            />
          </section>
        </div>
        <div className={styles.ContentContainer}>
          <section className={styles.content}>
            <p>Location (City, State/Province, Country)</p>
            <ShortTextField
              name="Location"
              placeholder="Ottawa"
              text={Location}
              setText={setLocation}
            />
          </section>
        </div>
        <div className={styles.ContentContainer}>
          <section className={styles.content}>
            <p>What activities are you interest in?</p>
            <ShortTextField
              name="Activity"
              placeholder="Cycling"
              text={Activity}
              setText={setActivity}
            />
          </section>
        </div>
        <div className={styles.CheckBoxContainer}>
          <section className={styles.content}>
            <div className={styles.CheckBoxTitle}>
              Would you like to join challenges with other members?
            </div>
            <div className={styles.CheckBox}>
              <CheckBox name="Yes" text={Yes} setText={setYes} />
              <CheckBox name="No" text={No} setText={setNo} />
            </div>
          </section>
        </div>

        {/* ......................................... */}
        <div className={styles.ContentContainer}>
          <section className={styles.content}>
            <p>What are your primary fitness goals?</p>
            <ShortTextField
              name="FitnessGoals"
              placeholder="To walk 3 blocks"
              text={FitnessGoals}
              setText={setFitnessGoals}
            />
          </section>
        </div>
        <div className={styles.ContentContainer}>
          <section className={styles.content}>
            <p>What types of physical activities do you enjoy?</p>
            <ShortTextField
              name="Activities"
              placeholder="Walking my dog"
              text={Activities}
              setText={setActivities}
            />
          </section>
        </div>
        <div className={styles.ContentContainer}>
          <section className={styles.content}>
            <p>Do you have any fitness limitations or concerns?</p>
            <ShortTextField
              name="Concerns"
              placeholder="none"
              text={Concerns}
              setText={setConcerns}
            />
          </section>
        </div>
        <div className={styles.ContentContainer}>
          <section className={styles.content}>
            <p>What Number of Children (0-5 years old)</p>
            <ShortTextField
              name="Children"
              placeholder="2"
              text={Children}
              setText={setChildren}
            />
          </section>
        </div>
        <div className={styles.CheckBoxContainer}>
          <section className={styles.content}>
            <div className={styles.CheckBoxTitle}>
              Are you interested in participating in local meetups and walks
              with other moms?
            </div>
            <div className={styles.CheckBox}>
              <CheckBox name="Yes" text={Yes} setText={setYes} />
              <CheckBox name="No" text={No} setText={setNo} />
            </div>
          </section>
        </div>

        {/* .................................................................. */}
        <div className={styles.BlueButton}>
          <BlueButton text={"SUBMIT"} onClick={notify} />
          <ToastContainer />
        </div>
      </form>
    </main>
  );
}
