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

export default function Network() {
  return (
    <main className={styles.main}>
      <LeftNavigation />

      <body className={styles.Body}>
        <Link className={styles.Link} to="/Frances">
          <section className={styles.cards}>
            <div className={styles.ImageContainer}>
              <img src={Frances} alt="Frances" className={styles.Image} />
            </div>
            <div className={styles.TextContainer}>
              <h6 className={styles.Kilometers}>2 kilometer Away</h6>
              <h4 className={styles.Names}>Frances</h4>
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

        <Link className={styles.Link} to="/Martha">
          <section className={styles.cards}>
            <div className={styles.ImageContainer}>
              <img src={Martha} alt="Martha" className={styles.Image} />
            </div>
            <div className={styles.TextContainer}>
              <h6 className={styles.Kilometers}>2 kilometer Away</h6>
              <h4 className={styles.Names}>Martha</h4>
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
        <Link className={styles.Link} to="/Matilda">
          <section className={styles.cards}>
            <div className={styles.ImageContainer}>
              <img src={Matilda} alt="Matilda" className={styles.Image} />
            </div>
            <div className={styles.TextContainer}>
              <h6 className={styles.Kilometers}>2 kilometer Away</h6>
              <h4 className={styles.Names}>Matilda</h4>
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
        <Link className={styles.Link} to="/Luna">
          <section className={styles.cards}>
            <div className={styles.ImageContainer}>
              <img src={Luna} alt="Luna" className={styles.Image} />
            </div>
            <div className={styles.TextContainer}>
              <h6 className={styles.Kilometers}>2 kilometer Away</h6>
              <h4 className={styles.Names}>Luna</h4>
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
