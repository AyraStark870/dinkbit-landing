import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
const TrustProfessional = () => {
  return (
    <div className={styles.trustProfContainer}>
      <div className="container ">
        <div className="row px-5">
          <div className="col-md-5 px-5 ">
            <div className="d-flex ">
              <div className={styles.arrow}></div>
              <h2 className="h1">Trust the professionals</h2>
            </div>
            <p className={styles.trustP}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              quisquam aperiam dolores adipisci a quis eligendi possimus?
              Laudantium nostrum corrupti ducimus non autem et sit. Esse
              quibusdam numquam tempore consectetur.
            </p>
            <p className={styles.contactTrust}>contact us</p>
          </div>
          <div style={{ position: "relative" }} className="col-md-7 ">
            <div className={styles.trustProfessional}>
              <Image
                src={"/trustProfessional.jpg"}
                alt="trust professional"
                width={300}
                height={300}
              />
            </div>
            <div className={styles.behindTrustProf}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TrustProfessional;
