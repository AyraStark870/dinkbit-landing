import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const BeautyPortrait = () => {
  return (
    <div className="containerTopBeauty">
      <div className="d-flex my-5 containerBeauty">
        <div className={styles.beautyPortrait}>
          <Image
            src="/beautyPortrait.jpg"
            alt="beauty portrait young woman"
            // className="img-fluid"
            width={420}
            height={420}
          />
          <p className={styles.fashionWomanParr}>
            BeautyPortrait of young{" "}
            <span className={styles.fashionWoman}>fashion woman</span>
          </p>
        </div>
        <div className={styles.magicCo}>
          <div>
            <p className="h1">Magic Co.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
              incidunt rem blanditiis sed magnam suscipit praesentium, ab ad
              officia eum p
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BeautyPortrait;
