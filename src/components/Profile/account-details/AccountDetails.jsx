import React from "react";
import styles from "./AccountDetails.module.css";
import user from '../../../assets/UserImage.png'

function AccountDetails() {
  return (
    <div className={styles.accountDetails}>
      <div className={styles.userFiles}>
        <div className={styles.userFilesHeading}>
          <h3>Let's start with basic information</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
            reprehenderit!
          </p>
        </div>
        <div className={styles.userFilesImg}>
          <img
            src= {user}
            alt="profilePicture"
            width="100px"
            height="100px"
          />
          <a href="#">Upload Image</a>
        </div>
      </div>
      <form className={styles.userForm}>
        <div className={styles.userProfile}>
          <div className={styles.userDiv}>
            <p>First Name</p>
            <input type="text" placeholder="John" />
          </div>
          <div className={styles.userDiv}>
            <p>Last Name</p>
            <input type="text" placeholder="Doe" />
          </div>
          <div className={`${styles.userDiv} ${styles.last}`}>
            <p>Company Position</p>
            <input type="text" placeholder="John" />
          </div>
        </div>
        <div className={styles.userProfile}>
          <div className={styles.userDiv}>
            <p>Phone No</p>
            <input type="text" />
          </div>
          <div className={styles.userDiv}>
            <p>Mobile Number</p>
            <input type="text" placeholder="+923123456789" />
          </div>
          <div className={`${styles.userDiv} ${styles.last}`}>
            <p>Company Name</p>
            <input type="text" placeholder="Eagle's Eye" />
          </div>
        </div>
        <div className={styles.userProfile}>
          <div className={styles.userDiv}>
            <p>Company Address</p>
            <input type="text" />
          </div>
          <div className={styles.userDiv}>
            <p>Zip Code</p>
            <input type="text" />
          </div>
          <div className={`${styles.userDiv} ${styles.last}`}>
            <p>City</p>
            <input type="text" />
          </div>
        </div>
        <div className={styles.userMortgage}>
          <div className={styles.userDiv}>
            <p>Mortgage Advisor Email</p>
            <input type="text" />
          </div>
          <div className={styles.companyLogo}>
            <p>Company Logo</p>
            <input
              type="file"
              name="fileUpload"
              className={styles.fileUpload}
            />
          </div>
        </div>
      </form>
      <div className={styles.userButtons}>
        <button className={styles.saveButton}>Save Changes</button>
        <button className={styles.discardButton}>Discard</button>
      </div>
    </div>
  );
}

export default AccountDetails;
