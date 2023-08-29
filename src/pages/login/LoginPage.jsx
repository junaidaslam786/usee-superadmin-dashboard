import React from "react";
import { Container } from "react-bootstrap";
import styles from "./LoginPage.module.css";
import logo from '../../assets/loginimg.png';
import Login from "../../components/auth/login/login";

const LoginPage = () => {
  return (
    <Container fluid className={`d-flex justify-content-center align-items-center ${styles.main}`}>
      <div>
        <img src={logo} alt="mainImage" className={`img-fluid rounded ${styles.mainImage}`} />
      </div>
      <Login className={styles.logIn} />
    </Container>
  );
};

export default LoginPage;
