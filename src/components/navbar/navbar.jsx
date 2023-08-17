import React from "react";
import styles from "./navbar.module.css";
import user from '../../assets/UserImage.png'

import { useAppSelector } from "../../redux/store";

const Navbar = () => {
  const userState = useAppSelector((state) => state.userState);
  console.log(userState);
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.dashlogo}>
          <p>Dashboard</p>
        </div>
        <div className={styles.inputfield}>
          <span className="material-symbols-outlined">search</span>
          <input type="text" placeholder="Search here..." />
        </div>
        <div className={styles.notify}>
          <div>
            <button className={styles.notification}>
              <span className="material-symbols-outlined">notifications</span>
            </button>
          </div>
          <div className={styles.user}>
            <div className={styles.userImage}>
              <img
                src= {user}
                width="40px"
                height="40px"
              />
            </div>
            <div className={styles.userInfo}>
              <div className={styles.userName}>
                <p>{userState?.user?.firstName || "Guest"}</p>
                <span className="material-symbols-outlined">expand_more</span>
              </div>
              <p>Admin</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.home}>
        <p>Home / Dashboard</p>
      </div>
    </div>
  );
};

export default Navbar;
