import styles from "./CommunityForum.module.css";
import Lara from "../../assets/Images/ProfileImages/Lara.png";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import InputEmoji from "react-input-emoji";
// import EmojiPicker from "emoji-picker-react";

import { LeftNavigation } from "../../components/LeftNavigation/LeftNavigation";
import greenHeart from "../../assets/Icons/green-heart.svg";
import greenChat from "../../assets/Icons/green-chat-bubble.svg";
import greenGarbageCan from "../../assets/Icons/green-garbage-can.svg";

import { Link } from "react-router-dom";

import ClearButton from "../../components/ClearButton/ClearButton";

export function CommunityForum() {
  const [postList, setPostList] = useState([]);
  const formRef = useRef(null);
  // // const [text, setText] = useState("");
  // const [emojiPicker, setEmojiPicker] = useState("");

  // function handleOnEnter(text) {
  //   console.log("enter", text);
  // }

  useEffect(() => {
    //getting book list from api
    const getPosts = async () => {
      try {
        const response = await axios.get("http://localhost:9000/");
        setPostList(response.data);
      } catch (error) {
        console.error("This is the error ", error);
      }
    };
    getPosts();
  }, []);

  const addPost = async (e) => {
    // e.preventDefault();

    //stating form input values
    const name = formRef.current.name.value;
    const post = formRef.current.post.value;

    //checking if the form is valid
    const isFormValid = () => {
      if (!name || !post) {
        return false;
      } else {
        return true;
      }
    };

    if (isFormValid()) {
      alert("You've added new post successfully!");
      await postNewPost(name, post);

      //this clears the form
      e.target.reset();
    } else {
      alert("Failed to add post, you have errors in you form");
    }

    postNewPost(name, post);
  };

  const postNewPost = async (name, post) => {
    try {
      const newPost = {
        name: name,
        post: post,
      };

      const postresponse = await axios.post("http://localhost:9000", newPost);
      setPostList([newPost, ...postList]);
    } catch (error) {
      console.error("This is the error ", error);
    }
  };

  return (
    <div className={styles.content}>
      <LeftNavigation />

      <main className={styles.main}>
        <section className={styles.container}>
          <h1>Feed</h1>
          <ul className="list">
            {postList?.map((post) => {
              return (
                <li key={post.id} className={styles.post}>
                  {/* <img
                    src={post?.image}
                    alt="user profile"
                    className="list__image"
                  /> */}
                  <p>{post.name}</p>
                  <p>{post.post}</p>
                  <ClearButton
                    text="Like"
                    icon={greenHeart}
                    className={styles.like}
                  />

                  <ClearButton text="Comment" icon={greenChat} />

                  {/* <div className="chat_footer">
                    {!emojiPicker ? (
                      <InsertEmoticonIcon
                        onClick={() => setEmojiPicker((prev) => !prev)}
                      />
                    ) : (
                      <>
                        <InsertEmoticonIcon
                          onClick={() => setEmojiPicker((prev) => !prev)}
                        />
                        <EmojiPicker
                          searchDisabled="true"
                          previewConfig={{ showPreview: false }}
                          emojiStyle="google"
                          onEmojiClick={(e) =>
                            setInput((input) => input + e.emoji)
                          }
                          height={400}
                          width="40%"
                        />
                      </>
                    )}
                  </div> */}
                  {/* <InputEmoji /> */}
                  {/* <EmojiPicker /> */}

                  {/* <ClearButton text="Delete" icon={greenGarbageCan} /> */}

                  {/* <button type="button" class="react-input-emoji--button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      class="react-input-emoji--button--icon"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"></path>
                      <path d="M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    class="react-input-emoji--button react-input-emoji--button__show"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      class="react-input-emoji--button--icon"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"></path>
                      <path d="M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"></path>
                    </svg>
                  </button> */}
                </li>
              );
            })}
          </ul>
        </section>

        <div>
          <h2 className={styles.formTitle}>Add a New Post</h2>
          <form onSubmit={addPost} ref={formRef} className={styles.form}>
            <div className="form__container">
              <label className="form__label">Name:</label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="form__input"
                // ref={formRef}
              />
            </div>

            <div className={styles.formContainer}>
              <label className={styles.label}>New Post:</label>
              <textarea
                name="post"
                type="text"
                placeholder="write your post here"
                height="200px"
                className={styles.textarea}
              />
              {/* <InputEmoji
                name="post"
                type="text"
                value={text}
                onChange={setText}
                placeholder="Write your post here"
                height="200px"
                className={styles.textarea}
                cleanOnEnter
                onEnter={addPost}
              /> */}
              <button text="Submit" className={styles.formButton}>
                post
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
