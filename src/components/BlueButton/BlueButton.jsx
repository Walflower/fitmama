import { click } from "@testing-library/user-event/dist/click";
import styles from "./BlueButton.module.css";
import { useEffect, useState } from "react";

export default function BlueButton({ text, onClick }) {
  return (
    <>
      <button onClick={onClick} className={styles.button}>
        {text}
      </button>
    </>
  );
}
