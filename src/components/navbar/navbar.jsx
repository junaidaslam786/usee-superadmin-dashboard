import React, { useState } from "react";
import { Navigate, useLocation, useNavigate, Link } from "react-router-dom";
import styles from "./navbar.module.css";

import { useAppSelector } from "../../redux/store";

const Navbar = () => {
  const userState = useAppSelector((state) => state.userState);
  // console.log(userState);

  const navigate = useNavigate();

  // 1. State Management
  // const [showDropdown, setShowDropdown] = useState(false);

  // // 2. Event Handlers
  // const toggleDropdown = () => {
  //   setShowDropdown(!showDropdown);
  // };

  // Get the current location's path
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

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
          {/* <div className={styles.user} onClick={toggleDropdown}> */}{" "}
          {/* Add onClick handler */}
          <div>
            <button className={styles.notification}>
              <span className="material-symbols-outlined">notifications</span>
            </button>
          </div>
          <div className={styles.user}>
            <div className={styles.userImage}>
              <img
                src={
                  `${process.env.REACT_APP_SERVER_ENDPOINT}/${
                    userState?.user?.imageUrl?.imageUrl
                      ? userState?.user?.imageUrl?.imageUrl
                      : userState?.user?.profileImage
                  }?${Date.now()}`}
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
         
          
          {/* </div> */}
        </div>
      </div>
      {/*<div className={styles.home}>
        <p>Home / Dashboard</p>
      </div>*/}
      <div className={styles.home}>
        <p>
          {pathnames.length === 0 ? (
            // <Link to="/dashboard" style={{color:'#fff'}}>Home</Link>
            <Link to="/dashboard" className={styles.linkColor}>
              Home
            </Link>
          ) : (
            <>
              <Link to="/dashboard" className={styles.linkColor}>
                Home
              </Link>{" "}
              /{" "}
              {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                return index === pathnames.length - 1 ? (
                  name.charAt(0).toUpperCase() + name.slice(1)
                ) : (
                  <>
                    <Link to={routeTo}>
                      {name.charAt(0).toUpperCase() + name.slice(1)}
                    </Link>{" "}
                    /{" "}
                  </>
                );
              })}
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Navbar;
