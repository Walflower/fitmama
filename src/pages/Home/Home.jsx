import React from "react";
import styles from "./Home.module.css";
import Fuel from "../../assets/Images/fuel-image.svg";
import GetStarted from "../../assets/Images/get-started.svg";
import Characters from "../../assets/Images/Healthy lifestyle-amico 1.svg";
import ChallengeOne from "../../assets/Challenges/hydration-challenge.svg";
import ChallengeTwo from "../../assets/Challenges/mindful-eating.svg";
import ChallengeThree from "../../assets/Challenges/sleep-well.svg";
import LiveSession from "../../assets/Challenges/live-sessions.svg";
import VideoLibrary from "../../assets/Challenges/video-library.svg";
import TrainerOne from "../../assets/Challenges/trainer-sarah.svg";
import TrainerTwo from "../../assets/Challenges/trainer-nayan.svg";
import TrainerThree from "../../assets/Challenges/trainer-amar.svg";
import CardOne from "../../assets/Challenges/Testimonials-card-1.svg";
import CardTwo from "../../assets/Challenges/Testimonials-card-two.svg";
import GroupVideo from "../../assets/Challenges/group-video.svg";
import Plus from "../../assets/Images/plus-sign.svg";
import Minus from "../../assets/Images/minus-sign.svg";
import BlogOne from "../../assets/Challenges/blog-one.svg";
import BlogTwo from "../../assets/Challenges/blog-two.svg";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logos/MIM-logo.svg";
import BlueButton from "../../components/BlueButton/BlueButton";
import UnderLineButton from "../../components/UnderLineButton/UnderLineButton";

export default function Home() {
  return (
    <div>
      <header className={styles.header}>
        <img src={Logo} alt="Moms in Motion Logo" />

        <div className={styles.headerBox}>
          <nav className={styles.navList}>
            <NavLink className={styles.link}>Services</NavLink>
            <NavLink className={styles.link}>Resources</NavLink>

            <NavLink className={styles.link}>About us</NavLink>
          </nav>

          <div className={styles.buttons}>
            <button className={styles.clearButton}>Sign in</button>
            <BlueButton text="Sign Up" />
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.hero}>
          <div>
            <h1 className={styles.heroTitle}>
              Wellness Redefined: Find Balance, Fin You!
            </h1>
            <p>
              Discover a wealth of resources and support to help you thrive in
              every aspect of your health
            </p>
          </div>
          <img
            className={styles.fuelPic}
            src={Fuel}
            alt="Women looking out into the sunset and text stating fuel your life: Wellness Starts Here"
          />
          <img
            className={styles.UnderlinedButton}
            src={GetStarted}
            alt="button stating get started now"
          />
        </div>

        {/* <UnderLineButton text="Get Started now" /> */}
        <img
          src={Characters}
          alt="Three animated women drinking water, walking and eating an apple"
        />
      </main>

      <section>
        <h2>Services & Benefits</h2>
        <p>
          Discover a new definition of wellness and find balance in your life
          with our supportive community
        </p>

        {/** links to other sections  */}
        <div>
          <button>Access to join a community</button>
          <button>Access to join a community</button>
          <button>Access to join a community</button>
          <button>Access to join a community</button>
          <button>Access to join a community</button>
          <button>Access to join a community</button>
          <button>Access to join a community</button>
          <button>Access to join a community</button>
          <button>Access to join a community</button>
        </div>
      </section>

      {/** Might remove the the wellness challenge */}
      <section>
        <h3>A wellness challenge</h3>
        <p>
          Our Platform provide activities such as hydration, physical activity
          mindfulness, adequate sleep patterns...
        </p>
        <button>Explore More</button>

        <div>
          <img src={ChallengeOne} alt="hydration challenge" />
          <img src={ChallengeTwo} alt="mindful eating challenge" />
          <img src={ChallengeThree} alt="sleep well challenge" />
        </div>
      </section>

      {/**trainer hub */}

      <section>
        <h3>Trainer Fitness Hub</h3>
        <p>
          Experience a comprehensive fitness journey with our Trainer Fitness
          Hub. Explore live sessions, access our video library, and unlock
          personalized programs designed by expert trainers to help you achieve
          your fitness goals.
        </p>
        <div>
          <img src={LiveSession} alt="live session" />
          <img src={VideoLibrary} alt="video library" />
        </div>
      </section>

      <section>
        <h3>Feature Trainers</h3>
        <p>
          Our Faculty are all professionally qualified and have rich industry
          experience, essential for giving a practical context to concepts
        </p>
        <div>
          <img src={TrainerOne} alt="trainer one" />
          <imag src={TrainerTwo} alt="trainer one" />
          <imag src={TrainerThree} alt="trainer one" />
        </div>
      </section>

      <section>
        <h3>Join Our Live Session</h3>
        {/**There will be cards here */}
      </section>

      <section>{/**membership sections */}</section>

      <section>
        <h3>What Clients have to save about us</h3>
        <img src={CardOne} alt="comment one" />
        <img src={CardTwo} alt="comment two" />
      </section>

      <section>
        <div>
          <h1>Supportive Community for Your Wellness Journey</h1>
          <p>
            Join our virtual community to connect with other on similar journeys
            towards better health. Share experiences, seek advice, and find
            support in a safe and understanding space
          </p>
          <button>Join now</button>
        </div>
        <img src={GroupVideo} alt="virtual group chat" />
      </section>

      {/**each question needs to be to span down and up */}
      <section>
        <h3>#FAQ</h3>

        <span>
          What is the moms in motion web app <img src={Plus} alt="plus sign" />
        </span>
        <span>
          How to create a profile <img src={Plus} alt="plus sign" />
        </span>
        <span>
          How are wellness coaches integrated into Moms in Motions{" "}
          <img src={Plus} alt="plus sign" />
        </span>
        <span>
          Can I access videos related to healthy living on the Moms in Motion{" "}
          <img src={Plus} alt="plus sign" />
        </span>
        <span>
          Is there a community engagement forum for Moms in Motion{" "}
          <img src={Plus} alt="plus sign" />
        </span>
      </section>

      {/** is there health blog api?? we didn't discuss this feature yet */}
      <section>
        <h3>#Blogs</h3>
        <div>
          <img src={BlogOne} alt="blog post" />
          <img src={BlogTwo} alt="blog post" />
        </div>
      </section>

      <section>
        <h2>Subscribe to Our Newsletter</h2>
        <input type="email" placeholder="Your Email"></input>
        <button type="submit">Be a Member</button>
      </section>
    </div>
  );
}
