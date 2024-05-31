import styles from "./Profile.module.css";
import { LeftNavigation } from "../../components/LeftNavigation/LeftNavigation";
import { Link } from "react-router-dom";
import BlueButton from "../../components/BlueButton/BlueButton";
import Helen from "../../assets/Images/ProfileImages/Lara.png";
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
  const [UploadImage, setUploadImage] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  // ................................................
  const [Bio, setBio] = useState("");
  const [Age, setAge] = useState("");
  const [Location, setLocation] = useState("");
  const [PostalCode, setPostalCode] = useState("");
  const [Activity, setActivity] = useState("");
  const [Activity1, setActivity1] = useState("");
  const [Activity2, setActivity2] = useState("");
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
    const UploadImage = formRef.current.UploadImage.value;
    const FirstName = formRef.current.FirstName.value;
    const LastName = formRef.current.LastName.value;
    const Email = formRef.current.Email.value;
    const Password = formRef.current.Password.value;
    const Bio = formRef.current.Bio.value;
    const Age = formRef.current.Age.value;
    const Location = formRef.current.Location.value;
    const PostalCode = formRef.current.PostalCode.value;
    const Activity = formRef.current.Activity.value;
    const Activity1 = formRef.current.Activity1.value;
    const Activity2 = formRef.current.Activity2.value;
    const FitnessGoals = formRef.current.FitnessGoals.value;
    const Activities = formRef.current.Activities.value;
    const Concerns = formRef.current.Concerns.value;
    const Children = formRef.current.Children.value;
    const Yes = formRef.current.Yes.value;
    const No = formRef.current.No.value;

    postUserInformation(
      UploadImage,
      FirstName,
      LastName,
      Email,
      Password,
      Bio,
      Age,
      Location,
      PostalCode,
      Activity,
      Activity1,
      Activity2,
      FitnessGoals,
      Activities,
      Concerns,
      Children,
      Yes,
      No
    );
  };

  const postUserInformation = async (
    UploadImage,
    FirstName,
    LastName,
    Email,
    Password,
    Bio,
    Age,
    Location,
    PostalCode,
    Activity,
    Activity1,
    Activity2,
    FitnessGoals,
    Activities,
    Concerns,
    Children,
    Yes,
    No
  ) => {
    try {
      const newUser = {
        UploadImage: UploadImage,
        FirstName: FirstName,
        LastName: LastName,
        Email: Email,
        Password: Password,
        Bio: Bio,
        Age: Age,
        Location: Location,
        PostalCode: PostalCode,
        Activity: Activity,
        Activity1: Activity1,
        Activity2: Activity2,

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
      //add validation here
    } catch (error) {
      toast.error("This is an error");
      // console.error("This is the error ", error);
    }
  };
  // .......................................................
  // uploading an image
  const [selectedImages, setSelectedImages] = useState(null);
  const [Progress, setProgress] = useState({
    started: false,
    pc: 0,
  });
  const [msg, setMsg] = useState(null);
  function handleUpload() {
    if (!selectedImages) {
      setMsg("No file Selected");
      console.log("No File Selected");
      return;
    }
    const fd = new FormData();
    for (let i = 0; i < selectedImages.length; i++) {
      fd.append(`selectedImages${i + 1}`, selectedImages[i]);
    }
    setMsg("Uploading....");

    fetch("http://localhost:9000/upload", {
      method: "POST",
      body: fd,
      headers: {
        "Custom-Header": "value",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("bad response");
        }

        toast.success("UPLOAD COMPLETED");
        return res.json();
      })
      .then((data) => console.log(data))
      .catch((err) => {
        toast.error("Upload unsuccessful");
        console.log(err);
      });
  }

  return (
    <main className={styles.main}>
      <LeftNavigation />

      <form ref={formRef} onSubmit={addUser} className={styles.Body}>
        {/* ......................uploading image. */}
        <section className={styles.UserProfile}>
          <div className={styles.ImageBorder}>
            <img className={styles.ImageBorder} src={Helen} alt="profile" />
          </div>
          <button className={styles.UploadButton}>
            <input
              setText={setUploadImage}
              src="download.png"
              name="UploadImage"
              onChange={(e) => {
                setSelectedImages(e.target.files);
              }}
              type="file"
              multiple
            ></input>
            {/* ......................uploading image. */}
          </button>
          <span className={styles.UploadContent}>
            <NoFillButton onClick={handleUpload} text={"Upload Photo"}>
              Upload
            </NoFillButton>
            {msg && <span>{msg}</span>}
          </span>

          <span className={styles.content}>
            <p>First Name</p>
            <ShortTextField
              name="FirstName"
              placeholder="First Name"
              text={FirstName}
              setText={setFirstName}
            />
          </span>

          <span className={styles.content}>
            <p>Last Name</p>
            <ShortTextField
              name="LastName"
              placeholder="Last Name"
              text={LastName}
              setText={setLastName}
            />
          </span>

          <span className={styles.content}>
            <p>Email</p>
            <ShortTextField
              name="Email"
              placeholder="Email"
              text={Email}
              setText={setEmail}
              type="email"
            />
          </span>

          <span className={styles.content}>
            <p>Password</p>
            <ShortTextField
              name="Password"
              placeholder="Password"
              text={Password}
              setText={setPassword}
              type="password"
            />
          </span>
        </section>

        {/* ............................................................. */}
        <h1>UPDATE YOUR INFORMATION</h1>
        <div className={styles.ContentContainer}>
          <section className={styles.content}>
            <p>Tell us about yourself? Likes & Interest!</p>
            <ShortTextField
              name="Bio"
              placeholder="I'm 35, exploring the world of fitness with my little one in GTA! Join me as I try new workouts and activities while navigating the joys and struggles of toddlerhood.  #FitExplorer #ToddlerMomAdventures"
              text={Bio}
              setText={setBio}
            />
          </section>

          <section className={styles.content}>
            <p>Please Provide Your Age</p>
            <ShortTextField
              name="Age"
              placeholder="36"
              text={Age}
              setText={setAge}
            />
          </section>

          <section className={styles.content}>
            <p>Please Provide Your Postal Code</p>
            <ShortTextField
              name="PostalCode"
              placeholder="K1N-4P9"
              text={PostalCode}
              setText={setPostalCode}
            />
          </section>

          <section className={styles.content}>
            <p>Location (City, State/Province, Country)</p>
            <ShortTextField
              name="Location"
              placeholder="Ottawa"
              text={Location}
              setText={setLocation}
            />
          </section>

          <section className={styles.content}>
            <p>What activities are you interested in? Please provide 3</p>

            <ShortTextField
              name="Activity"
              placeholder="Cycling"
              text={Activity}
              setText={setActivity}
            />
            {/* <ShortTextField
                name="Activity1"
                placeholder="Rollerblading"
                text={Activity}
                setText={setActivity1}
              />
              <ShortTextField
                name="Activity2"
                placeholder="Walking"
                text={Activity}
                setText={setActivity2}
              /> */}
          </section>

          <section className={styles.content}>
            <div className={styles.CheckBoxTitle}>
              Would you like to join challenges with other members?
            </div>
            <div className={styles.CheckBox}>
              Yes <CheckBox name="Yes" text={Yes} setText={setYes} />
              No <CheckBox name="No" text={No} setText={setNo} />
            </div>
          </section>

          <section className={styles.content}>
            <p>What are your primary fitness goals?</p>
            <ShortTextField
              name="FitnessGoals"
              placeholder="To walk 3 blocks"
              text={FitnessGoals}
              setText={setFitnessGoals}
            />
          </section>

          <section className={styles.content}>
            <p>What types of physical activities do you enjoy?</p>
            <ShortTextField
              name="Activities"
              placeholder="Walking my dog"
              text={Activities}
              setText={setActivities}
            />
          </section>

          <section className={styles.content}>
            <p>Do you have any fitness limitations or concerns?</p>
            <ShortTextField
              name="Concerns"
              placeholder="none"
              text={Concerns}
              setText={setConcerns}
            />
          </section>

          <section className={styles.content}>
            <p>What Number of Children (0-5 years old)</p>
            <ShortTextField
              name="Children"
              placeholder="2"
              text={Children}
              setText={setChildren}
            />
          </section>

          <section className={styles.content}>
            <div className={styles.CheckBoxTitle}>
              Are you interested in participating in local meetups and walks
              with other moms?
            </div>
            <div className={styles.CheckBox}>
              Yes <CheckBox name="Yes" text={Yes} setText={setYes} />
              No <CheckBox name="No" text={No} setText={setNo} />
            </div>
          </section>
        </div>

        {/* .................................................................. */}

        <div className={styles.SubmitBrows}>
          <div className={styles.submitButtonContainer}>
            <Link to="/Community">
              {" "}
              <BlueButton text={"SUBMIT"} onClick={notify} />
            </Link>
            <ToastContainer />
          </div>

          <Link to="/Network">
            <button className={styles.connectNetwork}>BROWSE NETWORK</button>
          </Link>
        </div>
      </form>
    </main>
  );
}
