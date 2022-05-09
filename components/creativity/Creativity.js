import React from "react";
import styles from "./Creativity.module.css";
import Image from "next/image";

export const Creativity = () => {
  return (
    <div className={styles.creativityContainer}>
      <div className={styles.creativityPink}>
        <h3>Creativity is nothing but the way to solve new problems</h3>
      </div>
      <div className={styles.creativityVolcan}>
        <img src={"/volcan.jpg"} alt="creativity-img" />
      </div>
      <div className={styles.creativityOffice}>
        <img src={"/oficina.jpg"} alt="creativity-img" />
      </div>
      <div></div>
    </div>
  );
};
