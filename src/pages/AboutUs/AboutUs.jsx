import styles from "./AboutUs.module.css";
import { LeftNavigation } from "../../components/LeftNavigation/LeftNavigation";
import { Link } from "react-router-dom";
import BlueButton from "../../components/BlueButton/BlueButton";
import Frances from "../../assets/Images/Network/Frances.png";
import Martha from "../../assets/Images/Network/Martha.png";
import Matilda from "../../assets/Images/Network/Matilda.png";
import Luna from "../../assets/Images/Network/Luna.jpg";
import Samantha from "../../assets/Images/Network/Samantha.jpg";
import Crystal from "../../assets/Images/Network/Crystal.jpg";

export default function AboutUs() {
  return (
    <main className={styles.main}>
      <LeftNavigation />

      <section className={styles.Body}>
        <section className={styles.TextFields}>
          <div className={styles.QuestionnaireTitle}>About Us</div>
          <div className={styles.CheckBoxContainer}>
            <div className={styles.CheckBoxTitle}>
              <b>Welcome to The Fit Mama Hub!</b>
            </div>
            <div className={styles.CheckBoxTitle}>
              At The Fit Mama Hub, we understand the unique challenges that come
              with balancing motherhood, work, and personal wellness. Our
              mission is to create a supportive and engaging community where
              mothers of young children (ages 0-5) can connect, share
              experiences, and achieve their health and fitness goals together.
            </div>
          </div>
        </section>

        <section className={styles.TextFields}>
          <div className={styles.QuestionnaireTitle}>Our Vision</div>
          <div className={styles.CheckBoxContainer}>
            <div className={styles.CheckBoxTitle}>
              We aim to empower moms to reclaim their personal time and
              prioritize their well-being through a holistic approach to fitness
              and health. By fostering a community of like-minded mothers, we
              provide the resources, support, and motivation needed to navigate
              the demanding yet rewarding journey of motherhood.
            </div>
          </div>
        </section>
        <section className={styles.TextFields}>
          <div className={styles.QuestionnaireTitle}>What we offer </div>
          <div className={styles.CheckBoxContainer}>
            <div className={styles.CheckBoxTitle}>
              Community Support: An inclusive forum where you can connect with
              other moms, share tips, and find encouragement.
            </div>
            <div className={styles.CheckBoxTitle}>
              Expert Advice: Access to professional advice from experts in
              postnatal fitness, nutrition, and wellness.(Coming soon )
            </div>
            <div className={styles.CheckBoxTitle}>
              Personalized Fitness Programs: Tailored workout plans that fit
              into your busy schedule, helping you stay active and
              healthy.(Coming soon )
            </div>
            <div className={styles.CheckBoxTitle}>
              We are committed to making fitness and wellness accessible and
              enjoyable for all moms. Our platform is designed to accommodate
              the diverse needs of mothers, ensuring you can find the right
              balance between caring for your family and taking care of
              yourself. Join The Fit Mama Hub today and become part of a
              community that understands your journey and supports your goals.
              Together, we can inspire each other to lead healthier, happier
              lives while setting a positive example for our children.
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
