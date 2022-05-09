import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export const Creativity = () => {
  return (
    <div className={styles.creativityContainer}>
      <div className={styles.creativityPink}>
        <h3>Creativity is nothing but the way to solve new problems</h3>
      </div>
      <div className={styles.creativityVolcan}>
        <Image src={"/volcan.jpg"} width={400} height={400} />
      </div>
      <div className={styles.creativityOffice}>
        <Image src={"/oficina.jpg"} width={300} height={280} />
      </div>
      <div></div>
    </div>
  );
};
