import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export const LeadingBrand = () => {
  return (
    <div className={styles.leadingBrandContainer}>
      <div className="container mx-5 ">
        <div className="row px-5">
          <div className="col-md-5">
            <div className={styles.shoesImg}>
              <Image src={"/shoes.jpg"} alt="shoes" width={300} height={200} />
            </div>
            <div className={styles.behindShoesImg}></div>
          </div>
          <div className="col-md-7 px-5 ">
            <div className="d-flex ">
              <h2 className="h1">Leading Brand in a digital word</h2>
              <div className={styles.arrowShoes}></div>
            </div>
            <p className={styles.trustP}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              quisquam aperiam dolores adipisci a quis eligendi possimus?
              Laudantium nostrum corrupti ducimus non autem et sit. Esse
              quibusdam numquam tempore consectetur.
            </p>
            <div className="d-flex justify-content-end">
              <p className={styles.contactShoes}>contact us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
