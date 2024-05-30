import styles from "./NoFillButton.module.css";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function NoFillButton({ text, image, onClick, input }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
      {image ? { backgroundImage: `url(${image})` } : null}
    </button>
  );
}
