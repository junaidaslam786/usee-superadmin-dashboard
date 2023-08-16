import React from "react";
import styles from "./dashmainpage.module.css";
const DashMainPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.cardInfo}>
            <div className={styles.cardAbout}>
              <div className={styles.quantity}>
                <p>500+</p>
              </div>
              <div className={styles.cardField}>
                <p>Total Traders</p>
              </div>
            </div>
            <div className={styles.cardIcon}>
              <span className="material-symbols-outlined">group</span>
            </div>
          </div>
          <div className={styles.cardButton}>
            <button className={styles.btn}>
              <p>See more</p>
            </button>
            <span className="material-symbols-outlined">
              arrow_circle_right
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashMainPage;
