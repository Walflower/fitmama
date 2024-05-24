import styles from "./Challenges.module.css";
import { LeftNavigation } from "../../components/LeftNavigation/LeftNavigation";
import { Link } from "react-router-dom";
import BlueButton from "../../components/BlueButton/BlueButton";
import Frances from "../../assets/Images/Network/Frances.png";
import Martha from "../../assets/Images/Network/Martha.png";
import Matilda from "../../assets/Images/Network/Matilda.png";
import Luna from "../../assets/Images/Network/Luna.jpg";
import Samantha from "../../assets/Images/Network/Samantha.jpg";
import Crystal from "../../assets/Images/Network/Crystal.jpg";

export default function Challenges() {
  return (
    <main className={styles.main}>
      <LeftNavigation />

      <body className={styles.Body}>
        <Link className={styles.Link} to="/UserProfile">
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
        </Link>
      </body>
    </main>
  );
}
