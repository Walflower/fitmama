import React from "react";
import styles from "./Home.module.css";
import { HashLink } from "react-router-hash-link";
import { NavHashLink } from "react-router-hash-link";

import Fuel from "../../assets/Images/fuel-image.svg";
import GetStarted from "../../assets/Images/get-started.svg";
import Characters from "../../assets/Images/Healthy lifestyle-amico 1.svg";
import ChallengeOne from "../../assets/Challenges/hydration-challenge.svg";
import ChallengeTwo from "../../assets/Challenges/mindful-eating.svg";
import ChallengeThree from "../../assets/Challenges/sleep-well.svg";
import LiveSession from "../../assets/Challenges/live-sessions.svg";
import VideoLibrary from "../../assets/Challenges/video-library.svg";
import TrainerOne from "../../assets/Images/trainerpic1.png";
import TrainerTwo from "../../assets/Images/trainerpic2.png";
import TrainerThree from "../../assets/Images/trainerpic3.png";
import CardOne from "../../assets/Challenges/Testimonials-card-1.svg";
import CardTwo from "../../assets/Challenges/Testimonials-card-two.svg";
import GroupVideo from "../../assets/Challenges/group-video.svg";
import Plus from "../../assets/Images/plus-sign.svg";
import Minus from "../../assets/Images/minus-sign.svg";
import BlogOne from "../../assets/Challenges/blog-one.svg";
import BlogTwo from "../../assets/Challenges/blog-two.svg";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logos/MFH-logo.svg";
import BlueButton from "../../components/BlueButton/BlueButton";
import UnderLineButton from "../../components/UnderLineButton/UnderLineButton";
import GreenButton from "../../components/GreenButton/GreenButton";

import ServicesOne from "../../assets/Images/services-one.svg";
import ServicesTwo from "../../assets/Images/services-two.svg";
import ServicesThree from "../../assets/Images/services-three.png";
import FitnessHub from "../../assets/Images/fitness-hub-pic.png";

export default function Home() {
  return (
    <div>
      <header className={styles.header}>
        <img src={Logo} alt="Moms in Motion Logo" />

        <div className={styles.headerBox}>
          <nav className={styles.navList}>
            {/* <NavHashLink to="/home#intro" activeClassName="active">
        Introduction
      </NavHashLink> */}

            <NavHashLink smooth to="/#Services" className={styles.link}>
              Services
            </NavHashLink>

            <NavHashLink smooth to="/#Trainers" className={styles.link}>
              Trainers
            </NavHashLink>
            <NavHashLink smooth to="/#LiveSessions" className={styles.link}>
              Live Sessions
            </NavHashLink>

            <NavHashLink smooth to="/#Community" className={styles.link}>
              Community
            </NavHashLink>
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
              Wellness Redefined: Find Balance, Find You!
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

      <section id="Services" className={styles.SectionOne}>
        <h2 className={styles.SectionOneTitle}>Services & Benefits</h2>
        <p className={styles.SectionOneText}>Best Services for Your Health</p>

        <div className={styles.ServiceOptions}>
          <div className={styles.ServiceCards}>
            <img
              className={styles.ServiceImage}
              src={ServicesOne}
              alt="........"
            />

            <h3>
              <b>Live Training Session</b>
            </h3>
            <p>
              We provide free and online training sessions, to aid your health
            </p>
          </div>

          <div className={styles.ServiceCards}>
            <img
              className={styles.ServiceImage}
              src={ServicesTwo}
              alt="........"
            />

            <h3>
              <b>Live Training Session</b>
            </h3>
            <p>
              We provide free and online training sessions, to aid your health
            </p>
          </div>
          <div className={styles.ServiceCards}>
            <img
              className={styles.ServiceImage}
              src={ServicesThree}
              alt="........"
            />

            <h3>
              <b>Live Training Session</b>
            </h3>
            <p>
              We provide free and online training sessions, to aid your health
            </p>
          </div>
        </div>
      </section>

      {/*............................................*/}
      <section id="Trainers" className={styles.SectionFour}>
        <h2 className={styles.SectionTwoTitle}>MEET OUR TRAINERS</h2>
        <p className={styles.SectionOneText}>
          Get in touch with our top rated trainers to help mothers tackle any
          postpartum health related issues
        </p>

        <div className={styles.ServiceOptions}>
          <div className={styles.ServiceCards}>
            <img
              className={styles.trainers}
              src={TrainerOne}
              alt="trainer one"
            />
            <p>Stretching Instructor</p>
            <h1>Ken Esenwah</h1>
            <p>
              Help with anxiety, eating disorders, panic attacks, medications
            </p>
            <BlueButton text="See profile" />
          </div>
          <div className={styles.ServiceCards}>
            <img
              className={styles.trainers}
              src={TrainerTwo}
              alt="trainer one"
            />
            <p>Stretching Instructor</p>
            <h1>Sandy James</h1>
            <p>
              Help with anxiety, eating disorders, panic attacks, medications
            </p>
            <BlueButton text="See profile" />
          </div>
          <div className={styles.ServiceCards}>
            <img
              className={styles.trainers}
              src={TrainerThree}
              alt="trainer one"
            />
            <p>Stretching Instructor</p>
            <h1>Karen J.</h1>
            <p>
              Help with anxiety, eating disorders, panic attacks, medications
            </p>
            <BlueButton text="See profile" />
          </div>
        </div>
      </section>

      {/**..................................................... */}
      {/**trainer hub */}

      <section className={styles.SectionThree}>
        <h3 className={styles.SectionTwoTitle}>Trainer Fitness Hub</h3>
        <p className={styles.SectionOneText}>
          Experience a comprehensive fitness journey with our Trainer Fitness
          Hub. Explore live sessions, access our video library, and unlock
          personalized programs designed by expert trainers to help you achieve
          your fitness goals.
        </p>
        <UnderLineButton text="Explore More" />

        <div className={styles.SectionThreeSub}>
          <img
            className={styles.liveSession__pic}
            src={FitnessHub}
            alt="live session"
          />
          <div className={styles.liveSession__text}>
            <h1>Live Sessions</h1>
            <p>
              Join our Live Session features for real time fitness excitement!
              Immerse yourself in dynamic experience where ou can engage
              directly with our expert trainers. They'll lead you through
              interactive workouts, sharing exclusive tips tailored to your need
              and answering your burning fitness questions on the spot. Tune in
              and elevate your fitness journey with every session!
            </p>
          </div>
        </div>
      </section>

      {/** Might remove the the wellness challenge */}
      <section className={styles.SectionTwo}>
        <h3>A wellness challenge</h3>
        <p>
          Our Platform provide activities such as hydration, physical activity
          mindfulness, adequate sleep patterns...
        </p>
        <button>Explore More</button>

        <div className={styles.challenges}>
          <img
            className={styles.challenge}
            src={ChallengeOne}
            alt="hydration challenge"
          />
          <img
            className={styles.challenge}
            src={ChallengeTwo}
            alt="mindful eating challenge"
          />
          <img
            className={styles.challenge}
            src={ChallengeThree}
            alt="sleep well challenge"
          />
        </div>
      </section>

      {/**Feature Trainers */}

      {/**Live Session Section */}
      {/* Need this to be changed*/}

      {/* <section className={styles.SectionFive}>
        <h3>Join Our Live Session</h3>
      
      </section> */}

      <section className={styles.SectionFive}>
        {/**membership sections */}
      </section>

      <section className={styles.SectionFive}>
        <h3>What Clients have to save about us</h3>

        <div className={styles.SectionFourSub}>
          <img src={CardOne} alt="comment one" />
          <img src={CardTwo} alt="comment two" />
        </div>
      </section>

      <section className={styles.SectionSeven}>
        <div>
          <h1 className={styles.heroTitle}>
            Supportive Community for Your Wellness Journey
          </h1>
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
      {/* <section>
        <h3>#Blogs</h3>
        <div>
          <img src={BlogOne} alt="blog post" />
          <img src={BlogTwo} alt="blog post" />
        </div>
      </section> */}

      {/* <section>
        <h2>Subscribe to Our Newsletter</h2>
        <input type="email" placeholder="Your Email"></input>
        <button type="submit">Be a Member</button>
      </section> */}
    </div>
  );
}
