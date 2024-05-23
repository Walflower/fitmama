import styles from "./Chat.module.css";
import { LeftNavigation } from "../../components/LeftNavigation/LeftNavigation";
import { Link } from "react-router-dom";
import { useState } from "react";

import BlueButton from "../../components/BlueButton/BlueButton";
import Frances from "../../assets/Images/Network/Frances.png";
import Martha from "../../assets/Images/Network/Martha.png";
import Matilda from "../../assets/Images/Network/Matilda.png";
import Luna from "../../assets/Images/Network/Luna.jpg";
import Samantha from "../../assets/Images/Network/Samantha.jpg";
import Crystal from "../../assets/Images/Network/Crystal.jpg";
import InputBox from "../../components/InputBox/InputBox";
import EmojiPicker from "emoji-picker-react";

export default function Chat() {
  // interface Comment(){
  //   <id:string></id:string>
  //   body:string;
  // }
  const dummyComments = [
    {
      Id: "1",
      body: "Hello! I saw your post about wanting to stay consistent with workouts. Im in the same boat! Maybe we could be accountability buddies?",
    },
    {
      Id: "2",
      body: "That sounds awesome! Having someone to check in with would definitely keep me on track. What kind of workouts do you usually do?",
    },
  ];

  const [comments, setComments] = useState([dummyComments]);

  return (
    <main className={styles.main}>
      <LeftNavigation />
      <body className={styles.body}>
        <section className={styles.Connections}>
          <p className={styles.ConnectionsTitle}>Connections</p>

          <span className={styles.ConnectionImageContainer}>
            <Link to="/" className={styles.Link}>
              <div className={styles.ConnectionsIcons}>
                <img src={Frances} alt="Frances" className={styles.Image} />
                <h4 className={styles.Names}>Frances</h4>
              </div>
            </Link>
            <Link to="/" className={styles.Link}>
              <div className={styles.ConnectionsIcons}>
                <img src={Martha} alt="Martha" className={styles.Image} />
                <h4 className={styles.Names}>Martha</h4>
              </div>
            </Link>
            <Link to="/" className={styles.Link}>
              <div className={styles.ConnectionsIcons}>
                <img src={Matilda} alt="Matilda" className={styles.Image} />
                <h4 className={styles.Names}>Matilda</h4>
              </div>
            </Link>
            <Link to="/" className={styles.Link}>
              <div className={styles.ConnectionsIcons}>
                <img src={Luna} alt="Luna" className={styles.Image} />
                <h4 className={styles.Names}>Luna</h4>
              </div>
            </Link>
            <Link to="/" className={styles.Link}>
              <div className={styles.ConnectionsIcons}>
                <img src={Samantha} alt="Samantha" className={styles.Image} />
                <h4 className={styles.Names}>Samantha</h4>
              </div>
            </Link>
          </span>
        </section>
        {/* ...............................Comments .......... */}
        <section className={styles.ChatMessageContainer}>
          <span className={styles.ChatBox}>
            <div className={styles.LeftChat}></div>
            <div className={styles.RightChat}></div>
          </span>
          <div className={styles.EmojiPicker}>
            <EmojiPicker />
          </div>
          <InputBox />
          <div>
            {comments.map((comments) => {
              return <section></section>;
            })}
          </div>
        </section>
      </body>
    </main>
  );
}