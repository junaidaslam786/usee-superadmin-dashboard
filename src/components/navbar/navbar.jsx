import React, { useState } from "react";
import styles from "./navbar.module.css";
import user from '../../assets/UserImage.png'

import { useAppSelector } from "../../redux/store";

const Navbar = () => {
  const userState = useAppSelector((state) => state.userState);
  // console.log(userState);

  // 1. State Management
  const [showDropdown, setShowDropdown] = useState(false);

  // 2. Event Handlers
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

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
          <div className={styles.user} onClick={toggleDropdown}> {/* Add onClick handler */}
            <div>
              <button className={styles.notification}>
                <span className="material-symbols-outlined">notifications</span>
              </button>
            </div>
            <div className={styles.user}>
              <div className={styles.userImage}>
                <img
                  src= {`${process.env.REACT_APP_SERVER_ENDPOINT}/${userState?.user?.profileImage}`}
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
            {/* ... user image and info ... */}
            
            {/* 3. Dropdown Menu */}
            {showDropdown && (
              <div className={styles.dropdownMenu}>
                <p>Profile</p>
                <p>Settings</p>
                <p>Logout</p>
              </div>
            )}
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
