import React from "react";
import styles from "./profilePage.module.css";
import Profile from "../../components/Profile/Profile";
import AccountDetails from "../../components/Profile/account-details/AccountDetails";
import TimeZone from "../../components/Profile/timezone/TimeZone";
import ChangePassword from "../../components/Profile/change-password/ChangePassword";
import CallBackgroundImage from "../../components/Profile/call-background-images/CallBackgroundImage";
import EmbeddedCode from "../../components/Profile/embedded-code/EmbeddedCode";
import Layout from "../../layouts/Layout";

const ProfilePage = () => {
  return (
    <Layout className={styles.layout}>
      <div className={styles.profileCreation}>
        <div className={styles.profileCreationHeading}>
          <h3>Profile Creation</h3>
        </div>
        <div className={styles.ProfileInfo}>
          <div className={styles.profileLinks}>
            <div>
              <p>Account Details</p>
            </div>
            <div>
              <p>Timezone</p>
            </div>
            <div>
              <p>Change Password</p>
            </div>
            <div>
              <p>Call Background Images</p>
            </div>
            <div>
              <p>Embedded code</p>
            </div>
          </div>
          <div className={styles.UserRegistration}>
            <AccountDetails />
            <TimeZone />
            <ChangePassword />
            <CallBackgroundImage />
            <EmbeddedCode />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
