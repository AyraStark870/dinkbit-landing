import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export const WhatWeDo = () => {
  return (
    <>
      <h2 className="text-center">What we do</h2>
      <div className={styles.whatWeDoContainer}>
        <div className={styles.whatWeDoBehind}></div>
        <div className={styles.whatWeDo}>
          <div className="container">
            <div className="row ">
              <div className="col-md-4">
                <Image src={"/descarga1.jpg"} width={370} height={300} />
              </div>
              <div className="col-md-4">
                <Image src={"/descarga2.jpg"} width={370} height={300} />
              </div>
              <div className="col-md-4">
                <Image src={"/descarga3.jpg"} width={370} height={300} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
