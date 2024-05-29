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

  // ................................................
  //creating post request
  function SaveProfile() {
    const [Info, setInfo] = useState([]);
    const formRef = useRef(null);
    // .................................
    useEffect(() => {
      //Collecting all the data from UserProfile
      const postContent = async () => {
        try {
          const response = await axios.post("http://localhost:9000/");
          setInfo(response.data);
        } catch (error) {
          console.error("This is the error ", error);
        }
      };
      postContent();
    }, []);

    // ................................
    const addCollectedDAta = async (e) => {
      // e.preventDefault();

      //stating form input values
      const name = formRef.current.name.value;
      const post = formRef.current.post.value;

      //checking if the form is valid
      const isFormValid = () => {
        if (!name || !post) {
          return false;
        } else {
          return true;
        }
      };

      if (isFormValid()) {
        alert("You've added new post successfully!");
        // await postNewPost(name, post);

        //this clears the form
        e.target.reset();
      } else {
        alert("Failed to add Information, you have errors in you form");
      }

      postNewGathered(FirstName, LastName, Password);
    };
    // ..............................................
    const postNewGathered = async (name, post) => {
      try {
        const NewDataCollected = {
          FirstName: FirstName,
          LastName: LastName,
          Email: Email,
          Password: Password,
        };

        const postresponse = await axios.post(
          "http://localhost:9000",
          NewDataCollected
        );
        setPostList([NewDataCollected, ...postList]);
      } catch (error) {
        console.error("This is the error ", error);
      }
    };

    console.log(FirstName, LastName, Email, Password);
  }
  // ................................................

  return (
    <main className={styles.main}>
      <LeftNavigation />

      <form onSubmit={addPost} ref={formRef} className={styles.Body}>
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
        <div className={styles.ContentContainer}>
          <section className={styles.content}>
            <p>Please Provide Your Age</p>
            <ShortTextField placeholder="36" text={Age} setText={setAge} />
          </section>
        </div>

        <div className={styles.ContentContainer}>
          <section className={styles.content}>
            <p>Please Provide Your Postal Code</p>
            <ShortTextField
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
              <CheckBox text={Yes} setText={setYes} />
              <CheckBox text={No} setText={setNo} />
            </div>
          </section>
        </div>

        {/* ......................................... */}
        <div className={styles.ContentContainer}>
          <section className={styles.content}>
            <p>What are your primary fitness goals?</p>
            <ShortTextField
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
              <CheckBox text={Yes} setText={setYes} />
              <CheckBox text={No} setText={setNo} />
            </div>
          </section>
        </div>

        {/* .................................................................. */}
        <div className={styles.BlueButton}>
          <BlueButton text={"SUBMIT"} onClick={SaveProfile} />
          <ToastContainer />
        </div>
      </form>
    </main>
  );
}
