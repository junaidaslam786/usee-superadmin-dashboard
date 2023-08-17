import React from "react";
import styles from './Layout.module.css'
import Navbar from "../components/navbar/navbar";
import DashSide from "../components/dashboard/dashside/dashside";
import useInitializeUserFromLocalStorage from "../hooks/useInitializeUserFromLocalStorage";

const Layout = ({ children }) => {
    useInitializeUserFromLocalStorage();
  return (
    <div className={styles.app_container}>
      <Navbar />
      <div className={styles.content_wrapper}>
        <DashSide />
        <main className={styles.main_content}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
