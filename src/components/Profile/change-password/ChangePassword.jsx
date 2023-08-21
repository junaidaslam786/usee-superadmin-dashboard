import React, { useState } from "react";
import styles from "./ChangePassword.module.css";
import { useChangeSuperAdminPasswordMutation } from "../../../redux/api/authApi"; 

import { useAppSelector } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/features/userSlice";

const ChangePassword = () => {

  const userState = useAppSelector((state) => state.userState);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const [changePassword, { isSuccess, isError, error }] =
    useChangeSuperAdminPasswordMutation();

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    try {
      const response = await changePassword({
        email,
        oldPassword,
        newPassword,
        confirmNewPassword,
      });
  
      if (response.data && response.data.user) {
        dispatch(setUser(response.data.user));
      }
      // Handle success, maybe show a success message or redirect
    } catch (err) {
      // Handle error, maybe show an error message
    }
  };

  return (
    <div className={styles.userPass}>
      <div className={styles.userPassHeading}>
        <h3>Change Password</h3>
        <p>
          Create a strong password to safeguard your personal and sensitive information
        </p>
      </div>
      <form onSubmit={handlePasswordChange}>
        <div className={styles.userPassInputs}>
          <div className={styles.userPassAbout}>
            <h4>Email Address</h4>
            <p>(Enter your email address.)</p>
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
          />
        </div>
        <div className={styles.userPassInputs}>
          <div className={styles.userPassAbout}>
            <h4>Current password</h4>
            <p>(Leave blank to leave unchanged)</p>
          </div>
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="Enter current password"
          />
        </div>
        <div className={styles.userPassInputs}>
          <div className={styles.userPassAbout}>
            <h4>New password</h4>
            <p>(Leave blank to leave unchanged)</p>
          </div>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter new password"
          />
        </div>
        <div className={styles.userPassInputs}>
          <div className={styles.userPassAbout}>
            <h4>Confirm New password</h4>
          </div>
          <input
            type="password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            placeholder="Confirm password"
          />
        </div>
        <button type="submit" className={styles.userPassButton}>
          Update Password
        </button>
      </form>
      {isSuccess && <p>Password updated successfully!</p>}
      {isError && <p>There was an error updating the password.</p>}
    </div>
  );
};

export default ChangePassword;
