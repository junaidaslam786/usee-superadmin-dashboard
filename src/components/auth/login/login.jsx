import React from "react";
import styles from "./login.module.css";
import { useForm } from "react-hook-form";
import { useLoginUserMutation } from '../../../redux/api/authApi';

import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loginUser, { isLoading }] =
    useLoginUserMutation();

  const onSubmit = async (data) => {
    try {
      await loginUser(data).unwrap();
      navigate("/dashboard");
      // Handle success, e.g., navigate to a different page or show a success message
    } catch (err) {
      // Handle the error (err.message will contain error message)
    }
  };
  return (
    <div className="Login">
      <h1 className={styles.Welcome}>Welcome Back</h1>
      <h2 className={styles.loginText}>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputs}>
          <p>Email*</p>
          <p>Email*</p>
          <input
            {...register("email", { required: "Email is required" })}
            type="text"
            placeholder="abc@example.com"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className={styles.inputs}>
          <p>Password*</p>
          <input
            {...register("password", { required: "Password is required" })}
            type="password"
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div>
          <button type="submit" className={styles.button} disabled={isLoading}>
            Sign In
          </button>
        </div>
      </form>
      <div className={styles.Remember}>
        <div className={styles.toggle}>
          <span className="material-symbols-outlined">toggle_off</span>
          <p>Remember Me</p>
        </div>
        <div className={styles.forgot}>
          <a href="#">Forgot Password?</a>
        </div>
      </div>

      <div className={styles.newUser}>
        <p>Don't have any account yet?</p>
        <a href="#" className={styles.signup}>
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Login;
