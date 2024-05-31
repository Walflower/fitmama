import styles from "./Chat.module.css";
import { LeftNavigation } from "../../components/LeftNavigation/LeftNavigation";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SendIcon from "../../assets/Images/SendIcon.png";
import axios from "axios";

import BlueButton from "../../components/BlueButton/BlueButton";
import NofillButton from "../../components/NoFillButton/NoFillButton";
import Frances from "../../assets/Images/Network/Frances.png";
import Martha from "../../assets/Images/Network/Martha.png";
import Matilda from "../../assets/Images/Network/Matilda.png";
import Luna from "../../assets/Images/Network/Luna.jpg";
import Samantha from "../../assets/Images/Network/Samantha.jpg";
import Crystal from "../../assets/Images/Network/Crystal.jpg";
import InputBox from "../../components/InputBox/InputBox";
import EmojiPicker from "emoji-picker-react";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [messageSender, setMessageSender] = useState("Lina");
  const [chatInput, setChatInput] = useState("");

  // Load messages from localStorage when the component mounts
  useEffect(() => {
    const storedMessages = localStorage.getItem("messages");
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  // Function to handle sending messages
  const sendMessage = (e) => {
    e.preventDefault();

    const timestamp = new Date().toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    const newMessage = {
      sender: messageSender,
      text: chatInput,
      timestamp,
    };

    // Save message to state and localStorage
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    localStorage.setItem("messages", JSON.stringify(updatedMessages));

    // Clear input field
    setChatInput("");

    // Scroll to bottom of chat messages
    const chatMessagesElement = document.querySelector(".chatMessages");
    if (chatMessagesElement) {
      chatMessagesElement.scrollTop = chatMessagesElement.scrollHeight;
    }
  };

  // Function to clear the chat
  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem("messages");
  };

  // Function to switch sender
  const switchSender = (sender) => {
    setMessageSender(sender);
  };
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

      <body className={styles.body}>
        <section className={styles.titleContainer}>
          <p className={styles.ConnectionsTitle}>Message Center</p>
          <div className={styles.chatContainer}>
            <div className={styles.chatMessages}>
              {messages.map((message, index) => {
                const messageClass =
                  message.sender === "Lina" ? "messageBlue" : "messageGrey";
                return (
                  <div key={index} className={`message ${messageClass}`}>
                    <div className={styles.messageSender}>{message.sender}</div>
                    <div className={styles.messageText}>{message.text}</div>
                    <div className={styles.messageTimestamp}>
                      {message.timestamp}
                    </div>
                  </div>
                );
              })}
            </div>

            <form className={styles.chatInputForm} onSubmit={sendMessage}>
              <input
                placeholder="Text here Please..."
                type="text"
                className={styles.chatInput}
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                required
              />
              <button className={styles.IconContainer} type="submit">
                <div className={styles.button}>Send </div>
                <img src={SendIcon} alt="SendIcon" className={styles.Icon} />
              </button>
            </form>
            {/* clear chat */}
            {/* 
            <button onClick={clearChat} className={styles.clearChatBtn}>
              Clear Chat
            </button> */}
            {/* clear chat */}
          </div>
        </section>
        <section className={styles.titleContainer}>
          <p className={styles.ConnectionsTitle}>Connections</p>

          <section className={styles.Connections}>
            <div className={styles.ConnectionsIcons}>
              <div
                text="Lina"
                onClick={() => switchSender("Lina")}
                className={styles.LinaSelectorActive}
              >
                Lina
              </div>
            </div>
            <div className={styles.ConnectionsIcons}>
              <div
                text="Samantha"
                onClick={() => switchSender("Samantha")}
                className={styles.LinaSelectorActive}
              >
                Samantha
              </div>
            </div>
            <div className={styles.ConnectionsIcons}>
              <div
                text="Christal"
                onClick={() => switchSender("Christal")}
                className={styles.LinaSelectorActive}
              >
                Christal
              </div>
            </div>
            <div className={styles.ConnectionsIcons}>
              <div
                text="Sara"
                onClick={() => switchSender("Sara")}
                className={styles.LinaSelectorActive}
              >
                Sara
              </div>
            </div>
            <div className={styles.ConnectionsIcons}>
              <div
                text="Julia"
                onClick={() => switchSender("Julia")}
                className={styles.LinaSelectorActive}
              >
                Julia
              </div>
            </div>
          </section>

          {/* ...........................good one....................... */}
          {/* {
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
          } */}
        </section>
      </body>
    </main>
  );
}

{
  /* <div className={styles.ConnectionsContainer}>
            {userProfileList?.map((allProfiles) => {
              return (
                <div className={styles.ImageContainer} key={allProfiles.id}>
                  <div
                    className={styles.ConnectionsIcons}
                    onClick={() => switchSender("John")}
                  >
                    <img src={Frances} alt="Frances" className={styles.Image} />
                    <h4 className={styles.Names}> {allProfiles.FirstName}</h4>
                  </div>
                </div>
              );
            })}
          </div> */
}
