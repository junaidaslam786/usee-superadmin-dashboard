import React from "react";
import styles from "./LoginPage.module.css";
import logo from '../../assets/loginimg.png'
import Login from "../../components/auth/login/login";

const LoginPage = () => {
  return (
    <div className={styles.main}>
      <div>
        <img src={logo} alt="mainImage" className={styles.mainImage}/>
      </div>
      <Login />
    </div>
  );
};

export default LoginPage;
