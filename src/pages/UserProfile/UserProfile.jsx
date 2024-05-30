import styles from "./UserProfile.module.css";
import { LeftNavigation } from "../../components/LeftNavigation/LeftNavigation";
import { Link } from "react-router-dom";
import BackButton from "../../assets/Images/BackButton.jpg";
import ConnectButton from "../../components/ConnectButton/ConnectButton";
import NoFillButton from "../../components/NoFillButton/NoFillButton";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import Frances from "../../assets/Images/Network/Frances.png";
import Martha from "../../assets/Images/Network/Martha.png";
import Matilda from "../../assets/Images/Network/Matilda.png";
import Luna from "../../assets/Images/Network/Luna.jpg";
import Samantha from "../../assets/Images/Network/Samantha.jpg";

import Yoga from "../../assets/Images/Activities/Yoga.png";
import Cycling from "../../assets/Images/Activities/Cycling.png";
import Reading from "../../assets/Images/Activities/Reading.png";
import LocationIcon from "../../assets/Images/LocationIcon.png";

export default function UserProfile() {
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
    <main className={styles.Main}>
      <LeftNavigation />
      <Link to="/Network">
        <img src={BackButton} alt="BackButton" className={styles.BackButton} />
      </Link>

      <body className={styles.Container}>
        {userProfileList?.map((allProfiles) => {
          return (
            <>
              <section className={styles.Container2} key={allProfiles.id}>
                <span className={styles.ContainerProfileImage}>
                  <div className={styles.ProfileImage}>
                    <div> {allProfiles.UploadImage}</div>
                  </div>
                </span>
                <div className={styles.NoFillButton}>
                  {allProfiles.FirstName} {allProfiles.Age}
                </div>
                {/* ..........completed above */}

                <div className={styles.ConnectButton}>
                  <Link className={styles.Link} to="/Chat">
                    <ConnectButton text={"Connect"} />
                  </Link>
                </div>
                {/* .......All fake connections below */}
                <section className={styles.Connections}>
                  <p className={styles.ConnectionsTitle}>Connections</p>
                  <span className={styles.ConnectionImageContainer}>
                    <Link to="/">
                      <div className={styles.ConnectionsIcons}>
                        <img
                          src={Frances}
                          alt="Frances"
                          className={styles.Image}
                        />
                      </div>
                    </Link>
                    <Link to="/">
                      <div className={styles.ConnectionsIcons1}>
                        <img
                          src={Martha}
                          alt="Martha"
                          className={styles.Image}
                        />
                      </div>
                    </Link>
                    <Link to="/">
                      <div className={styles.ConnectionsIcons2}>
                        <img
                          src={Matilda}
                          alt="Matilda"
                          className={styles.Image}
                        />
                      </div>
                    </Link>
                    <Link to="/">
                      <div className={styles.ConnectionsIcons3}>
                        <img src={Luna} alt="Luna" className={styles.Image} />
                      </div>
                    </Link>
                    <Link to="/">
                      <div className={styles.ConnectionsIcons4}>
                        <img
                          src={Samantha}
                          alt="Samantha"
                          className={styles.Image}
                        />
                      </div>
                    </Link>
                  </span>
                </section>
              </section>
              {/* /....... */}
              <section className={styles.ProfileContainer}>
                <p className={styles.HeaderText}>
                  Hi there, My name is Helen I am mom of one beautiful kid
                </p>
                <div className={styles.locationContainer}>
                  <img
                    src={LocationIcon}
                    alt="LocationIcon"
                    className={styles.LocationIconImage}
                  />
                  <h4 className={styles.Kilometers}>
                    {allProfiles.PostalCode}
                  </h4>
                </div>
                <section>
                  <p className={styles.ConnectionsTitle}>Bio</p>
                  <p className={styles.BioContent}>{allProfiles.Bio}</p>
                </section>
                <p className={styles.ConnectionsTitle}>Activities</p>
                <div className={styles.ImagesContainer}>
                  <span className={styles.ActivitiesImageContainer}>
                    <img
                      src={Yoga}
                      alt="Yoga"
                      className={styles.ACtivitiesImage}
                    />
                    <p className={styles.ActivitiesHashtag}>#Yoga</p>
                  </span>
                  <span className={styles.ActivitiesImageContainer}>
                    <img
                      src={Reading}
                      alt="Reading"
                      className={styles.ACtivitiesImage}
                    />
                    <p className={styles.ActivitiesHashtag}>#Reading</p>
                  </span>
                  <span className={styles.ActivitiesImageContainer}>
                    <img
                      src={Cycling}
                      alt="Cycling"
                      className={styles.ACtivitiesImage}
                    />
                    <p className={styles.ActivitiesHashtag}>#Cycling</p>
                  </span>
                </div>
                <section className={styles.MemberContainer}>
                  <span className={styles.MembershipDate}>
                    <div className={styles.MembershipText}>
                      <b>Member Since</b> Nov 22
                    </div>
                  </span>
                  <span className={styles.MembershipDate}>
                    <div className={styles.MembershipText}>
                      <b>Connections</b> 15 moms
                    </div>
                  </span>
                </section>
              </section>
            </>
          );
        })}
      </body>
    </main>
  );
}
