import React from "react";
import styles from "./profilePage.module.css";
import AccountDetails from "../../../components/Profile/account-details/AccountDetails";
import TimeZone from "../../../components/Profile/timezone/TimeZone";
import ChangePassword from "../../../components/Profile/change-password/ChangePassword";
import CallBackgroundImage from "../../../components/Profile/call-background-images/CallBackgroundImage";
import EmbeddedCode from "../../../components/Profile/embedded-code/EmbeddedCode";
import Layout from "../../../layouts/Layout";

const ProfilePage = () => {
  return (
    <Layout>
      <div className={styles.ProfileInfo}>
        <div className={styles.profileLinks}>
          <div className={styles.AD}>
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
          <div className={styles.EC}>
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
    </Layout>
  );
};

export default ProfilePage;
