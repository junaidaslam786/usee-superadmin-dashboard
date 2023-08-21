import React from "react";
import DashSide from "../../components/dashboard/dashside/dashside";
import DashMainPage from "../../components/dashboard/dashmainpage/dashmainpage";
import NavBar from "../../components/navbar/navbar"
import styles from "./dashboardpage.module.css";

const DashboardPage = () => {
  return (
    <div className={styles.DashboardPage}>
      {/* <DashSide /> */}
      <div>
        <NavBar />
        <DashMainPage />
      </div>
    </div>
  );
};

export default DashboardPage;
