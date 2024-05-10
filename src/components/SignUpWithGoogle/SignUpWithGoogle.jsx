import { Link } from "react-router-dom";
import styles from "./SignUpWithGoogle.module.css";

export default function SignUpWithGoogle({ text, image, linkTo }) {
  return (
    <Link to={Link}>
      <button className={styles.GoogleButton}>
        {image && (
          <img src={image} alt="Google Icon" className={styles.GoogleIcon} />
        )}
        {text}
      </button>
    </Link>
  );
}
