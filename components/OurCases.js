import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export const OurCases = () => {
  return (
    <div className={styles.ourCasesContainer}>
      <div className="container">
        <div className="row g-0">
          <div className="col-9 ">
            <img className={styles.image1} src="classes1.jpg" alt="classes1" />
          </div>
          <div className="col-3">
            <img className={styles.image2} src="classes2.jpg" alt="classes1" />
          </div>
        </div>
        <div className="row g-0">
          <div className="col-4 ">
            <img className={styles.image3} src="classes3.jpg" alt="classes1" />
          </div>
          <div className="col-4">
            <img className={styles.image4} src="classes2.jpg" alt="classes1" />
          </div>
          <div className="col-4">
            <img className={styles.image5} src="classes3.jpg" alt="classes1" />
          </div>
        </div>
      </div>
    </div>
  );
};
