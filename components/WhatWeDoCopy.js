import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export const WhatWeDoCopy = () => {
  return (
    <>
      <div className="what-we-do-title">
        <h3>What we do</h3>
      </div>
      <div className="what-we-do-container">
        <div className="what-we-do-behind"></div>
        <div className="what-we-do-container-images">
          <div className="what-we-do-item">
            <img
              className="what-we-do-img"
              src={"/descarga1.jpg"}
              alt="what we do image"
            />
          </div>
          <div className="what-we-do-item">
            <img
              className="what-we-do-img"
              src={"/descarga2.jpg"}
              alt="what we do image"
            />
          </div>
          <div className="what-we-do-item">
            <img
              className="what-we-do-img"
              src={"/descarga3.jpg"}
              alt="what we do image"
            />
          </div>
        </div>
      </div>
    </>
  );
};
