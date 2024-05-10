import styles from "./SignUpWithGoogle.module.css";
import { NavLink } from "react-router-dom";

export default function SignUpWithGoogle({ text, image, linkTo }) {
  return (
    <NavLink to={linkTo}>
      <button className={styles.GoogleButton}>
        {image && (
          <img src={image} alt="Google Icon" className={styles.GoogleIcon} />
        )}
        {text}
      </button>
    </NavLink>
  );
}
