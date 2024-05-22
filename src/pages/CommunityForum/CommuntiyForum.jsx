import styles from "./CommunityForum.module.css";
import Lara from "../../assets/Images/ProfileImages/Lara.png";

import ShortTextField from "../../components/ShortTextField/ShortTextField";
import CheckBox from "../../components/CheckBox/CheckBox";
import { LeftNavigation } from "../../components/LeftNavigation/LeftNavigation";
import greenHeart from "../../assets/Icons/green-heart.svg";
import greenChat from "../../assets/Icons/green-chat-bubble.svg";
import greenGarbageCan from "../../assets/Icons/green-garbage-can.svg";

import { Link } from "react-router-dom";

import ClearButton from "../../components/ClearButton/ClearButton";

export function CommunityForum() {
  return (
    <div className={styles.content}>
      <LeftNavigation />

      <main className={styles.main}>
        <section className={styles.container}>
          <section className={styles.post}>
            <img src={Lara} alt="profile" className={styles.user} />
            <h3>Workout Monday: Share Your Sweat Session!</h3>
            <ClearButton
              text="Like"
              icon={greenHeart}
              className={styles.like}
            />
            <ClearButton text="Comment" icon={greenChat} />
            <ClearButton text="Delete" icon={greenGarbageCan} />
          </section>

          <section className={styles.post}>
            <img src={Lara} alt="profile" className={styles.user} />
            <h3>Workout Monday: Share Your Sweat Session!</h3>
            <ClearButton
              text="Like"
              icon={greenHeart}
              className={styles.like}
            />
            <ClearButton text="Comment" icon={greenChat} />
            <ClearButton text="Delete" icon={greenGarbageCan} />
          </section>

          <section className={styles.post}>
            <img src={Lara} alt="profile" className={styles.user} />
            <h3>Workout Monday: Share Your Sweat Session!</h3>
            <ClearButton
              text="Like"
              icon={greenHeart}
              className={styles.like}
            />
            <ClearButton text="Comment" icon={greenChat} />
            <ClearButton text="Delete" icon={greenGarbageCan} />
          </section>
        </section>
        <textarea
          name="post"
          type="text"
          placeholder="write your post here"
          height="200px"
          className={styles.textarea}
        />
      </main>
    </div>
  );
}
