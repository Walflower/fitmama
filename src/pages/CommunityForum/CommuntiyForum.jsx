import styles from "./CommunityForum.module.css";
import Lara from "../../assets/Images/ProfileImages/Lara.png";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import { LeftNavigation } from "../../components/LeftNavigation/LeftNavigation";
import greenHeart from "../../assets/Icons/green-heart.svg";
import greenChat from "../../assets/Icons/green-chat-bubble.svg";
import greenGarbageCan from "../../assets/Icons/green-garbage-can.svg";

import { Link } from "react-router-dom";

import ClearButton from "../../components/ClearButton/ClearButton";

import Frances from "../../assets/Images/Network/Frances.png";
import Martha from "../../assets/Images/Network/Martha.png";
import Matilda from "../../assets/Images/Network/Matilda.png";
import Luna from "../../assets/Images/Network/Luna.jpg";
import Samantha from "../../assets/Images/Network/Samantha.jpg";
import InputBox from "../../components/InputBox/InputBox";

export function CommunityForum() {
  const [postList, setPostList] = useState([]);
  const formRef = useRef(null);

  const generatePostId = () => {
    return uuidv4();
  };

  // function handleOnEnter(text) {
  //   console.log("enter", text);
  // }
  // ................................................................................
  useEffect(() => {
    //getting book list from api
    const getPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/community-posts"
        );
        setPostList(response.data);
      } catch (error) {
        console.error("This is the error ", error);
      }
    };
    getPosts();
  }, []);

  const addPost = async (e) => {
    e.preventDefault();

    const text = formRef.current.text.value;

    //checking if the form is valid
    const isFormValid = () => {
      if (!text) {
        return false;
      } else {
        return true;
      }
    };

    if (isFormValid()) {
      alert("You've added new post successfully!");
      postNewPost(text);
      e.target.reset(); //clears form after posting
    } else {
      alert("Failed to add post, you have errors in you form");
    }
  };

  const postNewPost = async (text) => {
    try {
      const newPost = {
        post_id: generatePostId(), // Assuming you'd generate this ID in the frontend if needed
        user_id: 1, // Assuming you have the current user's ID available
        post_image: null, // If no image for now, send null
        text: text,
        likes: 0,
      };

      console.log(newPost);
      const postResponse = await axios.post(
        "http://localhost:8080/community-posts",
        newPost
      );
      console.log(postResponse.data);
      setPostList([newPost, ...postList]);
    } catch (error) {
      console.error("This is the error ", error);
    }
  };

  return (
    <div className={styles.content}>
      <LeftNavigation />

      <main className={styles.main}>
        <h1>COMMUNITY FORUM</h1>
        <section className={styles.container}>
          <section className={styles.Connections}>
            <p className={styles.ConnectionsTitle}>Feed</p>

            <span className={styles.ConnectionImageContainer}>
              <Link to="/Network" className={styles.ConnectionsLink}>
                <div className={styles.ConnectionsIcons}>
                  <img src={Frances} alt="Frances" className={styles.Image} />
                </div>
              </Link>
              <Link to="/Network">
                <div className={styles.ConnectionsIcons1}>
                  <img src={Martha} alt="Martha" className={styles.Image} />
                </div>
              </Link>
              <Link to="/Network">
                <div className={styles.ConnectionsIcons2}>
                  <img src={Matilda} alt="Matilda" className={styles.Image} />
                </div>
              </Link>

              <div className={styles.ConnectionsIconsMore}>
                <div className={styles.ImageMore}>20+</div>
              </div>
            </span>
          </section>

          <ul className={styles.list}>
            {postList?.map((post) => {
              return (
                <li key={post.post_id} className={styles.post}>
                  {/* <img
                    src={post?.image}
                    alt="user profile"
                    className="list__image"
                  /> */}
                  {/* <p>{post.name}</p> */}
                  <p>{post.text}</p>

                  {/* TODO: need to add the number of likes*/}
                  <ClearButton
                    text="Like"
                    icon={greenHeart}
                    className={styles.like}
                  />
                  {/* TODO: need to add comments on post to backend*/}
                  <ClearButton text="Comment" icon={greenChat} />
                </li>
              );
            })}
          </ul>
        </section>

        <div>
          <p className={styles.ConnectionsTitle2}>Add a New Post</p>

          <form onSubmit={addPost} ref={formRef} className={styles.form}>
            <div className={styles.formContainer}>
              {/* <label className={styles.LabelTitle}>Name</label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className={styles.Input}
                // ref={formRef}
              /> */}
            </div>

            <div className={styles.formContainer}>
              <label className={styles.LabelTitle}>New Post:</label>
              <textarea
                name="text"
                type="text"
                placeholder="write your post here"
                height="200px"
                className={styles.textarea}
              />

              <button text="Submit" className={styles.formButton}>
                POST
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
