import styles from "./Network.module.css";
import { LeftNavigation } from "../../components/LeftNavigation/LeftNavigation";
import { Link } from "react-router-dom";
import BlueButton from "../../components/BlueButton/BlueButton";
import Frances from "../../assets/Images/Network/Frances.png";
import Martha from "../../assets/Images/Network/Martha.png";
import Matilda from "../../assets/Images/Network/Matilda.png";
import Luna from "../../assets/Images/Network/Luna.jpg";
import Samantha from "../../assets/Images/Network/Samantha.jpg";
import Crystal from "../../assets/Images/Network/Crystal.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Network() {
  const [userProfileList, setUserProfileList] = useState([]);

  useEffect(() => {
    const getUserProfiles = async () => {
      try {
        const response = await axios.get("http://localhost:9000/userprofiles");
        setUserProfileList(response.data);
        console.log(response.data, "User Profile Colleted");
      } catch (error) {
        console.error("This is the error ", error);
      }
    };
    getUserProfiles();
  }, []);

  return (
    <main className={styles.main}>
      <LeftNavigation />

      <body className={styles.Body}>
        <h1>YOUR NETWORK</h1>
        <div className={styles.ImageContainer}>
          {userProfileList?.map((allProfiles) => {
            return (
              <div className={styles.ImageContainer} key={allProfiles.id}>
                <Link className={styles.Link} to="/UserProfile">
                  <section className={styles.cards}>
                    <div className={styles.TextContainer}>
                      {/* ......... */}
                      <div className={styles.ImageContainer}>
                        <div className={styles.Image}>
                          {allProfiles.UploadImage}
                        </div>
                      </div>

                      {/* ......... */}
                      <div className={styles.Distance}>
                        {allProfiles.PostalCode}
                      </div>
                      <span className={styles.TextContainer}>
                        <div className={styles.TexParagraph}>
                          {/* <h2 className={styles.Names}>
                            {allProfiles.FirstName}
                          </h2> */}
                          <h2 className={styles.Names}>
                            {allProfiles.FirstName}
                          </h2>
                        </div>
                        <div className={styles.TexParagraph}>
                          <div className={styles.Content}>
                            Amount of Children:
                          </div>
                          <div className={styles.ContentInfo}>
                            {allProfiles.Children}
                          </div>
                        </div>
                        <div className={styles.TexParagraph}>
                          <div className={styles.Content}>Activities:</div>
                          <div className={styles.ContentInfo}>
                            {allProfiles.Activity}
                          </div>
                          <div className={styles.ContentInfo}>
                            {allProfiles.Activity1}
                          </div>
                          <div className={styles.ContentInfo}>
                            {allProfiles.Activity2}
                          </div>
                        </div>

                        {/* <div className={styles.TexParagraph}>
                          <div className={styles.Content}>Fitness Goals:</div>
                          <div className={styles.ContentInfo}>
                            {allProfiles.FitnessGoals}
                          </div>
                        </div> */}
                      </span>
                    </div>
                    <Link className={styles.Connect} to={allProfiles.FirstName}>
                      <BlueButton text="Connect" className={styles.Connect} />
                    </Link>
                  </section>
                </Link>
              </div>
            );
          })}
        </div>

        {/* ............................................... */}
        {/* <Link className={styles.Link} to="/UserProfile">
          <section className={styles.cards}>
            <div className={styles.ImageContainer}>
              <img src={Frances} alt="Frances" className={styles.Image} />
            </div>
            <div className={styles.TextContainer}>
              <h6 className={styles.Kilometers}>2 kilometer Away</h6>
              <h4 className={styles.Names}>Frances</h4>
              <h6 className={styles.TexParagraph}>
                I'm 32, navigating the challenges of fitness while raising a
                toddler in Brampton. Join me on my journey to reclaim my health
                and strength! #FitnessStruggle #MomLifeGoals
              </h6>
            </div>
            <Link className={styles.Connect} to="/Chat">
              <BlueButton text="Connect" className={styles.Connect} />
            </Link>
          </section>
        </Link>

        <Link className={styles.Link} to="/Martha">
          <section className={styles.cards}>
            <div className={styles.ImageContainer}>
              <img src={Martha} alt="Martha" className={styles.Image} />
            </div>
            <div className={styles.TextContainer}>
              <h6 className={styles.Kilometers}>1.5 kilometer Away</h6>
              <h4 className={styles.Names}>Martha</h4>
              <h6 className={styles.TexParagraph}>
                I'm dreaming of fitness goals while chasing my toddler in
                Markham! Let's inspire each other to keep pushing forward, one
                step at a time. #FitnessDreamer #MomOnAMission
              </h6>
            </div>
            <Link className={styles.Connect} to="/Chat">
              <BlueButton text="Connect" className={styles.Connect} />
            </Link>
          </section>
        </Link>
        <Link className={styles.Link} to="/Matilda">
          <section className={styles.cards}>
            <div className={styles.ImageContainer}>
              <img src={Matilda} alt="Matilda" className={styles.Image} />
            </div>
            <div className={styles.TextContainer}>
              <h6 className={styles.Kilometers}>3 kilometer Away</h6>
              <h4 className={styles.Names}>Matilda</h4>
              <h6 className={styles.TexParagraph}>
                Exploring the world of fitness with my little one in GTA! Join
                me as I try new workouts and activities while navigating the
                joys and struggles of toddlerhood.  #FitExplorer
                #ToddlerMomAdventures
              </h6>
            </div>
            <Link className={styles.Connect} to="/Chat">
              <BlueButton text="Connect" className={styles.Connect} />
            </Link>
          </section>
        </Link>
        <Link className={styles.Link} to="/Luna">
          <section className={styles.cards}>
            <div className={styles.ImageContainer}>
              <img src={Luna} alt="Luna" className={styles.Image} />
            </div>
            <div className={styles.TextContainer}>
              <h6 className={styles.Kilometers}>2 kilometer Away</h6>
              <h4 className={styles.Names}>Luna</h4>
              <h6 className={styles.TexParagraph}>
                As a dedicated mom of two lively children, I'm striving to
                balance family, work, and personal time by joining a fitness
                community for mothers like me. I want to improve my physical
                health and find emotional support among other moms facing
                similar challenges, to help maintain a healthy life balance and
                set a positive example for my children. I'm looking to connect
                with moms who share these goals.
              </h6>
            </div>
            <Link className={styles.Connect} to="/Chat">
              <BlueButton text="Connect" className={styles.Connect} />
            </Link>
          </section>
        </Link>

        <Link className={styles.Link} to="/Samantha">
          <section className={styles.cards}>
            <div className={styles.ImageContainer}>
              <img src={Samantha} alt="Samantha" className={styles.Image} />
            </div>
            <div className={styles.TextContainer}>
              <h6 className={styles.Kilometers}>2 kilometer Away</h6>
              <h4 className={styles.Names}>Samantha</h4>
              <h6 className={styles.TexParagraph}>
                Vel lacus gravida pulvinar amet. Integer dapibus et ut in quam
                ultricies nisl cras sem. Massa proin sed malesuada diam. Duis
                quam tristique et ut varius hendrerit nunc eget quisque.{" "}
              </h6>
            </div>
            <Link className={styles.Connect} to="/Chat">
              <BlueButton text="Connect" className={styles.Connect} />
            </Link>
          </section>
        </Link>

        <Link className={styles.Link} to="/Crystal">
          <section className={styles.cards}>
            <div className={styles.ImageContainer}>
              <img src={Crystal} alt="Crystal" className={styles.Image} />
            </div>
            <div className={styles.TextContainer}>
              <h6 className={styles.Kilometers}>2 kilometer Away</h6>
              <h4 className={styles.Names}>Crystal</h4>
              <h6 className={styles.TexParagraph}>
                Vel lacus gravida pulvinar amet. Integer dapibus et ut in quam
                ultricies nisl cras sem. Massa proin sed malesuada diam. Duis
                quam tristique et ut varius hendrerit nunc eget quisque.{" "}
              </h6>
            </div>
            <Link className={styles.Connect} to="/Chat">
              <BlueButton text="Connect" className={styles.Connect} />
            </Link>
          </section>
        </Link> */}
      </body>
    </main>
  );
}

// const addProfiles = async (e) => {
//   e.preventDefault();
//   //stating form input values
//   const FirstName = formRef.current.FirstName.value;
//   const LastName = formRef.current.LastName.value;
//   const Email = formRef.current.Email.value;
//   const Password = formRef.current.Password.value;
//   const Age = formRef.current.Age.value;
//   const Location = formRef.current.Location.value;
//   const PostalCode = formRef.current.PostalCode.value;
//   const Activity = formRef.current.Activity.value;
//   const FitnessGoals = formRef.current.FitnessGoals.value;
//   const Activities = formRef.current.Activities.value;
//   const Concerns = formRef.current.Concerns.value;
//   const Children = formRef.current.Children.value;
//   const Yes = formRef.current.Yes.value;
//   const No = formRef.current.No.value;

//   addNewProfiles(
//     FirstName,
//     LastName,
//     Email,
//     Password,
//     Age,
//     Location,
//     PostalCode,
//     Activity,
//     FitnessGoals,
//     Activities,
//     Concerns,
//     Children,
//     Yes,
//     No
//   );
// };

// const addNewProfiles = async (
//   FirstName,
//   LastName,
//   Email,
//   Password,
//   Age,
//   Location,
//   PostalCode,
//   Activity,
//   FitnessGoals,
//   Activities,
//   Concerns,
//   Children,
//   Yes,
//   No
// ) => {
//   try {
//     const newProfiles = {
//       FirstName: FirstName,
//       LastName: LastName,
//       Email: Email,
//       Password: Password,
//       Age: Age,
//       Location: Location,
//       PostalCode: PostalCode,
//       Activity: Activity,
//       FitnessGoals: FitnessGoals,
//       Activities: Activities,
//       Concerns: Concerns,
//       Children: Children,
//       Yes: Yes,
//       No: No,
//     };
//     const postResponse = await axios.post(
//       "http://localhost:9000",
//       newProfiles
//     );
//     UserList([newProfiles, ...UserList]);
//   } catch (error) {
//     console.error("This is the error ", error);
//     toast.error("Please update information");
//   }
// };
