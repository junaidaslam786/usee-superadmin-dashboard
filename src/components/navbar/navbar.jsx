import React, { useState } from "react";
import {  useLocation,  Link } from "react-router-dom";
import styles from "./navbar.module.css";

import { useAppSelector } from "../../redux/store";
import DashSide from "../dashboard/dashside/dashside";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const userState = useAppSelector((state) => state.userState);
  
  const menuClass = isMenuOpen ? styles.menuOpen : styles.menuClosed;

  // Get the current location's path
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <div className={styles.toggleSide}>
      {isMenuOpen && <DashSide className={menuClass}/>}
      <div>
        <div className={styles.header}>
          <div>
            <button
              className={styles.burger}
              id="burger-menu"
              onClick={toggleMenu}
            >
              ☰
            </button>
          </div>
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
                  src={`${process.env.REACT_APP_SERVER_ENDPOINT}/${
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
    </div>
  );
};

export default Navbar;
