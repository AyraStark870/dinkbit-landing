import React from "react";
import styles from "./Complex.module.css";
import Image from "next/image";

export const Complex = () => {
  return (
    <div className={styles.complexContainer}>
      <div className={styles.complexItem1}>
        <Image
          className={styles.complexImage1}
          src={"/book2.jpg"}
          width={430}
          height={280}
        />
      </div>
      <div className={styles.complexItem2}>
        <Image
          className={styles.complexImage2}
          src={"/book1.jpg"}
          width={170}
          height={160}
        />
      </div>
      <div className={styles.complexMakeSimple}>
        <h3>We make the complex, simple</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          doloremque, il
        </p>
        <p className={styles.complexContact}>Contact us</p>
      </div>
      <div className={styles.complexBlue}></div>
      <div className={styles.complexPink}></div>
    </div>
  );
};
