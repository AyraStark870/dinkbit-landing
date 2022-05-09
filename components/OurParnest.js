import React from "react";
import styles from "../styles/Home.module.css";
import { AiOutlineApple } from "react-icons/ai";
import { SiNike } from "react-icons/si";
import { RiPlaystationFill } from "react-icons/ri";

export const OurParnest = () => {
  return (
    <div className={styles.ourPartnerContainer}>
      <h2>Our Partnes</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
        reiciendis autem. Volupt
      </p>
      <div className={styles.partnerContainer}>
        <div className={styles.patnerItem}>
          <i>
            <AiOutlineApple></AiOutlineApple>
          </i>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. am
            nullaadipisicing elit. am nulla animi.
          </p>
        </div>
        <div className={styles.patnerItem}>
          <i>
            <SiNike></SiNike>
          </i>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. am
            nullaadipisicing elit. am nulla animi.
          </p>
        </div>
        <div className={styles.patnerItem}>
          <i>
            <RiPlaystationFill></RiPlaystationFill>
          </i>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. am
            nullaadipisicing elit. am nulla animi.
          </p>
        </div>
      </div>
    </div>
  );
};
