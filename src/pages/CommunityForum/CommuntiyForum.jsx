import styles from "./CommunityForum.module.css";

import ShortTextField from "../../components/ShortTextField/ShortTextField";
import CheckBox from "../../components/CheckBox/CheckBox";
import { LeftNavigation } from "../../components/LeftNavigation/LeftNavigation";
import BlueButton from "../../components/BlueButton/BlueButton";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { Link } from "react-router-dom";

export function CommunityForum() {
  return (
    <div className={styles.Content}>
      <LeftNavigation />
    </div>
  );
}
