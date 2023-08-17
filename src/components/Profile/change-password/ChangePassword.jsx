import React from "react";
import styles from './ChangePassword.module.css'
const ChangePassword = () => {
  return (
    <div className={styles.userPass}>
      <div className={styles.userPassHeading}>
        <h3>Change Password</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore,
          unde.
        </p>
      </div>
      <div className={styles.userPassInputs}>
        <div className={styles.userPassAbout}>
          <h4>Current password</h4>
          <p>(Lorem ipsum dolor sit amet.)</p>
        </div>
        <input type="text" placeholder="Enter current password" />
      </div>
      <div className={styles.userPassInputs}>
        <div className={styles.userPassAbout}>
          <h4>New password</h4>
          <p>(Lorem ipsum dolor sit amet.)</p>
        </div>
        <input type="text" placeholder="Enter new password" />
      </div>
      <div className={styles.userPassInputs}>
        <div className={styles.userPassAbout}>
          <h4>Confirm New password</h4>
        </div>
        <input type="text" placeholder="Confirm password" />
      </div>
      <button className={styles.userPassButton}>Update Password</button>
    </div>
  );
};

export default ChangePassword;
