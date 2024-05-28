import styles from "./Challenges.module.css";
import { LeftNavigation } from "../../components/LeftNavigation/LeftNavigation";
import { Link } from "react-router-dom";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import BlueButton from "../../components/BlueButton/BlueButton";
import HydrationChallenge from "../../assets/Images/Challenges/HydrationChallenge.png";
import MindFullEatingChallenge from "../../assets/Images/Challenges/MindfulEating.png";
import BabyLifting from "../../assets/Images/Challenges/BabyLifting.jpg";
import YogaChallenge from "../../assets/Images/Challenges/YogChallenge.jpg";
import WalkingChallenge from "../../assets/Images/Challenges/Walking.jpg";

export default function Challenges() {
  const notify = () => toast("CHALLENGE JOINED!");
  return (
    <main className={styles.main}>
      <LeftNavigation />

      <body className={styles.Body}>
        <section className={styles.cards}>
          <div className={styles.ImageContainer}>
            <img
              src={HydrationChallenge}
              alt="HydrationChallenge"
              className={styles.Image}
            />
          </div>
          <div className={styles.TextContainer}>
            <h4 className={styles.Names}>Hydration Challenge</h4>
          </div>

          <div>
            <BlueButton text="Join Challenge" onClick={notify}></BlueButton>
            <ToastContainer />
          </div>
        </section>

        <section className={styles.cards}>
          <div className={styles.ImageContainer}>
            <img
              src={MindFullEatingChallenge}
              alt="MindFullEatingChallenge"
              className={styles.Image}
            />
          </div>
          <div className={styles.TextContainer}>
            <h4 className={styles.Names}>MindFull Eating Challenge</h4>
          </div>

          <div>
            <BlueButton text="Join Challenge" onClick={notify}></BlueButton>
            <ToastContainer />
          </div>
        </section>

        <section className={styles.cards}>
          <div className={styles.ImageContainer}>
            <img src={BabyLifting} alt="BabyLifting" className={styles.Image} />
          </div>
          <div className={styles.TextContainer}>
            <h4 className={styles.Names}>BabyLifting</h4>
          </div>

          <div>
            <BlueButton text="Join Challenge" onClick={notify}></BlueButton>
            <ToastContainer />
          </div>
        </section>

        <section className={styles.cards}>
          <div className={styles.ImageContainer}>
            <img
              src={YogaChallenge}
              alt="YogaChallenge"
              className={styles.Image}
            />
          </div>
          <div className={styles.TextContainer}>
            <h4 className={styles.Names}>YogaChallenge</h4>
          </div>

          <div>
            <BlueButton text="Join Challenge" onClick={notify}></BlueButton>
            <ToastContainer />
          </div>
        </section>

        {/* <section className={styles.cards}>
          <div className={styles.ImageContainer}>
            <img
              src={WalkingChallenge}
              alt="WalkingChallenge"
              className={styles.Image}
            />
          </div>
          <div className={styles.TextContainer}>
            <h4 className={styles.Names}>WalkingChallenge</h4>
          </div>
          <div>
            <BlueButton text="Join Challenge" onClick={notify}></BlueButton>
            <ToastContainer />
          </div>
        </section> */}
      </body>
    </main>
  );
}
