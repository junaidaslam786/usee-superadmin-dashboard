import React from "react";
import DashSide from "../../components/dashboard/dashside/dashside";
import DashMainPage from "../../components/dashboard/dashmainpage/dashmainpage";
import NavBar from "../../components/navbar/navbar";
import styles from "./dashboardpage.module.css";
import Layout from "../../layouts/Layout";

const DashboardPage = () => {
  return (
    <Layout>
      <div className={styles.DashboardPage}>
        <DashMainPage />
      </div>
    </Layout>
  );
};

export default DashboardPage;
