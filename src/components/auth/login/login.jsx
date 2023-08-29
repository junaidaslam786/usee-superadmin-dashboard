import React from "react";
import styles from "./login.module.css";
import { useForm } from "react-hook-form";
import { useLoginUserMutation } from "../../../redux/api/authApi";
import { setUser } from "../../../redux/features/userSlice";
import { useAppDispatch } from "../../../redux/store";
import { useNavigate } from "react-router-dom";

import { Container, Form, Button } from "react-bootstrap";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loginUser, { isLoading }] = useLoginUserMutation();

  const onSubmit = async (data) => {
    try {
      await loginUser(data)
        .unwrap()
        .then((response) => {
          if (response.token) {
            localStorage.setItem("token", response.token);
            dispatch(setUser(response.user));
            navigate("/dashboard");
          }
        });
      // Handle success, e.g., navigate to a different page or show a success message
    } catch (err) {
      console.log("Login Error", err.message);
      // Handle the error (err.message will contain error message)
    }
  };
  return (
    <Container className={`d-flex flex-column align-items-center ${styles.Login}`}>
      <h2 className={styles.Welcome}>Welcome</h2>
      <h3 className={styles.loginText}>Login</h3>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className={styles.inputs}>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" {...register("email")} />
          {errors.email && <p>Error message for email</p>}
        </Form.Group>
        <Form.Group className={styles.inputs}>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" {...register("password")} />
          {errors.password && <p>Error message for password</p>}
        </Form.Group>
        <div className={`d-flex justify-content-between ${styles.Remember}`}>
          <div className={styles.toggle}>
            <Form.Check type="checkbox" label="Remember Me" />
          </div>
          <div className={styles.forgot}>
            <a href="/forgot-password">Forgot Password?</a>
          </div>
        </div>
        <Button type="submit" className={styles.button}>Login</Button>
      </Form>
    </Container>
  );
};

export default Login;
