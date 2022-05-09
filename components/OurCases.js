import React from "react";
import styles from "../styles/Home.module.css";

export const OurCases = () => {
  return (
    <div className={styles.ourCasesContainer}>
      <h2>Our Cases</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
        reiciendis autem. Voluptas atque et voluptatum dignissimos, quo porro,
        laborum ducimus distinctio iste aperiam doloribus, est sed omnis eos
        nobis blanditiis.
      </p>
      <div className={styles.galeryContainer}>
        <div className={styles.galeryItem}>
          <img
            className={styles.galeryImage}
            src="/classes1.jpg"
            alt="images 1"
          />
        </div>
        <div className={styles.galeryItem}>
          <img
            className={styles.galeryImage}
            src="/classes2.jpg"
            alt="images 1"
          />
        </div>
        <div className={styles.galeryItem}>
          <img
            className={styles.galeryImage}
            src="/classes3.jpg"
            alt="images 1"
          />
        </div>
        <div className={styles.galeryItem}>
          <img
            className={styles.galeryImage}
            src="/descarga1.jpg"
            alt="images 1"
          />
        </div>
        <div className={styles.galeryItem}>
          <img
            className={styles.galeryImage}
            src="/descarga2.jpg"
            alt="images 1"
          />
        </div>
      </div>
      <div className={styles.ourCasesBehind}></div>
    </div>
  );
};
